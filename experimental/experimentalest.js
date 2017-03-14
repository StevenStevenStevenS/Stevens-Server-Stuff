var WIDTH = 800;
var HEIGHT = 575;

var scl = 45;

var prop;

var antags = [];
var pewPews = [];

var levelNum = 0;

var levels = [
	[
		[[1,5,1]],
		[[1,1,1]],
		[[1,5,1]],
// 		[[0,4,1], [1,1,1]],
		[[1,5,1]]
	],
	[],
]





function setup() {
  createCanvas(WIDTH, HEIGHT);
	
	p = new Protag();
	
	prop = p.getProp();
	
	for (let i = 0; i < 1; i++) {
		let enemy;
			let rNum = Math.random();
			if(rNum <= 0.25) enemy = Antag(random(prop.x-prop.width/2-width/2-scl*2.5, prop.x-prop.width/2-width/2-scl*1.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			else if(0.25 < rNum && rNum <= 0.5) enemy = Antag(random(prop.x-prop.width/2+width/2+scl*1.5, prop.x-prop.width/2+width/2+scl*2.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2-height/2-scl*2.5, prop.y-prop.height/2-height/2-scl*1.5));
			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2+height/2+scl*1.5, prop.y-prop.height/2+height/2+scl*2.5));
			antags.splice(i,1,enemy);
	}
	let currentY = 0;
	for(let i = 0; i < levels[levelNum].length; i++) {
		let currentX = 0;
		for(let j = 0; j < levels[levelNum][i].length; j++) {
			let currentWidth = levels[levelNum][i][j][1]*scl;
			if(levels[levelNum][i][j][0] === 1) {
				levels[levelNum][i][j] = Block(currentWidth, levels[levelNum][i][j][2]*scl, currentX, currentY);
			}
			currentX += currentWidth;
		}
		currentY += scl;
	}
	
}








