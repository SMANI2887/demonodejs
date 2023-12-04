const fs = require('fs');

fs.readFile('/mani/project/zen_class/nodejs/text.txt','utf8',(err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data.split(`\n`));
})