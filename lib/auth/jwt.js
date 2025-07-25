import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export function generateJWT(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyJWTToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function verifyJWT(request) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        success: false,
        error: 'No token provided'
      };
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // Verify token
    const decoded = verifyJWTToken(token);
    
    if (!decoded) {
      return {
        success: false,
        error: 'Invalid token'
      };
    }

    return {
      success: true,
      user: decoded
    };

  } catch (error) {
    console.error('JWT verification error:', error);
    return {
      success: false,
      error: 'Token verification failed'
    };
  }
}

// Middleware function for protected routes
export function withAuth(handler) {
  return async (request, context) => {
    const authResult = await verifyJWT(request);
    
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, error: authResult.error },
        { status: 401 }
      );
    }

    // Add user to request object for use in the handler
    request.user = authResult.user;
    
    return handler(request, context);
  };
}