function draw() {
	if(levelNum === -1) {
		
		background(0, 34, 175);
		
	} else if(levelNum === 0) {
		
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
		
// 		p.shadow(-150,-150);
		
// 		for(let i = 0; i < antags.length; i++) {
// 			antags[i].shadow(-150,-150);
// 		}
		
// 		for(let i = 0; i < levels[levelNum].length; i++) {
// 		for(let j = 0; j < levels[levelNum][i].length; j++) {
// 			if(levels[levelNum][i][j].shadow !== undefined) {
// 				levels[levelNum][i][j].shadow(-150,-150);
// 			}
// 		}
// 	}
		
		for(let i = 0; i < levels[levelNum].length; i++) {
		for(let j = 0; j < levels[levelNum][i].length; j++) {
			if(levels[levelNum][i][j].show !== undefined) {
				levels[levelNum][i][j].show();
			}
		}
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
		
// 		rect(-150,-150,10,10);
		
	}
}








function Protag() {
	var x = WIDTH/2 - scl/2;
	var y = HEIGHT/2 - scl/2;
	var lastX = 0;
	var lastY = 0;
	var width = scl;
	var height = scl;
	
	var vx = 0;
  var vy = 0;
  var ax = 0.5;
  var ay = 0.5;
	
	var speed = 3.5;
	
	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;
	
	var score = 0;
	
	var dead = false;
	
	var loaded = true;
	var rate = 0;
	
	function die() {
		dead = true;
	}
	
	function moreScore() {
		score ++;
	}
	
	function showScore() {
	fill(255);
	text(score, x+350, y-200);
	document.getElementById('datitle').innerHTML = "game | Score: " + score;
}
	
	function shadow( lightX, lightY) {
		hypTL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
		adjTL = x - lightX;
		oppTL = y - lightY;
		
		hypTR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
		adjTR = x + width - lightX;
		oppTR = y - lightY;
		
		hypBL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
		adjBL = x - lightX;
		oppBL = y + height - lightY;
		
		hypBR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
		adjBR = x + width - lightX;
		oppBR = y + height - lightY;
		
		fill(0, 4, 145);
		quad(x,y,698*(adjTL/hypTL),698*(oppTL/hypTL),698*(adjBR/hypBR),698*(oppBR/hypBR),x + width,y + height);
		quad(x + width,y,698*(adjTR/hypTR),698*(oppTR/hypTR),698*(adjBL/hypBL),698*(oppBL/hypBL),x,y + height);
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
			let blockLeftSide = antags[i].getProp().x, blockRightSide = antags[i].getProp().x + scl,
					blockTopSide = antags[i].getProp().y, blockBottomSide = antags[i].getProp().y + scl;

			let guyLeftSide = x, guyRightSide = x + width,
					guyTopSide = y, guyBottomSide = y + height;
			
			if (guyRightSide >= blockLeftSide && // if it has collided
			blockTopSide <= guyBottomSide && 
			blockBottomSide >= guyTopSide && 
			guyLeftSide <= blockRightSide && antags[i].getProp().dead === false) {
				die();
			}
		}
		
		for(let i = 0; i < levels[levelNum].length; i++) {
			for(let j = 0; j < levels[levelNum][i].length; j++) {
				if(levels[levelNum][i][j].getProp() !== undefined) {
					let blockLeftSide = levels[levelNum][i][j].getProp().x, 
							blockRightSide = levels[levelNum][i][j].getProp().x + levels[levelNum][i][j].getProp().width,
							blockTopSide = levels[levelNum][i][j].getProp().y, 
							blockBottomSide = levels[levelNum][i][j].getProp().y + levels[levelNum][i][j].getProp().height;

					let guyLeftSide = x, guyRightSide = x + width,
					guyTopSide = y, guyBottomSide = y + height;
			
					if (guyRightSide >= blockLeftSide && // if it has collided
					blockTopSide <= guyBottomSide && 
					blockBottomSide >= guyTopSide && 
					guyLeftSide <= blockRightSide) {
						x = lastX;
						y = lastY;
					}
				}
			}
		}
		lastX = x;
		lastY = y;
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
		shadow,
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
	
	var speed = 0;
	
	var dead = false;
	
	var hyp, opp, adj;
	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;
	
	function die() {
		dead = true;
	}
	
	function shadow( lightX, lightY) {
		hypTL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
		adjTL = x - lightX;
		oppTL = y - lightY;
		
		hypTR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
		adjTR = x + width - lightX;
		oppTR = y - lightY;
		
		hypBL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
		adjBL = x - lightX;
		oppBL = y + height - lightY;
		
		hypBR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
		adjBR = x + width - lightX;
		oppBR = y + height - lightY;
		
		fill(0, 4, 145);
		quad(x,y,698*(adjTL/hypTL),698*(oppTL/hypTL),698*(adjBR/hypBR),698*(oppBR/hypBR),x + width,y + height);
		quad(x + width,y,698*(adjTR/hypTR),698*(oppTR/hypTR),698*(adjBL/hypBL),698*(oppBL/hypBL),x,y + height);
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
		shadow,
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








function Block(wid, hei, X, Y) {
	var x = X;
	var y = Y;
	var width = wid;
	var height = hei;
	
	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;
	
	function shadow( lightX, lightY) {
		hypTL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
		adjTL = x - lightX;
		oppTL = y - lightY;
		
		hypTR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y - lightY, 2)), 0.5);
		adjTR = x + width - lightX;
		oppTR = y - lightY;
		
		hypBL = Math.pow((Math.pow(x - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
		adjBL = x - lightX;
		oppBL = y + height - lightY;
		
		hypBR = Math.pow((Math.pow(x + width - lightX, 2) + Math.pow(y + height - lightY, 2)), 0.5);
		adjBR = x + width - lightX;
		oppBR = y + height - lightY;
		
		fill(0, 4, 145);
		quad(x,y,698*(adjTL/hypTL),698*(oppTL/hypTL),698*(adjBR/hypBR),698*(oppBR/hypBR),x + width,y + height);
		quad(x + width,y,698*(adjTR/hypTR),698*(oppTR/hypTR),698*(adjBL/hypBL),698*(oppBL/hypBL),x,y + height);
	}
	
	function show() {
    fill(0, 4, 145);
		noStroke();
    rect(x, y, width, height);
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
		shadow,
		show,
		getProp
	}
}