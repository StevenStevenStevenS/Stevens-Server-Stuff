function Protag() {
	var x = 11*scl;
	var y = 11*scl;
	var lastX = 0;
	var lastY = 0;
	var width = scl;
	var height = scl;

	var vx = 0;
  var vy = 0;
  var ax = 0.5;
  var ay = 0.5;

	var speed = 4.5;

	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;

	var score = 0;

	var dead = false;

	var loaded = true;
	var rate = 500;
	var ammo = 0;

	function fire() {
		ammo--
	}

	function die() {
		dead = true;
	}

	function moreScore() {
		score += 5;
	}

	function showScore() {
	fill(255);
	text("score: " + score, x+350, y-200);
	text("ammo: " + ammo, x+350, y+scl+200)
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
		lastX = x;
    lastY = y;

		x += xdir;
		y += ydir;

		checkCollision(xdir, ydir);
  }

	function checkCollision(xdir, ydir) {
		for(let i = 0; i < levels[levelNum].length; i++) {
			for(let j = 0; j<levels[levelNum][i].length; j++) {
				let object = levels[levelNum][i][j];
				if (object.getProp().id !== 0) { // id 1 means it's a block, id 0 means it's air
				var block = object.getProp();

				var blockLeftSide = block.x, blockRightSide = block.x + block.width,
				blockTopSide = block.y, blockBottomSide = block.y + block.height;

				var guyLeftSide = x, guyRightSide = x + width,
				guyTopSide = y, guyBottomSide = y + height;

				if (guyRightSide > blockLeftSide && // if it has collided
					blockTopSide < guyBottomSide &&
					blockBottomSide > guyTopSide &&
					guyLeftSide < blockRightSide) {
						if(block.id === 2 && block.gotten === false) {
							object.getGot();
							score += 50;
						} else if(block.id === 3 && block.gotten === false) {
							object.getGot();
							score += 50;
							ammo += 5;
						} else if (block.id === 1) {
							// var newX = lastX, newY = lastY;

							if(lastX + width <= blockLeftSide) {
								x = blockLeftSide - width;
								vx = 0;
							}
							if(lastX >= blockRightSide) {
								x = blockRightSide;
								vx = 0;
							}
							if(lastY + height <= blockTopSide) {
								y = blockTopSide - height;
								vy = 0;
							}
							if(lastY >= blockBottomSide) {
								y = blockBottomSide;
								vy = 0;
							}
						}



						// if (xdir <= -1) { // going left
						// 	newX = blockRightSide;
						// 	vx = 0;
						// }
						// if (xdir >= 1) { // going right
						// 	newX = blockLeftSide - width;
						// 	vx = 0;
						// }
						// if (ydir <= -1) { // going up
						// 	newY = blockBottomSide;
						// 	vy = 0;
						// }
						// if (ydir >= 1) { // going down
						// 	newY = blockTopSide - height;
						// 	vy = 0;
						// }

						// x = newX;
						// y = newY;
					}
				}
			}
		}

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

					if (guyRightSide > blockLeftSide && // if it has collided
					blockTopSide < guyBottomSide &&
					blockBottomSide > guyTopSide &&
					guyLeftSide < blockRightSide) {

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
			rate,
			ammo
		}
	}
	return {
		fire,
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
