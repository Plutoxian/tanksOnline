"use strict";
var number = 2;
var type = 0;
function peopleselector(a) {
    /*people_amount = a;*/
    number = a;
    show_number();
};
function show_number() {
  
var displayEl = document.getElementById("num");
displayEl.innerHTML = number + " Selected";
};
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
};

function show_terrain(){
    var currentTerrain = document.getElementById("terr");
    currentTerrain.innerHTML = type + " Selected";
};