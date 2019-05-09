var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World Pradeep");
});

app.listen(4000);