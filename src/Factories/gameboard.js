const Ship = require ('./ship');
const Player = require('./player.js');

class Gameboard {
  constructor(){
    this.ships = {};
    this.shipsPlaced = 0;
    this.missedShots = [];
    this.shipsSunk = 0;
    this.xAxis = true;
    this.gameGrid = Array(10).fill().map(()=>Array(10).fill());
    let placeCount = 0;

    this.ships.carrierShip = new Ship('Carrier',5,true);
    this.ships.destroyerShip = new Ship('Destroyer',4,false);
    this.ships.battleShip = new Ship ('Battleship',3,false);
    this.ships.submarine = new Ship ('Submarine',3,false);
    this.ships.patrolBoat = new Ship ('Patrol Boat',2,false);

    this.changeShip = function(input){
      let tempVar = 0;
      Object.values(input).forEach(val => {
        if(val.placing == true){
          val.placing = 'placed';
         }
      });
      Object.values(input).forEach(val => {
        while(tempVar < 1){
          if(val.placing === false){
            val.placing = true;
            tempVar++;
          }
          return tempVar;
        }
      });
    }

    this.placeShips = function(ship,input){
      if (this.xAxis === true){
        let coord = this.getCoord (input);
        let row = coord[0];
        let col = coord[1];
        if(ship.length + col > 10){
          return false; 
        } else if (this.freeSpaceX(ship,row,col) === false){
          return false;
        } else {
          for(let i = 0; i < ship.length; i++){
            this.gameGrid[row][col+i] = ship.name;
            let array = [];
            array[0] = row;
            array[1] = col+i;
          }
          this.shipsPlaced ++;
          this.changeShip(this.ships);
          return this.gameGrid;
        } 
        } else if(this.xAxis === false){  
          let coord = this.getCoord (input);
          let row = coord[0];
          let col = coord[1];
        if (ship.length + row > 10){
          return false;
        } else if (this.freeSpaceY(ship,row,col) === false){
          return false;
        } else {
          for(let i = 0; i < ship.length; i++){
            this.gameGrid[row+i][col] = ship.name;
          }
          this.shipsPlaced++;
          this.changeShip(this.ships);
          return this.gameGrid;
        }  
      }
    }
    
    this.freeSpaceX = function(ship,row,col){
      let checkSpace = 0;
        for(let i = 0; i < ship.length; i++){
          if (this.gameGrid[row][col+i] === undefined){
            checkSpace++;
          }
        }
          if(checkSpace === ship.length){
            checkSpace = 0;
            return true;
          }else{
          return false;
        } 
      }
      this.freeSpaceY = function(ship,row,col){
        let checkSpace = 0;
        for(let i = 0; i < ship.length; i++){
          if(this.gameGrid[row+i][col] === undefined){
            checkSpace++;
          }
        }
          if(checkSpace === ship.length){
            checkSpace = 0;
            return true;
          } else {
            return false;
        }
      }

    this.computerPlaceShips = function(){
      let input;
      Object.values(this.ships).forEach(val => {
      inner:while(placeCount < 5){
      let random = this.randomCoords();
      if (random[0] === 0){
      input = random[1];
      } else {
      input = random.join('');
      this.randomAxis();
       if(this.placeShips(val,input)===false){
        continue inner;
      } else {
        this.placeShips(val,input);
        placeCount++;
        return this.gameGrid;
          } 
        }  
      }
    });
  }
    this.receiveAttack = function(input){
      let coords;
      let row;
      let col;
      if (this.getCoord(input)==false){
        row = input[0];
        col = input[1];
      } else {
        coords = this.getCoord(input);
        row = coords[0];
        col = coords[1];
      }
      if(this.gameGrid[row][col] == undefined){
        let miss = [row,col];
        this.gameGrid[row][col] = 'miss';
        this.missedShots.push(miss);
        } else {
        Object.values(this.ships).forEach(val => {
          if (val.name == this.gameGrid[row][col]){
            val.hit();
            this.gameGrid[row][col] = 'hit';
            this.sunkShips();
          }
        })
      }
      return this.gameGrid;
    }

    this.sunkShips = function (){
      Object.values(this.ships).forEach(val => {
        if (val.sunk === true){
          this.shipsSunk++;
          }
        });
      }

    this.allShipsSunk = function(){
      if (this.shipsSunk === 5){
          return true;
        } else {
          return false;
      }
    }
    
    this.getCoord = function(input){
      let array =[];
      if(Array.isArray(input)){
        return false;
      } else if(input[1]<0) {
        return false;
      } else {
        if(input < 10){
          array[0] = 0;
          array[1] = input;
        } else {
          let string = input.toString();
          let doubDigit = Array.from(string);
          array[0] = parseInt(doubDigit[0]);
          array[1] = parseInt(doubDigit[1]);
        }
      }
        return array;
      }
      
      this.randomCoords = function(){
        let a = (Math.floor(Math.random()*10));
        let b = (Math.floor(Math.random()*10));
        return [a,b];
      }
      this.randomAxis = function(){
        let a = (Math.floor(Math.random()*2));
        if (a < 1){
          this.xAxis = false;
        } else {
          this.xAxis = true;
        }
        return this.xAxis;
      }
      this.changeAxis = function (){
        if(this.xAxis === true){
          this.xAxis = false;
        } else {
          this.xAxis = true;
        }
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