const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.post('/user', (req, res, next) => {
    res.send('<h1>User:'+req.body.userName+'</h1>');
});

app.get('/', (req, res, next) => {
    res.send('<form action="/user" method="POST"><input type="text" name="userName"><button>Submit</button></form>')
});

app.listen(5000);