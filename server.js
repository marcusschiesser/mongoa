"use strict";

var koa = require('koa');
var mongo = require('koa-mongo');
var config = require('./config.json');

var app = koa();

app.use(mongo(config));
app.use(function*() {
    let collection = this.request.path.substring(1);
    var query = this.request.query;
    this.body = yield this.mongo.collection(collection).find(query).toArray();
});
app.listen(process.env.PORT || 3000);
