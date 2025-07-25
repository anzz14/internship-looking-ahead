// Enhanced admin session management
import { verifyJWT, generateJWT } from '@/lib/auth/jwt';
import { NextResponse } from 'next/server';

// In-memory session store (in production, use Redis or database)
const activeSessions = new Map();
const loginAttempts = new Map();

export function withAdminAuth(handler) {
  return async (request, context) => {
    try {
      const authHeader = request.headers.get('authorization');
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json(
          { success: false, error: 'No token provided' },
          { status: 401 }
        );
      }
      
      const token = authHeader.substring(7);
      const decoded = verifyJWT(token);
      
      if (!decoded) {
        return NextResponse.json(
          { success: false, error: 'Invalid token' },
          { status: 401 }
        );
      }

      // Check if session is still active
      const sessionId = decoded.sessionId;
      if (sessionId && !activeSessions.has(sessionId)) {
        return NextResponse.json(
          { success: false, error: 'Session expired' },
          { status: 401 }
        );
      }

      // Update session activity
      if (sessionId) {
        const session = activeSessions.get(sessionId);
        if (session) {
          session.lastActivity = Date.now();
          activeSessions.set(sessionId, session);
        }
      }
      
      // Add user info to request
      request.user = decoded;
      
      return handler(request, context);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return NextResponse.json(
        { success: false, error: 'Authentication failed' },
        { status: 401 }
      );
    }
  };
}

// Enhanced rate limiting for admin login attempts
export function rateLimitLogin(identifier) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxAttempts = 5; // Max 5 login attempts per 15 minutes
  
  if (!loginAttempts.has(identifier)) {
    loginAttempts.set(identifier, []);
  }
  
  const attempts = loginAttempts.get(identifier);
  const validAttempts = attempts.filter(time => now - time < windowMs);
  
  if (validAttempts.length >= maxAttempts) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: Math.min(...attempts) + windowMs
    };
  }
  
  validAttempts.push(now);
  loginAttempts.set(identifier, validAttempts);
  
  return {
    allowed: true,
    remaining: maxAttempts - validAttempts.length
  };
}

// Create admin session with enhanced security
export function createAdminSession(adminId, ip) {
  const sessionId = require('crypto').randomBytes(32).toString('hex');
  const now = Date.now();
  
  const session = {
    sessionId,
    adminId,
    ip,
    createdAt: now,
    lastActivity: now,
    expiresAt: now + (24 * 60 * 60 * 1000) // 24 hours
  };
  
  activeSessions.set(sessionId, session);
  
  // Generate JWT with session info
  const token = generateJWT({
    adminId,
    sessionId,
    ip
  });
  
  return { token, sessionId, expiresAt: session.expiresAt };
}

// Invalidate admin session (logout)
export function invalidateAdminSession(sessionId) {
  return activeSessions.delete(sessionId);
}

// Clean up expired sessions
export function cleanupExpiredSessions() {
  const now = Date.now();
  
  for (const [sessionId, session] of activeSessions.entries()) {
    if (now > session.expiresAt || (now - session.lastActivity) > (2 * 60 * 60 * 1000)) {
      activeSessions.delete(sessionId);
    }
  }
  
  // Also cleanup old login attempts
  for (const [identifier, attempts] of loginAttempts.entries()) {
    const validAttempts = attempts.filter(time => now - time < (15 * 60 * 1000));
    if (validAttempts.length === 0) {
      loginAttempts.delete(identifier);
    } else {
      loginAttempts.set(identifier, validAttempts);
    }
  }
}

// Get session info for monitoring
export function getSessionInfo() {
  cleanupExpiredSessions(); // Clean up first
  return {
    activeSessions: activeSessions.size,
    loginAttempts: loginAttempts.size
  };
}

// Periodic cleanup (call this in a cron job or background task)
setInterval(cleanupExpiredSessions, 60 * 60 * 1000); // Every hour
