function Antag(X,Y) {
	var x = X;
	var y = Y;
	var width = scl;
	var height = scl;

	var vx = 0;
  var vy = 0;

	var a = 0.5 + p.getProp().score/1700;

	var dead = false;
	var green, blue = 255;

	var hyp, opp, adj;
	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;

	function die() {
			dead = true;
			p.moreScore();
	}

	function despawnCheck() {
		prop = p.getProp();
		if (x + width < prop.x+prop.width/2-width/2-scl*9 ||
			x > prop.x+prop.width/2+width/2+scl*9 ||
			y + height < prop.y+prop.height/2-height/2-scl*9 ||
			y > prop.y+prop.height/2+height/2+scl*9) {
			dead = true;
		}
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
		rect(x, y, width, height);
		quad(x,y,lightX + 700*(adjTL/hypTL),lightY + 700*(oppTL/hypTL),lightX + 700*(adjBR/hypBR),lightY + 700*(oppBR/hypBR),x + width,y + height);
		quad(x + width,y,lightX + 700*(adjTR/hypTR),lightY + 700*(oppTR/hypTR),lightX + 700*(adjBL/hypBL),lightY + 700*(oppBL/hypBL),x,y + height);
	}

	function move() {
		prop = p.getProp();
		hyp = Math.pow((Math.pow((x + width/2 - (prop.x + prop.width/2)), 2) + Math.pow((y + height/2 - (prop.y + prop.height/2)), 2)), 0.5);
		opp = prop.y + prop.height/2 - (y + height/2);
		adj = prop.x + prop.width/2 - (x + width/2);

		if (hyp !== 0) {
			x += a*(adj/hyp);
			y += a*(opp/hyp);
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
				die();
			}
		}
	}

	function show() {
    fill(255, 255, 255, 200);
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
		despawnCheck,
		shadow,
		move,
		checkCollision,
		show,
		getProp
	}
}
