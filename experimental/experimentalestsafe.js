var WIDTH = 800;
var HEIGHT = 575;

var scl = 45;

var prop;

var antags = [];
var pewPews = [];

var level = 0;
function setup() {
  createCanvas(WIDTH, HEIGHT);
	
	p = new Protag();
	
	prop = p.getProp();
	
	for (let i = 0; i < 5; i++) {
		let enemy;
			let rNum = Math.random();
			if(rNum <= 0.25) enemy = Antag(random(prop.x-prop.width/2-width/2-scl*2.5, prop.x-prop.width/2-width/2-scl*1.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			else if(0.25 < rNum && rNum <= 0.5) {
				enemy = Antag(random(prop.x-prop.width/2+width/2+scl*1.5, prop.x-prop.width/2+width/2+scl*2.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			} 
			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2-height/2-scl*2.5, prop.y-prop.height/2-height/2-scl*1.5));
			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2+height/2+scl*1.5, prop.y-prop.height/2+height/2+scl*2.5));
			antags.splice(i,1,enemy);
	}
}

function draw() {
	if(level === -1) {
		
		background(0, 34, 175);
		
	} else if(level === 0) {
		
		background(0, 34, 175);
	
	p.accelerate();
  
  if (keyIsDown(65)  && prop.dead === false) p.goLeft();
	if (keyIsDown(68) && prop.dead === false) p.goRight();
	if (keyIsDown(87)    && prop.dead === false) p.goUp();
	if (keyIsDown(83)  && prop.dead === false) p.goDown();
	if (keyIsDown(65) !== true && keyIsDown(68) !== true || prop.dead) p.xStop();
	if (keyIsDown(87) !== true && keyIsDown(83) !== true || prop.dead) p.yStop();
	
	translate(width/2-prop.x-prop.width/2, height/2-prop.y-prop.height/2);
	
	if(mouseIsPressed && prop.dead === false && prop.loaded) {
		p.load();
		pewPews[pewPews.length] = PewPew(prop.x + prop.width/2, prop.y + prop.height/2, mouseX-width/2+prop.x+prop.width/2, mouseY-height/2+prop.y+prop.height/2);
		setTimeout(p.load, prop.rate);
	}
	
	for(let i = 0; i < pewPews.length; i++) {
		var pewProp = pewPews[i].getProp()
		pewPews[i]. move();
		pewPews[i].show();
		if (pewProp.x + pewProp.width < prop.x-prop.width/2-width/2 || pewProp.x - pewProp.width > prop.x-prop.width/2+width/2 || pewProp.y + pewProp.height < prop.y-prop.height/2-height/2 || pewProp.y - pewProp.height > prop.y-prop.height/2+height/2) {
			pewPews.splice(i, 1);
		}
	}
	
	for(let i = 0; i < antags.length; i++) {
		if(antags[i].getProp().dead === false) {
			antags[i].move();
			antags[i].show();
			antags[i].checkCollision();
		} else if (antags[i].getProp().dead) {
			let enemy;
			let rNum = Math.random();
			if(rNum <= 0.25) enemy = Antag(random(prop.x-prop.width/2-width/2-scl*2.5, prop.x-prop.width/2-width/2-scl*1.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			else if(0.25 < rNum && rNum <= 0.5) {
				enemy = Antag(random(prop.x-prop.width/2+width/2+scl*1.5, prop.x-prop.width/2+width/2+scl*2.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			} 
			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2-height/2-scl*2.5, prop.y-prop.height/2-height/2-scl*1.5));
			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2+height/2+scl*1.5, prop.y-prop.height/2+height/2+scl*2.5));
			antags.splice(i,1,enemy);
			
		}
	}
	
	p.show();
	p.checkCollision();
	
	p.showScore();
		
	}
}

