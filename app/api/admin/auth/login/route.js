import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/db/mongodb';
import Admin from '@/lib/models/Admin';
import { rateLimitLogin, createAdminSession } from '@/lib/security/adminSessions';

function getClientIP(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const remoteAddr = request.headers.get('x-vercel-forwarded-for');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  return realIP || remoteAddr || 'unknown';
}

export async function POST(request) {
  try {
    await connectMongoDB();
    
    const body = await request.json();
    const { username, password } = body;
    const clientIP = getClientIP(request);

    // Validation
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Check rate limiting
    const rateLimitResult = rateLimitLogin(clientIP);
    
    if (!rateLimitResult.allowed) {
      const resetTime = new Date(rateLimitResult.resetTime);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many login attempts. Please try again later.',
          resetTime: resetTime.toISOString()
        },
        { status: 429 }
      );
    }

    // Find admin by username or email
    const admin = await Admin.findOne({
      $or: [
        { username: username },
        { email: username }
      ],
      isActive: true
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await admin.comparePassword(password);
    
    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Update last login
    await admin.updateLastLogin();

    // Create secure session with IP tracking
    const sessionData = createAdminSession(admin._id.toString(), clientIP);

    // Return success response with session info
    return NextResponse.json({
      success: true,
      data: {
        token: sessionData.token,
        expiresAt: sessionData.expiresAt,
        admin: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
          lastLogin: admin.lastLogin
        }
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Login failed' },
      { status: 500 }
    );
  }
}
