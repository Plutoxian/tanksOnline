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
    draw.moveTo(0, 480 - ground[0]);
    for (i = 0; i < 200; i += 1) {
        draw.lineTo(i * 10, 720 - ground[i]);
    }
    draw.lineTo(1280, 720);
    draw.lineTo(0, 720);
    draw.fill();
}

function drawTank(tankNum) {
    draw.beginPath();
    draw.moveTo(tankArray[tankNum].x + 30,  tankArray[tankNum].y + 15);
    draw.arcTo(tankArray[tankNum].x +  30, tankArray[tankNum].y, tankArray[tankNum].x + 15, tankArray[tankNum].y, 15);
    draw.arcTo(tankArray[tankNum].x, tankArray[tankNum].y, tankArray[tankNum].x, tankArray[tankNum].y + 15, 15);
    draw.fill();
}

function colDet(tankNum) {
    tankArray[tankNum].y = (720 - ground[(((tankArray[tankNum].x) + 15) - (((tankArray[tankNum].x) + 15) % 10)) / 10]) - ((ground[1 + ((((tankArray[tankNum].x) + 15) - (((tankArray[tankNum].x) + 15) % 10)) / 10)] - ground[(((tankArray[tankNum].x) + 15) - (((tankArray[tankNum].x) + 15) % 10)) / 10]) * (((tankArray[tankNum].x) + 15) % 10) / 10) - 15;
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
    
    drawGround();
    
    setTimeout(mainLoop, 30);
}

function init() {
    //do initiation stuff here
    tankArray = [{exists: 1, x: 0, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 200, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 400, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 600, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 800, y: 50, power: 100, angle: 90},
                 {exists: 1, x: 1000, y: 50, power: 100, angle: 90}];
    
    currentTurn = 0;
    
    ground = [250,250,250,250,250,250,250,250,250,251,
              253,256,260,263,265,266,266,266,266,266,
              265,263,260,256,253,251,250,250,250,250,
              250,250,249,247,244,240,235,229,224,220,
              217,215,214,214,214,214,214,214,214,217,
              220,224,229,235,240,244,247,249,250,250,
              250,250,250,250,250,250,250,250,250,251,
              253,256,260,263,265,266,266,266,266,266,
              265,263,260,256,253,251,250,250,250,250,
              250,250,249,247,244,240,235,229,224,220,
              217,215,214,214,214,214,214,214,214,217,
              220,224,229,235,240,244,247,249,250,250,
              250,250,250,250,250,250,250,250,250,251,
              253,256,260,263,265,266,266,266,266,266,
              265,263,260,256,253,251,250,250,250,250,
              250,250,249,247,244,240,235,229,224,220,
              217,215,214,214,214,214,214,214,214,217,
              220,224,229,235,240,244,247,249,250,250];
    
    mainLoop();
}

function onLoad() {
    draw = document.getElementById("myCanvas").getContext("2d");
    document.getElementById("myCanvas").width = 1280;
    document.getElementById("myCanvas").height = 720;
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