function Protag() {
	var x = WIDTH/2 - scl/2;
	var y = HEIGHT/2 - scl/2;
	var width = scl;
	var height = scl;
	
	var vx = 0;
  var vy = 0;
  var ax = 0.5;
  var ay = 0.5;
	
	var score = 0;
	
	var speed = 3.5;
	
	var dead = false;
	
	var loaded = true;
	var rate = 500;
	
	function die() {
		dead = true;
	}
	
	function moreScore() {
		score ++;
	}
	
	function showScore() {
// 				ctx.fillStyle = "ffffff";
// 				ctx.font = "30px VT323";
// 				ctx.fillText (p.getProp().score, 350, 20);
	fill(255);
	text(score, x+350, y-200);
	document.getElementById('datitle').innerHTML = "game | Score: " + score;
}
	
	function goLeft() {vx -= ax}
	function goRight() {vx += ax}
	function goUp() {vy -= ay}
	function goDown() {vy += ay}
	
	function xStop() {
		if(vx < 0) vx += ax;
		if(vx > 0) vx -= ax;
		if(vx <= 0.25 && vx >= -0.25) vx = 0;
	}
	
	function yStop() {
		if(vy < 0) vy += ay;
		if(vy > 0) vy -= ay;
		if(vy <= 0.25 && vy >= -0.25) vy = 0;
	}
	
	function dir(xdir, ydir) {
//     lastX = x;
//     lastY = y;
    
    x += xdir;
    y += ydir;
    
//     checkCollision(xdir, ydir);
  }
	
	function checkCollision(xdir, ydir) {
		for(let i = 0; i < antags.length; i++) {
			var blockLeftSide = antags[i].getProp().x, blockRightSide = antags[i].getProp().x + scl,
					blockTopSide = antags[i].getProp().y, blockBottomSide = antags[i].getProp().y + scl;

			var guyLeftSide = x, guyRightSide = x + width,
					guyTopSide = y, guyBottomSide = y + height;
			
			if (guyRightSide > blockLeftSide && // if it has collided
			blockTopSide < guyBottomSide && 
			blockBottomSide > guyTopSide && 
			guyLeftSide < blockRightSide && antags[i].getProp().dead === false) {
				die();
			}
		}
	}
	
	function accelerate() {
		if(vx >= speed) {
			vx = speed;
		}
		if(vx <= -speed) {
			vx = -speed;
		}
		if(vy >= speed) {
			vy = speed;
		}
		if(vy <= -speed) {
			vy = -speed;
		}
		dir(vx, vy);
	}
	
	function load() {
		if(loaded === true) loaded = false;
		else if(loaded === false) loaded = true;
	}
	
	function show() {
    fill(255);
		noStroke();
    rect(x, y, width, height);
  }
	
	function getProp() {
		return {
			x,
			y,
			vx,
			vy,
			score,
			width,
			height,
			dead,
			loaded,
			rate
		}
	}
	return {
		moreScore,
		showScore,
		accelerate,
		goLeft,
		goRight,
		goUp,
		goDown,
		xStop,
		yStop,
		checkCollision,
		load,
		show,
		getProp
	}
}

function Antag(X,Y) {
	var x = X;
	var y = Y;
	var width = scl;
	var height = scl;
	
	var speed = 3;
	
	var dead = false;
	
	var hyp, opp, adj;
	
	function die() {
		dead = true;
	}
	
	function move() {
		prop = p.getProp();
		hyp = Math.pow((Math.pow((x + width/2 - (prop.x + prop.width/2)), 2) + Math.pow((y + height/2 - (prop.y + prop.height/2)), 2)), 0.5);
		opp = prop.y + prop.height/2 - (y + height/2);
		adj = prop.x + prop.width/2 - (x + width/2);
		
		if (hyp !== 0) {
			x += speed*(adj/hyp);
			y += speed*(opp/hyp);
		}
	}
	
	function checkCollision(xdir, ydir) {
		for(let i = 0; i < pewPews.length; i++) {
			var blockLeftSide = pewPews[i].getProp().x, blockRightSide = pewPews[i].getProp().x + pewPews[i].getProp().width,
					blockTopSide = pewPews[i].getProp().y, blockBottomSide = pewPews[i].getProp().y + pewPews[i].getProp().height;

			var guyLeftSide = x, guyRightSide = x + width,
					guyTopSide = y, guyBottomSide = y + height;

			if (guyRightSide > blockLeftSide && // if it has collided
			blockTopSide < guyBottomSide && 
			blockBottomSide > guyTopSide && 
			guyLeftSide < blockRightSide) {
				p.moreScore();
				die();
			}
		}
	}
	
	function show() {
    fill(255);
		noStroke();
    rect(x, y, width, height);
  }
	
	function getProp() {
		return {
			x,
			y,
			width,
			height,
			dead
		}
	}
	
	return {
		move,
		checkCollision,
		show,
		getProp
	}
}

