"use strict";

let canvas = document.querySelector('canvas');
canvas.width= window.innerWidth;
canvas.height=window.innerHeight;
let context=canvas.getContext('2d');

let width= context.canvas.width;
let height=context.canvas.height;

drawBars();
function drawBars(){
    context.fillStyle="GoldenRod";
    context.fillRect(0,0,width,height/4);
    context.fillStyle="orange";
    context.fillRect(0,height/4,width,height);
    context.fillStyle="red";
    context.fillRect(0,2*height/4,width,height/4);
    context.fillStyle="Darkblue";
    context.fillRect(0,3*height/4,width,height/4);
}

drawSun();
function drawSun(){
    context.fillStyle = "yellow";
    context.ellipse(width/2,3*height/4,width/4,width/4),0,0,Math.PI*2
    context.fill();
}
window.onresize= drawBars();