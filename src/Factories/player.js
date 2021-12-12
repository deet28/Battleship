const Gameboard = require('./gameboard');

const playerOneBoard = document.querySelector('.player-one-board');
const playerTwoBoard = document.querySelector('.player-two-board');

class Player {
  constructor(name,player){
    this.name = name;
    this.player = player;
    this.gameboard = new Gameboard();
    this.attacks = [];
    this.trackedAttacksAI = [];
    this.hitsArray = [];
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
        let input = this.computerAI();
        if(!(this.computerAttackCheck(input))===false){
          newAttack = input;
          this.trackedAttacksAI.push(parseInt(newAttack.join('')));
          this.attacks.push(newAttack)
          console.log(input);
          return newAttack;
        } else {
          outer:while(tempCount < 1){
          let input = this.randomCoord();
          if(this.computerAttackCheck(input)===false){
          continue outer;
        } else {
            newAttack = input;
            this.trackedAttacksAI.push(parseInt(newAttack.join('')));
            tempCount++;
            this.attacks.push(newAttack);
            tempCount = 0;
            return newAttack;
          }
        }
        
      } 
    };
      this.computerAttackCheck = function(input){
        if(input === undefined){
          return false;
        }
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
      this.computerAI = function(){
        let array = [];
        for(let i = 0; i < playerOneBoard.children.length;i++){
          if (playerOneBoard.children[i].classList.contains('attack-landed')){
            if(this.hitsArray.includes(i)===false){
              this.hitsArray.push(i);
            }
        for(let i = 0; i < playerOneBoard.children.length;i++){
          if (playerOneBoard.children[i].classList.contains('attack-landed')){
            if(this.hitsArray.includes(i+1)===false && this.trackedAttacksAI.includes(i+1)===false && (i < 99)){
              let right = i+1;
              let coords = this.gameboard.getCoord(right);
              array[0] = parseInt(coords[0]);
              array[1] = parseInt(coords[1]);
              this.hitsArray.push(right);
              return array;
            } else if (this.hitsArray.includes(i-1)===false && this.trackedAttacksAI.includes(i-1)===false && (i > 0)){
              let left = i-1;
              console.log(left);
              let coords = this.gameboard.getCoord(left);
              array[0] = parseInt(coords[0]);
              array[1] = parseInt(coords[1]);
              this.hitsArray.push(left);
              return array;
            } else if (this.hitsArray.includes(i+10)===false && this.trackedAttacksAI.includes(i+10)===false && (i < 90)){
                let down = i+10;
                let coords = this.gameboard.getCoord(down);
                array[0] = parseInt(coords[0]);
                array[1] = parseInt(coords[1]);
                this.hitsArray.push(down);
                return array;
            } else if (this.hitsArray.includes(i-10)===false && this.trackedAttacksAI.includes(i-10)===false && (i > 9)){
                let up = i-10;
                let coords = this.gameboard.getCoord(up);
                array[0] = parseInt(coords[0]);
                array[1] = parseInt(coords[1]);
                this.hitsArray.push(up);
                return array;
              }
            }
          }
        }
      } 
      return;
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


