require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.APP_PORT || 3333;

app.use(express.json())

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})