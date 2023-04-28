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
    let x = coord[0];
    let y = coord[1];
    //Prevents placing ship out of bounds
    if (axis === 'x' && (length + x - 1) > 9) return;
    if (axis === 'y' && (length + y - 1) > 9) return;
    if (board[x][y] != null) return "occupied";

    if (axis === 'x') {
      for (let i = 0; i < length; i++) {
        if (board[x + i][y] != null) return "occupied";
      }
      for (let i = 0; i < length; i++) {
        board[x + i][y] = { ship: newShip, hit: false };
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (board[x][y + i] != null) return "occupied";
      }
      for (let i = 0; i < length; i++) {
        board[x][y + i] = { ship: newShip, hit: false }
      }
    }
    ships.push(newShip);
    return 'success';
  }

  let receiveAttack = (x, y) => {
    let position = board[x][y];
    if(position) {
      if (position.hit === true) return;
      position.hit = true;
      position.ship.hit();
      return position.ship.getHits();
    }
    return board[x][y] = 'miss';
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