function PewPew(xOne, yOne, xTwo, yTwo) {
	var x = xOne;
	var y = yOne;
	var width = scl/4;
	var height = scl/4;
	
	var speed = 20;
	
	var hyp = Math.pow((Math.pow(xTwo - xOne, 2) + Math.pow(yTwo - yOne, 2)), 0.5);
	var opp = yTwo - yOne;
	var adj = xTwo - xOne;
	
	function move() {
		if (hyp !== 0) {
			x += speed*(adj/hyp);
			y += speed*(opp/hyp);
		}
	}
	
	function show() {
    fill(255);
		noStroke();
    rect(x - width/2, y - height/2, width, height);
  }
	
	function getProp() {
		return {
			x,
			y,
			width,
			height
		}
	}
	
	return {
		move,
		show,
		getProp
	}
}





// var WIDTH = 800;
// var HEIGHT = 575;

// var scl = 45;

// var prop;

// var antags = [];
// var pewPews = [];

// var level = 0;

// var objects = [
// 	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
// ];

// function setup() {
//   createCanvas(WIDTH, HEIGHT);
	
// 	p = new Protag();
	
// 	prop = p.getProp();
	
// 	let currentY = 0;
//   objects.forEach(function(rows, i){
// 		let currentX = 0;
// 		rows.forEach(function(object, j){
// // 			if(object === 0) objects[i][j] = new Air(currentX, currentY);
// 			if(object === 1) objects[i][j] = new Block(currentX, currentY);
// 			currentX += scl;
// 		})
// 		currentY += scl;
// 	})
	
// 	for (let i = 0; i < 5; i++) {
// 		let enemy;
// 			let rNum = Math.random();
// 			if(rNum <= 0.25) enemy = Antag(random(prop.x-prop.width/2-width/2-scl*2.5, prop.x-prop.width/2-width/2-scl*1.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
// 			else if(0.25 < rNum && rNum <= 0.5) {
// 				enemy = Antag(random(prop.x-prop.width/2+width/2+scl*1.5, prop.x-prop.width/2+width/2+scl*2.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
// 			} 
// 			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2-height/2-scl*2.5, prop.y-prop.height/2-height/2-scl*1.5));
// 			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2+height/2+scl*1.5, prop.y-prop.height/2+height/2+scl*2.5));
// 			antags.splice(i,1,enemy);
// 	}
// }

// function draw() {
// 	if(level === -1) {
		
// 		background(0, 34, 175);
		
// 	} else if(level === 0) {
		
// 		background(0, 34, 175);
	
// 	p.accelerate();
  
//   	if (keyIsDown(65)  && prop.dead === false) p.goLeft();
// 		if (keyIsDown(68) && prop.dead === false) p.goRight();
// 		if (keyIsDown(87)    && prop.dead === false) p.goUp();
// 		if (keyIsDown(83)  && prop.dead === false) p.goDown();
// 		if (keyIsDown(65) !== true && keyIsDown(68) !== true || prop.dead) p.xStop();
// 		if (keyIsDown(87) !== true && keyIsDown(83) !== true || prop.dead) p.yStop();
	
