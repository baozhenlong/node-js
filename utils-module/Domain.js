const domain = require('domain');
const eventEmitter = require('events').EventEmitter;
const emitter1 = new eventEmitter();

// 创建域
const domain1 = domain.create();
domain1.on('error', (err) => {
    console.log('domain1 处理此错误', err.message);
});

// 显式绑定
domain1.add(emitter1);
emitter1.on('error', (err) => {
    console.log('监听器处理此错误', err.message);
});
emitter1.emit('error', new Error('通过监听器来处理'));
emitter1.removeAllListeners('error');
emitter1.emit('error', new Error('通过 domain1 处理'));

const domain2 = domain.create();
domain2.on('error', (err) => {
    console.log('domain2 处理此错误', err.message);
});
domain2.run(() => {
    const emitter2 = new eventEmitter();
    emitter2.emit('error', new Error('通过 domain2 处理'));
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('转换为异常，系统将崩溃'));