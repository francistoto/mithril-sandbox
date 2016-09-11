const express = require('express');
const browserify = require('browserify-middleware');
const path = require('path');

const port = process.env.PORT || 5000;

const app = express();

app.get('/scripts/app-bundle.js', browserify(path.join(__dirname, '../client/main.js')));

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port);
console.log(`Listening on port ${port}`);
