/**
    this.scene.stop('Level');
    this.scene.start('Level');
*/

import Fish from './fish.js';
import Player from './player.js';

export default class Level extends Phaser.Scene {
    constructor() {
        super('Level');
    }

    init() {
        if (this.game.settings.lives <= 0) {
            this.game.settings.level = 1;
            this.game.settings.lives = 3;
        } else this.game.settings.level += 1;

        const level = this.game.settings.level;

        //Interface
        this.add.image(360, 300, 'background');
        //Interface

        //Score + Question
        this.textScore = this.add.text(30, 20, `Score: ${this.game.settings.score}`, { font: "30px Arial", fill: "#fff" }).setDepth(101)
        this.textAnswer = this.add.text(366, 530, this.game.settings.data[level].question, { font: "28px Arial", fill: "#fff" }).setOrigin(0.5, 0).setDepth(101);
        if (this.textAnswer.width >= 660) this.textAnswer.setFontSize(Math.ceil(28 / (this.textAnswer.width / 660)));
        //Score + Question

        //Lives
        this.anims.create({ key: 'lifes_0', frames: [{ key: "lifes", frame: "0" }], frameRate: 1, repeat: 0 });
        this.anims.create({ key: 'lifes_1', frames: [{ key: "lifes", frame: "1" }], frameRate: 1, repeat: 0 });

        this.lifes = new Array();
        this.lifes.push(this.add.sprite(340, 37, 'lifes'));
        this.lifes.push(this.add.sprite(370, 37, 'lifes'));
        this.lifes.push(this.add.sprite(400, 37, 'lifes'));
        //Lives

        //Player
        this.player = new Player(this)
        //Player

        //Fish
        this.fish = new Array(), this.graveyard = new Array();
        this.fishCreate(level);
        //Fish

        //Input
        this.keys = this.input.keyboard.addKeys('W,S,A,D,UP,DOWN,LEFT,RIGHT') // playerMove() обрабатывает нажатие
        this.pointer = this.input.activePointer;
        //Input

        //Volume
        this.anims.create({ key: 'volume_0', frames: [{ key: "volume", frame: "0" }], frameRate: 1, repeat: 0 });
        this.anims.create({ key: 'volume_1', frames: [{ key: "volume", frame: "1" }], frameRate: 1, repeat: 0 });
        this.anims.create({ key: 'volume_2', frames: [{ key: "volume", frame: "2" }], frameRate: 1, repeat: 0 });
        this.anims.create({ key: 'volume_3', frames: [{ key: "volume", frame: "3" }], frameRate: 1, repeat: 0 });

        this.volume = this.add.sprite(670, 45, 'volume').setScale(1.4).setInteractive();
        this.volume.play(`volume_${$localStorage.volume}`);
        
        this.volume.on('pointerup', function () {
            $localStorage.volume = (Number($localStorage.volume) >= 3) ? 0 : Number($localStorage.volume)+1;
            this.game.music.volume = $localStorage.volume * 0.33;
            this.volume.play(`volume_${$localStorage.volume}`)
        }, this);
        //Volume

        this.game.sounds = {
            eat: this.sound.add('eat', {
                mute: false,
                volume: 3 * 0.33,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: false,
                delay: 0
            }),
            nope: this.sound.add('nope', {
                mute: false,
                volume: 3 * 0.33,
                rate: 1,
                detune: 0,
                seek: 0,
                loop: false,
                delay: 0
            })
        };
    }

    update() {
        this.fishMove();
        this.playerMove();
    }

    fishCreate(level) {
        this.graveyard.push(...this.fish);
        this.fish = [];

        for (let i = 1; i <= 5; i++) {
            this.anims.create({ key: i, frames: [{ key: "fish", frame: i }], frameRate: 1, repeat: 0 });
        }

        const words = this.game.settings.data[level].words;
        const gridPos = this.gridBallonsDisplayPos(words); //Здесь формируется начальное положение рыбки после создания

        const newFish = words.map((text, index) => {
            return new Fish(this, text, gridPos[index].x, gridPos[index].y);
        });

        this.fish.push(...newFish);
    }

