// 🚫 ADMIN REGISTRATION DISABLED FOR SECURITY
// This endpoint is disabled in production to prevent unauthorized admin creation
// To create admin accounts, use the seeder script: node scripts/create-admin.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  return NextResponse.json(
    { 
      success: false, 
      error: 'Admin registration is permanently disabled for security.',
      message: 'Contact system administrator for admin account creation.'
    },
    { status: 403 }
  );
}

// 📝 PRODUCTION SECURITY CHECKLIST:
// ✅ Admin registration disabled
// ✅ Rate limiting implemented  
// ✅ Session management active
// ✅ Input validation enabled
// ✅ Spam protection active
