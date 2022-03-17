import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares! : any[];
  xIsNext! : boolean;
  winner!: String;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() : void{
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get player(){
    return this.xIsNext? 'X' : 'O';
  }

  move(idx: number){
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    const lignes = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0; i < lignes.length; i++){
      const [x,y,z] = lignes[i];
      if(this.squares[x] && this.squares[x]===this.squares[y] && this.squares[x]===this.squares[z]){
        return this.squares[x];
      }
      
    }
    return null;
  }

}