// 		translate(width/2-prop.x-prop.width/2, height/2-prop.y-prop.height/2);
		
// 		objects.forEach(function(row) {
//     row.forEach(function(object) {
// 			if(object.y > prop.y-12*scl && object.y < prop.y+12*scl && object.x > prop.x-12*scl && object.x < prop.x+12*scl) {
// 				if (object.id !== 0) object.show();
// 			}
// 			if (object.id === 3) object.doPhysics();
// 			if (object.id === 10) object.goToGuy();
//     })
//   })
	
// 	if(mouseIsPressed && prop.dead === false && prop.loaded) {
// 		p.load();
// 		pewPews[pewPews.length] = PewPew(prop.x + prop.width/2, prop.y + prop.height/2, mouseX-width/2+prop.x+prop.width/2, mouseY-height/2+prop.y+prop.height/2);
// 		setTimeout(p.load, prop.rate);
// 	}
		
// 		p.shadow(50,50);
		
// 		for(let i = 0; i < antags.length; i++) {
// 			antags[i].shadow(50,50);
// 		}
	
// 	for(let i = 0; i < pewPews.length; i++) {
// 		var pewProp = pewPews[i].getProp()
// 		pewPews[i]. move();
// 		pewPews[i].show();
// 		if (pewProp.x + pewProp.width < prop.x-prop.width/2-width/2 || pewProp.x - pewProp.width > prop.x-prop.width/2+width/2 || pewProp.y + pewProp.height < prop.y-prop.height/2-height/2 || pewProp.y - pewProp.height > prop.y-prop.height/2+height/2) {
// 			pewPews.splice(i, 1);
// 		}
// 	}
	
// 	for(let i = 0; i < antags.length; i++) {
// 		if(antags[i].getProp().dead === false) {
// 			antags[i].move();
// 			antags[i].show();
// 			antags[i].checkCollision();
// 		} else if (antags[i].getProp().dead) {
// 			let enemy;
// 			let rNum = Math.random();
// 			if(rNum <= 0.25) enemy = Antag(random(prop.x-prop.width/2-width/2-scl*2.5, prop.x-prop.width/2-width/2-scl*1.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
// 			else if(0.25 < rNum && rNum <= 0.5) {
// 				enemy = Antag(random(prop.x-prop.width/2+width/2+scl*1.5, prop.x-prop.width/2+width/2+scl*2.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
// 			} 
// 			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2-height/2-scl*2.5, prop.y-prop.height/2-height/2-scl*1.5));
// 			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2+height/2+scl*1.5, prop.y-prop.height/2+height/2+scl*2.5));
// 			antags.splice(i,1,enemy);
			
// 		}
// 	}
	
// 	p.show();
// 	p.checkCollision();
	
// 	p.showScore();
		
// 		rect(45,45,10,10);
		
// 	}
// }





// function Protag() {
// 	var x = WIDTH/2 - scl/2;
// 	var y = HEIGHT/2 - scl/2;
// 	var lastX, lastY;
// 	var width = scl;
// 	var height = scl;
	
// 	var vx = 0;
//   var vy = 0;
//   var ax = 0.5;
//   var ay = 0.5;
	
// 	var speed = 3.5;
	
// 	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;
	
// 	var score = 0;
	
// 	var dead = false;
	
// 	var loaded = true;
// 	var rate = 0;
	
// 	function die() {
// 		dead = true;
// 	}
	
// 	function moreScore() {
// 		score ++;
// 	}
	
// 	function showScore() {
// 	fill(255);
// 	text(score, x+350, y-200);
// 	document.getElementById('datitle').innerHTML = "game | Score: " + score;
// }
	
// 	function shadow( lightX, lightY) {
// 		hypTL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
// 		adjTL = x - lightX;
// 		oppTL = y - lightY;
		
// 		hypTR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
// 		adjTR = x + width - lightX;
// 		oppTR = y - lightY;
		
