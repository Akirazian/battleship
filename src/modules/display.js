import game from "./game";

const display = (() => {
  const containers = document.querySelectorAll('.board-container');
  const textbox = document.querySelector('.text-display');

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

  const activatePlacement = () => {
    let shipButtonContainer = document.querySelector('.ship-button-container');
    shipButtonContainer.classList.remove('invisible');
    let activeButton = null;
    for (const button of shipButtonContainer.children) {
      button.addEventListener('click', () => {
        activeButton = button;
        button.classList.add('active')
      });
    };
    let playerBoard = containers[0];
    for (const child of playerBoard.children) {
      child.addEventListener('click', (e) => {
        if (activeButton == null) return;
        if(game.placeShip(e, activeButton.dataset.size) != 'success') return;
        activeButton.remove();
        activeButton = null;
        if(shipButtonContainer.children.length == 0) {
          game.startGame();
          textbox.textContent = "Begin!"
        }
      });
    }
  }

  const renderEnemy = (player) => {
    const board = player.board.getBoard();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (board[x][y] != null) {
          const box = document.querySelector(`#player-two-board [data-coord = "${x}, ${y}"`);
          // box.classList.add('ship'); //uncomment to see enemy ships for debugging
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
      if (child.classList.contains('hit') || child.classList.contains('miss')) continue;
      child.addEventListener('click', game.attack);
    }
  }

  const deactivateBoard = () => {
    let enemyBoard = containers[1];
    for (const child of enemyBoard.children) {
      child.removeEventListener('click', game.attack);
    }
  }

  const callWinner = (player) => {
    textbox.textContent = `${player.name} wins!`
  }

  return {
    createGrid,
    renderPlayer,
    activatePlacement,
    renderEnemy,
    activateBoard,
    deactivateBoard,
    callWinner
  }
})();

export default display