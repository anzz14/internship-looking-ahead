import mongoose from 'mongoose';

const PricingTierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,
    required: true
  },
  priceRange: {
    type: String,
    required: false
  },
  duration: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: [{
    type: String,
    required: true
  }],
  color: {
    type: String,
    required: true,
    default: 'from-blue-500 to-purple-500'
  },
  popular: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for ordering
PricingTierSchema.index({ order: 1, isActive: 1 });

export default mongoose.models.PricingTier || mongoose.model('PricingTier', PricingTierSchema);
