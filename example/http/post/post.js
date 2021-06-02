const http = require('http');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    console.log(req.url); // /postTest
    const result = [];
    req.on('data', (buffer) => {
        result.push(buffer);
    });
    req.on('end', () => {
        const data = Buffer.concat(result).toString();
        console.log(data); // username=damon&password=123
        const {
            username,
            password,
        } = queryString.parse(data);
        console.log(username); // damon
        console.log(password); // 123
    });
    res.end();
});

server.listen(8080);
console.log('Sever is Running');
