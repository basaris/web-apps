var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();


app.get('/', function (req, res) {
    res.sendFile('front-page.html', {root: __dirname});
  });

  
app.get('/categories', function (req, res) {
    res.sendFile('categories.html', {root: __dirname});
});

var server = app.listen(8000, () => {
    console.log('server is listening...');
})


