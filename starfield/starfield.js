
  var s;

function setup() {
  var canvas = createCanvas(800, 600);
//   background("black");
  s = Star();
}

function draw() {
  s.update();
  s.show();
}

function Star() {
  var x = random(0, width);
  var y = random(0, height);
//   var z = random(0, width);
  
  function update() {
    x += x + 0.5;
    y += 0.5;
  }
  function show() {
//     fill("white");
//     ellipse(0,0,50,50);
    line(x, y, 0, 0);
  }
  return {
    update,
    show
  }
}