const TopLevelCanvas = document.getElementById("TopLevelCanvas");
const ctxTop = TopLevelCanvas.getContext("2d");

function StickFigure(){
  this.scale = 1;
  this.draw = function(){

    // Draw a circle
    ctxTop.beginPath();
    ctxTop.arc(0, 0, 5*this.scale, 0, Math.pi*2, true);
    ctxTop.closePath();
  }
}

var drawStickFigure = function(x,y){
  // Draw stick figure at point of mouse click
  var stick_figure = new StickFigure();
  stick_figure.draw();
}

TopLevelCanvas.onclick = function(event){
  // When the user clicks on the canvas, create stick figure
  console.log("Canvas Clicked: " + event);
  drawStickFigure(event.x, event.y)
}

window.onload = function(){

  var width = ctxTop.canvas.width = 500;
  var height = ctxTop.canvas.height = 500;


  //beginAnimation();
  //var frameRate = 60.0;
  //var frameDelay = 1000.0/frameRate;
  //setInterval(function()
  //{
  //  update(frameDelay);
  //}, frameDelay);
}
