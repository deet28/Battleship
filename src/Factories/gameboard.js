const Ship = require ('./ship');
const BoardMaker = require('./../dom.js'); 

const playerOneBoard = document.querySelector('.player-board');
const playerTwoBoard = document.querySelector('.enemy-board');

class Gameboard {
  constructor(){
    this.ships = {};
    this.shipsPlaced = 0;
    this.missedShots = [];
    this.shipsSunk = 0;
    this.gameGrid = Array(10).fill().map(()=>Array(10).fill());

    this.ships.carrierShip = new Ship('Carrier',5);
    this.ships.destroyerShip = new Ship('Destroyer',4);
    this.ships.battleShip = new Ship ('Battle Ship',3);
    this.ships.submarine = new Ship ('Submarine',3);
    this.ships.patrolBoat = new Ship ('Patrol Boat',2);

    this.placeShips = function(ship,input){
      let coord = this.getCoord (input);
      let row = coord[0];
      let col = coord[1];
      
      
      if(ship.length + col > 10){
        return; 
      } else if (this.freeSpace(ship,row,col)===false){
        return;
      } else {
        for(let i = 0; i < ship.length; i++){
          this.gameGrid[row][col+i] = ship.name;
          let array = [];
          array[0] = row;
          array[1] = col+i;
        }
        this.shipsPlaced ++;
        return this.gameGrid;
      }
    }
    
    this.freeSpace = function(ship,row,col){
      let checkSpace = 0;
      for(let i = 0; i < ship.length; i++){
        if (this.gameGrid[row][col+i] === undefined){
          checkSpace++;
        }
        return checkSpace;
        }
        if (checkSpace === ship.length){
          return true;
        } else {
          return false;
      }
    }

    this.receiveAttack = function(input){
      let coords = this.getCoord(input);
      let row = coords[0];
      let col = coords[1];

      if(this.gameGrid[row][col] == undefined){
        let tempArray = [row,col];
        return this.missedShots.push(tempArray);
        } else {
        Object.values(this.ships).forEach(val => {
          if (val.name === this.gameGrid[row][col]){
            val.hit();
            return this.sunkShips();
          }
        })
      }
    }
    
    this.sunkShips = function (){
      Object.values(this.ships).forEach(val => {
        if (val.sunk === true){
          this.shipsSunk++;
          }
        })
          return this.shipsSunk;
      }

    this.allShipsSunk = function(){
      if (this.shipsSunk == 5){
          return true;
        } else {
          return false;
      }
    }
    
    this.getCoord = function(input){
      let array = [];
        if (input < 10){  
          array[0] = 0;
          array[1] = input;
        } else {
          let string = input.toString();
          let doubDigit = Array.from(string);
          array[0] = parseInt(doubDigit[0]);
          array[1] = parseInt(doubDigit[1]);
        }
        return array;
      }
    }
  } 





//original gameboard.

//class Gameboard {
//  constructor(){
//    this.missedShots = [];
//    this.ships = [];
//
//    this.carrierShip = new Ship('Carrier',5);
//    this.destroyerShip = new Ship('Destroyer',4);
//    this.battleShip = new Ship ('Battle Ship',3);
//    this.submarine = new Ship ('Submarine',3);
//    this.patrolBoat = new Ship ('Patrol Boat',2);
//  
//    this.placeShips = function(){
//
//    }
//    this.canPlace = function(){
//    
//    }
//    this.receiveAttack = function(){
//
//    }
//  }
//}

module.exports = Gameboard;