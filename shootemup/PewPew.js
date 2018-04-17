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
