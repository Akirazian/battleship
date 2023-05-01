import './style.css';
import game from './modules/game';
import display from './modules/display';
display.createGrid();
let newGameButton = document.getElementById('new-game-button');
newGameButton.addEventListener('click', () => {
  newGameButton.classList.add('invisible');
  game.newGame('Alec');
})
