window.onload = function() {
  var canvas = document.getElementById("canvas");
   var context = canvas.getContext("2d");
   var x = 0;
   var y = 100;

   var t = Date.now();
   let speed = 300;
   let dir = 0;
   let up = document.getElementById("up");
   let left = document.getElementById("left");
   let down = document.getElementById("down");
   let right = document.getElementById("right");

   up.onmousedown = function () { dir = 4; }
   down.onmousedown = function () { dir = 3; }
   left.onmousedown = function () { dir = 2; }
   right.onmousedown = function () { dir = 1; }

   up.ontouchstart = function () { dir = 4; }
   down.ontouchstart = function () { dir = 3; }
   left.ontouchstart = function () { dir = 2; }
   right.ontouchstart = function () { dir = 1; }

   up.onmouseup = function () { dir = 0;}
   down.onmouseup = function () { dir = 0;}
   left.onmouseup = function () { dir = 0;}
   right.onmouseup = function () { dir = 0;}

   up.ontouchend = function () { dir = 0; }
   down.ontouchend = function () { dir = 0; }
   left.ontouchend = function () { dir = 0; }
   right.ontouchend = function () { dir = 0; }
















   function draw() {
     var timePassed = (Date.now() - t) / 1000;
     t = Date.now();
     var fps = Math.round(1 / timePassed);
    
    context.clearRect(0, 0, 600, 400);
  
  context.font = "25px Arial";
  context.fillStyle = "black";
  context.fillText("FPS:" + fps, 20, 30);

  context.beginPath();
  context.rect(x, y, 50, 50);
  context.fillStyle = "red";
  context.fill();

  if(dir==1) {
    x += (speed*timePassed);
  }
  else if(dir==2) {
    x -= (speed*timePassed);
  }
  else if(dir==3) {
    y += (speed*timePassed);
  }
  else if(dir==4) {
    y -= (speed*timePassed);
  }

  window.requestAnimationFrame(draw);
}
draw();

};





















