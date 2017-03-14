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
	var rate = 500;
	
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