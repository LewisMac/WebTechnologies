const TopLevelCanvas = document.getElementById("TopLevelCanvas");
const ctxTop = TopLevelCanvas.getContext("2d");

function StickFigure(){
  this.scale = 1;
  this.draw = function(posX, posY){
    // Draw a circle
    rect = TopLevelCanvas.getBoundingClientRect()
    ctxTop.beginPath();
    beginningX = posX - rect.left;
    beginningY = posY - rect.top
    ctxTop.arc(beginningX, beginningY, 5, 0, Math.PI*2);
    ctxTop.moveTo(beginningX, beginningY + 5)
    ctxTop.lineTo(beginningX, beginningY + 25)
    //Legs
    ctxTop.lineTo(beginningX - 5, beginningY + 35)
    ctxTop.moveTo(beginningX, beginningY + 25)
    ctxTop.lineTo(beginningX + 5, beginningY + 35)
    //Arms
    ctxTop.moveTo(beginningX, beginningY + 10)
    ctxTop.lineTo(beginningX - 5, beginningY + 25)
    ctxTop.moveTo(beginningX, beginningY + 10)
    ctxTop.lineTo(beginningX + 5, beginningY + 25)
    ctxTop.stroke();
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
