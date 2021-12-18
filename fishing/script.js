import iframeLocalStorageFix from '/libs/localstorage.js';
iframeLocalStorageFix();

import shuffle from '/libs/shuffle.js';

import Menu from './menu.js';
import Level from './level.js';
import Endgame from './endgame.js';

import sentences from './sentences.js';
import words from './words.js';

const gameData = words.map((array, index) => {
    return { 
        question: sentences[index],
        answer: array[0],
        words: array
    }
});

const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    audio: {
        disableWebAudio: true
    },
    scene: [Menu, Level, Endgame]
};

const settings = {
    level: -1,
    lives: 3,
    score: 0,
    data: shuffle(gameData),
    fish: {
        speed: 3,
        size: 150
    }
}

if (!window.$localStorage.volume) window.$localStorage.volume = 3;
const game = new Phaser.Game(config);
game.settings = settings;