    fishMove() {
        this.fish.forEach(word => {
            word.move();
        });
        this.graveyard.forEach(corpse => {
            corpse.move();
        });
    }

    playerMove() {
        const newDirection = { x: 0, y: 0 };
        const touch = this.touchScreen();

        if (this.keys.W.isDown || this.keys.UP.isDown || touch === 'up') newDirection.y = -3;
        else if (this.keys.S.isDown || this.keys.DOWN.isDown || touch === 'down') newDirection.y = 3;
        if (this.keys.A.isDown || this.keys.LEFT.isDown || touch === 'left') newDirection.x = -3;
        else if (this.keys.D.isDown || this.keys.RIGHT.isDown || touch === 'right') newDirection.x = 3;
        
        if (newDirection.x || newDirection.y) this.player.move(newDirection.x, newDirection.y);
    }

    touchScreen() {
        let direction, Ty;
        if (this.pointer.isDown) {
            const Px = this.pointer.x - 720 / 2;
            const Py = (this.pointer.y - 600 / 2) / -1;

            if (Px < 0 && Py > 0) {
                Ty = Px / -1;
                (Py < Ty) ? direction = 'left' : direction = 'up';
            }
            if (Px > 0 && Py > 0) {
                Ty = Px;
                (Py < Ty) ? direction = 'right' : direction = 'up';
            }

            if (Px < 0 && Py < 0) {
                Ty = Px;
                (Py < Ty) ? direction = 'down' : direction = 'left';
            }
            if (Px > 0 && Py < 0) {
                Ty = Px / -1;
                (Py < Ty) ? direction = 'down' : direction = 'right';
            }
        }

        /*
            На случай если что то сломается...
            Вот логика по которой работает ТАЧ - https://i.imgur.com/VO2SnTP.png
            1. Приводим наше измерение в другой формат (0 - центр)
            2. Разбиваем на сектора - https://i.imgur.com/r02be1q.png
            3. Получаем точку на линии Т - https://i.imgur.com/RZKyuIY.png 
            4. Сравниваем Клик и точку на линии
            PROFIT
        */
        
        return direction;
    }

    makeAnswer(answer) { //Fish: collider -> eated() -> Level: makeAnswer()
        const rightAnswer = this.game.settings.data[this.game.settings.level].answer;

        if (answer !== rightAnswer) this.wrongAnswer();
        else this.nextLevel();
    }

    wrongAnswer() {
        this.game.sounds.nope.play();

        this.game.settings.lives -= 1;
        this.lifes[this.game.settings.lives].play('lifes_1');

        if (this.game.settings.lives <= 0) this.endGame();
    }

    nextLevel() {
        this.game.settings.level += 1
        const level = this.game.settings.level

        this.changeQuestion();
        this.changeScore(+1);
        this.fishCreate(level);
    }

    endGame() {
        this.scene.stop('Level')
        this.scene.start('Endgame');
    }

    changeQuestion() {
        const level = this.game.settings.level
        this.textAnswer._text = this.game.settings.data[level].question;
        this.textAnswer.updateText();

        if (this.textAnswer.width >= 660) this.textAnswer.setFontSize(Math.ceil(28 / (this.textAnswer.width / 660)));
    }

    changeScore(num) {
        this.game.settings.score += Number(num);
        this.textScore._text = `Score: ${this.game.settings.score}`;
        this.textScore.updateText();
    }

    //Тут мы делаем псевдо сетку для рыбы, что бы они не наползали друг на друга
    gridBallonsDisplayPos(sentence) {
        const positions = new Array();
        const top = 120;

        return sentence.map(() => {
            let gridRow, gridCol;
            while (true) {
                gridRow = Math.floor(Math.random() * (10 - 1)) + 1;
                gridCol = Math.floor(Math.random() * (5 - 1)) + 1;
                const coordinates = `${gridRow}#${gridCol}`;
                if (!positions.includes(coordinates)) { 
                    positions.push(coordinates);
                    break;
                }
            }
            gridRow = 700 + gridRow * 136 + Math.floor(Math.random() * 40 - 20);
            gridCol = top + (gridCol * 80);
            return { x: gridRow, y: gridCol }
        })
    }
}