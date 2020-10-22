let http = require('http');
let url = require('url');
let util = require('util');
let querystring = require('querystring');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    // 解析 url 参数
    let params = url.parse(req.url, true).query;
    res.write('网站 name:' + params.name);
    res.write('\n');
    res.write('网站 url:' + params.url);
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(8080);
console.log('启动成功');
// http://localhost:8080/?name=%E5%93%88%E5%93%88
// 网站 name:哈哈
// 网站 url:undefinedUrl {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?name=%E5%93%88%E5%93%88',
//   query: [Object: null prototype] { name: '哈哈' },
//   pathname: '/',
//   path: '/?name=%E5%93%88%E5%93%88',
//   href: '/?name=%E5%93%88%E5%93%88' }

let postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '网站名： <input name="name"><br>' +
    '网站 URL： <input name="url"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';
http.createServer((req, res) => {
    // 定义一个 body 变量，用于暂存请求体的信息
    let body = '';

    // 通过 req 的 data 事件监听函数，每当接受到请求体的数据，就累加到 body 变量中
    req.on('data', (chunk) => {
        body += chunk;
    });

    // 在 end 事件触发后，通过 querystring.parse 将 body 解析为真正的 POST 请求格式，然后向客户端返回
    req.on('end', () => {
        // 解析参数
        body = querystring.parse(body);
        // 设置响应头部信息及编码
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf8'
        });
        if (body.name && body.url) {
            res.write('网站名: ' + body.name);
            res.write('<br>');
            res.write('网站 url: ' + body.url);
        } else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(8088);