"use strict"

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";


let horizontallines = 60
let verticallines = 30

let width = 600
let height = 300

drawLines();

function drawLines(){
    context.fillStyle='orange';
    context.fillRect(0,0,width,height);
    let step = width / horizontallines;

   for(let i =0; i < horizontallines; i++){
    Utils.drawLine(i*step,0,width-i* step,height);
   }

}


console.log("the end");