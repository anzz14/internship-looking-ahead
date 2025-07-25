// Admin route protection middleware
import { verifyJWT } from '@/lib/auth/jwt';
import { NextResponse } from 'next/server';

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

// Rate limiting for admin login attempts
const loginAttempts = new Map();

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
    return false; // Rate limited
  }
  
  validAttempts.push(now);
  loginAttempts.set(identifier, validAttempts);
  
  return true; // Allowed
}
