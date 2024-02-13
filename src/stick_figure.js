

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

var drawStickFigure = function(x,y, context){
  context.fillStyle = "#FFF";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  // Draw stick figure at point of mouse click
  var stick_figure = new StickFigure();
  stick_figure.draw(context);
}

window.onload = function(){

  const TopLevelCanvas = document.getElementById("TopLevelCanvas");
  const ctxTop = TopLevelCanvas.getContext("2d");

  var width = ctxTop.canvas.width = 500;
  var height = ctxTop.canvas.height = 500;

  TopLevelCanvas.onclick = function(event){
    // When the user clicks on the canvas, create stick figure
    console.log("Canvas Clicked: " + event);
    drawStickFigure(event.x, event.y, ctxTop)
  }
  //beginAnimation();
  //var frameRate = 60.0;
  //var frameDelay = 1000.0/frameRate;
  //setInterval(function()
  //{
  //  update(frameDelay);
  //}, frameDelay);
}
