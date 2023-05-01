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

    display.activatePlacement();    
    if (computer == true) {
      two.randomPlaceShip();
    }
  }

  const startGame = () => {
    display.renderPlayer(activePlayer);
    display.renderEnemy(enemyPlayer);
    display.activateBoard();
  }

  const placeShip = (e, shipLength) => {
    let x = Number(e.target.dataset.coord[0]);
    let y = Number(e.target.dataset.coord.slice(-1));
    if (activePlayer.board.placeShip(Number(shipLength), [x, y], 'x') != 'success') return;
    display.renderPlayer(activePlayer);
    return 'success';
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
      }, 1000);
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
    startGame,
    attack,
    placeShip
  }
})();

export default game