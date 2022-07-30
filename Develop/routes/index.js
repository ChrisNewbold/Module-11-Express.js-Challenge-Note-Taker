const express = require('express');
const bodyParser = require('body-parser');

// Import our modular routers for /apiRoutes and /htmlRoutes
const apiRouter = require('./apiRoutes');
const htmlRouter = require('./htmlRoutes');
// creates a new express server
const app = express();
// takes JSON from requests and passes it as an object on req.body
app.use(bodyParser.json())
// use api router for any requests that are prefixed with /api
app.use('/api', apiRouter);
// use htmlRouter router for any other requests
app.use('', htmlRouter);

module.exports = app;
