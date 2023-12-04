const fs = require('fs');

const content = `\nSession 1: ${new Date().toISOString()}`;

fs.writeFileSync('./text.txt',content, {flag: 'a'});
console.log('content written successfully!');