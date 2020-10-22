let events = require('events');
let EventEmitter = events.EventEmitter;
let emitter = new EventEmitter();

//监听器 #1
let listener1 = () => {
    console.log('监听器 #1 执行');
};
//监听器 #2
let listener2 = (arg1, arg2) => {
    console.log('监听器 #2 执行');
    console.log('listener2 arg1', arg1);
    console.log('listener2 arg2', arg2);
};

// 绑定 connection 事件，处理函数为 listener 2
emitter.addListener('connection', listener2);
// 绑定 connection 事件，处理函数为 listener 1
emitter.on('connection', listener1);

console.log('监听器的个数', emitter.listenerCount('connection'));

// 触发事件
console.log('是否有注册监听', emitter.emit('connection', 1, {}));

// 移除事件
emitter.removeListener('connection', listener2);
console.log('监听器的个数', emitter.listenerCount('connection'));
console.log('是否有注册监听', emitter.emit('connection', 1, {}));

emitter.removeAllListeners();
console.log('监听器的个数', emitter.listenerCount('connection'));
console.log('是否有注册监听', emitter.emit('connection', 1, {}));

emitter.emit('error');