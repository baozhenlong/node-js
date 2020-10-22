const childProcess = require('child_process');

for (let i = 0; i < 3; i++) {
    const workerProcess1 = childProcess.exec('node Support.js ' + i, (error, stdout, stderr) => {
        if (error) {
            console.log(error.stack);
            console.log('exec Error code: ' + error.code);
            console.log('exec Signal received: ' + error.signal);
        }
        console.log('exec stdout: ' + stdout);
        console.log('exec stderr: ' + stderr);
    });
    workerProcess1.on('exit', (code) => {
        console.log('exec 子进程已退出，退出码 ' + code);
    });
    const workerProcess2 = childProcess.spawn('node', ['Support.js', i]);
    workerProcess2.stdout.on('data', (data) => {
        console.log('spawn stdout: ' + data);
    });
    workerProcess2.stderr.on('data', (data) => {
        console.log('spawn stderr: ' + data);
    });
    workerProcess2.on('close', (code) => {
        console.log('spawn 子进程已退出，退出码 ' + code);
    });
    const workerProcess3 = childProcess.fork('support.js', [i]);
    workerProcess3.on('close', function (code) {
        console.log('fork 子进程已退出，退出码 ' + code);
    });
}