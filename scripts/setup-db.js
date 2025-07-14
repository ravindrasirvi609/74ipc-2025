#!/usr/bin/env node

/**
 * Database Setup Script for 74th IPC 2025 Website
 * 
 * This script helps set up the MongoDB database with initial collections and indexes.
 * Run this script after setting up your MongoDB connection.
 * 
 * Usage:
 * npm run setup-db
 * 
 * Or directly:
 * node scripts/setup-db.js
 */

const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in environment variables');
  console.log('Please add MONGODB_URI to your .env.local file');
  process.exit(1);
}

async function setupDatabase() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully');

    const db = mongoose.connection.db;

    // Create collections if they don't exist
    console.log('📁 Setting up collections...');
    
    // Registrations collection
    const registrationsExists = await db.listCollections({ name: 'registrations' }).hasNext();
    if (!registrationsExists) {
      await db.createCollection('registrations');
      console.log('✅ Created registrations collection');
    } else {
      console.log('ℹ️  Registrations collection already exists');
    }

    // Create indexes for better performance
    console.log('🔍 Creating database indexes...');
    const registrationsCollection = db.collection('registrations');
    
    await registrationsCollection.createIndex({ email: 1 }, { unique: true });
    await registrationsCollection.createIndex({ orderId: 1 }, { unique: true });
    await registrationsCollection.createIndex({ paymentStatus: 1 });
    await registrationsCollection.createIndex({ createdAt: -1 });
    await registrationsCollection.createIndex({ category: 1 });
    await registrationsCollection.createIndex({ registrationType: 1 });
    
    console.log('✅ Database indexes created successfully');

    // Create a test record to verify everything works
    console.log('🧪 Testing database connection with sample data...');
    
    const testRegistration = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '9999999999',
      dateOfBirth: new Date('1990-01-01'),
      gender: 'Male',
      category: 'Students',
      institution: 'Test University',
      designation: 'Student',
      address: 'Test Address',
      city: 'Test City',
      state: 'Test State',
      pincode: '123456',
      country: 'India',
      registrationType: 'Super Saver',
      isAPTIMember: false,
      accommodation: false,
      accompanying: 0,
      paymentStatus: 'Pending',
      paymentAmount: 4720,
      orderId: 'TEST_ORDER_' + Date.now(),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const insertResult = await registrationsCollection.insertOne(testRegistration);
    console.log('✅ Test registration created with ID:', insertResult.insertedId);

    // Clean up test data
    await registrationsCollection.deleteOne({ _id: insertResult.insertedId });
    console.log('🧹 Test data cleaned up');

    console.log('\n🎉 Database setup completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Update your .env.local file with Cashfree credentials');
    console.log('2. Configure email settings (optional)');
    console.log('3. Start the development server: npm run dev');
    console.log('4. Test the registration form at: http://localhost:3000/registration');

  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('🔐 Database connection closed');
  }
}

// Print environment check
console.log('🔧 Environment Check:');
console.log('MONGODB_URI:', MONGODB_URI ? '✅ Configured' : '❌ Missing');
console.log('CASHFREE_APP_ID:', process.env.CASHFREE_APP_ID ? '✅ Configured' : '⚠️  Missing');
console.log('CASHFREE_SECRET_KEY:', process.env.CASHFREE_SECRET_KEY ? '✅ Configured' : '⚠️  Missing');
console.log('EMAIL_HOST:', process.env.EMAIL_HOST ? '✅ Configured' : '⚠️  Missing (Optional)');
console.log('');

setupDatabase();
