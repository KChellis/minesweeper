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
  openZeros: boolean = false;
  constructor() { }

  ngOnInit() {
    this.board = new Board (this.width, this.height, this.mines);
    this.board.makeBoard();
  }

  checkCell(cell: Tile) {
    if(cell.value === 0){
      this.gameOver = true;
    }else {
      this.board.checkMines(cell);
      if(cell.mineCount === 0){
        // this.openZeros = true;
        this.board.checkAround(cell);
      }
      // while(this.openZeros){
      //   for (let i = 0; i <= this.height;  i++){
      //     for (let j = 0; j <= this.width;  j++){
      //       let currentCell = this.board.boardArray[i][j];
      //       if(currentCell.value===0){
      //         this.board.checkAround(currentCell);
      //       }
      //
      //     }
      //   }
      //   this.openZeros=this.checkZeros();
      // }
      this.gameWin = this.board.checkWin();
    }
  }

  // checkZeros() {
  //   for (let k = 0; k <= this.height;  k++){
  //     for (let l = 0; l <= this.width;  l++){
  //       let currentCell = this.board.boardArray[k][l];
  //       if(currentCell.value === 0){
  //         let row = currentCell.coordinates[0];
  //         let col = currentCell.coordinates[1];
  //         if (row === 0 && col === 0){
  //           for (let i = row; i <= row + 1;  i++){
  //             for (let j = col; j <= col + 1;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //         }else if (row === 0 && col === this.height-1){
  //           for (let i = row; i <= row + 1;  i++){
  //             for (let j = col-1; j <= col;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //         }else if (row === this.width-1 && col === 0) {
  //           for (let i = row-1; i <= row;  i++){
  //             for (let j = col; j <= col + 1;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //         }else if (row === this.width-1 && col === this.height-1) {
  //           for (let i = row-1; i <= row;  i++){
  //             for (let j = col-1; j <= col;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //
  //         }else if(row === 0) {
  //           for (let i = row; i <= row + 1;  i++){
  //             for (let j = col-1; j <= col + 1;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //
  //         }else if (row === this.width-1) {
  //           for (let i = row-1; i <= row;  i++){
  //             for (let j = col-1; j <= col + 1;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //
  //         }else if (col === 0) {
  //           for (let i = row-1; i <= row + 1;  i++){
  //             for (let j = col; j <= col + 1;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //
  //         }else if(col === this.height-1){
  //           for (let i = row-1; i <= row + 1;  i++){
  //             for (let j = col-1; j <= col;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //
  //         }else {
  //           for (let i = row-1; i <= row + 1;  i++){
  //             for (let j = col-1; j <= col + 1;  j++){
  //               if(this.board.boardArray[i][j].mineCount === null){
  //                 return true;
  //               }
  //             }
  //           }
  //         }
  //       }
  //
  //     }
  //   }
  //   return false;
  // }


  newGame(){
    location.reload();
  }



}
