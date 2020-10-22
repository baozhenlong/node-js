const util = require('util');

async function fn() {
    return Promise.reject(null);
}
const callbackFn = util.callbackify(fn);
callbackFn((err, ret) => {
    if (err) {
        // 当 Promise 被以 null 拒绝时，它被包装为 Error 并且原始值存储在 reason 中
        console.log(err.hasOwnProperty('reason') && err.reason === null);
    } else {
        console.log(ret);
    }
});

function Base() {
    this.name = 'base';
    this.base = 2010;
    this.sayHello = function () {
        console.log('Hello', this.name);
    };
}
Base.prototype.showName = function () {
    console.log(this);
    console.log('name', this.name);
}

function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName(); // name base
objBase.sayHello(); // Hello base
console.log('objBase', objBase); // objBase Base { name: 'base', base: 2010, sayHello: [Function] }
var objSub = new Sub();
objSub.showName(); // name sub
// objSub.sayHello(); // 没有
console.log('objSub', objSub); // objSub Sub { name: 'sub' }

function Person() {
    this.name = 'damon';
    this.toString = function () {
        return this.name;
    }
}
var person = new Person();
console.log('person', util.inspect(person)); // person Person { name: 'damon', toString: [Function] }
console.log('person', util.inspect(person, true));
// person Person {
//   name: 'damon',
//   toString:
//    { [Function]
//      [length]: 0,
//      [name]: '',
//      [arguments]: null,
//      [caller]: null,
//      [prototype]: { [constructor]: [Circular] } } }

console.log('isArray', util.isArray([])); // true
console.log('isArray', util.isArray(new Array())); // true
console.log('isArray', util.isArray({})); // false

console.log('isRegExp', util.isRegExp(/some regexp/)); // true
console.log('isRegExp', util.isRegExp(new RegExp('another regexp'))); // true

console.log('isDate', util.isDate(new Date())); // true
console.log('isDate', util.isDate(Date())); // false