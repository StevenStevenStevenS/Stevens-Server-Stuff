var WIDTH = 800;
var HEIGHT = 575;

var scl = 45;

var prop;

var reset;

var antags = [];
var pewPews = [];

var levelNum = 0;

var levels = [
	[
		[[1,47,9,false]],
		[[0,1,1]],
		[[0,1,1]],
		[[0,1,1]],
		[[0,1,1]],
		[[0,1,1]],
		[[0,1,1]],
		[[0,1,1]],
		[[0,1,1]],
		[[1,9,27,false], [0,5,1], [1,1,16,true], [0,23,1], [1,9,27,false]],
		[[0,1,1]],
		[[0,11,1], [3,1,1], [0,5,1], [3,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [3,1,1]],
		[[0,1,1]],
		[[0,11,1], [2,1,1], [0,11,1], [2,1,1]],
		[[0,15,1], [1,6,1,true], [0,5,1], [1,12,1,true]],
		[[0,11,1], [2,1,1], [0,11,1], [2,1,1], [0,8,1], [1,1,10,true]],
		[[0,1,1]],
		[[0,11,1], [2,1,1], [0,5,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,5,1], [3,1,1]],
		[[0,1,1]],
		[[0,11,1], [2,1,1], [0,5,1], [2,1,1], [0,11,1], [2,1,1], [0,5,1], [2,1,1]],
		[[0,20,1], [1,1,16,true], [1,5,1,true], [1,1,11,true]],
		[[0,11,1], [2,1,1], [0,5,1], [2,1,1], [0,11,1], [2,1,1], [0,5,1], [2,1,1]],
		[[0,1,1]],
		[[0,11,1], [2,1,1], [0,5,1], [2,1,1], [0,5,1], [3,1,1], [0,5,1], [2,1,1], [0,5,1], [2,1,1]],
		[[0,1,1]],
		[[0,11,1], [2,1,1], [0,5,1], [2,1,1], [0,5,1], [2,1,1], [0,5,1], [2,1,1], [0,5,1], [2,1,1]],
		[[0,1,1]],
		[[0,11,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,5,1], [2,1,1], [0,5,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1]],
		[[0,1,1]],
		[[0,11,1], [2,1,1], [0,11,1], [2,1,1], [0,5,1], [2,1,1]],
		[[0,14,1], [1,6,1,true], [0,12,1], [1,6,1,true]],
		[[0,11,1], [2,1,1], [0,11,1], [2,1,1], [0,5,1], [2,1,1]],
		[[0,1,1]],
		[[0,11,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [3,1,1], [0,5,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [2,1,1], [0,1,1], [3,1,1]],
		[[0,1,1]],
		[[0,1,1]],
		[[1,47,9,false]]



		// var levels = [
		// 	[
		// 		[[1,47,9,false]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[1,9,27,false], [0,5,1], [2,1,1], [3,1,1], [1,1,16,true], [0,23,1], [1,9,27,false]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,15,1], [1,6,1,true], [0,5,1], [1,12,1,true]],
		// 		[[0,32,1], [1,1,10,true]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,20,1], [1,1,16,true], [1,5,1,true], [1,1,11,true]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,14,1], [1,6,1,true], [0,12,1], [1,6,1,true]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[0,1,1]],
		// 		[[1,47,9,false]]

		// [[1,37,9,false]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[1,9,17,false], [0,3,1], [1,1,10,true], [0,15,1], [1,9,17,false]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,13,1], [1,4,1,true], [0,3,1], [1,8,1,true]],
		// [[0,24,1], [1,1,6,true]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,16,1], [1,1,10,true], [1,3,1,true], [1,1,7,true]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,12,1], [1,4,1,true], [0,8,1], [1,4,1,true]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[0,1,1]],
		// [[1,37,9,false]]
	]
]





function setup() {
  createCanvas(WIDTH, HEIGHT);

	p = new Protag();

	prop = p.getProp();

	for (let i = 0; i < 3; i++) {
			let enemy;
			let rNum = Math.random();
			if(rNum <= 0.25) enemy = Antag(random(prop.x+prop.width/2-width/2-scl*2, prop.x+prop.width/2-width/2-scl*1.5), random(prop.y+prop.height/2-height/2, prop.y+prop.height/2+height/2));
			else if(0.25 < rNum && rNum <= 0.5) enemy = Antag(random(prop.x+prop.width/2+width/2+scl*1.5, prop.x+prop.width/2+width/2+scl*2), random(prop.y+prop.height/2-height/2, prop.y+prop.height/2+height/2));
			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x+prop.width/2-width/2, prop.x+prop.width/2+width/2), random(prop.y+prop.height/2-height/2-scl*2, prop.y+prop.height/2-height/2-scl*1.5));
			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x+prop.width/2-width/2, prop.x+prop.width/2+width/2), random(prop.y+prop.height/2+height/2+scl*1.5, prop.y+prop.height/2+height/2+scl*2));
			antags.splice(i,1,enemy);
	}
	let currentY = 0;
	for(let i = 0; i < levels[levelNum].length; i++) {
		let currentX = 0;
		for(let j = 0; j < levels[levelNum][i].length; j++) {
			let currentWidth = levels[levelNum][i][j][1]*scl;
			if(levels[levelNum][i][j][0] === 1) {
				levels[levelNum][i][j] = Block(currentWidth, levels[levelNum][i][j][2]*scl, currentX, currentY, levels[levelNum][i][j][3]);
			} else if(levels[levelNum][i][j][0] === 2) {
				levels[levelNum][i][j] = PacDot(currentWidth, levels[levelNum][i][j][2]*scl, currentX, currentY);
			} else if(levels[levelNum][i][j][0] === 3) {
				levels[levelNum][i][j] = AmmoDot(currentWidth, levels[levelNum][i][j][2]*scl, currentX, currentY);
			} else {
				levels[levelNum][i][j] = Air();
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

	if(mouseIsPressed && prop.dead === false && prop.loaded && prop.ammo > 0) {
		p.load();
		pewPews[pewPews.length] = PewPew(prop.x + prop.width/2, prop.y + prop.height/2, mouseX-width/2+prop.x+prop.width/2, mouseY-height/2+prop.y+prop.height/2);
		setTimeout(p.load, prop.rate);
		p.fire();
	}

		// p.shadow(-150,-150);

		for(let i = 0; i < antags.length; i++) {
			antags[i].shadow(p.getProp().x + scl/2,p.getProp().y + scl/2);
		}

		for(let i = 0; i < levels[levelNum].length; i++) {
		for(let j = 0; j < levels[levelNum][i].length; j++) {
			if(levels[levelNum][i][j].getProp().id === 1) {
				levels[levelNum][i][j].shadow(p.getProp().x + scl/2,p.getProp().y + scl/2);
			}
		}
	}

	reset = true;

		for(let i = 0; i < levels[levelNum].length; i++) {
		for(let j = 0; j < levels[levelNum][i].length; j++) {
			if(levels[levelNum][i][j].getProp().id === 1 || levels[levelNum][i][j].getProp().id === 2 || levels[levelNum][i][j].getProp().id === 3) {
				levels[levelNum][i][j].show();
			}
			if(levels[levelNum][i][j].getProp().id === 2 || levels[levelNum][i][j].getProp().id === 3) {
				if(levels[levelNum][i][j].getProp().gotten === false) {
					reset = false;
				}
			}
		}
	}
	if(reset === true) {
		for(let i = 0; i < levels[levelNum].length; i++) {
			for(let j = 0; j < levels[levelNum][i].length; j++) {
				if(levels[levelNum][i][j].getProp().id === 2 || levels[levelNum][i][j].getProp().id === 3) {
					levels[levelNum][i][j].getUngot();
				}
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
			antags[i].move()
			if(antags[i].getProp().x + antags[i].getProp().width > prop.x+prop.width/2-width/2 &&
			 	antags[i].getProp().x < prop.x+prop.width/2+width/2 &&
			 	antags[i].getProp().y + antags[i].getProp().height > prop.y+prop.height/2-height/2 &&
			 	antags[i].getProp().y < prop.y+prop.height/2+height/2) {
				antags[i].show();
		 		antags[i].checkCollision();
			} else {
				antags[i].despawnCheck();
			}
			// antags[i].show();
			// antags[i].checkCollision();
			// if(antags[i].getProp().x + antags[i].getProp().width < prop.x+prop.width/2-width/2 ||
			//  antags[i].getProp().x > prop.x+prop.width/2+width/2 ||
			//   antags[i].getProp().y + antags[i].getProp().height < prop.y+prop.height/2-height/2 ||
			// 	 antags[i].getProp().y > prop.y+prop.height/2+height/2 ) {
			// 	setTimeout()
			// }
			// setTimeout(antags[i].check(), 1000);
		} else if (antags[i].getProp().dead) {
			let enemy;
			let rNum = Math.random();
			if(rNum <= 0.25) enemy = Antag(random(prop.x+prop.width/2-width/2-scl*2, prop.x+prop.width/2-width/2-scl*1.5), random(prop.y+prop.height/2-height/2, prop.y+prop.height/2+height/2));
			else if(0.25 < rNum && rNum <= 0.5) enemy = Antag(random(prop.x+prop.width/2+width/2+scl*1.5, prop.x+prop.width/2+width/2+scl*2), random(prop.y+prop.height/2-height/2, prop.y+prop.height/2+height/2));
			else if(0.5 < rNum && rNum <= 0.75) enemy = Antag(random(prop.x+prop.width/2-width/2, prop.x+prop.width/2+width/2), random(prop.y+prop.height/2-height/2-scl*2, prop.y+prop.height/2-height/2-scl*1.5));
			else if(0.75 < rNum && rNum <= 1) enemy = Antag(random(prop.x+prop.width/2-width/2, prop.x+prop.width/2+width/2), random(prop.y+prop.height/2+height/2+scl*1.5, prop.y+prop.height/2+height/2+scl*2));
			antags.splice(i,1,enemy);
		}
	}

	p.show();

	p.showScore();

// 		rect(-150,-150,10,10);

	}
}
