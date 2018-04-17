function Block(wid, hei, X, Y, bool) {
	var id = 1;
	var shade = bool;

	var x = X;
	var y = Y;
	var width = wid;
	var height = hei;

	var hypTL, hypTR, hypBL, hypBR, oppTL, oppTR, oppBL, oppBR, adjTL, adjTR, adjBL, adjBR;

	function shadow( lightX, lightY) {
		if(shade === true) {
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
			quad(x,y,lightX + 700*(adjTL/hypTL),lightY + 700*(oppTL/hypTL),lightX + 700*(adjBR/hypBR),lightY + 700*(oppBR/hypBR),x + width,y + height);
			quad(x + width,y,lightX + 700*(adjTR/hypTR),lightY + 700*(oppTR/hypTR),lightX + 700*(adjBL/hypBL),lightY + 700*(oppBL/hypBL),x,y + height);
		}
	}

	function show() {
    fill(30, 64, 205);
// 		fill(0, 34, 175);
		noStroke();
    rect(x, y, width, height);
	}

	function getProp() {
		return {
			id,
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
