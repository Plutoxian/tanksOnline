var draw;

function onLoad(){
  draw = document.getElementById("myCanvas").getContext("2d");
}

function fire(){
  draw.fillStyle = "blue";
  draw.fillRect(50, 50, 200, 200);
} 
