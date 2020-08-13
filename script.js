var canvas = document.getElementById("my-canvas");
var pb = canvas.getContext("2d");



var score = 0;


var playerx = 400;
var playery = 590;
var playersize = 10;

var lst = []


var block = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  color: "black",
  ySpeed: 0
}

function spawn() {
  block.x = Math.floor(Math.random() * 801);
  block.y = Math.floor(Math.random() * 4);
  block.width = Math.floor(Math.random() * 61) + 20;
  block.height = Math.floor(Math.random() * 61) + 20;
  block.ySpeed = Math.floor(Math.random() * 11);
  block.color = "black";
  lst.push(block);
}

function fall(b) {
  b.y += b.ySpeed
}

function collision() {
  a
}

function paint() {
  a
}

function main() {
  spawn();

  for(var i = 0; i < lst.length; i += 1){
    fall(lst[i]);
    //collision(lst[i]);
    //paint(lst[i]);
  }
}

main();
console.log(lst)