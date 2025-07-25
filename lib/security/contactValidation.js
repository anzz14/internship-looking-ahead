// Rate limiting for contact form
const contactAttempts = new Map();

export function rateLimitContact(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxAttempts = 3; // Max 3 emails per 15 minutes per IP
  
  if (!contactAttempts.has(ip)) {
    contactAttempts.set(ip, []);
  }
  
  const attempts = contactAttempts.get(ip);
  
  // Remove old attempts
  const validAttempts = attempts.filter(time => now - time < windowMs);
  
  if (validAttempts.length >= maxAttempts) {
    return false; // Rate limited
  }
  
  validAttempts.push(now);
  contactAttempts.set(ip, validAttempts);
  
  return true; // Allowed
}

export function validateContactInput(data) {
  const { name, email, message } = data;
  
  // Basic validation
  if (!name || !email || !message) {
    throw new Error('All fields are required');
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
  
  // Length validation
  if (name.length > 100) throw new Error('Name too long');
  if (message.length > 2000) throw new Error('Message too long');
  if (message.length < 10) throw new Error('Message too short');
  
  // Spam detection (basic)
  const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'urgent', 'click here'];
  const lowerMessage = message.toLowerCase();
  
  if (spamKeywords.some(keyword => lowerMessage.includes(keyword))) {
    throw new Error('Message contains suspicious content');
  }
  
  // URL detection (too many URLs might be spam)
  const urlCount = (message.match(/https?:\/\//g) || []).length;
  if (urlCount > 2) {
    throw new Error('Too many links in message');
  }
  
  return true;
}
