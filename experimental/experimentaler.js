var levelWidth = 16;
var levelHeight = 12;
// var scl = 50;
var scl = 40;
var GRAVITY = 1;
// var now, delta, then;
var objects = [
	[1],
	[2],
	[1],
	[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[2],
	[1],
	[2],
	[1],
	[2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1],
	[2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[2,2,2,2,2,2,2,2,2,2,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
	[2,2,2,2,2,2,2,2,2,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,2,2,2,2,2,2,0,0,0,0,1,1,1,0,0],
  [2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,1,0,0],
  [2,2,2,2,2,2,2,2,2,2,0,0,0,0,1,1,1,10,0],
  [2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,10,0],
  [2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,10,0],
  [2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  [2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
];

// var objects = [
//   [1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0],
//   [0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0],
//   [0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0],
//   [1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0],
//   [0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0],
//   [0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0],
//   [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
// 	//
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0],
// 	[0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0],
// 	[0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0],
// 	[0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0],
// 	[0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1],
// 	[1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0],
// 	[1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1],
// 	[0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0],
// 	[1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1],
// 	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// 	[0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1],
//   [0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1],
//   [0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1],
//   [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1],
// ];
var g;



function setup() {
	createCanvas(800,600);
  // create the player
	g = new Guy();

  
  // create the blocks  
  let currentY = 0;
  objects.forEach(function(rows, i){
		let currentX = 0;
		rows.forEach(function(object, j){
			if(object === 0) objects[i][j] = new Air(currentX, currentY);
			if(object === 1) objects[i][j] = new Block(currentX, currentY);
			if(object === 2) objects[i][j] = new Border(currentX, currentY);
			if(object === 3) objects[i][j] = new PhysicsBlock(currentX, currentY);
			if(object === 10) objects[i][j] = new EnemyOne(currentX, currentY);
			currentX += scl;
		})
		currentY += scl;
	})
  
}

function draw() {
	background(0, 34, 175);
  
//   setDelta();
  
  g.doPhysics();
	
	var prop = g.getProperties(); // get properties off player object (x,y,width,height)
  
  if (keyIsDown(LEFT_ARROW)  && prop.dead === false) g.goLeft();
	if (keyIsDown(RIGHT_ARROW) && prop.dead === false) g.goRight();
	if (keyIsDown(UP_ARROW)    && prop.dead === false) g.goUp();
	if (keyIsDown(DOWN_ARROW)  && prop.dead === false) g.goDown();
	if (keyIsDown(LEFT_ARROW) !== true && keyIsDown(RIGHT_ARROW) !== true) g.stop();

  translate(width/2-prop.x-prop.width/2, height/2-prop.y-prop.height/2); // reorient screen to center the player
  
  objects.forEach(function(row) {
    row.forEach(function(object) {
			if(object.y > prop.y-12*scl && object.y < prop.y+12*scl && object.x > prop.x-12*scl && object.x < prop.x+12*scl) {
				if (object.id !== 0) object.show();
			}
			if (object.id === 3) object.doPhysics();
			if (object.id === 10) object.goToGuy();
    })
  })
	
// 	for(let i=Math.round((prop.y-12*scl)/scl); i < Math.round((prop.y+12*scl)/scl); i+=1) {
// 		for(let j=Math.round((prop.x-12*scl)/scl); j < Math.round((prop.x+12*scl)/scl); j+=1) {
// // 			console.log(i,j);
// 			if(objects[i] !== undefined && objects[i][j] !== undefined) {
// 				let object = objects[i][j];
// 				if (object.id !== 0) object.show();
// // 				if (object.id === 3) object.doPhysics();
// 				if (object.id === 10) {
// 					object.goToGuy();
// 				}
// 			}
// 		}
// 	}
	g.show();
}

// setDelta = function() {
// 	now = Date.now();
// 	delta = (now - then) / 1000; // seconds since last frame
// 	then = now;
// }

function Guy() {
  var speed = 8;
	
  var x = 500;
  var y = 500;
  var lastX = 100;
  var lastY = 100;
	
	
  var width = scl;
  var height = scl;
	
// 	var leftScreen = x - 475;
// 	var rightScreen = x + width + 475;
// 	var topScreen = y - 350;
// 	var bottomScreen = y + height + 350;
	
	
  var vx = 0;
  var vy = 0;
  var ax = 0.5;
  var ay = 0;
	
  var jumpForce = 20;
  var onFloor = false;
	
	var lives = 3;
	var dead = false;
  
	function die() {
		lives --;
		if(lives <= 0) {
			dead = true;
		}
	}
	
  function doPhysics() {
		if(onFloor === true) {
			ax = 0.5
		}
		if(onFloor === false) {
			ax = 0.25
		}
		
		if(vx >= speed) {
			vx = speed;
		}
		if(vx <= -speed) {
			vx = -speed;
		}
		dir(vx, 0);
    
  	ay += GRAVITY;
    vy += ay;
    dir(0, vy);
    ay = 0;
    if(vy > scl) vy = scl-1;
 //     y += vy;
  }
  
  function dir(xdir, ydir) {
    lastX = x;
    lastY = y;
    
    x += xdir;
    y += ydir;
    
    checkCollision(xdir, ydir);
  }
  
  function goLeft()  { vx -= ax }
  function goRight() { vx += ax }
  function goUp()    {
    if(onFloor === true) {
      onFloor = false;
      vy = -jumpForce;
    }
  }
  function goDown()  { dir( 0,  1) }
	function stop() {
		if(vx < 0) vx += ax;
		if(vx > 0) vx -= ax;
		if(vx <= 0.25 && vx >= -0.25) vx = 0;
	}
  
  function show() {
    fill(255);
		noStroke();
    rect(x, y, width, height);
  }
  
  function getProperties() {
    return {
      x,
      y,
      width,
      height,
      lastX,
      lastY,
			dead
    }
  }
  
  function setLocation(newX, newY) {
    x = newX;
    y = newY;
  }
  
  function checkCollision(xdir, ydir) {
		for(let i=Math.round((y-2*scl)/scl); i < Math.round((y+2*scl)/scl); i+=1) {
			for(let j=Math.round((x-2*scl)/scl); j < Math.round((x+2*scl)/scl); j+=1) {
				if(objects[i] !== undefined && objects[i][j] !== undefined) {
          let object = objects[i][j];
// 				if(object === undefined) {
// 					object = Air();
// 				}
					if (object.id !== 0) { // id 1 means it's a block, id 0 means it's air
						var block = object.getLocation();

						var blockLeftSide = block.x, blockRightSide = block.x + scl,
								blockTopSide = block.y, blockBottomSide = block.y + scl;

						var guyLeftSide = x, guyRightSide = x + width,
								guyTopSide = y, guyBottomSide = y + height;

						if (guyRightSide > blockLeftSide && // if it has collided
									blockTopSide < guyBottomSide && 
									blockBottomSide > guyTopSide && 
									guyLeftSide < blockRightSide) {

							var newX = lastX, newY = lastY;

							if (xdir <= -1) { // going left
								newX = blockRightSide;
								vx = 0;
							}
							if (xdir >= 1) { // going right
								newX = blockLeftSide - width;
								vx = 0;
							}
							if (ydir <= -1) { // going up
								newY = blockBottomSide;
								vy = 0;
							}
							if (ydir >= 1) { // going down
								newY = blockTopSide - height;
								vy = 0;
								onFloor = true;
								if(object.id === 3) {
									setTimeout(object.startPhysics, 60);
								}
							}

							setLocation(newX, newY);
						}
					}
				}
			}
		}
//     objects.forEach(function(row) {
//       row.forEach(function(object) {
//         if (object.id !== 0) { // id 1 means it's a block, id 0 means it's air
//           var block = object.getLocation();
          
//           var blockLeftSide = block.x, blockRightSide = block.x + scl,
//               blockTopSide = block.y, blockBottomSide = block.y + scl;

//           var guyLeftSide = x, guyRightSide = x + width,
//               guyTopSide = y, guyBottomSide = y + height;

//           if (guyRightSide > blockLeftSide && // if it has collided
//                 blockTopSide < guyBottomSide && 
//                 blockBottomSide > guyTopSide && 
//                 guyLeftSide < blockRightSide) {

//             var newX = lastX, newY = lastY;

//             if (xdir <= -1) { // going left
//               newX = blockRightSide;
// 							vx = 0;
//             }
//             if (xdir >= 1) { // going right
//               newX = blockLeftSide - width;
// 							vx = 0;
//             }
//             if (ydir <= -1) { // going up
//               newY = blockBottomSide;
//               vy = 0;
//             }
//             if (ydir >= 1) { // going down
//               newY = blockTopSide - height;
//               vy = 0;
//               onFloor = true;
// 							if(object.id === 3) {
// 								setTimeout(object.startPhysics, 50);
// 							}
//             }
            
//             setLocation(newX, newY);
//         	}
//         }
//       })
//     })
  }
  
  return {
    goLeft,
    goRight,
    goUp,
    goDown,
    stop,
    show,
    getProperties,
    doPhysics
  }
}

function Block(setX,setY) {
  var x = setX;
  var y = setY;
  var id = 1;
  
  function show() {
    fill(0, 34, 255);
		stroke(0, 34, 255);
    rect(x, y, scl, scl);
  }
	
	function getLocation() {
		return {x, y}
	}
	return {
		x,
		y,
		id,
		show,
		getLocation
	}
}

function Border(setX,setY) {
  var x = setX;
  var y = setY;
  var id = 2;
  
  function show() {
    fill('black');
		stroke('black');
    rect(x, y, scl, scl);
  }
	
	function getLocation() {
		return {x, y}
	}
	return {
		x,
		y,
		id,
		show,
		getLocation
	}
}

function PhysicsBlock(setX,setY) {
  var x = setX;
  var y = setY;
	var vy = 0;
	var ay = 0;
  var id = 3;
	var physicsStart = false;
	
	function startPhysics() {
		if(physicsStart === false) {
			physicsStart = true;
		}
//     physicsStart = ( !physicsStart ) ? true : physicsStart;
	}
	
	function doPhysics() {
		if(physicsStart) {
		ay += GRAVITY;
    vy += ay;
    dir(0, vy);
    ay = 0;
    if(vy > scl) vy = scl-1;
		}
	}
  
  function show() {
//     fill(128, 128, 128);
// 		stroke(128, 128, 128);
		fill(128, 128, 255);
		stroke(128, 128, 255);
    rect(x, y, scl, scl);
  }
	
	function dir(xdir, ydir) {
    x += xdir;
    y += ydir;
  }
	
	function getLocation() {
		return {x: x, y: y}
	}
	return {
		x,
		y,
		id,
		show,
		getLocation,
		startPhysics,
		doPhysics
	}
}

function Air(x,y) {
 	return {
 		id: 0,
// 		x: x,
// 		y: y
 	}
}

function EnemyOne(setX,setY) {
	var x = setX;
  var y = setY;
  var id = 10;
	var guy = g.getProperties();
	var speed = 3;
  
	function goToGuy() {
		guy = g.getProperties();
		
		console.log(guy.x)
		if(guy.x < x) {
			x-= speed;
		}
		if(guy.x > x) x+= speed;
	}
	
  function show() {
    fill('red');
		stroke('red');
    rect(x, y, scl, scl);
  }
	
	function getLocation() {
		return {x, y}
	}
	return {
		x,
		y,
		id,
		show,
		getLocation,
		goToGuy
	}
}
