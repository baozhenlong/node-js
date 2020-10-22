const buf = Buffer.from('runoob', 'ascii');
console.log('hex', buf.toString('hex')); // hex 72756e6f6f62
console.log('base64', buf.toString('base64')); // base64 cnVub29i

// 创建一个长度为 10、且用 0 填充的 Buffer
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer
const buf2 = Buffer.alloc(10, 1);

// 传一个长度为 10、且未初始化的 Buffer
// 这个方法比调用 Buffer.alloc() 更快
// 但返回的 Buffer 实例可能包含旧数据
// 因此需要使用 fill() 或 write() 重写
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 utf-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf5 = Buffer.from('tést', 'utf-8');

let buf6 = Buffer.alloc(256);
console.log('len', buf6.write('www.runoob.com')); // 14

let buf7 = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    buf7[i] = 97 + i;
}
console.log('ascii', buf7.toString('ascii')); // abcdefghijklmnopqrstuvwxyz
console.log('ascii, 0, 5', buf7.toString('ascii', 1, 5)); // bcde
console.log('utf-8, 0, 5', buf7.toString('utf-8', 1, 5)); // bcde

let buf8 = Buffer.from([1, 2, 3, 4, 5]);
const json = JSON.stringify(buf8);
console.log('json', json); // {"type":"Buffer","data":[1,2,3,4,5]}
let copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ? Buffer.from(value.data, 'utf-8') : value;
});
console.log('copy', copy); // <Buffer 01 02 03 04 05>

let buf9 = Buffer.from('菜鸟教程:', 'utf-8');
let buf10 = Buffer.from('www.runoob.com', 'utf-8');
console.log('合并', Buffer.concat([buf9, buf10]).toString()); // 菜鸟教程:www.runoob.com

console.log('比较', Buffer.from('abc').compare(Buffer.from('abcd'))); // -1

let buf11 = Buffer.from('abc');
let buf12 = Buffer.from('defgehijk');
// 将 buf12 插入到 buf11 指定位置上
buf12.copy(buf11, 1, 1, 6);
console.log('拷贝', buf11.toString()); // aef
console.log('拷贝', buf12.toString()); // defgehijk

console.log('裁剪', Buffer.from('abcd').slice(0, 1).toString()); // a

console.log('长度', Buffer.alloc(4).length); // 4