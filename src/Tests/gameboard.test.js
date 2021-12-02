const Gameboard = require('./../Factories/gameboard');

test('Adding all ships to the gameboard', () => {
  const playerShips = new Gameboard();
  expect(playerShips.ships.carrierShip.name).toBe('Carrier');
  expect(playerShips.ships.battleShip.length).toBe(3);
});

test('Placing ships on gameboard (single digit coordinate)',() =>{
  const playerShips = new Gameboard();
  playerShips.placeShips(playerShips.ships.battleShip,2);
  expect(playerShips.gameGrid[0][2]).toBe('Battle Ship');
  expect(playerShips.gameGrid[0][3]).toBe('Battle Ship');
  expect(playerShips.gameGrid[0][4]).toBe('Battle Ship');
});

test('Placing ships on gameboard (double digit coordinate)',()=>{
  const playerShips = new Gameboard();
  playerShips.placeShips(playerShips.ships.battleShip,17);
  expect(playerShips.gameGrid[1][7]).toBe('Battle Ship');
  expect(playerShips.gameGrid[1][8]).toBe('Battle Ship');
  expect(playerShips.gameGrid[1][9]).toBe('Battle Ship');
});

test('Incrementing placed ships variable whenever a ship is placed',() => {
  const playerShips = new Gameboard();
  playerShips.placeShips(playerShips.ships.carrierShip,14);
  playerShips.placeShips(playerShips.ships.patrolBoat,34);
  expect(playerShips.shipsPlaced).toBe(2);
})

test('Ships cannot start out on one row and end in another', () => {
  const playerShips = new Gameboard();
  playerShips.placeShips(playerShips.ships.battleShip,18);
  expect(playerShips.gameGrid[1][8]).toBe(undefined);
  expect(playerShips.shipsPlaced).toBe(0);
});

test('Ships cannot be placed on taken squares',() => {
  const playerShips = new Gameboard();
  playerShips.placeShips(playerShips.ships.battleShip,10);
  playerShips.placeShips(playerShips.ships.carrierShip,11);
  expect(playerShips.gameGrid[1][0]).toBe('Battle Ship');
  expect(playerShips.gameGrid[1][1]).toBe('Battle Ship');
  expect(playerShips.gameGrid[1][2]).toBe('Battle Ship');
});

test('Gameboard recording attacks that hit ships',() => {
  const playerShips = new Gameboard();
  playerShips.placeShips(playerShips.ships.battleShip,10);
  playerShips.placeShips(playerShips.ships.patrolBoat,30);
  playerShips.receiveAttack(10);
  playerShips.receiveAttack(12);
  playerShips.receiveAttack(31);
  expect(playerShips.ships.battleShip.hits).toBe(2);
  expect(playerShips.ships.patrolBoat.hits).toBe(1);
});

test('Gameboard recording missed attacks',() => {
  const playerShips = new Gameboard();
  playerShips.placeShips(playerShips.ships.patrolBoat,40);
  playerShips.receiveAttack(13);
  playerShips.receiveAttack(30);
  
  expect(playerShips.missedShots[0]).toEqual([1,3]);
  expect(playerShips.missedShots[1]).toEqual([3,0]);
  expect(playerShips.missedShots).toEqual([[1,3],[3,0]]);
});

test('Gameboard recording ships that have sunk',() => {
  const playerShips = new Gameboard();
  playerShips.ships.patrolBoat.hit();
  playerShips.ships.patrolBoat.hit();
  playerShips.sunkShips();
  expect(playerShips.shipsSunk).toEqual(1);
});

test('Gameboard knows all ships have sunk',()=>{
  const playerShips = new Gameboard();
  playerShips.ships.patrolBoat.hit();
  playerShips.ships.patrolBoat.hit();
  playerShips.ships.submarine.hit();
  playerShips.ships.submarine.hit();
  playerShips.ships.submarine.hit();
  playerShips.ships.battleShip.hit();
  playerShips.ships.battleShip.hit();
  playerShips.ships.battleShip.hit();
  playerShips.ships.destroyerShip.hit();
  playerShips.ships.destroyerShip.hit();
  playerShips.ships.destroyerShip.hit();
  playerShips.ships.destroyerShip.hit();
  playerShips.ships.carrierShip.hit();
  playerShips.ships.carrierShip.hit();
  playerShips.ships.carrierShip.hit();
  playerShips.ships.carrierShip.hit();
  playerShips.ships.carrierShip.hit();
  playerShips.sunkShips();
  expect(playerShips.allShipsSunk()).toBe(true);
});


test('Gameboard knows all ships have not sunk',()=>{
  const playerShips = new Gameboard();
  playerShips.sunkShips();
  expect(playerShips.allShipsSunk()).toBe(false);
});






//UNSURE IF NECESSARY
//test('Storing ship coordinates in separate array',() => {
//  const playerShips = new Gameboard();
//  playerShips.placeShips(playerShips.ships.battleShip,17);
//  expect(playerShips.shipCoords[0]).toBe('Battle Ship [1,7]');
//  expect(playerShips.shipCoords[1]).toBe('Battle Ship [1,8]');
//})
//UNSURE IF NECESSARY ^
