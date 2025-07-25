// Production Admin Registration Disabler
// Run this script to safely disable admin registration in production

import { NextResponse } from 'next/server';

export async function POST(request) {
  // 🚫 PRODUCTION SECURITY: Admin registration is permanently disabled
  // To enable admin registration in development, set ALLOW_ADMIN_REGISTRATION=true in .env.local
  // For production, this endpoint should never be enabled
  
  return NextResponse.json(
    { 
      success: false, 
      error: 'Admin registration is disabled in production for security reasons.',
      message: 'Contact system administrator for admin account creation.'
    },
    { status: 403 }
  );
}

// Uncomment the code below ONLY for initial setup in development:
/*
import { connectMongoDB } from '@/lib/db/mongodb';
import Admin from '@/lib/models/Admin';

export async function POST(request) {
  try {
    // Only allow in development
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { success: false, error: 'Registration disabled in production' },
        { status: 403 }
      );
    }

    await connectMongoDB();
    
    const body = await request.json();
    const { username, email, password, role = 'admin' } = body;

    // Validation
    if (!username || !email || !password) {
      return NextResponse.json(
        { success: false, error: 'Username, email, and password are required' },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      $or: [
        { username: username },
        { email: email }
      ]
    });

    if (existingAdmin) {
      return NextResponse.json(
        { success: false, error: 'Admin with this username or email already exists' },
        { status: 409 }
      );
    }

    // Create new admin
    const newAdmin = new Admin({
      username,
      email,
      password,
      role
    });

    const savedAdmin = await newAdmin.save();

    // Return success response (without password)
    return NextResponse.json({
      success: true,
      data: {
        admin: {
          id: savedAdmin._id,
          username: savedAdmin.username,
          email: savedAdmin.email,
          role: savedAdmin.role,
          isActive: savedAdmin.isActive,
          createdAt: savedAdmin.createdAt
        }
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    
    if (error.code === 11000) {
      // Duplicate key error
      const field = Object.keys(error.keyPattern)[0];
      return NextResponse.json(
        { success: false, error: `Admin with this ${field} already exists` },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Registration failed' },
      { status: 500 }
    );
  }
}
*/
