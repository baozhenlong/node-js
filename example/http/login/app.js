const http = require('http');
const queryString = require('querystring');
const fs = require('fs');

const userData = {
    admin: 'admin',
};

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const {
            searchParams,
            pathname,
        } = new URL(req.url, 'http://localhost:8080');
        complete(res, pathname, {
            username: searchParams.get('username'),
            password: searchParams.get('password'),
        });
    }
    else if (req.method === 'POST') {
        const {
            searchParams,
            pathname,
        } = new URL(req.url, 'http://localhost:8080');
        const buffers = [];
        req.on('data', (buffer) => {
            buffers.push(buffer);
        });
        req.on('end', () => {
            queryString.parse(Buffer.concat(buffers).toString());
            complete(res, pathname, {
                username: searchParams.get('username'),
                password: searchParams.get('password'),
            });
        });
    }
});

function complete(res, path, data) {
    let msg;
    if (path === '/login') {
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf-8',
        });
        const {
            username,
            password,
        } = data;
        if (userData[username] === undefined) {
            msg = JSON.stringify({
                err: 1,
                msg: '用户名不存在',
            });
        }
        else if (userData[username] !== password) {
            msg = JSON.stringify({
                err: 1,
                msg: '密码错误',
            });
        }
        else {
            msg = JSON.stringify({
                err: 0,
                msg: '登录成功',
            });
        }
        res.end(msg);
    }
    else if (path === '/register') {
        res.writeHead(200, {
            'Content-Type': 'text/plain;charset=utf-8',
        });
        const {
            username,
            password,
        } = data;
        if (userData[username] === undefined) {
            msg = JSON.stringify({
                err: 0,
                msg: '注册成功',
            });
            userData[username] = password;
        }
        else {
            msg = JSON.stringify({
                err: 1,
                msg: '用户已经存在',
            });
        }
        res.end(msg);
    }
    else {
        fs.readFile(`.${path}`, (err, file) => {
            if (err) {
                res.end('404');
            }
            else {
                res.end(file);
            }
        });
    }

    return msg;
}

server.listen(8080);
console.log('Sever is Running');
