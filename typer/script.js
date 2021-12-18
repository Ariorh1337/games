import iframeLocalStorageFix from '/libs/localstorage.js';
import shuffle from '/libs/shuffle.js';
import Level from './level.js';
import words from './words.js';

iframeLocalStorageFix();

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
    scene: [Level]
};

const settings = {
    highScore: (!window.$localStorage.highScore) ? 0 : window.$localStorage.highScore,
    score: 0,
    time: 30,
    words: shuffle(words.sentences),
    transcription: words.transcription,
    patterns: {
        fontColor: '#ffffff',
        Level: {
            score: 'Score: '
        }
    }
}

if (!window.$localStorage.volume) window.$localStorage.volume = 3;
const game = new Phaser.Game(config);
game.settings = settings;