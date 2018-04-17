

var RADIUS = 50;

function setup() {

createCanvas(100, 1000);
background(255);
console.log("why?")

}

function draw() {

  if(mouseIsPressed) {
    Brush(mouseX,mouseY,RADIUS)
  }


}

function Brush(X,Y,rad) {

  var width= rad*2;
  var x= X - width/2;
  var y= X - width/2;

  fill(0);
  noStroke();
  rect(x, y, width, width)

}
