var canvas = document.getElementById("my-canvas");
var pb = canvas.getContext("2d");



var score = 0;
var scoreDisplay = document.getElementById("scoreDisplay")

var playersize = 10;
var playerx = canvas.width/2-playersize/2;
console.log(playerx)
var playery = 790;


var lst = []

function player() {
  pb.fillStyle = "tan";
  pb.fillRect(0,0,canvas.width,canvas.height);
  pb.fillStyle = "green";
  pb.fillRect(playerx,playery,playersize,playersize)
}


function spawn() {
  var block = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  color: "black",
  ySpeed: 0
  }
  block.x = Math.floor(Math.random() * 1001);
  block.y = Math.floor(Math.random() * 4);
  block.width = Math.floor(Math.random() * 56) + 5;
  block.height = Math.floor(Math.random() * 56) + 5;
  block.ySpeed = Math.floor(Math.random() * 3) +1;
  block.color = "black";

  var b = Object.assign({}, block)
  lst.push(b);
}

function fall(b) {
  b.y += b.ySpeed
}

function collision(b) {
  var isCol = Intersects.boxBox(
    b.x,
    b.y,
    b.width,
    b.height,
    playerx,
    playery,
    playersize,
    playersize);
  if(isCol) {
    playerx = 9999^9999 * 9999^9999;
    playery = 9999^9999 * 9999^9999;
    score += 0
  }
}

function paint(b) {
  pb.fillStyle ="black";
  pb.fillRect(b.x,b.y,b.width,b.height)
}

function main() {
  spawn();
  player();
  for(var i = 0; i < lst.length; i += 1){
    fall(lst[i]);
    collision(lst[i]);
    paint(lst[i]);
      if (lst[i].y > canvas.height) {
      lst.splice(i,1);
      }
    }
  score += 10;
  scoreDisplay.innerHTML = " " + score;
}

function onkey(event) {
  if(event.keyCode == 37) {
    playerx -= 15
  }
  if(event.keyCode == 39) {
    playerx += 15
  }
}

document.addEventListener("keyup", onkey);

//main();
setInterval(main, 65);