/*
This script will contain all of the functions required for loading in and
manipulating the canvas elements on both principal pages within the website

This script will be called from various locations, mostly from within the
onload functions for each page
*/

const mazeCanvas = document.getElementById("MazeCanvas");
const ctx = mazeCanvas.getContext("2d");

const minCanvasSizeSquare = 400;


const display_MazeLoad = function (){
  /*
  This method is for updating the Canvas element with any new maze generated
  We need to have a calculation for scaling the maze we generate so it will
  fit on the screen properly at any (Reasonable) size maze
  We could also calculate the centre of the maze, and scale out from there?
  */
  var canvasWidth = window.innerWidth * 0.5;
  var canvasHeight = window.innerHeight * 0.75;

  if (canvasWidth < minCanvasSizeSquare) {
    canvasWidth = minCanvasSizeSquare;
  }

  if (canvasHeight < minCanvasSizeSquare) {
    canvasHeight = minCanvasSizeSquare;
  }

  ctx.canvas.width = canvasWidth;
  ctx.canvas.height = canvasHeight;

  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, mazeCanvas.width, mazeCanvas.height)

  /*
  use ctx.moveTo for any 'gaps'
  use ctx.lineTo for any 'walls'

  always start from the bottom left, then draw/move RIGHT-UP -> NEXT CELL

  */
}
