const Gameboard = require('./gameboard');
//const dropShips = require('../dom');

const playerOneBoard = document.querySelector('.player-one-board');
const playerTwoBoard = document.querySelector('.player-two-board');

class Player {
  constructor(name,player){
    this.name = name;
    this.player = player;
    this.gameboard = new Gameboard();
    this.attacks = [];
    let newAttack;
    let tempCount = 0;

    if(this.player == 'One'){
      this.playerBoard = playerOneBoard
    } else {
      this.playerBoard = playerTwoBoard;
    }

    this.makePlayerBoard = function(){
      if (this.player == 'One'){
        for(let i = 0; i < 100; i++){
          let tile = document.createElement('div');
          tile.classList.add('player-one-tile');
          tile.classList.add('place-ship-tile');
          playerOneBoard.appendChild(tile);
        }
        return playerOneBoard;
      
      } else if (this.player == 'Two') {
        for(let i = 0; i < 100; i++){
          let tile = document.createElement('div');
          tile.classList.add('player-two-tile');
          playerTwoBoard.appendChild(tile);
        }
        return playerTwoBoard;
      }
    }
      
    this.displayShips = function(){
      for(let i = 0; i < this.gameboard.gameGrid.length;i++){
        for(let j = 0; j < this.gameboard.gameGrid[i].length;j++){
        if(this.gameboard.gameGrid[i][j] == 'hit'){
          let iter = this.translateCoord(i,j);
          this.playerBoard.children[iter].classList.remove('piece-placed');
          this.playerBoard.children[iter].classList.add('attack-landed');
        } else if (this.gameboard.gameGrid[i][j] == 'miss'){
          let iter = this.translateCoord(i,j);
          this.playerBoard.children[iter].classList.add('attack-missed');
        } else if (!(this.gameboard.gameGrid[i][j] == undefined)){
           let iter = this.translateCoord(i,j);
           this.playerBoard.children[iter].classList.add('piece-placed');
          }
        } 
      }
      return this.playerBoard;
    }
    this.turn = function(player,input){
      if(this.name == 'Computer'){
        let tempAttack = this.computerAttack()
        return player.gameboard.receiveAttack(tempAttack.join(''));
      } else {
        input = input;
        return player.gameboard.receiveAttack(input);
      }
    }
    
    this.computerAttack = function(){
      outer:while(tempCount === 0 ){
        let input = this.randomCoord();
        for(let i = -1; i < this.attacks.length; i++){
          if((!(`${[input]}` == `${this.attacks[i]}`))){
            newAttack = input;
            tempCount++;
          } else if (tempCount === 0){
            continue outer;
        }
        return this.displayShips();
      };
        this.attacks.push(newAttack);
        tempCount--;
        return newAttack;
      }
      
    }
    this.translateCoord = function(i,j){
      let tempArr = [];
      tempArr.push(i);
      tempArr.push(j);
      let tempVar;
      if(tempArr[0] < 1){
        tempVar = j;
      } else {
        tempVar = tempArr.join('');
      }
      return tempVar;
    }

    this.randomCoord = function(){
      let a = (Math.floor(Math.random()*10));
      let b = (Math.floor(Math.random()*10));
      return [a,b];
      }
    }
  }
  //Creating two players. Appending tiles to boards.
  //const test = new Player('David','One');
  //test.makePlayerBoard();
  //const test2 = new Player('Computer','Two');
  //test2.makePlayerBoard();
  //test2.gameboard.computerPlaceShips();


  //placing ships on player one gameboard.s
  //test.gameboard.placeShips(test.gameboard.ships.carrierShip,00);
  //test.gameboard.placeShips(test.gameboard.ships.destroyerShip,11);
  //test.gameboard.placeShips(test.gameboard.ships.battleShip,22);
  //test.gameboard.placeShips(test.gameboard.ships.submarine,33);
  //test.gameboard.placeShips(test.gameboard.ships.patrolBoat,44);

  //test.gameboard.receiveAttack(00);
  //test.gameboard.receiveAttack(10);
  //test2.gameboard.receiveAttack(12);
  //console.log(test.gameboard.gameGrid);
  //console.log(test2.gameboard.gameGrid);
  ////test.displayHits();

  //test.displayShips();
  //test2.displayShips();


//still need a function to let computer randomly place ships.
//still need a function to change missed squares to grey.
  module.exports = Player;