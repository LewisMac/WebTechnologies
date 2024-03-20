/*
This script will contain all of the functions required for loading in and
manipulating the canvas elements on both principal pages within the website

This script will be called from various locations, mostly from within the
onload functions for each page
*/

const mazeCanvas = document.getElementById("MazeCanvas");
const ctx = mazeCanvas.getContext("2d");

const minCanvasSizeSquare = 400;
var maze_x, maze_y;


window.on("resize", draw);


const draw = function(){
  display_MazeLoad(maze_x, maze_y);
}


const display_MazeLoad = function (maze_max_X, maze_max_Y){
  /*
  This method is for updating the Canvas element with any new maze generated
  We need to have a calculation for scaling the maze we generate so it will
  fit on the screen properly at any (Reasonable) size maze
  We could also calculate the centre of the maze, and scale out from there?
  */
  maze_x = maze_max_X;
  maze_y = maze_max_Y;
  var canvasWidth = calculateCellSize(maze_max_X, maze_max_Y) * maze_max_X;
  var canvasHeight = calculateCellSize(maze_max_X, maze_max_Y) * maze_max_Y;

  if (canvasWidth < minCanvasSizeSquare) {
    canvasWidth = minCanvasSizeSquare;
  }

  if (canvasHeight < minCanvasSizeSquare) {
    canvasHeight = minCanvasSizeSquare;
  }

  ctx.canvas.width = canvasWidth + 20;
  ctx.canvas.height = canvasHeight + 20;

  ctx.fillStyle = 'black';
  /*
  use ctx.moveTo for any 'gaps'
  use ctx.lineTo for any 'walls'

  always start from the bottom left, then draw/move RIGHT-UP -> NEXT CELL
  Drawable Area is (mazeCanvas.width - 20) by (mazeCanvas.height - 20)
  Maze grid will be x*y cells
  We need to calculate how large x/y are to fit into the grid

  Correction: We need to calculate the smallest of X/Y,
  so we can fit this into the grid

  (Max X) / (X Cells) =
  */

  var cellSize = calculateCellSize(maze_max_X, maze_max_Y);

  //first locations
  ctx.moveTo(10,10);
  ctx.lineTo(cellSize * maze_max_X + 10, 10)
  ctx.moveTo(10,10);
  ctx.lineTo(10, cellSize * maze_max_Y + 10)
  ctx.moveTo(10,10);

  //Draw maze
  fullCellMaze.forEach((cell, i) => {
    //Move to bottom Left
    ctx.moveTo((cell.x_coord - 1) * cellSize + 10, cell.y_coord * cellSize + 10);

    //Draw/Move to bottom Right
    if (cell.bottomWall){
      ctx.lineTo(cell.x_coord * cellSize + 10, cell.y_coord * cellSize + 10);
    } else {
      ctx.moveTo(cell.x_coord * cellSize + 10, cell.y_coord * cellSize + 10);
    }

    //Draw/Move to Top Right
    if (cell.rightWall){
      ctx.lineTo(cell.x_coord * cellSize + 10, (cell.y_coord - 1) * cellSize + 10);
    } else {
      ctx.moveTo(cell.x_coord * cellSize + 10, (cell.y_coord - 1) * cellSize + 10);
    }
  });

  ctx.stroke();

}


const calculateCellSize = function(maze_max_X, maze_max_Y){
  var max_X_dimensions = (document.getElementById("mainBlock").offsetWidth - 20)/maze_max_X;
  var max_Y_dimensions = (document.getElementById("mainBlock").offsetHeight - 20)/maze_max_Y;
  return Math.min(max_X_dimensions, max_Y_dimensions)
}
