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
      this.playerTurn = true;
    } else {
      this.playerBoard = playerTwoBoard;
      this.playerTurn = false;
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
        } else if (!(this.gameboard.gameGrid[i][j] == undefined)&&this.player == 'One'){
           let iter = this.translateCoord(i,j);
           this.playerBoard.children[iter].classList.add('piece-placed');
          }
        } 
      }
      return this.playerBoard;
    }
    this.turn = function(player,input){
      if(this.name == 'Computer'){
        let tempAttack = this.computerAttack();
        player.gameboard.receiveAttack(tempAttack);
        tempAttack = 0;
      } else {
        input = input;
        player.gameboard.receiveAttack(input);
      }
    }
    this.computerAttack = function(){
      outer:while(tempCount < 1){
        let input = this.randomCoord();
        console.log(input);
        if(this.computerAttackCheck(input)===false){
          continue outer;
        } else {
            newAttack = input;
            tempCount++;
            this.attacks.push(newAttack);
            tempCount = 0;
            console.log(this.attacks);
            return newAttack;
          }
        }
      };
      this.computerAttackCheck = function(input){
        let counter = 0;
        if (this.attacks.length === 0){
          return true;
        } else {
          for(let i = 0; i < this.attacks.length;i++){
            let attack = this.attacks[i];
            if(this.arrayEquality(input,attack)===false){
              counter++;
              }
            }
            if(counter == this.attacks.length){
              return true;
          } else {
            return false;
          }
        } 
      }
      
      this.arrayEquality = function(a,b){
        return Array.isArray(a) &&
          Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index]);
      }
      this.translateCoord = function(i,j){
        let tempArr = [];
        tempArr.push(i);
        tempArr.push(j);
        let tempVar = 0;
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
  module.exports = Player;

  //original computer attack function.

  //    this.computerAttack = function(){
//      inner:while(tempCount < 1 ){
//        let input = this.randomCoord();
//        console.log(input);
//        for(let i = -1; i < this.attacks.length; i++){
//          if((`${[input]}` == `${this.attacks[i]}`)){
//            console.log(input);
//            continue inner;
//           } else {
//            newAttack = input;
//            tempCount++;
//            this.attacks.push(newAttack);
//            tempCount--;
//            console.log(this.attacks);
//            return newAttack;
//          }
//      };
//    }
//  }
