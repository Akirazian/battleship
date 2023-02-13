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
  name = 'Computer';
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  randomAttack(player) {
    return super.attack(player, this.getRandomInt(0, 9), this.getRandomInt(0, 9));
  }
}

export {
  Player,
  ComputerPlayer
} 