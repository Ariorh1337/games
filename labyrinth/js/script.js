import iframeLocalStorageFix from '/libs/localstorage.js';
//import shuffle from '/libs/shuffle.js';
import Menu from './scene/menu.js';
import Level from './scene/level.js';
import UI from './scene/ui.js';
//import words from './words.js';

iframeLocalStorageFix();

const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: Boolean(window.$localStorage.debug)
        }
    },
    audio: {
        disableWebAudio: true
    },
    scene: [Menu, Level, UI],
    scale: {
        mode: Phaser.Scale.ScaleModes.FIT,
        zoom: 1
    }
};

if (!window.$localStorage.volume) window.$localStorage.volume = 3;
const game = new Phaser.Game(config);