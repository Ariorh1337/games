import shuffle from '/libs/shuffle.js';
import localDB from '/libs/localdb.js';
import data_words from '/labyrinth/js/data/words.js';

export default class UI extends Phaser.Scene {
    constructor() {
        super({ key: 'UI', active: false });

        this.settings = {
            lives: 3,
            score: 0,
            lastscore: 0,
            input: {
                isPressed: false,
                direction: 0
            }
        }

        this.words = shuffle(data_words.words);
        this.answers = shuffle(data_words.answers);
        this.open = false;
    }

    preload() {
        this.load.image('top-pad-res', '/labyrinth/img/ui/top_pad.png');
        this.load.image('bottom-pad-res', '/labyrinth/img/ui/bottom_pad.png');
        this.load.spritesheet('lives-res', '/labyrinth/img/ui/lives.png', { frameWidth: 40, frameHeight: 40 });

        this.load.spritesheet('volume', '/labyrinth/img/ui/volume.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('buttons', '/labyrinth/img/ui/buttons.png', { frameWidth: 128, frameHeight: 128 });
    }

    init() {
        this.db = new localDB("Skyeng", "mainTable", {
            "word": { "unique": false },
            "time": { "unique": true },
            "answer": { "unique": false }
        });
    }

    create() {
        this.settings.lives = 3;
        this.settings.score = 0;

        this.res = {
            "top-pad": {
                "tile": this.add.tileSprite(0, 0, 720, 50, 'top-pad-res').setOrigin(0, 0),
                "score": this.add.text(10, -1, `Score: ${this.settings.score}`, { font: '46px Arial', fill: '#ffffff' }),
                "lives": [
                    this.add.sprite(720 - 10 - 40, 4, "lives-res", 1).setOrigin(0, 0),
                    this.add.sprite(720 - 50 - 40, 4, "lives-res", 1).setOrigin(0, 0),
                    this.add.sprite(720 - 90 - 40, 4, "lives-res", 1).setOrigin(0, 0),
                    this.add.sprite(720 - 130 - 40, 4, "lives-res", 0).setOrigin(0, 0),
                    this.add.sprite(720 - 170 - 40, 4, "lives-res", 0).setOrigin(0, 0),
                    this.add.sprite(720 - 210 - 40, 4, "lives-res", 0).setOrigin(0, 0)
                ]
            },
            "bottom-pad": {
                "tile": this.add.tileSprite(720 / 2 - 320 / 2, 350, 320, 350, 'bottom-pad-res').setOrigin(0, 0),
                "question": this.add.text(0, 370, `includes`, { font: '28px Arial', fill: '#ffffff', align: "center" }).setFixedSize(720, 30),
                "buttons-rect": [
                    this.add.rectangle(720 / 2 - 140 - 10, 430, 140, 34, "#674141", 110).setOrigin(0, 0),
                    this.add.rectangle(720 / 2 - 140 - 10, 472, 140, 34, "#674141", 110).setOrigin(0, 0),
                    this.add.rectangle(720 / 2 - 140 - 10, 514, 140, 34, "#674141", 110).setOrigin(0, 0),
                    this.add.rectangle(720 / 2 + 10, 430, 140, 34, "#674141", 110).setOrigin(0, 0),
                    this.add.rectangle(720 / 2 + 10, 472, 140, 34, "#674141", 110).setOrigin(0, 0),
                    this.add.rectangle(720 / 2 + 10, 514, 140, 34, "#674141", 110).setOrigin(0, 0)
                ],
                "buttons-text": [
                    this.add.text(720 / 2 - 140 - 10, 432, `out`, { font: '28px Arial', fill: '#ffffff', align: "center" }).setFixedSize(140, 30).setDepth(1).setInteractive(),
                    this.add.text(720 / 2 - 140 - 10, 474, `out`, { font: '28px Arial', fill: '#ffffff', align: "center" }).setFixedSize(140, 30).setDepth(1).setInteractive(),
                    this.add.text(720 / 2 - 140 - 10, 516, `out`, { font: '28px Arial', fill: '#ffffff', align: "center" }).setFixedSize(140, 30).setDepth(1).setInteractive(),

                    this.add.text(720 / 2 + 10, 432, `out`, { font: '28px Arial', fill: '#ffffff', align: "center" }).setFixedSize(140, 30).setDepth(1).setInteractive(),
                    this.add.text(720 / 2 + 10, 474, `out`, { font: '28px Arial', fill: '#ffffff', align: "center" }).setFixedSize(140, 30).setDepth(1).setInteractive(),
                    this.add.text(720 / 2 + 10, 516, `out`, { font: '28px Arial', fill: '#ffffff', align: "center" }).setFixedSize(140, 30).setDepth(1).setInteractive()
                ]
            },
            "touch-ui": {
                "border": this.add.circle(610, 500, 75, "#674141", 0.3).setDepth(1).setOrigin(0.5, 0.5).setInteractive(),
                "sphere": this.add.circle(630, 520, 35, "#674141", 0.6).setDepth(2).setOrigin(0.5, 0.5).setVisible(false)
            }
        }

        this.res["top-pad-group"] = this.add.container(0, 0, [
            this.res["top-pad"]["tile"],
            this.res["top-pad"]["score"],
            ...this.res["top-pad"]["lives"]
        ])

        this.res["bottom-pad-group"] = this.add.container(0, 0, [
            this.res["bottom-pad"]["tile"],
            this.res["bottom-pad"]["question"],
            ...this.res["bottom-pad"]["buttons-rect"],
            ...this.res["bottom-pad"]["buttons-text"]
        ]);
        this.res["bottom-pad-group"].y = 350;

        const scene = this;
        this.res["bottom-pad"]["buttons-text"].forEach(button => {
            button.on('pointerup', function () {
                scene.makeAnswer(button.text);
            }, scene);

            scene.cursorIN(button);
            scene.cursorOUT(button);
        })


        //touch управоение джойстиком
        this.res["touch-ui-group"] = this.add.container(0, 0, [this.res["touch-ui"]["border"], this.res["touch-ui"]["sphere"]]);
        if (!this.game.device.input.touch) this.res["touch-ui-group"].setVisible(false);

        this.res["touch-ui"]["border"].on("pointerdown", (pointer, x, y, event) => {
            const sphere = this.res["touch-ui"]["sphere"];
            sphere.setVisible(true);
            sphere.setPosition(pointer.downX, pointer.downY)

            scene.settings.input.isPressed = true;
            scene.settings.input.direction = this.touch(x, y);
        }, scene);

        this.res["touch-ui"]["border"].on("pointermove", (pointer, x, y, event) => {
            if (scene.settings.input.isPressed) {
                const sphere = this.res["touch-ui"]["sphere"];
                sphere.setPosition(pointer.x, pointer.y);
                scene.settings.input.direction = this.touch(x, y);
            }
        }, scene);

        this.res["touch-ui"]["border"].on("pointerup", (event) => {
            const sphere = this.res["touch-ui"]["sphere"];
            sphere.setVisible(false);
            sphere.setPosition(610, 505)

            scene.settings.input.isPressed = false;
        }, scene);

        this.res["touch-ui"]["border"].on('pointerout', (event) => {
            const sphere = this.res["touch-ui"]["sphere"];
            sphere.setVisible(false);
            sphere.setPosition(610, 505)

            scene.settings.input.isPressed = false;
        }, scene);

        this.buttons = {
            settings: this.add.sprite(40, 560, 'buttons').setScale(0.5).setInteractive().setOrigin(0.5, 0.5).setFrame(1),
            volume: this.add.sprite(40, 500, 'volume').setScale(0.5).setInteractive().setOrigin(0.5, 0.5).setFrame($localStorage.volume).setVisible(false),
            fullscreen: this.add.sprite(40, 440, 'buttons').setScale(0.5).setInteractive().setOrigin(0.5, 0.5).setFrame((document.fullscreenElement) ? 3 : 2).setVisible(false)
        }

        this.overEvent(this.buttons.settings);
        this.overEvent(this.buttons.volume);
        this.overEvent(this.buttons.fullscreen);

        this.buttons.settings.on('pointerup', function () {
            const fullscreen = scene.buttons.fullscreen;
            const volume = scene.buttons.volume;
            //Подсказки тут
            if (!fullscreen.visible && !fullscreen.visible) {
                scene.buttons.volume.setVisible(true);
                scene.buttons.fullscreen.setVisible(true);
            } else {
                scene.buttons.volume.setVisible(false);
                scene.buttons.fullscreen.setVisible(false);
            }
        }, scene);

        this.buttons.volume.on('pointerup', function () {
            let volume = Number($localStorage.volume);
            $localStorage.volume = (volume >= 3) ? 0 : volume + 1;

            scene.game.music.volume = $localStorage.volume * 0.33;
            scene.buttons.volume.setFrame($localStorage.volume);
        }, scene);

        //FullScreen
        this.buttons.fullscreen.on('pointerup', function () {
            if (document.fullscreenElement) {
                scene.cancelFullscreen();
            } else {
                scene.launchFullScreen(document.body);
            }
        }, scene);
    }

    overEvent(element) {
        const normalScale = element.scale;

        element.on('pointerover', function () {
            document.querySelector('body').style.cursor = 'pointer'

            element.setScale(normalScale + 0.1);
        });
        element.on('pointerout', function () {
            document.querySelector('body').style.cursor = ''

            element.setScale(normalScale);
        })
    }

    launchFullScreen(element) {
        if(element.requestFullScreen) {
            element.requestFullScreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }

    cancelFullscreen() {
        if(document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }

    touch(x, y) {
        const MX = 150 / 2, MY = 50;
        let direction;
        if (y >= MY) { //Нижняя часть = лево\право
            if (x >= MX) return 4;
            else return 0;
        } else {
            const MX2 = 150 / 3;

            if (x <= MX2) return 1;
            if (x > MX2 && x < MX2 * 2) return 2;
            if (x > MX2 * 2) return 3;
        }

        return direction;
    }

    animationUP() {
        this.open = true;
        this.time.delayedCall(10, (scene) => {
            const y = scene.res["bottom-pad-group"].y;
            if (y > 25) {
                scene.res["bottom-pad-group"].y -= 25
                scene.animationUP();
            }
        }, [this]);
    }

    questionStart(num, type, target) {
        this.question = this.words[num][0];
        this.right_answer = this.words[num][1];
        this.bet = type;
        this.target = target;

        this.res["bottom-pad"]["question"].text = this.question;

        const right_answer = this.right_answer;
        const right_answer_pos = Phaser.Math.Between(0, 5);
        const possible_answers = shuffle(this.answers.concat().slice(0, 6));

        if (!possible_answers.includes(right_answer)) possible_answers[right_answer_pos] = right_answer;

        this.res["bottom-pad"]["buttons-text"].forEach((button, index) => {
            button.text = possible_answers[index];
        })

        if (this.game.config.physics.arcade.debug) console.log({
            "Ставка":
                (type === 3) ? "Конец" :
                    (type === 2) ? "Жизнь" :
                        (type === 1) ? "Очки" :
                            "Здесь могла быть ваша реклама",
            "Вопрос": this.question,
            "Правильный ответ": this.right_answer,
            "Варианты": possible_answers
        });
    }

    makeAnswer(answer) {
        const isRightAnswer = (answer === this.right_answer) ? true : false;

        if (this.bet === 1) {
            if (isRightAnswer) this.changeScore(3);
            else this.changeScore(-5);
        }
        if (this.bet === 2) {
            if (isRightAnswer) this.changeLives(1);
            else {
                if (this.settings.lives <= 1) {
                    this.changeScore(-7);
                } else this.changeLives(-1);
            }
        }
        if (this.bet === 3) {
          if (isRightAnswer) this.gameOver(1);
          else {
              this.changeScore(-10);
              this.target.destroy();
          }
        }

        //Запись в БД для потомков
        this.db.setItem({
            word: this.question,
            time: Number(new Date()),
            answer: isRightAnswer
        });

        this.animationDOWN();

        if (this.game.config.physics.arcade.debug) console.log({
            "Ответ пользователя": answer,
            "Приз": (this.bet === 1 && isRightAnswer) ? "+3 очка" :
                    (this.bet === 1 && !isRightAnswer) ? "-5 очков" :
                    (this.bet === 2 && isRightAnswer) ? "+1 жизнь" :
                    (this.bet === 2 && !isRightAnswer) ? "-1 жизнь" :
                    (this.bet === 3 && isRightAnswer) ? "побег из лабиринта" :
                    (this.bet === 3 && !isRightAnswer) ? "остаешься в лабиринте" : "пропуск хода"
        });
    }

    animationDOWN() {
        this.open = false;
        this.time.delayedCall(10, (scene) => {
            const y = scene.res["bottom-pad-group"].y;
            if (y < 350) {
                scene.res["bottom-pad-group"].y += 25
                scene.animationDOWN();
            }
        }, [this]);
    }

    cursorIN(elm) {
        elm.on('pointerover', function () {
            document.querySelector('body').style.cursor = 'pointer'
        })
    }

    cursorOUT(elm) {
        elm.on('pointerout', function () {
            document.querySelector('body').style.cursor = ''
        })
    }

    changeScore(num) {
        this.settings.score += num;
        this.res["top-pad"]["score"].text = `Score: ${this.settings.score}`;
    }

    changeLives(num) {
        if (num > 0) {
            try {
                this.res["top-pad"].lives[this.settings.lives].setFrame(1);
            } catch (err) {} //На случай читов
            if (this.settings.lives >= 6) {
                this.changeScore(5);
            } else {
                this.settings.lives += num;
            }
        } else {
            this.settings.lives += num;
            try {
                this.res["top-pad"].lives[this.settings.lives].setFrame(0);
            } catch (err) {}
            if (this.settings.lives === 0) {
                this.gameOver(0);
                return true;
            }
        }
    }

    gameOver(type) {
        if (type === 1) {
            const score = this.settings.score;
            this.settings.lastscore = score;

            const highScore = ($localStorage.score) ? Number($localStorage.score) : 0;
            if (highScore < score) $localStorage.score = score;
        }

        this.scene.stop('UI')
        this.scene.stop('Level');
        this.scene.start('Menu');
    }
}