// 		hypBL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
// 		adjBL = x - lightX;
// 		oppBL = y + height - lightY;
		
// 		hypBR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
// 		adjBR = x + width - lightX;
// 		oppBR = y + height - lightY;
		
// 		fill(0, 4, 145);
// 		quad(x,y,698*(adjTL/hypTL),698*(oppTL/hypTL),698*(adjBR/hypBR),698*(oppBR/hypBR),x + width,y + height);
// 		quad(x + width,y,698*(adjTR/hypTR),698*(oppTR/hypTR),698*(adjBL/hypBL),698*(oppBL/hypBL),x,y + height);
// 	}
	
// 	function goLeft() {vx -= ax}
// 	function goRight() {vx += ax}
// 	function goUp() {vy -= ay}
// 	function goDown() {vy += ay}
	
// 	function xStop() {
// 		if(vx < 0) vx += ax;
// 		if(vx > 0) vx -= ax;
// 		if(vx <= 0.25 && vx >= -0.25) vx = 0;
// 	}
	
// 	function yStop() {
// 		if(vy < 0) vy += ay;
// 		if(vy > 0) vy -= ay;
// 		if(vy <= 0.25 && vy >= -0.25) vy = 0;
// 	}
	
// 	function dir(xdir, ydir) {
//     lastX = x;
//     lastY = y;
    
//     x += xdir;
//     y += ydir;
    
// //     checkCollision(xdir, ydir);
//   }
	
// 	function setLocation(newX, newY) {
//     x = newX;
//     y = newY;
//   }
	
// 	function checkCollision(xdir, ydir) {
// 		for(let i = 0; i < antags.length; i++) {
// 			var blockLeftSide = antags[i].getProp().x, blockRightSide = antags[i].getProp().x + scl,
// 					blockTopSide = antags[i].getProp().y, blockBottomSide = antags[i].getProp().y + scl;

// 			var guyLeftSide = x, guyRightSide = x + width,
// 					guyTopSide = y, guyBottomSide = y + height;
			
// 			if (guyRightSide > blockLeftSide && // if it has collided
// 			blockTopSide < guyBottomSide && 
// 			blockBottomSide > guyTopSide && 
// 			guyLeftSide < blockRightSide && antags[i].getProp().dead === false) {
// 				die();
// 			}
// 		}
		
// 		for(let i=Math.round((y-2*scl)/scl); i < Math.round((y+2*scl)/scl); i+=1) {
// 			for(let j=Math.round((x-2*scl)/scl); j < Math.round((x+2*scl)/scl); j+=1) {
// 				if(objects[i] !== undefined && objects[i][j] !== undefined) {
//           let object = objects[i][j];
// 					if (object.id !== 0) { // id 1 means it's a block, id 0 means it's air
// 						var block = object.getProp();

// 						let blockLeftSide = block.x, blockRightSide = block.x + scl,
// 								blockTopSide = block.y, blockBottomSide = block.y + scl;

// 						let guyLeftSide = x, guyRightSide = x + width,
// 								guyTopSide = y, guyBottomSide = y + height;

// 						if (guyRightSide > blockLeftSide && // if it has collided
// 									blockTopSide < guyBottomSide && 
// 									blockBottomSide > guyTopSide && 
// 									guyLeftSide < blockRightSide) {

// 							var newX = lastX, newY = lastY;

// 							if (xdir <= -1) { // going left
// 								newX = blockRightSide;
// 								vx = 0;
// 							}
// 							if (xdir >= 1) { // going right
// 								newX = blockLeftSide - width;
// 								vx = 0;
// 							}
// 							if (ydir <= -1) { // going up
// 								newY = blockBottomSide;
// 								vy = 0;
// 							}
// 							if (ydir >= 1) { // going down
// 								newY = blockTopSide - height;
// 								vy = 0;
// 							}

// 							setLocation(newX, newY);
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
	
