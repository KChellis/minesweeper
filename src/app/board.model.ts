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
    console.log(this.boardArray);
  }
}
