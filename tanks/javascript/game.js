var draw;
var tankArray;
var currentTurn;

var ground;

var moveLeft;
var moveRight;

function drawGround() {
    draw.beginPath();
    var i;
    draw.fillStyle = "#228B22";
    draw.moveTo(0, 150 - ground[0]);
    for (i = 1; i < 51; i += 1) {
        draw.lineTo(i * 6, 150 - ground[i]);
    }
    draw.lineTo(300, 150);
    draw.lineTo(0, 150);
    draw.fill();
}

function drawTank(tankNum) {
    draw.beginPath();
    draw.moveTo(tankArray[tankNum].x, tankArray[tankNum].y + 5);
    draw.moveTo(tankArray[tankNum].x + 10,  tankArray[tankNum].y + 5);
    draw.arcTo(tankArray[tankNum].x +  10, tankArray[tankNum].y, tankArray[tankNum].x + 5, tankArray[tankNum].y, 5);
    draw.arcTo(tankArray[tankNum].x, tankArray[tankNum].y, tankArray[tankNum].x, tankArray[tankNum].y + 5, 5);
    draw.fill();
}

function colDet(tankNum) {
    tankArray[tankNum].y = (150 - ground[(((tankArray[tankNum].x) + 5) - (((tankArray[tankNum].x) + 5) % 6)) / 6]) - ((ground[1 + ((((tankArray[tankNum].x) + 5) - (((tankArray[tankNum].x) + 5) % 6)) / 6)] - ground[(((tankArray[tankNum].x) + 5) - (((tankArray[tankNum].x) + 5) % 6)) / 6]) * (((tankArray[tankNum].x) + 5) % 6) / 5) - 5;
    tankArray[tankNum].angle = Math.atan((ground[1 + ((((tankArray[tankNum].x) + 5) - (((tankArray[tankNum].x) + 5) % 6)) / 6)] - ground[(((tankArray[tankNum].x) + 5) - (((tankArray[tankNum].x) + 5) % 6)) / 6]) / 6);
}

function mainLoop() {
    draw.fillStyle = "#C0EDFF";
    draw.fillRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);
    
    if (moveRight) {
        tankArray[currentTurn].x += 1;
        if (tankArray[currentTurn].x > (document.getElementById("myCanvas").width - 10)) {
            tankArray[currentTurn].x = (document.getElementById("myCanvas").width - 10);
        }
    }
    if (moveLeft) {
        tankArray[currentTurn].x -= 1;
        if (tankArray[currentTurn].x < 0) {
            tankArray[currentTurn].x = 0;
        }
    }
    
    var i;
    for (i = 0; i < 6; i += 1) {
        colDet(i);
    }
    
    drawGround();

    draw.fillStyle = "#FF0000";
    drawTank(0);
    
    draw.fillStyle = "#007FFF";
    drawTank(1);
    
    draw.fillStyle = "#00FF00";
    drawTank(2);
    
    draw.fillStyle = "#7F00FF";
    drawTank(3);
    
    draw.fillStyle = "#FFFF00";
    drawTank(4);
    
    draw.fillStyle = "#FF7F00";
    drawTank(5);
    
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
    
    ground = [50,50,50,50,50,50,50,50,51,53,
              57,59,60,60,60,60,60,60,59,57,
              53,51,50,50,51,53,56,58,59,58,
              56,53,51,50,50,50,50,50,50,50,
              49,47,44,40,35,29,22,17,14,13,13];
    
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
