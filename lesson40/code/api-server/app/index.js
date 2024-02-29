const express = require("express");
const bodyParser = require("body-parser");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const { errors } = require("celebrate");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const home = require('./api/home/controller');
const items = require('./api/items/controller');

const app = express();

app.use(connectLiveReload());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`Request: {
        content-type: ${req.get('Content-Type')}
        url: ${req.url},
        method: ${req.method}
    }`);
  next();
});

app.use('/', home);
app.use('/items', items);

app.use(errors())

module.exports = app;
