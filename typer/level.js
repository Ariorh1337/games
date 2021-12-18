import frontface from './frontface.js';
import shuffle from '/libs/shuffle.js';
import dictionary from './dictionary.js';

export default class Level extends Phaser.Scene {
    constructor() {
        super('Level');
    }

    preload() {
        const load = this.load;
        load.image('background', 'img/background.png');
        load.spritesheet('bird', 'img/bird.png', { frameWidth: 150, frameHeight: 135 });
    }

    create = frontface;

    keyDown(key) {
        const scene = this;
        const inputText = this.inputText;

        if (inputText._text[1].toLocaleLowerCase() === key) {
            this.rightAnswer();
        } else {
            this.wrongAnswer();
        }

        scene.game.settings.now = scene.time.now
        this.timeText.text = '';
    }

    rightAnswer() {
        const inputText = this.inputText;

        //frontface
        this.background.tilePositionX += 2; //move background tile

        //text cut
        inputText.text = '|' + inputText._text.slice(2);

        //content fill
        if (inputText.text.length < 20) inputText.text += ' ' + shuffle(this.game.settings.words).join(' ');

        //voice action
        if (inputText.text[2] === " ") { 
            const word = inputText.text.match(/ ([a-z]*) /)[1];
            if (this.game.settings.lastword !== word) {
                dictionary.voiceAct(this.game.settings.transcription[word]);
                this.game.settings.lastword = word;
            }
        }
                
        const scene = this;
        const patterns = scene.game.settings.patterns;
        const score = scene.game.settings.score;
    
        scene.game.settings.score++;
        scene.scoreText.text = patterns[scene.scene.key].score + score;
    }
    
    wrongAnswer() {
        const scene = this;
        const patterns = scene.game.settings.patterns;
        const inputText = this.inputText;
        
        inputText.style.setFill('red');
        setTimeout(() => { inputText.style.setFill('white'); }, 200);
        
        if (scene.game.settings.score > scene.game.settings.highScore) {
            scene.game.settings.highScore = scene.game.settings.score;
            window.$localStorage.highScore = scene.game.settings.score;
            scene.lastScoreText.text = window.$localStorage.highScore;
        }

        scene.game.settings.score = 0;
        scene.scoreText.text = patterns[scene.scene.key].score + scene.game.settings.score;

        scene.background.tilePositionX = -400;
    }

    update() {
        if (this.game.settings.score > 0) {
            if (this.game.getTime() > this.game.settings.now + 5000) { this.wrongAnswer(); this.timeText.text = '';}
            else if (this.time.now > this.game.settings.now + 4000) this.timeText.text = '1';
            else if (this.time.now > this.game.settings.now + 3000) this.timeText.text = '2';
            else if (this.time.now > this.game.settings.now + 2000) this.timeText.text = '3';
        }
    }
}
