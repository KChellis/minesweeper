import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board;
  constructor() { }

  ngOnInit() {
    this.board = new Board (8, 8, 10);
    this.board.makeBoard();
  }

}
