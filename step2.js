const http = require('http');
let note = [
    {
        id : 1,
        name : 'mani',
        collage : 'Adavan'
    }
]
const app = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'application/json');
    res.end(JSON.stringify(note));
});

const port = 100;
app.listen(port);
console.log('Server is running and process, ${port}');
