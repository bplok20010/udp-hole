const dgram = require('dgram');
const message = Buffer.from('test');
const client = dgram.createSocket('udp4');

client.send(message, 49348, '127.0.0.1', (err) => {
    if (err) console.log(err);
    client.close();
});