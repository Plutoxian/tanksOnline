var draw;
var tank;

var moveLeft;
var moveRight;

function mainLoop() {
    "use strict";
    draw.fillStyle = "#FFFFFF";
    draw.fillRect(0, 0, document.getElementById("myCanvas").width, document.getElementById("myCanvas").height);
    
    if (moveLeft) {
        tank -= 1;
    }
    if (moveRight) {
        tank += 1;
    }
    
    draw.fillStyle = "#000000";
    draw.fillRect(tank, 50, 50, 50);
    setTimeout(mainLoop, 30);
}

function init() {
    "use strict";
    //do initiation stuff here
    tank = 0;
    
    mainLoop();
}

function onLoad() {
    "use strict";
    draw = document.getElementById("myCanvas").getContext("2d");
    init();
}

function onMoveLeftDown() {
    "use strict";
    moveLeft = true;
}

function onMoveLeftUp() {
    "use strict";
    moveLeft = false;
}

function onMoveRightDown() {
    "use strict";
    moveRight = true;
}

function onMoveRightUp() {
    "use strict";
    moveRight = false;
}

function onFire() {
    "use strict";
    //to do
}
