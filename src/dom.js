//const Gameboard = require ('./Factories/gameboard.js');

//const playerOneBoard = document.querySelector('.player-board');
//const playerTwoBoard = document.querySelector('.enemy-board');

class BoardMaker{
  constructor(){
    this.player = new Gameboard(); 
  
  this.makePlayerOneBoard = function(){
    for(let i = 0; i < 100; i++){
      let tile = document.createElement('div');
      tile.classList.add('player-tile');
      playerOneBoard.appendChild(tile);
    }
    return playerOneBoard;
    
  },
  this.makePlayerTwoBoard = function(){
    for(let i = 0; i < 100; i++){
      let tile = document.createElement('div');
      tile.classList.add('enemy-tile');
      playerTwoBoard.appendChild(tile);
    }
    return playerTwoBoard;
    
    }
  }
};

//boardMaker.makePlayerTwoBoard();
//boardMaker.makePlayerOneBoard();

//module.exports = BoardMaker;