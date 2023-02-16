import { Player, ComputerPlayer } from "./player";

const game = (playerOne, playerTwo = 'computer') => {
  let computer = false;
  let one = new Player(playerOne);
  let two;
  if (playerTwo == 'computer') {
    two = new ComputerPlayer();
    computer = true;
  } else {
    two = new Player(playerTwo);
  }

  const newGame = () => {
    //Predetermined test positions
    one.board.placeShip(5, [0, 0], 'y');
    one.board.placeShip(4, [5, 5], 'x');
    one.board.placeShip(3, [7, 2], 'y');
    one.board.placeShip(3, [4, 7], 'x');
    one.board.placeShip(2, [8, 4], 'x');
    two.board.placeShip(5, [0, 0], 'y');
    two.board.placeShip(4, [5, 5], 'x');
    two.board.placeShip(3, [7, 2], 'y');
    two.board.placeShip(3, [4, 7], 'x');
    two.board.placeShip(2, [8, 4], 'x');
  }
  
  newGame();
  let activePlayer = one;
  // while(one.board.allSunk() == false || two.board.allSunk() == false) {

  // }
  return {
    one,
    two,
  }
}

export default game