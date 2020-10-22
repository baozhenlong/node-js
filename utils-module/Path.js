let path = require('path');
console.log('格式化路径', path.normalize('/test/../test1//2slashes/1slash/tab/..'));
// 格式化路径 \test1\2slashes\1slash
console.log('连接路径' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '.', '123'));
// 连接路径\test\test1\2slashes\1slash\tab\123
console.log('当前目录', path.resolve('/foo/bar', './baz'));
// 当前目录 F:\foo\bar\baz
console.log('绝对路径', path.resolve('/foo/bar', '/tmp/file/'));
// 绝对路径 F:\tmp\file
console.log('上一级目录', path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// 上一级目录 F:\github\node-js\utils-module\wwwroot\static_files\gif\image.gif
console.log('转为相对路径', path.relative('F:\\github\\node-js\\file', 'F:\\github\\person\\qq'));
// 转为相对路径 ..\..\person\qq
console.log('文件中路径的后缀名', path.extname('main.js'));
// 文件中路径的后缀名 .js
console.log('文件中路径的后缀名', path.extname('.js'));
// 文件中路径的后缀名