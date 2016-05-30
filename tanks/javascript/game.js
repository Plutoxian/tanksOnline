var draw;
var tankArray;
var currentTurn;

var moveLeft;
var moveRight;

function mainLoop() {
    draw.fillStyle = "#FFFFFF";
    draw.fillRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);
    
    if (moveRight) {
        tankArray[currentTurn].x += 1;
        if (tankArray[currentTurn].x > (document.getElementById("myCanvas").width - 10)) {
            tankArray[currentTurn].x = (document.getElementById("myCanvas").width - 10);
        }
    }
    if (moveLeft) {
        tankArray[currentTurn].x -= 1;
    }

    draw.fillStyle = "#FF0000";
    draw.fillRect(tankArray[0].x, tankArray[0].y, 10, 5);
    
    draw.fillStyle = "#007FFF";
    draw.fillRect(tankArray[1].x, tankArray[1].y, 10, 5);
    
    draw.fillStyle = "#00FF00";
    draw.fillRect(tankArray[2].x, tankArray[2].y, 10, 5);
    
    draw.fillStyle = "#7F00FF";
    draw.fillRect(tankArray[3].x, tankArray[3].y, 10, 5);
    
    draw.fillStyle = "#FFFF00";
    draw.fillRect(tankArray[4].x, tankArray[4].y, 10, 5);
    
    draw.fillStyle = "#FF7F00";
    draw.fillRect(tankArray[5].x, tankArray[5].y, 10, 5);

    setTimeout(mainLoop, 30);
}

function init() {
    //do initiation stuff here
    tankArray = [{exists: 1, x: 0, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 50, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 100, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 150, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 200, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 250, y: 50, power: 100, angle: 90}];
    
    currentTurn = 0;
    
    mainLoop();
}

function onLoad() {
    draw = document.getElementById("myCanvas").getContext("2d");
    init();
}

function onMoveLeftDown() {
    moveLeft = true;
    moveRight = false;
}

function onMoveLeftUp() {
    moveLeft = false;
}

function onMoveRightDown() {
    moveRight = true;
    moveLeft = false;
}

function onMoveRightUp() {
    moveRight = false;
}

function onFire() {
    moveLeft = false;
    moveRight = false;
    currentTurn += 1;
    if (currentTurn === 6) {
        currentTurn = 0;
    }
}
