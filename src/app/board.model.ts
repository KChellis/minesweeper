import { Tile } from './tile.model';

export class Board {
  boardArray = [];
  constructor(public width: number, public height: number, public mines: number) {}

  makeBoard() {
    let tiles = this.width * this.height;
    let numbers = tiles - this.mines;
    let options = [];
    for( let i = 1; i<= this.mines; i++){
      options.push(0);
    }
    for( let i = 1; i<= numbers; i++){
      options.push(1);
    }
    let temp = [];
    let row = 0;
    let length = options.length;
    for( let i = 0; i< length; i++){
      let index = Math.floor(Math.random()* options.length);
      let tile = new Tile([row, temp.length], options[index]);
      temp.push(tile);
      options.splice(index, 1);
      if(temp.length === this.width){
        this.boardArray.push(temp);
        temp = [];
        row += 1;
      }
    }
    for (let i = 0; i < this.height;  i++){
      for (let j = 0; j < this.width;  j++){
        this.boardArray[i][j].findSurrounding();
      }
    }
    
    console.log(this.boardArray);
  }

  checkMines(cell: Tile){
    cell.mineCount=0;
    let row = cell.coordinates[0];
    let col = cell.coordinates[1];
    if (row === 0 && col === 0){
      for (let i = row; i <= row + 1;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }
    }else if (row === 0 && col === this.height-1){
      for (let i = row; i <= row + 1;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }
    }else if (row === this.width-1 && col === 0) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }
    }else if (row === this.width-1 && col === this.height-1) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }

    }else if(row === 0) {
      for (let i = row; i <= row + 1;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }

    }else if (row === this.width-1) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }

    }else if (col === 0) {
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }

    }else if(col === this.height-1){
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }

    }else {
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 0){
            cell.mineCount++;
          }
        }
      }
    }
  }

  checkAround(cell) {
    let row = cell.coordinates[0];
    let col = cell.coordinates[1];
    if (row === 0 && col === 0){
      for (let i = row; i <= row + 1;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }
    }else if (row === 0 && col === this.height-1){
      for (let i = row; i <= row + 1;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }
    }else if (row === this.width-1 && col === 0) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }
    }else if (row === this.width-1 && col === this.height-1) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }

    }else if(row === 0) {
      for (let i = row; i <= row + 1;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }

    }else if (row === this.width-1) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }

    }else if (col === 0) {
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }

    }else if(col === this.height-1){
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }

    }else {
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.boardArray[i][j].value === 1){
            this.checkMines(this.boardArray[i][j]);
          }
        }
      }
    }


  }

  checkWin(){
    for (let i = 0; i < this.width;  i++){
      for (let j = 0; j < this.height;  j++){
        if(this.boardArray[i][j].value === 1 && this.boardArray[i][j].mineCount === null){
          return false;
        }

      }

    }

    return true;

  }


}
