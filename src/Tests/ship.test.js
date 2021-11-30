const Ship = require('./../Factories/ship.js');

test('Making a ship', () => {
  const carrierShip = new Ship('Carrier',5);
  expect(carrierShip.name).toBe('Carrier');
  expect(carrierShip.length).toBe(5);
  expect(carrierShip.hits).toBe(0);
});

test('Hitting a ship',() => {
  const carrierShip = new Ship('Carrier',5);
  carrierShip.hit();
  expect(carrierShip.hits).toEqual(1);
});

test('Sinking a ship',() => {
  const patrolBoat = new Ship('Patrol Boat',2);
  patrolBoat.hit();
  patrolBoat.hit();
  expect(patrolBoat.sunk).toBe(true);
});