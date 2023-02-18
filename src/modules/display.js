
const display = (() => {
  let containers = document.querySelectorAll('.board-container');
  const createGrid = () => {
    containers.forEach((node) => {
      for (let i = 9; i >= 0; i--) {
        for (let j = 0; j < 10; j++) {
          let box = document.createElement('div');
          box.classList.add('board-box');
          box.id = `${j}, ${i}`;
          node.appendChild(box);
        }
      }
    });   
  }

  const renderBoard = (player) => {
    const board = player.board.getBoard();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (board[x][y] != null) {
          const box = document.getElementById(`${x}, ${y}`);
          box.classList.add('ship');
          if (board[x][y].hit == true) {
            box.classList.add('hit');
          }
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