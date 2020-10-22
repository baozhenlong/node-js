'use strict';

var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
// 从命令行参数获取 root 目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');
console.log('当前目录', root);
// 创建服务器
var server = http.createServer((request, response) => {
    // 获得 url 的 path，类似 /css/bootstrap.css
    var pathName = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 /srv/www/css/bootstrap.css
    var filePath = path.join(root, pathName);
    // 获取文件状态
    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isFile()) {
            // 没有出错，并且文件存在
            console.log('200 ', request.url);
            // 发送 200 响应
            response.writeHead(200);
            // 将文件流导向 response，response 对象本身是一个 WritableStream
            fs.createReadStream(filePath).pipe(response);
        } else {
            // 出错了获取文件不存在
            console.log('404', request.url);
            // 发送 404 响应
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
server.listen('8080');