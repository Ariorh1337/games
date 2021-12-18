import iframeLocalStorageFix from '/libs/localstorage.js';
import shuffle from '/libs/shuffle.js';
import Menu from './menu.js';
import Level from './level.js';
import Endmenu from './endmenu.js';
import words from './words.js';

iframeLocalStorageFix();

const config = {
  type: Phaser.AUTO,
  width: 720,
  height: 600,
  audio: {
    disableWebAudio: true,
  },
  scene: [Menu, Endmenu, Level],
};

const settings = {
  level: -1,
  score: 0,
  question: '',
  answer: '',
  words: shuffle(words),
  balloons: {
    maxSpeed: 3,
    minSpeed: 2,
    size: 150,
  },
};

if (!window.$localStorage.volume) window.$localStorage.volume = 3;
const game = new Phaser.Game(config);
game.settings = settings;
