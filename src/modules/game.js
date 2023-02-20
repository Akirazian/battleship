import { Player, ComputerPlayer } from "./player";
import display from "./display";

const game = (() => {
  let computer = false;
  let one, two, activePlayer;


  const newGame = (playerOne, playerTwo = 'computer') => {
    one = new Player(playerOne);
    if (playerTwo == 'computer') {
      two = new ComputerPlayer();
      computer = true;
    } else {
      two = new Player(playerTwo);
    }
    activePlayer = one;

    //Predetermined test positions
    one.board.placeShip(5, [0, 0], 'y');
    one.board.placeShip(4, [2, 9], 'x');
    one.board.placeShip(3, [7, 2], 'y');
    one.board.placeShip(3, [4, 7], 'x');
    one.board.placeShip(2, [2, 3], 'x'); //test ship
    two.board.placeShip(5, [0, 0], 'y');
    two.board.placeShip(4, [2, 9], 'x');
    two.board.placeShip(3, [7, 2], 'y');
    two.board.placeShip(3, [4, 7], 'x');
    two.board.placeShip(2, [2, 3], 'x');
    display.createGrid();
    display.renderPlayer(one);
    display.renderEnemy(two);
    display.activateBoard();
  }

  const attack = (e) => {
    activePlayer.attack(two, e.target.dataset.coord[0], e.target.dataset.coord.slice(-1));
    display.renderEnemy(two);
    console.log(_checkWinner());
  }

  const _checkWinner = () => {
    if (one.board.allSunk()) return 'Two Wins!'
    if (two.board.allSunk()) return 'One wins!'
  }
  
  return {
    newGame,
    attack,
  }
})();

export default game