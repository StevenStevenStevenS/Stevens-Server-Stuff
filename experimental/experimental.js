var g;
var enemies = [];
var WIDTH = 600;
var HEIGHT = 600;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	g = new Guy();
	let count = 5;
	for(let i = 0; i < count; i++) {
		let enemy = new Enemy(random(-50, 0), random(0, HEIGHT));
		enemies.push(enemy);
	}
	for(let i = 0; i < count; i++) {
		let enemy = new Enemy(random(WIDTH, WIDTH+50), random(0, HEIGHT));
		enemies.push(enemy);
	}
	for(let i = 0; i < count; i++) {
		let enemy = new Enemy(random(0, WIDTH), random(-50, 0));
		enemies.push(enemy);
	}
	for(let i = 0; i < count; i++) {
		let enemy = new Enemy(random(0, WIDTH), random(HEIGHT, HEIGHT+50));
		enemies.push(enemy);
	}
}

function draw() {
	background('black');

	if (keyIsDown(LEFT_ARROW)) g.dir(-1,0);
	if (keyIsDown(RIGHT_ARROW)) g.dir(1,0);
	if (keyIsDown(UP_ARROW)) g.dir(0,-1);
	if (keyIsDown(DOWN_ARROW)) g.dir(0,1);
	g.show();
	
	for(var i = 0; i < enemies.length; i++) {
		enemies[i].dir();
		enemies[i].show();
		collisionDetection(g, enemies[i]);
	}
}

// function keyPressed() {
//   if(keyCode === UP_ARROW) {
//     g.dir(0, -1);
//   }else if(keyCode === DOWN_ARROW) {
//     g.dir(0, 1);
//   }
//   else if(keyCode === RIGHT_ARROW) {
//     g.dir(1, 0);
//   }
//   else if(keyCode === LEFT_ARROW) {
//     g.dir(-1, 0);
//   }
// }

function Guy() {
	return {
		speed: 2,
		size: 40,
		x: WIDTH/2,
		y: HEIGHT/2,
		dir: function(x,y) {
			this.x += x*this.speed;
			this.y += y*this.speed;
			this.inCanvas();
		},
		show: function() {
// 			fill(255);
			rect(this.x-this.size/2, this.y-this.size/2, this.size, this.size);
		},
		inCanvas: function() {
			if (this.x < -this.size) {
						this.x = WIDTH - this.size + this.size;
					}
			if (this.x > WIDTH -this.size + this.size) {
				this.x = - this.size;
			}
		}
	}
}

function Enemy(x,y) {
		return {
		speed: 1,
		size: 30,
		x: x,
		y: y,
		dir: function() {
// 			this.x += x*this.speed;
// 			this.y += y*this.speed;
			if(this.x>g.x) {
				this.x -= this.speed;
			} else if(this.x<g.x) {
				this.x+= this.speed;
			}
			if(this.y>g.y) {
				this.y -= this.speed;
			} else if(this.y<g.y) {
				this.y += this.speed;
			}
		},
		show: function() {
// 			fill(0, 34,255);
			rect(this.x-this.size/2, this.y-this.size/2, this.size, this.size);
		}
	}
}

function collisionDetection(guy, enemy) {
	if(guy.x < enemy.x + enemy.size && 
		 enemy.x < guy.x + guy.size && 
		 guy.y <= enemy.y + enemy.size && 
		 guy.y + guy.size >= enemy.y + enemy.size) {
		end();
	}
}

function end() {
	noLoop();
}

























canvas = document.createElement("canvas");
var WIDTH = 800;
var HEIGHT = 600;
var PAUSE = false;
canvas.width = WIDTH;
canvas.height = HEIGHT;

canvas.style.margin = "auto";

var ctx = canvas.getContext("2d");

document.body.appendChild(canvas);

var speed = 5;
var keyMap = {
  up: {
		KeyID: 38,
		KeyDown: false,
	},
	down: {
		KeyID: 40,
		KeyDown: false,
	},
	left: {
		KeyID: 37,
		KeyDown: false,
	},
	right: {
		KeyID: 39,
		KeyDown: false,
	}
}

function EraseCanvas() {
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	ctx.fillStyle = "#fff";
}

var dude = {
	width: 20,
	height: 20,
	x: (WIDTH-20)/2,
	y: 580,
	speed: 5,
	move: function() {
		if(keyMap.up.KeyDown){
			console.log("hi");
			this.y -= this.speed;
		}
		if(keyMap.down.KeyDown) {
			this.y += this.speed;
		}
		if(keyMap.left.KeyDown) {
			this.x -= this.speed;
		}
		if(keyMap.right.KeyDown) {
			this.x += this.speed;
		}
		
// 		if (this.x < -19) {
// 			this.x = WIDTH - this.width + 19;
// 		}
// 		if (this.x > WIDTH -this.width + 19) {
// 			this.x = - 19;
// 		}
// 		if (this.y < 0) {
// 			this.y = 0;
// 		}
	},
	draw: function() {
		ctx.fillStyle = "#3399ff";
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

function dudeMove(input) {
				checkPause(input);
				if(input.keyCode === keyMap.up.KeyID){
					keyMap.up.KeyDown = true;
				}
				if(input.keyCode === keyMap.down.KeyID){
					keyMap.down.KeyDown = true;
				}
				if(input.keyCode === keyMap.left.KeyID){
					keyMap.left.KeyDown = true;
				}
				if(input.keyCode === keyMap.right.KeyID){
					keyMap.right.KeyDown = true;
				}
			}
			
			function dudeStop(input) {
				if(input.keyCode === keyMap.up.KeyID){
					keyMap.up.KeyDown = false;
				}
				if(input.keyCode === keyMap.down.KeyID){
					keyMap.down.KeyDown = false;
				}
				if(input.keyCode === keyMap.left.KeyID){
					keyMap.left.KeyDown = false;
				}
				if(input.keyCode === keyMap.right.KeyID){
					keyMap.right.KeyDown = false;
				}
			}

var loop = function() {
	EraseCanvas();
	dude.move();
	dude.draw();
	window.requestAnimationFrame(loop, canvas);
};
window.requestAnimationFrame(loop, canvas);

