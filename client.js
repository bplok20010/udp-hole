const dgram = require('dgram');
const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');

client.send(message, 41234, '127.0.0.1', (err) => {
    if (err) console.log(err);
});

client.on('close', function () {
    console.log('udp client closed.')
})

//错误处理
client.on('error', function () {
    console.log('some error on udp client.')
})

// 接收消息
client.on('message', function (msg, rinfo) {
    console.log(`message：${msg}`);
})