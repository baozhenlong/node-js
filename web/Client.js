const http = require('http');

// 用于请求的选项
const options = {
    host: 'localhost',
    port: '8080',
    path: '/index.html'
};

// 处理响应的回调函数
const callback = (response) => {
    // 不断更新数据
    let body = '';
    response.on('data', (data) => {
        body += data;
    });
    response.on('end', () => {
        console.log('数据接收完成', body);
    });
};

// 向服务端发送请求
const rep = http.request(options, callback);
rep.end();