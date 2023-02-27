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

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  checkLegal(player, x, y) {
    let board = player.board.getBoard();
    if (board[x][y] == null) return true;
    if (board[x][y] == 'miss' || board[x][y].hit == true) {
      return false;
    }
  }

  randomAttack(player) {
    let x, y;
    do {
      x = this.getRandomInt(0, 9);
      y = this.getRandomInt(0, 9);
    } while (this.checkLegal(player, x, y) == false);
    return super.attack(player, x, y);
  }
}

export {
  Player,
  ComputerPlayer
} 