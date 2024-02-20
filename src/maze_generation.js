// Start with a Cell

// !!Recursion!!
// Store cell in array (first-in-last-out)
// Mark cell as 'Visited'
// Find if cell has valid moves to any side
//  How to store max size of array? (Max X/Y coords)
// Move to one of the valid sides
// If no more sides, pop last item from array out (Go back one cell)
// !!Recursion!!

import {MazeCell} from './maze_cell.js'

window.onload = function(){

  const InitialCell = new MazeCell(0,0,false);
  console.log(InitialCell.x_coord);
}
