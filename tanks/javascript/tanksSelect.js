"use strict";
var number=2;
function peopleselector(a) {
    /*people_amount = a;*/
    number = a;
    show_number();
}
function show_number(){
  
var displayEl = document.getElementById("num");
displayEl.innerHTML = number+" Selected";
}