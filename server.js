//Install express server
const express = require('express');
const path = require('path');
const http = require('http');

const app = require('./backend/app');

const server = http.createServer(app);

app.listen(process.env.PORT || 8080);


