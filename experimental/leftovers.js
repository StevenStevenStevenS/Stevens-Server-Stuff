function Guy() {
	return {
		speed: 4,
		x: 200,
		y: 200,
		lastX: 100,
		lastY: 100,
		width: scl,
		height: scl * 2,
		dir: function(x,y) {
			
			this.x += x*this.speed;
			this.y += y*this.speed;
		},
		show: function() {
 			fill(255);
			rect(this.x, this.y, this.width, this.height);
		},
	}
}

var obj = { 
  collide: function(guy) {
      var block = this;
      var guyProperties = guy.getProperties();
      
      var blockLeftSide = block.x, blockRightSide = block.x + scl,
          blockTopSide = block.y, blockBottomSide = block.y + scl;
      
      var guyLeftSide = guyProperties.x, guyRightSide = guyProperties.x + guyProperties.width,
          guyTopSide = guyProperties.y, guyBottomSide = guyProperties.y + guyProperties.height;
      
      if (guyRightSide > blockLeftSide && // if it has collided
            blockTopSide < guyBottomSide && // this one
            blockBottomSide > guyTopSide && // or this one
            guyLeftSide < blockRightSide) {
        console.log('test');
        guy.setLocation(guyProperties.lastX, guyProperties.lastY);
        
				if(guyBottomSide <= blockTopSide) { // if guy was above block
// 					guy.y = this.y - guy.height;
          guy.setLocation(null, this.y - guyProperties.height);
				}
				if(guyProperties.lastY >= this.y + scl) { // if guy was below block
// 					guy.y = this.y + scl;
          guy.setLocation(null, this.y + scl);
				}
				if(guyProperties.lastX + guyProperties.width <= this.x) { // if guy was to the left of block
// 					guy.x = this.x - guy.width;
          guy.setLocation(this.x - guyProperties.width, null);
				}
				if(guyProperties.lastX >= this.x + scl) { // if guy was to the right of block
					console.log("yep")
// 					guy.x = this.x + scl;
          guy.setLocation(this.x + scl, null);
				}
			}
      
      
			if (guy.x+guy.width > this.x && // if it has collided
            this.y < guy.y+guy.height && // this one
            this.y+scl > guy.y && // or this one
            guy.x < this.x+scl) {
				if(guy.lastY + guy.height <= this.y) { // if guy was above block
					guy.y = this.y - guy.height;
				}
				if(guy.lastY >= this.y + scl) { // if guy was below block
					guy.y = this.y + scl;
				}
				if(guy.lastX + guy.width <= this.x) { // if guy was to the left of block
					guy.x = this.x - guy.width;
				}
				if(guy.lastX >= this.x + scl) { // if guy was to the right of block
					console.log("yep")
					guy.x = this.x + scl;
				}
			}
  
  }
}