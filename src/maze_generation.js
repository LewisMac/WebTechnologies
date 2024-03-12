// Start with a Cell

// !!Recursion!!
// Store cell in array (first-in-last-out)
// Mark cell as 'Visited'
// Find if cell has valid moves to any side
//  How to store max size of array? (Max X/Y coords)
// Move to one of the valid sides
// If no more sides, pop last item from array out (Go back one cell)
// !!Recursion!!

var cellStack = [];
var fullCellMaze = [];
var max_X = 4;
var max_Y = 4;

window.onload = function(){
  let initialCell = new MazeCell(1,1,false);
  fullCellMaze.push(initialCell);
  generateCells(initialCell)
}

const generateCells = function(cell){

  var newX = cell.x_coord;
  var newY = cell.y_coord;
  var forwardPath = false;

  if(newX == 1 || newX == max_X || newY == 1 || newY == max_Y){
    cell.atBorder = true;
  } else {
    cell.atBorder = false;
  }

  // Add new cell to the 'Current Cell Stack'
  cellStack.push(cell);

  // Need to randomly choose a direction to go,
  // 1 - Left
  // 2 - Up
  // 3 - Right
  // 4 - Down
  let travelDirection = Math.floor(Math.random() * 4) + 1;
  cell.direction = travelDirection;

  do {
    // verify this isn't invalid in some way,
    // including that it isn't going backwards

    if (cell.timesRotated >= 4){
      // Cell has no more space to travel, need to go back one
      //LINKBREAK
      break;
    }

    // Returns boolean as whether the direction attempting to travel is valid
    var validDirection = checkValidDirection(cell);

    //console.log(cell.direction + " : " + cell.timesRotated + " ::: "
      //+ cell.x_coord + " : " + cell.y_coord);
    //console.log(validDirection);

    if (!validDirection){
      // Cell direction was invalid, rotate and try again
      rotateMovementDirection(cell);
      // Redo loop
      continue;
    } else {
      forwardPath = true;
    }
  } while (forwardPath == false)

  if (forwardPath){
    // Once forward path is true (works)
    // Create a new cell and start again
    switch (cell.direction) {
      case 1:
      newX = cell.x_coord - 1;
      break;
      case 2:
      newY = cell.y_coord - 1;
      break;
      case 3:
      newX = cell.x_coord + 1;
      break;
      case 4:
      newY = cell.y_coord + 1;
      break;
    }

    fullCellMaze.push(cell);

    let newCell = new MazeCell(newX, newY, false)
    generateCells(newCell)

  } else {
    // If broken out, go back through stack until we have one which works
    //LINKBREAK
  }

}

const checkValidDirection = function(cell){
  // increment the rotation count
  cell.timesRotated += 1;

  // Check cell would not go negative or above limit
  switch (cell.direction) {
    case 1:
    if ((cell.x_coord - 1) < 1){
      console.log("Failed Left");
      return false;
    }
    break;
    case 2:
    if ((cell.y_coord - 1) < 1){
      console.log("Failed Up");
      return false;
    }
    break;
    case 3:
    if ((cell.x_coord + 1) > max_X){
      console.log("Failed Right");
      return false;
    }
    break;
    case 4:
    if ((cell.y_coord + 1) > max_Y){
      console.log("Failed Down");
      return false;
    }
    break;
  }
  // I don't want to use .forEach here to check array container
  // Need to check if the fullCellMaze contains an object with coordinates which match
  // NOTE! If this works, make it neater
  const xFound = fullCellMaze.some(oldCell => oldCell.x_coord === cell.x_coord)
  const yFound = fullCellMaze.some(oldCell => oldCell.y_coord === cell.y_coord)
  if (xFound && yFound){
    console.log("Full Cell Maze Fail: ")
    return false
  }

  return true;
}

const rotateMovementDirection = function(cell){
  // Rotate clockwise
  if (cell.direction == 4){
    cell.direction = 1;
  } else {
    cell.direction += 1;
  }
}
