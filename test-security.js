// Security Test Script
// Run this with: node test-security.js

const API_URL = 'http://localhost:3000/api/contact';

async function testContactAPI() {
  console.log('🔍 Testing Contact API Security...\n');

  // Test 1: Valid submission
  console.log('Test 1: Valid submission');
  try {
    const validResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'This is a valid test message.'
      })
    });
    
    console.log('✅ Valid submission status:', validResponse.status);
    if (!validResponse.ok) {
      const error = await validResponse.json();
      console.log('❌ Error:', error.error);
    }
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }

  await sleep(1000);

  // Test 2: Missing required fields
  console.log('\nTest 2: Missing required fields');
  try {
    const incompleteResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John Doe',
        // missing email, subject, message
      })
    });
    
    console.log('Status:', incompleteResponse.status);
    const result = await incompleteResponse.json();
    console.log('Response:', result.error);
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }

  await sleep(1000);

  // Test 3: Spam keywords
  console.log('\nTest 3: Spam keywords detection');
  try {
    const spamResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Spammer',
        email: 'spam@example.com',
        subject: 'Buy cheap viagra now!',
        message: 'Click here to win money! Free casino!'
      })
    });
    
    console.log('Status:', spamResponse.status);
    const result = await spamResponse.json();
    console.log('Response:', result.error);
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }

  await sleep(1000);

  // Test 4: Rate limiting (send multiple requests quickly)
  console.log('\nTest 4: Rate limiting (sending 5 requests quickly)');
  const promises = [];
  for (let i = 0; i < 5; i++) {
    promises.push(
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `Test User ${i}`,
          email: `test${i}@example.com`,
          subject: `Test ${i}`,
          message: `This is test message number ${i}`
        })
      })
    );
  }

  try {
    const results = await Promise.all(promises);
    results.forEach(async (response, index) => {
      console.log(`Request ${index + 1} status:`, response.status);
      if (!response.ok) {
        const error = await response.json();
        console.log(`Request ${index + 1} error:`, error.error);
      }
    });
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }

  console.log('\n🔍 Security test completed!');
  console.log('Note: Make sure your Next.js dev server is running on localhost:3000');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Run the tests
testContactAPI().catch(console.error);
