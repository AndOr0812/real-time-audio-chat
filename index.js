var path = require('path');
var express = require('express');

var routes = require('./routes');

var app = express();

var ExpressPeerServer = require('peer').ExpressPeerServer;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes, ExpressPeerServer(app, {debug:true}));

app.listen(6767);
console.log('Listening on 6767');