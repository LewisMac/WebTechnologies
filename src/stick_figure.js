

function StickFigure(){
  this.scale = 1;
  this.draw = function(context){
    context.save();
    context.translate(this.x, this.y);
    context.scale(this.scale, this.scale);

    // Draw a circle
    context.beginPath();
    context.arc(0, 0, 5*this.scale, 0, Math.pi*2, true);
    context.closePath();

    context.restore();
  }
}

var drawStickFigure = function(x,y){
  // Draw stick figure at point of mouse click
  var stick_figure = new StickFigure();
  stick_figure.draw(ctxTop);
}

window.onload = function(){

  const TopLevelCanvas = document.getElementById("TopLevelCanvas");
  const ctxTop = TopLevelCanvas.getContext("TopLevelCanvas");

  var width = ctxTop.canvas.width = 500;
  var height = ctxTop.canvas.height = 500;

  canvas.onclick = function(event){
    // When the user clicks on the canvas, create stick figure
    drawStickFigure(event.x, event.y)
  }
  beginAnimation();
  //var frameRate = 60.0;
  //var frameDelay = 1000.0/frameRate;
  //setInterval(function()
  //{
  //  update(frameDelay);
  //}, frameDelay);
}
