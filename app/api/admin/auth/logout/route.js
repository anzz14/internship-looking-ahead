import { NextResponse } from 'next/server';
import { invalidateAdminSession } from '@/lib/security/adminSessions';
import { verifyJWT } from '@/lib/auth/jwt';

export async function POST(request) {
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
    
    if (!decoded || !decoded.sessionId) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Invalidate the session
    const sessionInvalidated = invalidateAdminSession(decoded.sessionId);
    
    return NextResponse.json({
      success: true,
      message: 'Logged out successfully',
      sessionInvalidated
    });

  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { success: false, error: 'Logout failed' },
      { status: 500 }
    );
  }
}
