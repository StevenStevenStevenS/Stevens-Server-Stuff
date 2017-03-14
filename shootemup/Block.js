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
    fill(30, 64, 205);
// 		fill(0, 34, 175);
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