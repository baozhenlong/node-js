let fs = require('fs');
let data = '';
// 创建可读流
let readStream = fs.createReadStream('input.txt');
// 设置编码为 utf-8
readStream.setEncoding('utf-8');
// 处理事件流
readStream.on('data', (chunk) => {
    console.log('data chunk', chunk);
    data += chunk;
});
readStream.on('end', () => {
    console.log('end data', data);
});

// 创建一个可以写入的流，写入文件到 output.txt 中
let writeStream = fs.createWriteStream('output.txt');
// 使用 utf-8 编码写入数据
writeStream.write('哈哈haha', 'utf-8');
// 标记文件末尾
writeStream.end();
// 处理流事件
writeStream.on('finish', () => {
    console.log('finish 写入完成');
});

// 管道读写操作
// 读取 input.txt 内容，并将内容写入到 output.txt 文件中
readStream.pipe(fs.createWriteStream('output1.txt'));