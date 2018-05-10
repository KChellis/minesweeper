import {Board} from './board.model'
export class Tile {
  mineCount:  number = null;
  surroundingCells:Tile[] = [];
  constructor(public coordinates: number[], public value: number) {}

  findSurrounding(board: Board) {
    let row = this.coordinates[0];
    let col = this.coordinates[1];
    if(row-1 > 0) {
      this.surroundingCells.push(board.boardArray[row-1][col]);
      if(col-1>0){
        this.surroundingCells.push(board.boardArray[row-1][col-1]);
      }
      if(col+1 < board.width){
        this.surroundingCells.push(board.boardArray[row-1][col+1]);
      }

    }
    if(row+1 < board.height) {
      this.surroundingCells.push(board.boardArray[row+1][col]);
      if(col-1>0){
        this.surroundingCells.push(board.boardArray[row+1][col-1]);
      }
      if(col+1 < board.width){
        this.surroundingCells.push(board.boardArray[row+1][col+1]);
      }

    }
    if(col-1>0){
      this.surroundingCells.push(board.boardArray[row][col-1]);
    }
    if(col+1 < board.width){
      this.surroundingCells.push(board.boardArray[row][col+1]);
    }

  }
}
