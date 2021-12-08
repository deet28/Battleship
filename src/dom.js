const Gameboard = require ('./Factories/gameboard.js');
const Player = require('./Factories/player');

const makePlayer = document.querySelector('.make-player');
const enterName = document.querySelector('.enter-name');
const submitName = document.querySelector('.submit');
const axisButton = document.querySelector('.axis-button');
const playerOneBoard = document.querySelector('.player-one-board');
const playerTwoBoard = document.querySelector('.player-two-board');
let playerOne;
let playerTwo;

function startSetUp(){
  enterName.classList.remove('hidden');
  makePlayer.classList.add('hidden');
  submitName.classList.remove('hidden');
  return enterName;
}

function playerOneCreation(){
  playerOne = new Player(enterName.value,'One');
  playerTwo = new Player('Computer','Two');
  playerOneBoard.classList.remove('hidden');
  playerTwoBoard.classList.remove('hidden');
  playerOne.makePlayerBoard();
  clickToPlace();
  enterName.classList.add('hidden');
  submitName.classList.add('hidden');
  axisButton.classList.remove('hidden');
  return playerOne;
}

function playerTwoCreation(){
  playerTwo = new Player('Computer','Two');
  playerTwo.makePlayerBoard();
  playerTwoBoard.classList.remove('hidden');
  playerTwo.gameboard.computerPlaceShips();
  playerTwo.displayShips();
    for(let i = 0; i < playerTwo.playerBoard.children.length;i++){
      playerOne.playerBoard.children[i].classList.remove('place-ship-tile');
      playerTwo.playerBoard.children[i].classList.add('attack-ship-tile')
      playerTwo.playerBoard.children[i].addEventListener('click',gamePlay);
    }
  axisButton.classList.add('hidden');
};

function gamePlay(e){
  if(playerOne.playerTurn == true){
    let attacked = playerTwo;
    let coord;
    for (let i = 0; i < playerTwo.playerBoard.children.length;i++){
      if (e.target == playerTwo.playerBoard.children[i]){
        coord = i;
        playerTwo.playerBoard.children[i].removeEventListener('click',gamePlay);
      }
    }
    playerOne.turn(attacked,coord);
    playerOne.playerTurn = false;
    playerTwo.turn(playerOne);
    playerOne.playerTurn = true;
  }
  playerOne.displayShips();
  playerTwo.displayShips();
}

function clickToPlace(){
  for(let i = 0; i < playerOne.playerBoard.children.length; i++){
    playerOne.playerBoard.children[i].addEventListener('click',dropShips);
    playerOne.playerBoard.children[i].addEventListener('mouseover',showHover)
    playerOne.playerBoard.children[i].addEventListener('mouseleave',removeHover);
  }
}

function dropShips(e){
  let place;
  for(let i = 0; i < playerOne.playerBoard.children.length;i++){
    if (e.target==playerOne.playerBoard.children[i]){
      place = i; 
    }
  }
  Object.values(playerOne.gameboard.ships).forEach(val => {
    if(val.placing == true){
      playerOne.gameboard.placeShips(val,place);
      playerOne.displayShips();
      if(playerOne.gameboard.shipsPlaced===5){
        playerTwoCreation();
      }
      return playerOne.gameboard;
    } 
  });
}

function changeAxis () {
  if(playerOne.gameboard.xAxis == true){
    playerOne.gameboard.xAxis = false;
  } else {
    playerOne.gameboard.xAxis = true;
  }
}

function showHover(e){
  let tempLength;
  let place;
    Object.values(playerOne.gameboard.ships).forEach(val => {
      if(val.placing == true){
        tempLength = val.length;
      } 
      if(playerOne.gameboard.xAxis === true){
        for(let i = 0; i < playerOne.playerBoard.children.length; i++){
          if(e.target == playerOne.playerBoard.children[i]){
            place = i;
            if(noOverLapHoverX(tempLength,place)===false){
            playerOne.playerBoard.children[i].classList.add('red-test');
          } else{
            for(let i = 0; i < tempLength; i++){
               playerOne.playerBoard.children[place+i].classList.add('test');
            }
          }
        }
      }
    } else if(playerOne.gameboard.xAxis === false){
      for(let i = 0; i < playerOne.playerBoard.children.length; i++){
        if(e.target == playerOne.playerBoard.children[i]){
          place = i;
            if(noOverLapHoverY(tempLength,place)===false){
            playerOne.playerBoard.children[i].classList.add('red-test');
          } else {
          for(let i = 0; i < tempLength; i++){
            let tempArr = [i,0];
            let tempVar = parseInt(tempArr.join(''));
            playerOne.playerBoard.children[place+tempVar].classList.add('test');
            }
          }
        }
      }
    }
  });
}

function removeHover(){
  for(let i = 0; i < playerOne.playerBoard.children.length;i++){
      playerOne.playerBoard.children[i].classList.remove('test');
      playerOne.playerBoard.children[i].classList.remove('red-test');
   }
}

function noOverLapHoverX (input,coord){
  let tempVar = coord.toString();
    if(input === 5){
      if(tempVar.endsWith(6)===true 
        ||tempVar.endsWith(7)===true
        ||tempVar.endsWith(8)===true
        ||tempVar.endsWith(9)===true){
          return false;    
        }}
    else if (input === 4){
      if(tempVar.endsWith(7)===true
        ||tempVar.endsWith(8)===true
        ||tempVar.endsWith(9)===true){
          return false;
        }} 
    else if (input === 3){
      if (tempVar.endsWith(8)===true
        ||tempVar.endsWith(9)===true){
          return false;
        }} 
    else if (input === 2){
      if(tempVar.endsWith(9)===true){
          return false;
      }
    }
};

function noOverLapHoverY (input,coord){
    let tempVar = coord.toString();
      if(input === 5){
        if(tempVar.startsWith(6)===true 
          ||tempVar.startsWith(7)===true
          ||tempVar.startsWith(8)===true
          ||tempVar.startsWith(9)===true){
            return false;    
          }}
      else if (input === 4){
        if(tempVar.startsWith(7)===true
          ||tempVar.startsWith(8)===true
          ||tempVar.startsWith(9)===true){
            return false;
          }} 
      else if (input === 3){
        if (tempVar.startsWith(8)===true
          ||tempVar.startsWith(9)===true){
            return false;
          }} 
      else if (input === 2){
        if(tempVar.startsWith(9)===true){
            return false;
      }
    }
};


makePlayer.addEventListener('click',startSetUp);
submitName.addEventListener('click',playerOneCreation);
axisButton.addEventListener('click',changeAxis);

module.exports = dropShips;



//this.computerAttack = function(){
//  outer:while(tempCount < 1 ){
//    attackCount = 0;
//    let input = this.randomCoord();
//    console.log(input);
//    for(let i = -1; i < this.attacks.length; i++){
//      let a = this.attacks[i];
//        if (this.arrayEquality(input,a)===false){
//          attackCount++;
//        } if (attackCount < this.attacks.length-1){
//          continue outer;
//        } else {
//        newAttack = input;
//        tempCount++;
//        this.attacks.push(newAttack);
//        tempCount = 0;
//        attackCount = 0;
//        console.log(this.attacks);
//        return newAttack;
//      }
//    }
//  };
//}