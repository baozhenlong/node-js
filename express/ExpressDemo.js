const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    console.log('主页 GET 请求')
    res.send('Hello GET');
});
app.post('/', (req, res) => {
    console.log('主页 POST 请求')
    res.send('Hello POST');
});
app.get('/del_user', (req, res) => {
    console.log('/del_user 响应 delete 请求');
    res.send('删除页面');
});
app.get('/list_user', (req, res) => {
    console.log('/list_user 请求');
    res.send('用户列表页面');
});
// 对页面 abcd, ab123cd 等响应 GET 请求
app.get('/ab*cd', (req, res) => {
    console.log('/ab*cd 请求');
    res.send('正则匹配');
});

const server = app.listen(8080, () => {
    const {
        address,
        port
    } = server.address();
    console.log('应用实例，访问地址为 http://%s:%s', address, port); // 应用实例，访问地址为 http://:::8080
});