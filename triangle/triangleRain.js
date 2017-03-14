  var triangles = [];

  function setup() {
    var canvas = createCanvas(1300,150);
    canvas.parent("pageHeader");
    angleMode(DEGREES);
    for(let i = 0; i < 75; i++) {
      triangles.push(new Triangle(random(25,width-25),random(-50,-600)));
    }
}

function draw() {
  background(0, 34, 175);
  for(let i = 0; i < triangles.length; i++) {
    triangles[i].show();
    triangles[i].update();
    if(triangles[i].points.one.y > 600 && triangles[i].points.two.y > 600 && triangles[i].points.three.y > 600) {
      triangles[i] = new Triangle(random(25,width-25),-50)
    }
  }
}

function Triangle(x,y) {
  // var xPoints = [];
  // var yPoints = [];
  var started = false;
  var gravity = random(1,5);
  var rotationSpeed = random(0.3,0.6);
  var a = 0;
  var size = random(15,25);
  var otherSize = (size * 2) / Math.pow(3, 0.5);
  var rg = Math.round(random(10,200));
  var colorSpeed = 0.25;
  var firstpoint = {
    x: x,
    y: y
  }

  function createPoints(point) {
    // for(let i = 0; i < count; i++) {
    //   let enemy = new Enemy(random(-50, 0), random(0, HEIGHT));
    //   enemies.push(enemy);
    // }
    // point = {
    //   x: 10,
    //   y: 10
    // }

    var points = {
      center: {
        x: point.x,
        y: point.y
      },
      one: {
        x: point.x - otherSize,
        y: point.y - size
      },
      two: {
        x: point.x + otherSize,
        y: point.y - size
      },
      three: {
        x: point.x,
        y: point.y + size
      }
    }

    return points
  }

  function rotateAndColor() {
    let ab = Math.round(Math.random());
    let ac = Math.round(Math.random());

    if(ab===0) {
      rotationSpeed = rotationSpeed * -1;
    }
    if(ac===0) {
      colorSpeed = colorSpeed * -1;
    }
    started = true;
  }

  function update() {
    if(started===false) {
      rotateAndColor();
    }

    points.one.x = 2*size*cos(a) + points.center.x;
    points.two.x = 2*size*cos(a + 120) + points.center.x;
    points.three.x = 2*size*cos(a + 240) + points.center.x;

//     points.one.x = 2*size*cos(a + 240) + points.center.x;
//     points.two.x = 2*size*cos(a + 120) + points.center.x;
//     points.three.x = 2*size*cos(a) + points.center.x;

    points.one.y = 2*size*sin(a) + points.center.y;
    points.two.y = 2*size*sin(a + 120) + points.center.y;
    points.three.y = 2*size*sin(a + 240) + points.center.y;

    a += rotationSpeed;

    points.one.y += gravity;
    points.two.y += gravity;
    points.three.y += gravity;
    points.center.y += gravity;
  }

  var points = createPoints(firstpoint);
  function show() {
    rg+= colorSpeed
    if(rg>255 || rg<20) {
      colorSpeed = colorSpeed * -1;
    }
    noStroke();
    fill(rg, rg+34, 255);
   triangle(points.one.x, points.one.y,points.two.x,points.two.y,points.three.x,points.three.y);
  }
  return {
    show,
    update,
    points
  }
}