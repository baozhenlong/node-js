let dns = require('dns');
dns.lookup('www.github.com', (err, address, family) => {
    console.log('ip', address);
    dns.reverse(address, (reverseErr, hostnames) => {
        if (reverseErr) {
            console.log('err.stack', err.stack);
        }
        console.log('反向解析', address, ':', hostnames);
    });
});