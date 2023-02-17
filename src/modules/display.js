
const display = (() => {
  let container = document.getElementById('board-container');
  const createGrid = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let box = document.createElement('div');
        box.classList.add('board-box');
        box.id = `${i}, ${j}`;
        container.appendChild(box);
      }
    }
  }

  const renderBoard = (player) => {
    const board = player.board.getBoard();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (board[x][y] != null) {
          const box = document.getElementById(`${x}, ${y}`);
          box.classList.add('ship');
        }
      }
    }
  }

  return {
    createGrid,
    renderBoard
  }
})();

export default display