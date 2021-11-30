const Gameboard = require('./gameboard');

class Player {
  constructor(name){
    this.name = name;
    this.gameboard = new Gameboard();
    this.attacks = [];
    this.newAttack = 0;

    this.turn = function(player,input){
      if(this.name == 'Computer'){
        input = this.randomCoord();
        return player.gameboard.receiveAttack(input.join(''));
      } else {
        input = input;
        return player.gameboard.receiveAttack(input);
      }
    }

    this.randomCoord = function(){
      let a = (Math.floor(Math.random()*10));
      let b = (Math.floor(Math.random()*10));
      return [a,b];
      }

    //this.trackRandomAttacks = function(input){
    //    for(let i = 0; i < this.attacks.length; i++){
    //      if (this.attacks[i][0])
    //    }
    //  }
    }
  }



  
  

module.exports = Player;