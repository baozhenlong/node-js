const fs = require('fs');

// 异步读取
fs.readFile('input.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log('异步读取', data.toString());
});

// 同步读取
let data = fs.readFileSync('input.txt');
console.log('同步读取', data.toString());

fs.open('input.txt', 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log('文件打开成功', fd);
});

fs.stat('input.txt', (err, stats) => {
    if (err) {
        return console.error(err);
    }
    console.log('stats', stats);
    console.log('isFile', stats.isFile());
    console.log('isDirectory', stats.isDirectory());
});
// stats Stats {
//     dev: 1242919252,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 9851624186480748,
//     size: 6,
//     blocks: undefined,
//     atimeMs: 1599650584226.6125,
//     mtimeMs: 1599611944441.14,
//     ctimeMs: 1599611944441.14,
//     birthtimeMs: 1599611922404.6384,
//     atime: 2020-09-09T11:23:04.227Z,
//     mtime: 2020-09-09T00:39:04.441Z,
//     ctime: 2020-09-09T00:39:04.441Z,
//     birthtime: 2020-09-09T00:38:42.405Z }
//   isFile true
//   isDirectory false

fs.writeFile('input.txt', '通过 fs.writeFile() 写入文件', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('写入成功');
    fs.readFile('input.txt', (err, data) => {
        if (err) {
            return console.error(err);
        }
        console.log('读取成功', data.toString());
    });
});

let buf = new Buffer.alloc(1024);
fs.open('input.txt', 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log('文件打开成功');
    console.log('准备读取文件');
    fs.read(fd, buf, 0, buf.length, 0, (err, bytes, buffer) => {
        if (err) {
            return console.error(err);
        }
        console.log(bytes, '字节被读取');
        if (bytes > 0) {
            console.log('buf', buf.toString());
            console.log('buffer', buffer.toString());
        }
    });
});

fs.open('input.txt', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    fs.close(fd, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('文件关闭成功');
    });
});

fs.open('input.txt', 'r+', (err, fd) => {
    if (err) {
        return console.error(err);
    }
    console.log('截取 10 字节的文件内容');
    fs.ftruncate(fd, 10, () => {
        if (err) {
            return console.error(err);
        }
        console.log('文件截取成功');
        fs.readFile('input.txt', (err, data) => {
            if (err) {
                return console.error(err);
            }
            console.log('截取后', data);
        });
    });
});

fs.unlink('123.txt', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('文件删除成功');
});

fs.mkdir('./1', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('目录 1 创建成功');
});

fs.mkdir('./2/3', {
    recursive: true
}, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('目录 2/3 创建成功');
});

fs.readdir('./', (err, files) => {
    if (err) {
        return console.error(err);
    }
    files.forEach((file) => {
        console.log('readdir file', file);
    });
});

setTimeout(() => {
    fs.rmdir('./2/3', (err) => {
        if (err) {
            return console.error(err);
        }
    });
}, 2000);