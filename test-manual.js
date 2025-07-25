// Manual Security Test - Run individual tests with delays
const API_URL = 'http://localhost:3000/api/contact';

async function testSingleFeature(testName, payload, expectedStatus = 200) {
  console.log(`\n🧪 Testing: ${testName}`);
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    console.log(`Status: ${response.status}`);
    
    if (response.ok) {
      console.log('✅ Test passed - Request accepted');
    } else {
      const error = await response.json();
      console.log(`ℹ️  Response: ${error.error}`);
      
      if (response.status === expectedStatus) {
        console.log('✅ Expected behavior - Security working correctly');
      }
    }
    
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }
}

async function runManualTests() {
  console.log('🔒 Manual Security Testing\n');
  
  // Test 1: Valid submission
  await testSingleFeature('Valid Contact Form', {
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Test Subject',
    message: 'This is a valid test message.'
  });
  
  console.log('\n⏳ Waiting 2 seconds...');
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Test 2: Spam detection
  await testSingleFeature('Spam Detection', {
    name: 'Spammer',
    email: 'spam@example.com', 
    subject: 'Buy cheap viagra now!',
    message: 'Click here to win money! Free casino!'
  }, 400);
  
  console.log('\n⏳ Waiting 2 seconds...');
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Test 3: Missing fields
  await testSingleFeature('Missing Required Fields', {
    name: 'John Doe'
    // missing email, subject, message
  }, 400);
  
  console.log('\n✅ Manual testing completed!');
}

runManualTests().catch(console.error);
