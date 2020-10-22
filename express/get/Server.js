const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
const fs = require('fs');
const multer = require('multer');
const cookieParser = require('cookie-parser')
const util = require('util');

app.use('/public', express.static('public'));
app.use(multer({
    dest: '/tmp/'
}).array('image'));
app.use(cookieParser());

app.get('/index.html', (req, res) => {
    const path = __dirname.replace('get', '');
    res.sendFile(path + 'public/index.html');
});

app.get('/process_get', (req, res) => {
    const response = {
        firstName,
        lastName
    } = req.query;
    console.log('response', response);
    res.end(JSON.stringify(response));
});

app.post('/process_post', urlEncodedParser, (req, res) => {
    const response = {
        firstName,
        lastName
    } = req.body;
    console.log('response', response);
    res.end(JSON.stringify(response));
});

app.post('/fileUpload', (req, res) => {
    const file = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, (err, data) => {
        fs.writeFile(file, data, (err) => {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

app.get('/', function (req, res) {
    console.log('Cookies: ' + util.inspect(req.cookies));
})

const server = app.listen(8080, () => {
    console.log('running');
});