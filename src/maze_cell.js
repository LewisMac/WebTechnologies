function MazeCell(x, y, rightWall, bottomWall) {
  this.x_coord = x;
  this.y_coord = y;
  this.visited = false;
  this.atBorder = true;
  this.direction = 0;
  this.timesRotated = 0;
  this.lastCell;
  this.rotationDirection;
  /* Store here all directions of cell Walls, then we can just draw them
  Default as wall = true, then set to false if we pass through
  Maybe just the bottom and right? Then the full top and left are walls too
  If each cell only knows the bottom and right, can we draw the full maze?*/
  this.rightWall = rightWall;
  this.bottomWall = bottomWall;
}
