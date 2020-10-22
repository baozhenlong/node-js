const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建服务器
http.createServer((requset, response) => {
    // 解析请求，包括文件名
    const pathName = url.parse(requset.url).pathname;
    console.log('请求的文件名', pathName);
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathName.substr(1), (err, data) => {
        if (err) {
            console.log('err', err);
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            // 响应文件内容
            response.write(data.toString());
        }
        // 发送响应数据
        response.end();
    });
}).listen(8080);
console.log('Sever is running');