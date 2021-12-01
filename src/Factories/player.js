const Gameboard = require('./gameboard');

class Player {
  constructor(name){
    this.name = name;
    this.gameboard = new Gameboard();
    this.attacks = [];
    let newAttack;
    let tempCount = 0;;

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
      };
        this.attacks.push(newAttack);
        tempCount--;
        return newAttack;
      }
      
    }

    this.randomCoord = function(){
      let a = (Math.floor(Math.random()*10));
      let b = (Math.floor(Math.random()*10));
      return [a,b];
      }
    }
  }



  
  

module.exports = Player;