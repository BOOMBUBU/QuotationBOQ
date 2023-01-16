require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./route/index");
var bodyParser = require("body-parser");
var rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8'); 
    }
}
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
app.use(bodyParser.raw({ verify: rawBodySaver, type: '*/*' }));
app.use(router);
app.listen(port, () => {
    console.log("Starting node.js at port " + port);
});
