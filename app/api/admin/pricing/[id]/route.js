import { NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/db/mongodb';
import PricingTier from '@/lib/models/PricingTier';
import { verifyJWT } from '@/lib/auth/jwt';

// GET single pricing tier
export async function GET(request, { params }) {
  try {
    await connectMongoDB();
    
    const { id } = params;
    const pricingTier = await PricingTier.findById(id).select('-__v');
    
    if (!pricingTier) {
      return NextResponse.json(
        { success: false, error: 'Pricing tier not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: pricingTier
    });
  } catch (error) {
    console.error('Error fetching pricing tier:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pricing tier' },
      { status: 500 }
    );
  }
}

// PUT update pricing tier (Admin only)
export async function PUT(request, { params }) {
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
    
    const { id } = params;
    const body = await request.json();
    const { name, price, priceRange, duration, description, features, color, popular, isActive } = body;

    // Check if pricing tier exists
    const existingTier = await PricingTier.findById(id);
    if (!existingTier) {
      return NextResponse.json(
        { success: false, error: 'Pricing tier not found' },
        { status: 404 }
      );
    }

    // If this tier is marked as popular, remove popular from others
    if (popular && !existingTier.popular) {
      await PricingTier.updateMany({ _id: { $ne: id } }, { popular: false });
    }

    const updatedTier = await PricingTier.findByIdAndUpdate(
      id,
      {
        ...(name && { name }),
        ...(price && { price }),
        ...(priceRange !== undefined && { priceRange }),
        ...(duration && { duration }),
        ...(description && { description }),
        ...(features && { features }),
        ...(color && { color }),
        ...(popular !== undefined && { popular }),
        ...(isActive !== undefined && { isActive })
      },
      { new: true, runValidators: true }
    ).select('-__v');

    return NextResponse.json({
      success: true,
      data: updatedTier
    });

  } catch (error) {
    console.error('Error updating pricing tier:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update pricing tier' },
      { status: 500 }
    );
  }
}

// DELETE pricing tier (Admin only)
export async function DELETE(request, { params }) {
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
    
    const { id } = params;

    // Soft delete - set isActive to false
    const deletedTier = await PricingTier.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!deletedTier) {
      return NextResponse.json(
        { success: false, error: 'Pricing tier not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Pricing tier deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting pricing tier:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete pricing tier' },
      { status: 500 }
    );
  }
}
