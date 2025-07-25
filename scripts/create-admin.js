// Admin Seeder Script - Run once to create initial admin
// Usage: node scripts/create-admin.js

const { connectMongoDB } = require('../lib/db/mongodb');
const Admin = require('../lib/models/Admin');

async function createInitialAdmin() {
  try {
    console.log('🔧 Setting up initial admin user...');
    
    await connectMongoDB();
    
    // Check if any admin exists
    const existingAdmins = await Admin.countDocuments();
    
    if (existingAdmins > 0) {
      console.log('❌ Admin users already exist. Aborting for security.');
      console.log(`Found ${existingAdmins} existing admin(s).`);
      process.exit(1);
    }
    
    // Get admin details from environment or prompt
    const adminData = {
      username: process.env.INITIAL_ADMIN_USERNAME || 'admin',
      email: process.env.INITIAL_ADMIN_EMAIL || 'admin@yourdomain.com',
      password: process.env.INITIAL_ADMIN_PASSWORD || 'ChangeMe123!',
      role: 'super-admin'
    };
    
    console.log('📝 Creating admin with:');
    console.log(`   Username: ${adminData.username}`);
    console.log(`   Email: ${adminData.email}`);
    console.log(`   Role: ${adminData.role}`);
    console.log(`   Password: ${'*'.repeat(adminData.password.length)}`);
    
    // Create the admin
    const newAdmin = new Admin(adminData);
    const savedAdmin = await newAdmin.save();
    
    console.log('✅ Initial admin created successfully!');
    console.log(`   ID: ${savedAdmin._id}`);
    console.log(`   Created: ${savedAdmin.createdAt}`);
    
    console.log('\n🔒 SECURITY REMINDER:');
    console.log('1. Change the default password immediately');
    console.log('2. Set ALLOW_ADMIN_REGISTRATION=false in production');
    console.log('3. Remove or comment out the registration endpoint');
    
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Error creating initial admin:', error);
    process.exit(1);
  }
}

// Environment variables for initial admin (optional)
// INITIAL_ADMIN_USERNAME=your-username
// INITIAL_ADMIN_EMAIL=your-email@domain.com  
// INITIAL_ADMIN_PASSWORD=your-secure-password

createInitialAdmin();
