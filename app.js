const http = require('http');

const server = http.createServer((req, res) => {
    req.on('data', (chunk) => {
        console.log(`Received chunk: ${chunk}`);
    });

    req.on('end', () => {
        console.log('Request received completely.');
    });
});

server.listen(5000);