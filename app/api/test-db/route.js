import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/db/mongodb';

export async function GET() {
  try {
    await connectMongoDB();
    
    return NextResponse.json({
      success: true,
      message: 'MongoDB connection successful',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'MongoDB connection failed',
        details: error.message 
      },
      { status: 500 }
    );
  }
}
