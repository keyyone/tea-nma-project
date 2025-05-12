const nma = require('nma');

// Replace with your actual NMA API Key
const myApiKey = 'YOUR_NMA_API_KEY';

nma.send(
  myApiKey,
  'Tea OSS Notification',
  'This is a sample Tea project using the nma package!',
  { priority: 0 },
  (err) => {
    if (err) {
      console.error('❌ Error:', err);
    } else {
      console.log('✅ Notification sent!');
    }
  }
);
