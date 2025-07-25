import { NextResponse } from 'next/server';
import { withAdminAuth } from '@/lib/security/adminSessions';
import { getSessionInfo } from '@/lib/security/adminSessions';

async function statusHandler(request) {
  try {
    const sessionInfo = getSessionInfo();
    
    return NextResponse.json({
      success: true,
      data: {
        authenticated: true,
        user: request.user,
        sessionInfo: {
          activeSessions: sessionInfo.activeSessions,
          timestamp: new Date().toISOString()
        }
      }
    });

  } catch (error) {
    console.error('Session status error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get session status' },
      { status: 500 }
    );
  }
}

export const GET = withAdminAuth(statusHandler);
