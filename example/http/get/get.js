const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url); // /getTest?username=damon&password=123
    const searchParams = new URL(req.url, 'http://localhost:8080').searchParams;
    console.log(searchParams.get('username')); // damon
    console.log(searchParams.get('password')); // 123
    res.end();
});

server.listen(8080);
console.log('Sever is Running');
