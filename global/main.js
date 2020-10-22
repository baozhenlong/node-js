console.log('filename:', __filename); // filename: F:\github\node-js\global\main.js

console.log('dirname:', __dirname); // dirname: F:\github\node-js\global

let timeoutTimer = setTimeout(() => {
    console.log('timeoutTimer', timeoutTimer);
}, 1000);
clearTimeout(timeoutTimer);

let time = 0;
let intervalTimer = setInterval(() => {
    time++;
    if (time >= 5) {
        clearInterval(intervalTimer);
    } else {
        console.log('time', time);
    }
}, 1000);

process.on('exit', (code) => {
    console.log('退出码为', code);
    // 以下代码永远不会执行
    setTimeout(() => {
        console.log('该代码不会执行');
    }, 0);
});
console.log('程序执行结束');