var WIDTH = 700, HEIGHT = 600, pi = Math.PI;
var canvas, ctx, keystate;
var player, ai, ball, score;
var UpArrow = 38, DownArrow = 40, LeftArrow = 37, RightArrow = 39;

var spriteDown = new Image ();
spriteDown.src = 'resources/joshsface.png';
var spriteUp = new Image();
spriteUp.src = 'resources/spriteup.png';
var spriteLeft = new Image();
spriteLeft.src = 'resources/left.png';
var spriteRight = new Image();
spriteRight.src = 'resources/spriteright.png';
var burgerSprite = new Image();
burgerSprite.src = 'resources/burger.png';
var mossSprite = new Image();
mossSprite.src = 'resources/moss.png';

player = {
	x: null,
	y: null,
	width: 95,
	height: 164,
	speed: 15,
	sprite: spriteDown,
	update: function() {
		if (keystate[UpArrow]) {
			this.y -= this.speed;
			this.sprite = spriteUp;
			this.width = 95;
			this.height = 164;
		}
		if (keystate[DownArrow]) {
			this.y += this.speed;
			this.sprite = spriteDown;
			this.width = 95;
			this.height = 164;
		}
		if (keystate[LeftArrow]) {
			this.x -= this.speed;
			this.sprite = spriteLeft;
			this.width = 122;
			this.height = 163;
		}
		if (keystate[RightArrow]) {
			this.x += this.speed;
			this.sprite = spriteRight;
			this.width = 130;
			this.height = 224;
		}
		// keep the paddle inside of the canvas
		this.y = Math.max(Math.min(this.y, HEIGHT - this.height), 0);
		this.x = Math.max(Math.min(this.x, WIDTH/2 - this.width), 0);
	},
	draw: function() {
		ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
	}
}
ai = {
	x: null,
	y: null,
	width:  150,
	height: 150,
	sprite: mossSprite,
	/**
	 * Update the position depending on the ball position
	 */
	update: function() {
		// calculate ideal position
		var desty = ball.y - (this.height - ball.side)*0.3;
		// ease the movement towards the ideal position
		this.y += (desty - this.y) * 0.05;
		// keep the paddle inside of the canvas
		this.y = Math.max(Math.min(this.y, HEIGHT - this.height), 0);
	},
	/**
	 * Draw the ai paddle to the canvas
	 */
	draw: function() {
// 		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
	}
},
/**	
 * The ball object
 * 
 * @type {Object}
 */
ball = {
	x:   null,
	y:   null,
	width: 75,
	height: 70,
	vel: null,
	side:  60,
	speed: 12,
	/**
	 * Serves the ball towards the specified side
	 * 
	 * @param  {number} side 1 right
	 *                       -1 left
	 */
	serve: function(side) {
		// set the x and y position
		var r = Math.random();
		this.x = side===1 ? player.x+player.width : ai.x - this.side;
		this.y = (HEIGHT - this.side)*r;
		// calculate out-angle, higher/lower on the y-axis =>
		// steeper angle
		var phi = 0.1*pi*(1 - 2*r);
		// set velocity direction and magnitude
		this.vel = {
			x: side*this.speed*Math.cos(phi),
			y: this.speed*Math.sin(phi)
		}
	},
	/**
	 * Update the ball position and keep it within the canvas
	 */
	update: function() {
		// update position with current velocity
		this.x += this.vel.x;
		this.y += this.vel.y;
		// check if out of the canvas in the y direction
		if (0 > this.y || this.y+this.side > HEIGHT) {
			// calculate and add the right offset, i.e. how far
			// inside of the canvas the ball is
			var offset = this.vel.y < 0 ? 0 - this.y : HEIGHT - (this.y+this.side);
			this.y += 2*offset;
			// mirror the y velocity
			this.vel.y *= -1;
		}
		// helper function to check intesectiont between two
		// axis aligned bounding boxex (AABB)
		var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh) {
			return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
		};
		// check againts target paddle to check collision in x
		// direction
		var pdle = this.vel.x < 0 ? player : ai;
		if (AABBIntersect(pdle.x, pdle.y, pdle.width, pdle.height,
				this.x, this.y, this.width, this.height)
		) {	
			// set the x position and calculate reflection angle
			this.x = pdle===player ? player.x+player.width : ai.x - this.side;
			var n = (this.y+this.side - pdle.y)/(pdle.height+this.side);
			var phi = 0.25*pi*(2*n - 1); // pi/4 = 45
			// calculate smash value and update velocity
			var smash = Math.abs(phi) > 0.2*pi ? 1.5 : 1;
			this.vel.x = smash*(pdle===player ? 1 : -1)*this.speed*Math.cos(phi);
			this.vel.y = smash*this.speed*Math.sin(phi);
		}
		// reset the ball when ball outside of the canvas in the
		// x direction
		// if (0 > this.x+this.width || this.x > WIDTH) {
			// this.serve(pdle===player ? 1 : -1);
		//}
		if (0 > this.x+this.width) {
			score.moss++;
			this.serve(pdle===player ? 1 : -1);
		}
		if (this.x > WIDTH) {
			score.player++;
			this.serve(pdle===player ? 1 : -1);
		}
	},
	/**
	 * Draw the ball to the canvas
	 */
	draw: function() {
		ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
	},
	sprite: burgerSprite
};
score = {
	player: 0,
	moss: 0,
	update: function () {
		document.getElementById('playerScore').innerHTML = this.player;
		document.getElementById('mossScore').innerHTML = this.moss;
	}
}

