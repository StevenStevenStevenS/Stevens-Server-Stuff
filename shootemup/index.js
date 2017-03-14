var WIDTH = 800;
var HEIGHT = 575;

var scl = 45;

var prop;

var antags = [];
var pewPews = [];

var levelNum = 0;

var levels = [
	[
		[[1,5,1]],
		[[1,1,1]],
		[[1,1,1]],
		[[1,5,1]],
// 		[[0,4,1], [1,1,1]],
		[[1,5,1]]
	],
	[],
]





function setup() {
  createCanvas(WIDTH, HEIGHT);
	
	p = new Protag();
	
	prop = p.getProp();
	
	for (let i = 0; i < 5; i++) {
			let enemy;
			let rNum = Math.random();
			if(rNum <= 0.25) enemy = Antag(random(prop.x-prop.width/2-width/2-scl*2.5, prop.x-prop.width/2-width/2-scl*1.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			else if(0.25 < rNum && rNum <= 0.5) enemy = Antag(random(prop.x-prop.width/2+width/2+scl*1.5, prop.x-prop.width/2+width/2+scl*2.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2-height/2-scl*2.5, prop.y-prop.height/2-height/2-scl*1.5));
			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2+height/2+scl*1.5, prop.y-prop.height/2+height/2+scl*2.5));
			antags.splice(i,1,enemy);
	}
	let currentY = 0;
	for(let i = 0; i < levels[levelNum].length; i++) {
		let currentX = 0;
		for(let j = 0; j < levels[levelNum][i].length; j++) {
			let currentWidth = levels[levelNum][i][j][1]*scl;
			if(levels[levelNum][i][j][0] === 1) {
				levels[levelNum][i][j] = Block(currentWidth, levels[levelNum][i][j][2]*scl, currentX, currentY);
			}
			currentX += currentWidth;
		}
		currentY += scl;
	}
	
}








function draw() {
	if(levelNum === -1) {
		
		background(0, 34, 175);
		
	} else if(levelNum === 0) {
		
		background(0, 34, 175);
		
		p.accelerate();
			
  
  if (keyIsDown(65)  && prop.dead === false) p.goLeft();
	if (keyIsDown(68) && prop.dead === false) p.goRight();
	if (keyIsDown(87)    && prop.dead === false) p.goUp();
	if (keyIsDown(83)  && prop.dead === false) p.goDown();
	if (keyIsDown(65) !== true && keyIsDown(68) !== true || prop.dead) p.xStop();
	if (keyIsDown(87) !== true && keyIsDown(83) !== true || prop.dead) p.yStop();
	
	translate(width/2-prop.x-prop.width/2, height/2-prop.y-prop.height/2);
	
	if(mouseIsPressed && prop.dead === false && prop.loaded) {
		p.load();
		pewPews[pewPews.length] = PewPew(prop.x + prop.width/2, prop.y + prop.height/2, mouseX-width/2+prop.x+prop.width/2, mouseY-height/2+prop.y+prop.height/2);
		setTimeout(p.load, prop.rate);
	}
		
		p.shadow(-150,-150);
		
		for(let i = 0; i < antags.length; i++) {
			antags[i].shadow(-150,-150);
		}
		
		for(let i = 0; i < levels[levelNum].length; i++) {
		for(let j = 0; j < levels[levelNum][i].length; j++) {
			if(levels[levelNum][i][j].shadow !== undefined) {
				levels[levelNum][i][j].shadow(-150,-150);
			}
		}
	}
		
		for(let i = 0; i < levels[levelNum].length; i++) {
		for(let j = 0; j < levels[levelNum][i].length; j++) {
			if(levels[levelNum][i][j].show !== undefined) {
				levels[levelNum][i][j].show();
			}
		}
	}
	
	for(let i = 0; i < pewPews.length; i++) {
		var pewProp = pewPews[i].getProp()
		pewPews[i]. move();
		pewPews[i].show();
		if (pewProp.x + pewProp.width < prop.x-prop.width/2-width/2 || pewProp.x - pewProp.width > prop.x-prop.width/2+width/2 || pewProp.y + pewProp.height < prop.y-prop.height/2-height/2 || pewProp.y - pewProp.height > prop.y-prop.height/2+height/2) {
			pewPews.splice(i, 1);
		}
	}
		
	for(let i = 0; i < antags.length; i++) {
		if(antags[i].getProp().dead === false) {
			antags[i].move();
			antags[i].show();
			antags[i].checkCollision();
		} else if (antags[i].getProp().dead) {
			let enemy;
			let rNum = Math.random();
			if(rNum <= 0.25) enemy = Antag(random(prop.x-prop.width/2-width/2-scl*2.5, prop.x-prop.width/2-width/2-scl*1.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			else if(0.25 < rNum && rNum <= 0.5) {
				enemy = Antag(random(prop.x-prop.width/2+width/2+scl*1.5, prop.x-prop.width/2+width/2+scl*2.5), random(prop.y-prop.height/2-height/2, prop.y-prop.height/2+height/2));
			} 
			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2-height/2-scl*2.5, prop.y-prop.height/2-height/2-scl*1.5));
			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x-prop.width/2-width/2, prop.x-prop.width/2+width/2), random(prop.y-prop.height/2+height/2+scl*1.5, prop.y-prop.height/2+height/2+scl*2.5));
			antags.splice(i,1,enemy);
			
		}
	}
	
	p.show();
	p.checkCollision();
	
	p.showScore();
		
// 		rect(-150,-150,10,10);
		
	}
}