const fs = require('fs');

const content = '\nThe content to be wirte in the file';

// fs.writeFile('./text.txt',content,{flag: 'w'},(err) => {
fs.writeFile('./text.txt',content,{flag: 'a'},(err) => {
    if (err) console.log(err);
    console.log('content written successfully!');
});


