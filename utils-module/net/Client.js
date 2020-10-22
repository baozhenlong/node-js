let net = require('net');
let client = net.connect({
    port: 8080
}, () => {
    console.log('连接到服务器')
});
client.on('data', (data) => {
    console.log('data', data.toString());
    let time = 5;
    let timer = setInterval(() => {
        time--;
        if (time > 0) {
            console.log(time, ' s 后断开与服务器的连接');
        } else {
            client.end();
            clearInterval(timer);
        }
    }, 1000);
});
client.on('end', () => {
    console.log('断开与服务器的连接');
});