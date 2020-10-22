// 导入 http 模块
let http = require('http');
let url = require('url');
// 创建 http server，并传入回调函数
function start(route) {
    function onRequest(request, response) {
        // 回调函数接收 request 对象和 response 对象
        // 获得 HTTP 请求的 method 和 url
        console.log('method', request.method);
        console.log('url', request.url);
        let pathName = url.parse(request.url).pathName;
        console.log('pathName', pathName);

        route(pathName);

        // 将 HTTP 响应 200 写入 response，同时设置 Content-Type: text/plain
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        // 将 HTTP 响应的内容写入 response
        response.write('Hello world!');
        response.end();
    }
    http.createServer(onRequest).listen(8080);
    console.log('Sever is Running');
}

module.exports = {
    start
};