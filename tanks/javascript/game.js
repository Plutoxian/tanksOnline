var draw = document.getElementById("myCanvas").getContext("2d");

draw.fillStyle = "red";
draw.fillRect(50, 50, 200, 200);
  
function fire(){
  draw.fillStyle = "blue";
  draw.fillRect(50, 50, 200, 200);
} 
