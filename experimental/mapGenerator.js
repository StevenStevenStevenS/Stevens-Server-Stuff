
var scl = 40;

var alphabet = {
  A: [
    [1,1,1],
    [1,1,1],
    [1,0,1],
    [1,0,1]
  ],
  e: [
    [1,1,1],
    [1,1,1],
    [1,0,0],
    [1,1,1]
  ],
  J: [
    [1,1,1],
    [0,1,0],
    [0,1,0],
    [1,1,0]
  ],
  K: [
    [1,0,1],
    [1,1,0],
    [1,1,0],
    [1,0,1]
  ]
}

var newLine = "NEW LINE";

var miniMap = [
  alphabet.J, alphabet.A, alphabet.K, alphabet.e, newLine,
  alphabet.J, alphabet.A, alphabet.K, alphabet.e, newLine
];

var newMap = [];

miniMap.forEach( (letter, index1) => {
  if (letter === newLine) {
    newMap.push([0]);
  }
  else {
    letter.forEach ( (row, index2) => {
      if (newMap[index2] === undefined) newMap[index2] = [];
      newMap[index2] = newMap[index2].concat(row, [0]);
    })
  }
})

console.log(newMap);

var theMap = [
  [1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0],
  [0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0],
  [0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0],
  [1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0],
  [0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0],
  [0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0],
  [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
	//
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0],
	[0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0],
	[0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0],
	[0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0],
	[0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1],
	[1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0],
	[1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1],
	[0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0],
	[1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1],
  [0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1],
  [0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1],
  [0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1],
];

theMap = newMap;
var longestRow = 0;
theMap.forEach( (row, index) => {
  if (row.length > theMap[longestRow].length) longestRow = index;
})

console.log("Longest row: ", longestRow);

var g;



function setup() {
	createCanvas(800,600);
  
  // create the player
	g = new Guy();

  
  // create the blocks  
  let currentY = 0;
  
  theMap.forEach(function(rows, i){
		let currentX = 0;
		rows.forEach(function(object, j){
			if(object === 0) theMap[i][j] = new Air(currentX, currentY);
			if(object === 1) theMap[i][j] = new Block(currentX, currentY);
			currentX += scl;
		})
		currentY += scl;
	})
  
}

function draw() {
	background(66, 91, 255);
  
  
  if (keyIsDown(LEFT_ARROW)) g.goLeft();
	if (keyIsDown(RIGHT_ARROW)) g.goRight();
	if (keyIsDown(UP_ARROW)) g.goUp();
	if (keyIsDown(DOWN_ARROW)) g.goDown();

  var prop = g.getProperties(); // get properties off player object (x,y,width,height)
  translate(width/2-prop.x-prop.width/2, height/2-prop.y-prop.height/2); // reorient screen to center the player
  
  theMap.forEach(function(row) {
    row.forEach(function(object) {
      if (object.id === 1) object.show();
    })
  })
 
  
	g.show();
	
}

function Guy() {
  var speed = 5;
  var x = -200;
  var y = -200;
  var lastX = 100;
  var lastY = 100;
  var width = scl;
  var height = scl*2;
  
  function dir(xdir, ydir) {
    lastX = x;
    lastY = y;
    
    x += xdir*speed;
    y += ydir*speed;
    
    checkCollision(xdir, ydir);
  }
  
  function goLeft()  { dir(-1,  0) }
  function goRight() { dir( 1,  0) }
  function goUp()    { dir( 0, -1) }
  function goDown()  { dir( 0,  1) }
  
  function show() {
    fill(255);
    rect(x, y, width, height);
  }
  
  function getProperties() {
    return {
      x: x,
      y: y,
      width: width,
      height: height,
      lastX: lastX,
      lastY: lastY
    }
  }
  
  function setLocation(newX, newY) {
    x = newX;
    y = newY;
  }
  
  function checkCollision(xdir, ydir) {
    theMap.forEach(function(row) {
      row.forEach(function(object) {
        if (object.id === 1) { // id 1 means it's a block, id 0 means it's air
          var block = object.getLocation();
          
          var blockLeftSide = block.x, blockRightSide = block.x + scl,
              blockTopSide = block.y, blockBottomSide = block.y + scl;

          var guyLeftSide = x, guyRightSide = x + width,
              guyTopSide = y, guyBottomSide = y + height;

          if (guyRightSide > blockLeftSide && // if it has collided
                blockTopSide < guyBottomSide && 
                blockBottomSide > guyTopSide && 
                guyLeftSide < blockRightSide) {

            var newX = lastX, newY = lastY;

            if (xdir === -1) { // going left
              newX = blockRightSide;
            }
            if (xdir === 1) { // going right
              newX = blockLeftSide - width;
            }
            if (ydir === -1) { // going up
              newY = blockBottomSide;
            }
            if (ydir === 1) { // going down
              newY = blockTopSide - height;
            }
            
            setLocation(newX, newY);
        	}
        }
      })
    })
  }
  
  return {
    goLeft: goLeft,
    goRight: goRight,
    goUp: goUp,
    goDown: goDown,
    show: show,
    getProperties: getProperties
  }
}

function Block(setX,setY) {
  var x = setX;
  var y = setY;
  var id = 1;
  
  function show() {
    fill('brown');
    rect(x, y, scl, scl);
  }
	
	function getLocation() {
		return {x: x, y: y}
	}
	return {
		id: id,
		show: show,
		getLocation: getLocation
	}
}

function Air(x,y) {
// 	return {
// 		id: 0,
// 		x: x,
// 		y: y
// 	}
}