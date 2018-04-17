function AmmoDot(wid, hei, X, Y) {
  var id = 3;

	var x = X + scl/2 - 7.5;
	var y = Y + scl/2 - 7.5;
  var width = 15;
  var height = 15;

  var gotten = false;

  function getGot() {
    gotten = true;
  }

  function getUngot() {
    gotten = false;
  }

  function show() {
    if(gotten === false) {
      fill(0, 255, 99);
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
