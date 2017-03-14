var fs = require('fs');

var highscores = fs.readFileSync("highscores.text", "utf8");
console.log(highscores);
