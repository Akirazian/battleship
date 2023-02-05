import shipFactory from "./ship";

function gameboard() {
  let board = []
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

    if (axis === 'x') {
      for (let i = 0; i < length; i++) {
        board[coord[0] + i][coord[1]] = newShip;
      }
    } else {
      for (let i = 0; i < length; i++) {
        board[coord[0]][coord[1] + i] = newShip;
      }
    }
  }

  let receiveAttack = (coord) => {
    let position = board[coord[0]][coord[1]]
    if(position) {
      return position.hit();
    }
    return position = 'miss';
  }

  return {
    board,
    placeShip,
    receiveAttack
  }
}

export default gameboard