/**
 * Starts the ????
 
 */
function main() {
	// create, initiate and append game canvas
	canvas = document.createElement("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	ctx = canvas.getContext("2d");
	
	document.body.appendChild(canvas);
	
	keystate = {};
	// keep track of keyboard presses
	document.addEventListener("keydown", function(evt) {
		keystate[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keystate[evt.keyCode];
	});
	init(); // initiate game objects
	// game loop function
	var loop = function() {
		update();
		draw();
		window.requestAnimationFrame(loop, canvas);
	};
	window.requestAnimationFrame(loop, canvas);
}
/**
 * Initatite game objects and set start positions
 */
function init() {
	player.x = player.width;
	player.y = (HEIGHT - player.height)/2;
	ai.x = WIDTH - (ai.width);
	ai.y = (HEIGHT - ai.height)/2;
	ball.serve(1);
}
/**
 * Update all game objects
 */
function update() {
	ball.update();
	player.update();
	ai.update();
	score.update();
}
/**
 * Clear canvas and draw all game objects and net
 */
function draw() {
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.save();
	ctx.fillStyle = "#fff";
	ball.draw();
	player.draw();
	ai.draw();
	// draw the net
	var w = 4;
	var x = (WIDTH - w)*0.5;
	var y = 0;
	var step = HEIGHT/20; // how many net segments
	while (y < HEIGHT) {
		ctx.fillRect(x, y+step*0.25, w, step*0.5);
		y += step;
	}
	ctx.restore();
}
// start and run the game
main();

/*var WIDTH = 700, HEIGHT = 600, pi = Math.PI;
var canvas, ctx, keystate;
var player, ai, ball;
var UpArrow = 38, DownArrow = 40, LeftArrow = 37, RightArrow = 39;

var upImage = new Image();
upImage.src = 'bridgeKeeper.png';
var downImage = new Image();
downImage.src = 'holyGrail.jpg';


player = {
	x: null,
	y: null,
	width: 125,
	height: 75,
	currentImage: upImage,
	jump: function() {
		for (var i=0; i < 1000; i++) {
			if (i < 500) {
				this.y++;
			}
			if (i >= 500) {
				this.y--;
			}
		}
	},
	update: function() {
		if (keystate[UpArrow]) {
			this.y -= 7;
			this.currentImage = upImage;
			this.width = 125;
			this.height = 75;
		} 
		if (keystate[DownArrow]) {
			this.y += 7;
			this.currentImage = downImage;
			this.width = 165;
			this.height = 75;
		}
		if (keystate[LeftArrow]) this.x -= 7;
		if (keystate[RightArrow]) this.x += 7;
		// keep the paddle inside of the canvas
		this.y = Math.max(Math.min(this.y, HEIGHT - this.height), 0);
		this.x = Math.max(Math.min(this.x, WIDTH - this.width), 0);

	},
	draw: function() {
// 		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.drawImage(this.currentImage, this.x, this.y, this.width, this.height);
	}
}

ai = {
	x: null,
	y: null,
	width: 20,
	height: 100,
	update: function() {},
	draw: function() {
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
ball = {
	x: null,
	y: null,
	side: 20,
	update: function() {},
	draw: function() {
		ctx.fillRect(this.x, this.y, this.side, this.side);
	}
}

function main() {
	canvas = document.createElement('canvas');
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	ctx = canvas.getContext('2d');
	document.body.appendChild(canvas);
	
	keystate = {};
	// keep track of keyboard presses
	document.addEventListener("keydown", function(evt) {
		keystate[evt.keyCode] = true;
	});
	document.addEventListener("keyup", function(evt) {
		delete keystate[evt.keyCode];
	});
	
	init();
	
	var loop = function() {
		update();
		draw();
		
		window.requestAnimationFrame(loop, canvas);
	}
	
	window.requestAnimationFrame(loop, canvas);
}

function init() {
	player.x = 0;
	player.y = HEIGHT;
	ai.x = WIDTH - (ai.width + player.width);
	ai.y = (HEIGHT - ai.height)/2;
	ball.x = (WIDTH - ball.side)/2;
	ball.y = (HEIGHT - ball.side)/2;
}

function update() {
	ball.update();
	player.update();
	ai.update();
}

function draw() {
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	
	ctx.save();
	ctx.fillStyle = "#fff";
	
//	ball.draw();
	player.draw();
//	ai.draw();
	
// 	var w = 4;
// 	var x = (WIDTH - w)/2;
// 	var y = 0;
// 	var step = HEIGHT/15;
// 	while (y < HEIGHT) {
// 		ctx.fillRect(x, y+step/4, w, step/2);
// 		y+=step;
// 	}
	
	ctx.restore();
}

main();*/