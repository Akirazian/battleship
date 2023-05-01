import gameboard from "./gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.board = gameboard();
  }

  attack(player, x, y) {
    return player.board.receiveAttack(x, y);
  }
}

class ComputerPlayer extends Player {
  name = 'Computer'

  #getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(9);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  #checkLegal(player, x, y) {
    let board = player.board.getBoard();
    if (board[x][y] == null) return true;
    if (board[x][y] == 'miss' || board[x][y].hit == true) {
      return false;
    }
  }

  randomPlaceShip() {
    let lengthArray = [5, 4, 3, 3, 2];
    for (let i = 0; i < 5; i++) {
      let x, y, axis;
      do {
        x = this.#getRandomInt();
        y = this.#getRandomInt();
        axis = this.#getRandomInt() >= 5 ? 'x' : 'y';
      } while (this.board.placeShip(lengthArray[i], [x, y], axis) != "success");
    }
  }

  randomAttack(player) {
    let x, y;
    do {
      x = this.#getRandomInt();
      y = this.#getRandomInt();
    } while (this.#checkLegal(player, x, y) == false);
    return this.attack(player, x, y);
  }
}

export {
  Player,
  ComputerPlayer
} 