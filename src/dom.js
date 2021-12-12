const Gameboard = require ('./Factories/gameboard.js');
const Player = require('./Factories/player');

const makePlayer = document.querySelector('.make-player');
const enterName = document.querySelector('.enter-name');
const submitName = document.querySelector('.submit');
const axisButton = document.querySelector('.axis-button');
const playerOneBoard = document.querySelector('.player-one-board');
const playerTwoBoard = document.querySelector('.player-two-board');
const gameText = document.querySelector('.game-text');
const restartButton = document.querySelector('.restart');
let playerOne;
let playerTwo;

//Game set up and player creation.

function startSetUp(){
  enterName.classList.remove('hidden');
  makePlayer.classList.add('hidden');
  submitName.classList.remove('hidden');
  return enterName;
}
function playerOneCreation(){
  let name = nameCheck(enterName.value);  
  playerOne = new Player(name,'One');
  playerTwo = new Player('Computer','Two');
  playerOneBoard.classList.remove('hidden');
  playerTwoBoard.classList.remove('hidden');
  let playerOneName = document.querySelector('.player-one-name');
  playerOneName.textContent = name;
  playerOne.makePlayerBoard();
  clickToPlace();
  
  enterName.classList.add('hidden');
  submitName.classList.add('hidden');
  axisButton.classList.remove('hidden');
  gameText.textContent = 'Click to place your ships.'
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
    let playerTwoName = document.querySelector('.player-two-name');
    playerTwoName.textContent = 'Computer';
    axisButton.classList.add('hidden');
    gameText.textContent = 'Attack the computer board!'
};

function nameCheck(input){
  let name;
  let regex = new RegExp(/^computer$/gi);
  if(regex.test(input)===true){
    name = 'Imposter!';
    return name;
  } else {
    name = input;
    return name;
  }
}

//Gameplay functionality.
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
      playerTwo.displayShips();
      checkWinner(playerOne);
      checkWinner(playerTwo);
      playerTwoBoard.classList.add('board-disable');
      }
      setTimeout(playerTwoTurn,500);
    }
function playerTwoTurn(){
    playerTwo.turn(playerOne);
    playerOne.playerTurn = true;
    checkWinner(playerOne);
    checkWinner(playerTwo);
    playerOne.displayShips();
    playerTwoBoard.classList.remove('board-disable');
}

function checkWinner(input){
  let count = 0; 
  Object.values(input.gameboard.ships).forEach (val => {
    if (val.sunk == true){
      count ++;
    };
    if (count === 5){
      gameText.textContent = `${input.name} has lost! All of their ships have been destroyed!`;
          for (let i = 0; i < playerOne.playerBoard.children.length; i++){
          playerOne.playerBoard.children[i].removeEventListener('click',gamePlay);
          for (let i = 0; i < playerTwo.playerBoard.children.length; i++){
          playerTwo.playerBoard.children[i].removeEventListener('click',gamePlay);
          playerTwoBoard.classList.add('board-disable');
          restartButton.classList.remove('hidden');
          restartButton.addEventListener('click',playAgain);

        }
      }
    }
  })
}

//Placing ships on gameboard.

function clickToPlace(){
  for(let i = 0; i < playerOne.playerBoard.children.length; i++){
    playerOne.playerBoard.children[i].addEventListener('click',dropShips);
    playerOne.playerBoard.children[i].addEventListener('mouseover',showHover);
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
      if(val.placing === true){
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

//Showing and removing hover over squares when placing ships.

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
            playerOne.playerBoard.children[i].classList.add('no-room');
          } else{
            for(let i = 0; i < tempLength; i++){
               playerOne.playerBoard.children[place+i].classList.add('piece-hover');
            }
          }
        }
      }
    } else if(playerOne.gameboard.xAxis === false){
      for(let i = 0; i < playerOne.playerBoard.children.length; i++){
        if(e.target == playerOne.playerBoard.children[i]){
          place = i;
            if(noOverLapHoverY(tempLength,place)===false){
            playerOne.playerBoard.children[i].classList.add('no-room');
          } else {
          for(let i = 0; i < tempLength; i++){
            let tempArr = [i,0];
            let tempVar = parseInt(tempArr.join(''));
            playerOne.playerBoard.children[place+tempVar].classList.add('piece-hover');
            }
          }
        }
      }
    }
  });
}

function removeHover(){
  for(let i = 0; i < playerOne.playerBoard.children.length;i++){
      playerOne.playerBoard.children[i].classList.remove('piece-hover');
      playerOne.playerBoard.children[i].classList.remove('no-room');
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

function playAgain(){
    window.location.reload();
}


makePlayer.addEventListener('click',startSetUp);
submitName.addEventListener('click',playerOneCreation);
axisButton.addEventListener('click',changeAxis);

//module.exports = playerOneCreation();