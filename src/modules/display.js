import game from "./game";

const display = (() => {
  let containers = document.querySelectorAll('.board-container');
  const createGrid = () => {
    containers.forEach((node) => {
      for (let i = 9; i >= 0; i--) {
        for (let j = 0; j < 10; j++) {
          let box = document.createElement('div');
          box.classList.add('board-box');
          box.dataset.coord = `${j}, ${i}`;
          node.appendChild(box);
        }
      }
    });   
  }

  const renderPlayer = (player) => {
    const board = player.board.getBoard();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (board[x][y] != null) {
          const box = document.querySelector(`#player-one-board [data-coord = "${x}, ${y}"`);
          box.classList.add('ship');
          if (board[x][y].hit == true) {
            box.classList.add('hit');
          } else if (board[x][y] == 'miss') {
            box.classList.add('miss');
          }
        }
      }
    }
  }

  const renderEnemy = (player) => {
    const board = player.board.getBoard();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (board[x][y] != null) {
          const box = document.querySelector(`#player-two-board [data-coord = "${x}, ${y}"`);
          if (board[x][y].hit == true) {
            box.classList.add('hit');
          } else if (board[x][y] == 'miss') {
            box.classList.add('miss');
          }
        }
      }
    }
  }

  const activateBoard = () => {
    let enemyBoard = containers[1];
    for (const child of enemyBoard.children) {
      child.addEventListener('click', game.attack);
    }
  }

  return {
    createGrid,
    renderPlayer,
    renderEnemy,
    activateBoard
  }
})();

export default display