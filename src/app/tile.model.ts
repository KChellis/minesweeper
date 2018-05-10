import {Board} from './board.model'
export class Tile {
  mineCount:  number = nullTile
  surroundingCells:Tile[] = [];
  constructor(public coordinates: number[], public value: number) {}

  findSurrounding(board) {
    let row = this.coordinates[0];
    let col = this.coordinates[1];
    if(row-1 > 0) {
      this.surroundingCells.push(board[row-1][col]);
      if(col-1>0){
        this.surroundingCells.push(board[row-1][col-1]);
      }
      if(col+1 < board.width){
        this.surroundingCells.push(board[row-1][col+1]);
      }

    }
    if(row+1 < board.height) {
      this.surroundingCells.push(board[row+1][col]);
      if(col-1>0){
        this.surroundingCells.push(board[row+1][col-1]);
      }
      if(col+1 < board.width){
        this.surroundingCells.push(board[row+1][col+1]);
      }

    }
    if(col-1>0){
      this.surroundingCells.push(board[row][col-1]);
    }
    if(col+1 < board.width){
      this.surroundingCells.push(board[row][col+1]);
    }

  }
}
