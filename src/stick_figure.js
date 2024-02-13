const TopLevelCanvas = document.getElementById("TopLevelCanvas");
const ctxTop = TopLevelCanvas.getContext("2d");
var stick_figure_used;
var keys = [];

function StickFigure(){
  this.scale = 1;
  this.posX = 0;
  this.posY = 0;
  this.moving = 1;
  this.draw = function(posX, posY){
    // Draw a circle
    rect = TopLevelCanvas.getBoundingClientRect()
    ctxTop.beginPath();
    beginningX = posX - rect.left;
    beginningY = posY - rect.top
    this.posX = beginningX;
    this.posY = beginningY;
    ctxTop.arc(beginningX, beginningY, 5, 0, Math.PI*2);
    ctxTop.moveTo(beginningX, beginningY + 5)
    ctxTop.lineTo(beginningX, beginningY + 25)
    //Legs
    ctxTop.lineTo(beginningX + 3, beginningY + 38)
    ctxTop.lineTo(beginningX + 5, beginningY + 45)
    ctxTop.moveTo(beginningX, beginningY + 25)
    ctxTop.lineTo(beginningX - 3, beginningY + 38)
    ctxTop.lineTo(beginningX - 5, beginningY + 45)
    //Arms
    ctxTop.moveTo(beginningX, beginningY + 10)
    ctxTop.lineTo(beginningX - 5, beginningY + 25)
    ctxTop.moveTo(beginningX, beginningY + 10)
    ctxTop.lineTo(beginningX + 5, beginningY + 25)
    ctxTop.stroke();
  }
  this.update = function(time)
  {

    ctxTop.arc(beginningX, beginningY, 5, 0, Math.PI*2);
    ctxTop.moveTo(beginningX, beginningY + 5)
    ctxTop.lineTo(beginningX, beginningY + 25)
    //Legs
    if (this.moving == 1){
      ctxTop.lineTo(beginningX + 5, beginningY + 38)
      ctxTop.lineTo(beginningX + 3, beginningY + 45)
      ctxTop.moveTo(beginningX, beginningY + 25)
      ctxTop.lineTo(beginningX - 4, beginningY + 38)
      ctxTop.lineTo(beginningX - 8, beginningY + 45)
      this.moving = 2;
    } else if (this.moving == 2) {
      ctxTop.lineTo(beginningX + 0, beginningY + 38)
      ctxTop.lineTo(beginningX, beginningY + 45)
      ctxTop.moveTo(beginningX, beginningY + 25)
      ctxTop.lineTo(beginningX - 2, beginningY + 38)
      ctxTop.lineTo(beginningX - 4, beginningY + 43)
      this.moving = 1;
    }
    //Arms
    ctxTop.moveTo(beginningX, beginningY + 10)
    ctxTop.lineTo(beginningX - 5, beginningY + 25)
    ctxTop.moveTo(beginningX, beginningY + 10)
    ctxTop.lineTo(beginningX + 5, beginningY + 25)
    ctxTop.stroke();
  };
}

var drawStickFigure = function(posX, posY){
  // Draw stick figure at point of mouse click
  var stick_figure = new StickFigure();

  stick_figure.draw(posX, posY);
  stick_figure_used = stick_figure;
}

TopLevelCanvas.onclick = function(event){
  // When the user clicks on the canvas, create stick figure
  drawStickFigure(event.x, event.y)
}

var update = function(delay){
  if (keys[39] || keys[68]) {
    // right arrow
    stick_figure_used.update()
  }
  if (keys[37] || keys[65]) {
    // left arrow
    stick_figure_used.update()
    }
  }
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

window.onload = function(){

  var width = ctxTop.canvas.width = window.innerWidth;
  var height = ctxTop.canvas.height = window.innerHeight;

  var frameRate = 600.0;
  var frameDelay = 1000.0/frameRate;
  setInterval(function()
  {
    update(frameDelay);
  }, frameDelay);
}
