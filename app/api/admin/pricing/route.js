import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/db/mongodb';
import PricingTier from '@/lib/models/PricingTier';
import { verifyJWT } from '@/lib/auth/jwt';

// GET all pricing tiers
export async function GET() {
  try {
    await connectMongoDB();
    
    const pricingTiers = await PricingTier.find({ isActive: true })
      .sort({ order: 1 })
      .select('-__v');
    
    return NextResponse.json({
      success: true,
      data: pricingTiers
    });
  } catch (error) {
    console.error('Error fetching pricing tiers:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pricing tiers' },
      { status: 500 }
    );
  }
}

// POST create new pricing tier (Admin only)
export async function POST(request) {
  try {
    // Verify admin authentication
    const authResult = await verifyJWT(request);
    if (!authResult.success) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectMongoDB();
    
    const body = await request.json();
    const { name, price, priceRange, duration, description, features, color, popular } = body;

    // Validation
    if (!name || !price || !duration || !description || !features || !Array.isArray(features)) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get the highest order number for new tier
    const lastTier = await PricingTier.findOne().sort({ order: -1 });
    const order = lastTier ? lastTier.order + 1 : 1;

    // If this tier is marked as popular, remove popular from others
    if (popular) {
      await PricingTier.updateMany({}, { popular: false });
    }

    const newPricingTier = new PricingTier({
      name,
      price,
      priceRange,
      duration,
      description,
      features,
      color: color || 'from-blue-500 to-purple-500',
      popular: popular || false,
      order
    });

    const savedTier = await newPricingTier.save();

    return NextResponse.json({
      success: true,
      data: savedTier
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating pricing tier:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create pricing tier' },
      { status: 500 }
    );
  }
}
