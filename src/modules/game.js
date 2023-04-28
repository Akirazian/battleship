import { Player, ComputerPlayer } from "./player";
import display from "./display";

const game = (() => {
  let computer = false;
  let one, two, activePlayer, enemyPlayer;

  const newGame = (playerOne, playerTwo = 'computer') => {
    one = new Player(playerOne);
    if (playerTwo == 'computer') {
      two = new ComputerPlayer();
      computer = true;
    } else {
      two = new Player(playerTwo);
    }
    activePlayer = one;
    enemyPlayer = two;

    //Predetermined test positions
    one.board.placeShip(5, [0, 0], 'y');
    one.board.placeShip(4, [2, 9], 'x');
    one.board.placeShip(3, [7, 2], 'y');
    one.board.placeShip(3, [4, 7], 'x');
    one.board.placeShip(2, [2, 3], 'x');
    
    if (computer == true) {
      two.randomPlaceShip();
    }

    display.createGrid();
    display.renderPlayer(one);
    display.renderEnemy(two);
    display.activateBoard();
  }

  const attack = (e) => {
    activePlayer.attack(enemyPlayer, e.target.dataset.coord[0], e.target.dataset.coord.slice(-1));
    display.renderEnemy(enemyPlayer);
    display.deactivateBoard();
    if (_checkWinner()) return;
    if (computer == true) {
      setTimeout(() => {
        two.randomAttack(one);
        display.renderPlayer(one);
        display.activateBoard();
      }, 1000)
    }
  }

  const _checkWinner = () => {
    if (one.board.allSunk()) {
      display.callWinner(two);
      return true;
    }
    if (two.board.allSunk()) {
      display.callWinner(one);
      return true;
    }
    return false;
  }
  
  return {
    newGame,
    attack,
  }
})();

export default game