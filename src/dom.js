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

function playerCreation(){
  playerOne = new Player(enterName.value,'One');
  playerTwo = new Player('Computer','Two');
  playerOneBoard.classList.remove('hidden');
  playerTwoBoard.classList.remove('hidden');

  playerOne.makePlayerBoard();
  playerTwo.makePlayerBoard();

  clickToPlace();
  enterName.classList.add('hidden');
  submitName.classList.add('hidden');
  axisButton.classList.remove('hidden');
  
  return playerOne;
}

//need to make it so hover over grid to click function.

function dropShips(e){
  let place;
  for(let i = 0; i < playerOne.playerBoard.children.length;i++){
    if (e.target == playerOne.playerBoard.children[i]){
      place = i; 
    }
  }
  Object.values(playerOne.gameboard.ships).forEach(val => {
    if(val.placing == true){
      playerOne.gameboard.placeShips(val,place);
      playerOne.displayShips();
      return playerOne.gameboard;
    } 
  });
  console.log(place);
}

function clickToPlace(){
  for(let i = 0; i < playerOne.playerBoard.children.length; i++){
    playerOne.playerBoard.children[i].addEventListener('click',dropShips);
  }
}

makePlayer.addEventListener('click',startSetUp);
submitName.addEventListener('click',playerCreation);
axisButton.addEventListener('click',dropShips);

module.exports = dropShips;

