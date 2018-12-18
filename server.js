const dgram = require('dgram');
const server = dgram.createSocket('udp4');


server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

/**
 * msg
 * 1001: 返回ip:port
 * 
 */
server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

    server.send(`${rinfo.address}:${rinfo.port}`, rinfo.port, rinfo.address);

});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}: ${address.port}`);
});

server.bind(41234);
// server listening 0.0.0.0:41234