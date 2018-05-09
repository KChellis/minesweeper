import rightClick from 'angular-right-click';
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
  gameOver: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(rightClick);
    this.board = new Board (8, 8, 10);
    this.board.makeBoard();
  }

  checkCell(cell: Tile) {
    if(cell.value === 0){
      this.gameOver = true;
    }else {
      this.board.checkMines(cell);
    }
  }

  newGame(){
    location.reload();
  }

}
