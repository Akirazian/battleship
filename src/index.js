import './style.css';
import game from './modules/game';
import display from './modules/display';
console.log('webpack works');
display.createGrid();
let testGame = game('alec');
display.renderPlayer(testGame.one);
display.renderEnemy(testGame.two);
