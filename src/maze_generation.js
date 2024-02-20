// Start with a Cell

// !!Recursion!!
// Store cell in array (first-in-last-out)
// Mark cell as 'Visited'
// Find if cell has valid moves to any side
//  How to store max size of array? (Max X/Y coords)
// Move to one of the valid sides
// If no more sides, pop last item from array out (Go back one cell)
// !!Recursion!!

let cellStack = [];
let fullCellMaze = [];
let max_X = 4;
let max_Y = 4;

window.onload = function(){
  let initialCell = new MazeCell(0,0,false);
  console.log(InitialCell.x_coord);
  generateCells(initialCell)
}

const generateCells = function(cell){

  let newX = 0;
  let newY = 0;
  let forwardPath = false;

  if(cell.x == 0 || cell.x == max_X || cell.y == 0 || cell.y == max_Y){
    cell.atBorder = true;
  } else {
    cell.atBorder = false;
  }

  cellStack.push(cell);
  fullCellMaze.push(cell);

  // Need to randomly choose a direction to go,
  // 1 - Left
  // 2 - Up
  // 3 - Right
  // 4 - Down
  let travelDirection = Math.floor(Math.random() * 4) + 1;
  cell.direction = travelDirection;

  while (forwardPath == false) {
    // verify this isn't invalid in some way,
    // including that it isn't going backwards

    if (cell.timesRotated >= 4){
      // Cell has no more space to travel, need to go back one
      break;
    }

    if (!checkValidDirection(cell)){
      // Cell direction was invalid, rotate and try again
      rotateMovementDirection(cell);
      // Redo loop
      continue;
    }
  }

  if (forwardPath){
    // Once forward path is true (works)
    // Create a new cell and start again

  } else {
    // If broken out, go back through stack until we have one which works

  }

}

const checkValidDirection = function(cell){
  // increment the rotation count
  cell.rotated = cell.rotated + 1;
  // Check cell would not go negative or above limit
  switch (cell.direction) {
    case 1:
    if ((cell.x - 1) < 0){
      return false
    }
    break;
    case 2:
    if ((cell.y - 1) < 0){
      return false
    }
    break;
    case 3:
    if ((cell.x + 1) > max_X){
      return false
    }
    break;
    case 4:
    if ((cell.y + 1) > max_Y){
      return false
    }
    break;
    default: return false;
  }
  // I don't want to use .forEach here to check array container
  return true;
}

const rotateMovementDirection = function(cell){
  // Rotate clockwise
  if (cell.direction == 4){
    cell.direction = 1;
  } else {
    cell.direction = cell.direction + 1;
  }
}
