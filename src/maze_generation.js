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
var max_X = 5;
var max_Y = 5;

window.onload = function(){
  let initialCell = new MazeCell(1,1,false);
  addNewCellToArray(initialCell);
}

const addNewCellToArray = function(cell){

  // Add new cell to the 'Current Cell Stack'
  cellStack.push(cell);
  fullCellMaze.push(cell);

  generateCells(cell)
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

    if (cell.timesRotated > 4){
      // Cell has no more space to travel, need to go back one
      //LINKBREAK
      break;
    }

    // Returns boolean as whether the direction attempting to travel is valid
    var validDirection = checkValidDirection(cell);

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
      cell.rightWall = false;
      break;
      case 4:
      newY = cell.y_coord + 1;
      cell.bottomWall = false;
      break;
    }

    let newCell = new MazeCell(newX, newY, false);
    addNewCellToArray(newCell);

  } else {
    // If broken out, go back through stack until we have one which works
    //LINKBREAK
    if(cellStack.length > 0){
      oldCell = cellStack.pop();
      generateCells(oldCell)
    }
  }
}


const checkValidDirection = function(cell){
  // increment the rotation count
  cell.timesRotated += 1;
  var newX = cell.x_coord;
  var newY = cell.y_coord;

  // Check cell would not go negative or above limit
  switch(cell.direction) {
    case 1:
    newX -= 1;
    if (newX < 1){
      return false;
    }
    break;
    case 2:
    newY -= 1;
    if (newY < 1){
      return false;
    }
    break;
    case 3:
    newX += 1;
    if (newX > max_X){
      return false;
    }
    break;
    case 4:
    newY += 1;
    if (newY > max_Y){
      return false;
    }
    break;
  }
  //Check if the fullCellMaze contains an object with coordinates which match
  const cellFound = fullCellMaze.some(oldCell => oldCell.x_coord === newX
    && oldCell.y_coord === newY);
  if (cellFound){
    return false;
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
