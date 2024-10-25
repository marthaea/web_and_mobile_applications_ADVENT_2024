//loading the environment variable
require('dotenv').config();

const express = require('express');
const app = express();
//Using the environment variable
const port = process.env.PORT ||3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', (req, res) => {
res.send('Hello World!');
});
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});