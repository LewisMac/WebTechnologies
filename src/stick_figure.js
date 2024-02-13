const TopLevelCanvas = document.getElementById("TopLevelCanvas");
const ctxTop = TopLevelCanvas.getContext("2d");

function StickFigure(){
  this.scale = 1;
  this.draw = function(posX, posY){
    // Draw a circle
    ctxTop.beginPath();
    ctxTop.arc(posX, posY, 5*this.scale, 0, Math.PI*2, true);
    ctxTop.closePath();
  }
}

var drawStickFigure = function(posX, posY){
  // Draw stick figure at point of mouse click
  var stick_figure = new StickFigure();
  stick_figure.draw(posX, posY);
}

TopLevelCanvas.onclick = function(event){
  // When the user clicks on the canvas, create stick figure
  drawStickFigure(event.x, event.y)
}

window.onload = function(){

  var width = ctxTop.canvas.width = window.innerWidth;
  var height = ctxTop.canvas.height = window.innerHeight;
  //beginAnimation();
  //var frameRate = 60.0;
  //var frameDelay = 1000.0/frameRate;
  //setInterval(function()
  //{
  //  update(frameDelay);
  //}, frameDelay);
}
