function PacDot(wid, hei, X, Y) {
  var id = 2;

	var x = X + scl/2 - 5;
	var y = Y + scl/2 - 5;
  var width = 10;
  var height = 10;

  var gotten = false;

  function getGot() {
    gotten = true;
  }

  function getUngot() {
    gotten = false;
  }

  function show() {
    if(gotten === false) {
      fill(255);
  // 		fill(0, 34, 175);
  		noStroke();
      rect(x, y, width, height);
    }
	}

	function getProp() {
		return {
			id,
			x,
			y,
      width,
      height,
      gotten
		}
	}

	return {
    getGot,
    getUngot,
		show,
		getProp
	}
}
