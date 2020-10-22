let net = require('net');
let server = net.createServer((connection) => {
    console.log('客户端连接上了');
    connection.on('end', () => {
        console.log('客户端关闭连接');
    });
    connection.write('Hello World!\n');
    connection.pipe(connection);
});
server.listen(8080, () => {
    console.log('server is listening');
});