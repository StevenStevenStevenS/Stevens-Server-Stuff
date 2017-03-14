var express = require('express');
var fs = require('fs');

var app = express();
app.get("/", function (request, response) {
  var stuff;
  var firsthalf = fs.readFileSync("firsthalf.html","utf8");
  var highscores = fs.readFileSync("highscores.html","utf8");
  var secondhalf = fs.readFileSync("secondhalf.html","utf8");
  var index = fs.readFileSync("index.html","utf8");
  var experimentaler = fs.readFileSync("experimentaler.html","utf8");

  stuff = firsthalf + highscores + secondhalf + index + experimentaler;



  response.send(stuff);
});


app.listen(8081);

console.log("server is running");