// 	function accelerate() {
// 		if(vx >= speed) {
// 			vx = speed;
// 		}
// 		if(vx <= -speed) {
// 			vx = -speed;
// 		}
// 		if(vy >= speed) {
// 			vy = speed;
// 		}
// 		if(vy <= -speed) {
// 			vy = -speed;
// 		}
// 		dir(vx, vy);
// 	}
	
// 	function load() {
// 		if(loaded === true) loaded = false;
// 		else if(loaded === false) loaded = true;
// 	}
	
// 	function show() {
//     fill(255);
// 		noStroke();
//     rect(x, y, width, height);
//   }
	
// 	function getProp() {
// 		return {
// 			x,
// 			y,
// 			vx,
// 			vy,
// 			score,
// 			width,
// 			height,
// 			dead,
// 			loaded,
// 			rate
// 		}
// 	}
// 	return {
// 		moreScore,
// 		showScore,
// 		shadow,
// 		accelerate,
// 		goLeft,
// 		goRight,
// 		goUp,
// 		goDown,
// 		xStop,
// 		yStop,
// 		checkCollision,
// 		load,
// 		show,
// 		getProp
// 	}
// }





// function Antag(X,Y) {
// 	var x = X;
// 	var y = Y;
// 	var width = scl;
// 	var height = scl;
	
// 	var speed = 3;
	
// 	var dead = false;
	
// 	var hyp, opp, adj;
// 	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;
	
// 	function die() {
// 		dead = true;
// 	}
	
// // 	function shadow() {
// // 		hypTL = Math.pow((Math.pow(x - 50, 2) + Math.pow(y - 50, 2)), 0.5);
// // 		adjTL = x - 50;
// // 		oppTL = y - 50;
		
// // 		hypTR = Math.pow((Math.pow(x + width - 50, 2) + Math.pow(y - 50, 2)), 0.5);
// // 		adjTR = x + width - 50;
// // 		oppTR = y - 50;
		
// // 		hypBL = Math.pow((Math.pow(x - 50, 2) + Math.pow(y + height - 50, 2)), 0.5);
// // 		adjBL = x - 50;
// // 		oppBL = y + height - 50;
		
// // 		hypBR = Math.pow((Math.pow(x + width - 50, 2) + Math.pow(y + height - 50, 2)), 0.5);
// // 		adjBR = x + width - 50;
// // 		oppBR = y + height - 50;
		
// // 		fill(0, 4, 145);
// // 		quad(x,y,20000*(adjTL/hypTL),20000*(oppTL/hypTL),20000*(adjBR/hypBR),20000*(oppBR/hypBR),x + width,y + height);
// // 		quad(x + width,y,20000*(adjTR/hypTR),20000*(oppTR/hypTR),20000*(adjBL/hypBL),20000*(oppBL/hypBL),x,y + height);
// // 	}
// 	function shadow( lightX, lightY) {
// 		hypTL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
// 		adjTL = x - lightX;
// 		oppTL = y - lightY;
		
// 		hypTR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
// 		adjTR = x + width - lightX;
// 		oppTR = y - lightY;
		
// 		hypBL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
// 		adjBL = x - lightX;
// 		oppBL = y + height - lightY;
		
// 		hypBR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
// 		adjBR = x + width - lightX;
// 		oppBR = y + height - lightY;
		
// 		fill(0, 4, 145);
// 		quad(x,y,698*(adjTL/hypTL),698*(oppTL/hypTL),698*(adjBR/hypBR),698*(oppBR/hypBR),x + width,y + height);
// 		quad(x + width,y,698*(adjTR/hypTR),698*(oppTR/hypTR),698*(adjBL/hypBL),698*(oppBL/hypBL),x,y + height);
// 	}
	
