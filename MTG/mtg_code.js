//223*310
var c, d;
    function setup() {
      createCanvas(800,600);
      c = new Card(100, 150);
      d = new Card(0, 0);
    }
    
    function draw() {
      background(0);
      c.show();
      c.select();
      
      d.show();
      d.select();
    }
    
    var players = []
    for (i=0; i < 2; i++) {
      players[i] = {
        
      }
    }
    
//     function mouseTracker(event) {
//       var x = event.clientX;
//       var y = event.clientY;
//       console.log(x, y);
//       return {
//         x,
//         y
//       }
//     }
    
    
    function Card(X, Y) {
//       var type = t;
//       var name = n;
//       var picture = p;
//       var tapped = false;
      var x = X;
      var y = Y;
      var width = 50;
      var height = 50;
      var xDiff = null;
      var yDiff = null;
      
      var drag = false
      
      function select() {
        if(mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height && mouseIsPressed) {
//           
          drag = true;
        }
        if(mouseIsPressed === false) {
          drag = false;
        }
        if(drag) {
          x = mouseX - 25;
          y = mouseY - 25;
        }
      }
      
      function show() {
        fill(255);
		    noStroke();
        rect(x, y, width, height);
      }
      return {
        select,
        show
      }
    }
    