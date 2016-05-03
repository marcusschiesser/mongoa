"use strict";

var koa = require('koa');
var mongo = require('koa-mongo');
var config = require('./config.json');

var app = koa();

app.use(mongo(config));
app.use(function* () {
  let collection = this.request.url.substring(1);
  this.body = yield this.mongo.collection(collection).findOne();
});
app.listen(3000);
