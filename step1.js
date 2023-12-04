const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('Hello Wrold!')
})

app.listen(200)
console.log('Server is running ');