"use strict";
var type = 0;
function terrainselector(terrain){
    if(terrain == 0)
       {
           type = "Desert";
       }
    if(terrain == 1)
       {
           type = "Forest";
       }
    if(terrain == 2)
       {
           type = "Mountain";
       }
    if(terrain == 3)
       {
           type = "Island";
       }
    if(terrain == 4)
       {
           type = "Rainbow";
       }
    show_terrain();
}

function show_terrain(){
    var currentTerrain = document.getElementById("terr");
    currentTerrain.innerHTML = type + " Selected";
}