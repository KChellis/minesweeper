// import rightClick from 'angular-right-click';
import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { Tile} from '../tile.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board;
  gameWin: boolean = false;
  gameOver: boolean = false;
  width: number = 8;
  height: number = 8;
  mines: number = 10;
  constructor() { }

  ngOnInit() {
    this.board = new Board (this.width, this.height, this.mines);
    this.board.makeBoard();
  }
  checkAround(cell) {
    let row = cell.coordinates[0];
    let col = cell.coordinates[1];
    if (row === 0 && col === 0){
      for (let i = row; i <= row + 1;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }
    }else if (row === 0 && col === this.height-1){
      for (let i = row; i <= row + 1;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }
    }else if (row === this.width-1 && col === 0) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }
    }else if (row === this.width-1 && col === this.height-1) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }

    }else if(row === 0) {
      for (let i = row; i <= row + 1;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }

    }else if (row === this.width-1) {
      for (let i = row-1; i <= row;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }

    }else if (col === 0) {
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col; j <= col + 1;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }

    }else if(col === this.height-1){
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col-1; j <= col;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }

    }else {
      for (let i = row-1; i <= row + 1;  i++){
        for (let j = col-1; j <= col + 1;  j++){
          if(this.board.boardArray[i][j].value === 1){
            this.board.checkMines(this.board.boardArray[i][j]);
          }
        }
      }
    }


  }

  checkCell(cell: Tile) {
    if(cell.value === 0){
      this.gameOver = true;
    }else {
      this.board.checkMines(cell);
      if (cell.mineCount === 0){
        this.checkAround(cell);
      }
      this.gameWin = this.board.checkWin();
    }
  }

  newGame(){
    location.reload();
  }



}
