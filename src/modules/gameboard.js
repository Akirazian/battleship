import shipFactory from "./ship";

function gameboard() {
  let board = []
  let ships = [];
  for (let i = 0; i < 10; i++) {
    board.push([]);
    for (let j = 0; j < 10; j++) {
      board[i].push(null);
    }
  }

  let placeShip = (length, coord, axis) => {
    let newShip = shipFactory(length);
    //Prevents placing ship out of bounds
    if (axis === 'x' && (length + coord[0] - 1) > 9) return;
    if (axis === 'y' && (length + coord[1] - 1) > 9) return;
    if (board[coord[0]][coord[1]] != null) return;

    if (axis === 'y') {
      for (let i = 0; i < length; i++) {
        if (board[coord[0] + i][coord[1]] != null) return;
        board[coord[0] + i][coord[1]] = { ship: newShip, hit: false };
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (board[coord[0]][coord[1] + i] != null) return;
        board[coord[0]][coord[1] + i] = { ship: newShip, hit: false }
      }
    }
    ships.push(newShip);
  }

  let receiveAttack = (x, y) => {
    let position = board[y][x];
    if(position) {
      if (position.hit === true) return; //Prevents hitting same spot
      position.hit = true;
      position.ship.hit();
      return position.ship.getHits();
    }
    return position = 'miss';
  }

  let allSunk = () => {
    if (ships.every((ship) => ship.isSunk())) return true;
    return false;
  }

  let getBoard = () => {
    return board;
  }

  let getShips = () => {
    return ships;
  }

  return {
    getBoard,
    getShips,
    placeShip,
    receiveAttack,
    allSunk
  }
}

export default gameboard