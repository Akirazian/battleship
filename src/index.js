import './style.css';
import game from './modules/game';
import display from './modules/display';
console.log('webpack works');
display.createGrid();
let testGame = game('alec');
display.renderBoard(testGame.one);
