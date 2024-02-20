function MazeCell(x, y, visited) {
  this.x_coord = x;
  this.y_coord = y;
  this.visited = visited;
  this.atBorder = true;
  this.direction = 0;
  this.timesRotated = 0;
  this.lastCell;
}