// 	function move() {
// 		prop = p.getProp();
// 		hyp = Math.pow((Math.pow((x + width/2 - (prop.x + prop.width/2)), 2) + Math.pow((y + height/2 - (prop.y + prop.height/2)), 2)), 0.5);
// 		opp = prop.y + prop.height/2 - (y + height/2);
// 		adj = prop.x + prop.width/2 - (x + width/2);
		
// 		if (hyp !== 0) {
// 			x += speed*(adj/hyp);
// 			y += speed*(opp/hyp);
// 		}
// 	}
	
// 	function checkCollision(xdir, ydir) {
// 		for(let i = 0; i < pewPews.length; i++) {
// 			let blockLeftSide = pewPews[i].getProp().x, blockRightSide = pewPews[i].getProp().x + pewPews[i].getProp().width,
// 					blockTopSide = pewPews[i].getProp().y, blockBottomSide = pewPews[i].getProp().y + pewPews[i].getProp().height;

// 			let guyLeftSide = x, guyRightSide = x + width,
// 					guyTopSide = y, guyBottomSide = y + height;

// 			if (guyRightSide > blockLeftSide && // if it has collided
// 			blockTopSide < guyBottomSide && 
// 			blockBottomSide > guyTopSide && 
// 			guyLeftSide < blockRightSide) {
// 				p.moreScore();
// 				die();
// 			}
// 		}
// 	}
	
// 	function show() {
//     fill(255);
// 		noStroke();
//     rect(x, y, width, height);
//   }
	
// 	function getProp() {
// 		return {
// 			x,
// 			y,
// 			width,
// 			height,
// 			dead
// 		}
// 	}
	
// 	return {
// 		shadow,
// 		move,
// 		checkCollision,
// 		show,
// 		getProp
// 	}
// }





// function PewPew(xOne, yOne, xTwo, yTwo) {
// 	var x = xOne;
// 	var y = yOne;
// 	var width = scl/4;
// 	var height = scl/4;
	
// 	var speed = 20;
	
// 	var hyp = Math.pow((Math.pow(xTwo - xOne, 2) + Math.pow(yTwo - yOne, 2)), 0.5);
// 	var opp = yTwo - yOne;
// 	var adj = xTwo - xOne;
	
// 	function move() {
// 		if (hyp !== 0) {
// 			x += speed*(adj/hyp);
// 			y += speed*(opp/hyp);
// 		}
// 	}
	
// 	function show() {
//     fill(255);
// 		noStroke();
//     rect(x - width/2, y - height/2, width, height);
//   }
	
// 	function getProp() {
// 		return {
// 			x,
// 			y,
// 			width,
// 			height
// 		}
// 	}
	
// 	return {
// 		move,
// 		show,
// 		getProp
// 	}
// }





// function Block(setX,setY) {
//   var x = setX;
//   var y = setY;
// 	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;
//   var id = 1;
	
// 	function shadow( lightX, lightY) {
// 		hypTL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
// 		adjTL = x - lightX;
// 		oppTL = y - lightY;
		
// 		hypTR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
// 		adjTR = x + width - lightX;
// 		oppTR = y - lightY;
		
// 		hypBL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
// 		adjBL = x - lightX;
// 		oppBL = y + height - lightY;
		
// 		hypBR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
// 		adjBR = x + width - lightX;
// 		oppBR = y + height - lightY;
		
// 		fill(0, 4, 145);
// 		quad(x,y,698*(adjTL/hypTL),698*(oppTL/hypTL),698*(adjBR/hypBR),698*(oppBR/hypBR),x + width,y + height);
// 		quad(x + width,y,698*(adjTR/hypTR),698*(oppTR/hypTR),698*(adjBL/hypBL),698*(oppBL/hypBL),x,y + height);
// 	}
  
//   function show() {
//     fill(0);
// 		stroke(0);
//     rect(x, y, scl, scl);
//   }
	
// 	function getProp() {
// 		return {
// 			x,
// 			y
// 		}
// 	}
// 	return {
// 		id,
// 		shadow,
// 		show,
// 		getProp
// 	}
// }