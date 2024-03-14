const fs = require('fs');

const userName = "hello world";

fs.writeFile('user-data.txt', 'user name: '+userName, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('WROTE FILE');
});