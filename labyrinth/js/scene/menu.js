import localDB from '/libs/localdb.js';

export default class Level extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {
        const load = this.load;

        load.image('background', '/labyrinth/img/ui/background.jpg');
        load.spritesheet('volume', '/labyrinth/img/ui/volume.png', { frameWidth: 128, frameHeight: 128 });
        load.spritesheet('buttons', '/labyrinth/img/ui/buttons.png', { frameWidth: 128, frameHeight: 128 });

        load.spritesheet('player', '/labyrinth/img/actor/player.png', { frameWidth: 55, frameHeight: 63 });
        load.spritesheet('event', '/labyrinth/img/actor/event.png', { frameWidth: 63, frameHeight: 63 });
        load.spritesheet('fall', '/labyrinth/img/actor/fall.png', { frameWidth: 41, frameHeight: 30 });
        load.spritesheet('fly', '/labyrinth/img/actor/fly.png', { frameWidth: 49, frameHeight: 38 });

        load.image('input', '/labyrinth/img/ui/inputs.png');
        load.image('input2', '/labyrinth/img/ui/inputs2.png');

        load.audio('background', ['/labyrinth/sound/background.mp3']);
    }

    create() {
        const gameWidth = this.game.config.width;
        const gameHeight = this.game.config.height;

        this.res = {
            background: this.add.tileSprite(0, 0, 2880, 2400, 'background').setDepth(0),
            score: this.add.text(gameWidth / 2, 50, `High score: ${($localStorage.score) ? Number($localStorage.score) : 0}`, { font: "43px Arial", fill: "#674141", align: "center" }).setOrigin(0.5, 0.5),
            help: [
                this.add.sprite(150, 85, 'player').setDepth(2).setScale(0.9).setFrame(11),
                this.add.sprite(gameWidth / 2, 360, 'fall').setDepth(2).setScale(0.9).setFrame(0),
                this.add.sprite(gameWidth / 2, 460, 'fly').setDepth(2).setScale(0.9).setFrame(0),
                this.add.sprite(gameWidth / 2, 160, 'event').setDepth(2).setScale(0.9).setFrame(1),
                this.add.sprite(gameWidth / 2, 260, 'event').setDepth(2).setScale(0.9).setFrame(2),
                this.add.sprite(445, 85, 'event').setDepth(2).setScale(0.9).setFrame(3),
                this.add.text(gameWidth / 2, 100, "Персонаж         должен дойти до выхода              попутно набирая очки", { font: "20px Arial", fill: "#674141", align: "center" }).setOrigin(0.5, 0.5),
                this.add.text(gameWidth / 2, 200, "За правильный ответ +3 очков, не правильный -5 очков", { font: "20px Arial", fill: "#674141", align: "center" }).setOrigin(0.5, 0.5),
                this.add.text(gameWidth / 2, 300, "За правильный ответ +1 жизнь, не правильный -1 жизнь", { font: "20px Arial", fill: "#674141", align: "center" }).setOrigin(0.5, 0.5),
                this.add.text(gameWidth / 2, 400, "Слизень: при столкновении отнимет жизнь и откинет", { font: "20px Arial", fill: "#674141", align: "center" }).setOrigin(0.5, 0.5),
                this.add.text(gameWidth / 2, 500, "Бестия: поймает в прыжке и съест", { font: "20px Arial", fill: "#674141", align: "center" }).setOrigin(0.5, 0.5)
            ]
        }

        this.res.helpContainer = this.add.container(0, 0, this.res.help).setVisible(false);

        this.buttons = {
            start: this.add.text(gameWidth / 2, gameHeight / 2, "START", { font: "70px Arial", fill: "#674141", align: "center" }).setInteractive().setOrigin(0.5, 0.5),
            help: this.add.sprite(45, 560, 'buttons').setScale(0.5).setInteractive().setOrigin(0.5, 0.5).setFrame(0),
            settings: this.add.sprite(675, 560, 'buttons').setScale(0.5).setInteractive().setOrigin(0.5, 0.5).setFrame(1),
            volume: this.add.sprite(675, 500, 'volume').setScale(0.5).setInteractive().setOrigin(0.5, 0.5).setFrame($localStorage.volume).setVisible(false),
            fullscreen: this.add.sprite(675, 440, 'buttons').setScale(0.5).setInteractive().setOrigin(0.5, 0.5).setFrame((document.fullscreenElement) ? 3 : 2).setVisible(false),
            input: this.add.image(450, 520, 'input').setDepth(0).setScale(0.4),
            input2: this.add.image(250, 520, 'input2').setDepth(0).setScale(0.8)
        }

        this.res.buttonsContainer = this.add.container(0, 0, [this.buttons.start, this.buttons.input, this.buttons.input2, this.res.score]);

        this.overEvent(this.buttons.start);
        this.overEvent(this.buttons.help);
        this.overEvent(this.buttons.settings);
        this.overEvent(this.buttons.volume);
        this.overEvent(this.buttons.fullscreen);

        const scene = this;
        this.buttons.start.once('pointerup', function () {
            document.querySelector('body').style.cursor = '';
            scene.scene.stop('Menu')
            scene.scene.start('Level');
        }, scene);

        this.buttons.help.on('pointerup', function () {
            const start = scene.res.buttonsContainer;
            if (start.visible) {
                start.setVisible(false);
                scene.res.helpContainer.setVisible(true);
            } else {
                start.setVisible(true);
                scene.res.helpContainer.setVisible(false);
            }
        }, scene);

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

        this.musicInit();

        //Статистика
        this.staticticsCreate();

        if (this.game.config.physics.arcade.debug) window.scene = scene;
    }

    init() {
        const scene = this;

        const onfullscreenchange = () => {
            if (document.fullscreenElement) {
                if (this.scene.manager.isProcessing) {
                    this.buttons.fullscreen.setFrame(3);
                } else {
                    this.scene.manager.getScene("UI").buttons.fullscreen.setFrame(3);
                }
            } else {
              if (this.scene.manager.isProcessing) {
                  this.buttons.fullscreen.setFrame(2);
              } else {
                  this.scene.manager.getScene("UI").buttons.fullscreen.setFrame(2);
              }
            }
        }

        document.addEventListener("webkitfullscreenchange", onfullscreenchange.bind(this));
        document.addEventListener("mozfullscreenchange",    onfullscreenchange.bind(this));
        document.addEventListener("fullscreenchange", onfullscreenchange.bind(this));

        if (!this.db) {
            this.db = new localDB("Skyeng", "mainTable", {
                "word": { "unique": false },
                "time": { "unique": true },
                "answer": { "unique": false }
            });
        }
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

    musicInit() {
        if (this.game.music) return false;

        this.game.music = this.sound.add('background', {
            mute: false,
            volume: Number($localStorage.volume) * 0.33,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        });

        const music = this.game.music;
        document.addEventListener("click", function () {
            if (!music.isPaused && !music.isPlaying) music.play();
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

    async staticticsCreate() {
        const scene = this;

        const getWeekINT = (date) => {
            date = new Date(date).getDay();
            if (date === 0)
                return 6;
            else return date-1;
        }

        const todayBegin = Number(new Date().setHours(0,0,0,0));
        const todayEnd = Number(new Date().setHours(23,59,59,0));

        const weekBegin = todayBegin - (getWeekINT(todayBegin) * 24 * 60 * 60 * 1000);
        const weekEnd = weekBegin + (7 * 24 * 60 * 60 * 1000) - 120000;

        const stat = await scene.db.getAll();

        const statToday = stat.map(obj => {
            if (obj.time >= todayBegin && obj.time <= todayEnd) return obj;
        }).filter((a) => { if (a) return a});
        const statWeek = stat.map(obj => {
            if (obj.time >= weekBegin && obj.time <= weekEnd) return obj;
        }).filter((a) => { if (a) return a});

        const statTodayPositive = statToday.map((text, index) => {
            if (text.answer) return text.word;
        }).filter((a) => { if (a) return a});
        const statTodayNegative = statToday.map((text, index) => {
            if (!text.answer) return text.word;
        }).filter((a) => { if (a) return a});

        const statWeekPositive = statWeek.map((text, index) => {
            if (text.answer) return text.word;
        }).filter((a) => { if (a) return a});
        const statWeekNegative = statWeek.map((text, index) => {
            if (!text.answer) return text.word;
        }).filter((a) => { if (a) return a});

        const statPositive = stat.map((text, index) => {
            if (text.answer) return text.word;
        }).filter((a) => { if (a) return a});
        const statNegative = stat.map((text, index) => {
            if (!text.answer) return text.word;
        }).filter((a) => { if (a) return a});

        const todayText = scene.add.text(720/12 * 4 - 40, 190, "Today", {font: "24px Arial", fill: "#a8614c", align: "center"}).setOrigin(0.5,0.5).setInteractive();
        const weekText = scene.add.text(720/12 * 6, 190, "Week", {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5).setInteractive();
        const alltimeText = scene.add.text(720/12 * 8 + 40, 190, "All Time", {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5).setInteractive();

        this.overEvent(todayText);
        this.overEvent(weekText);
        this.overEvent(alltimeText);

        const todayContainer = scene.add.container(0,0, [
            scene.add.text(720/12 * 4 + 20, 230, `correct: ${statTodayPositive.length}`, {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5),
            scene.add.text(720/12 * 7 + 40, 230, `wrong: ${statTodayNegative.length}`, {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5)
        ]);
        const weekContainer = scene.add.container(0,0, [
            scene.add.text(720/12 * 4 + 20, 230, `correct: ${statWeekPositive.length}`, {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5),
            scene.add.text(720/12 * 7 + 40, 230, `wrong: ${statWeekNegative.length}`, {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5)
        ]).setVisible(false);
        const alltimeContainer = scene.add.container(0,0, [
            scene.add.text(720/12 * 4 + 20, 230, `correct: ${statPositive.length}`, {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5),
            scene.add.text(720/12 * 7 + 40, 230, `wrong: ${statNegative.length}`, {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5)
        ]).setVisible(false);

        const containerArray = [
            scene.add.rectangle(100, 100, 520, 200, '0xa8614c', 1).setOrigin(0,0),
            scene.add.rectangle(110, 110, 500, 180, '0x2e0e00', 1).setOrigin(0,0),
            scene.add.text(720/2, 150, "Statistics", {font: "24px Arial", fill: "#ffffff", align: "center"}).setOrigin(0.5,0.5),
            todayText,
            weekText,
            todayContainer,
            weekContainer,
            alltimeContainer
        ]

        //Не понятно почему но этот объект не лезет в массив и выдает ошибку... Но это работает так ¯\_(ツ)_/¯
        containerArray.push(alltimeText);

        const statContainer = scene.add.container(0, 50, containerArray).setDepth(5).setVisible(false);;

        this.buttons.stat = this.add.sprite(675, 40, 'buttons').setScale(0.5).setInteractive().setOrigin(0.5, 0.5).setFrame(4);
        this.overEvent(this.buttons.stat);
        this.buttons.stat.on("pointerup", () => {
            if (statContainer.visible) statContainer.setVisible(false);
            else statContainer.setVisible(true);
        }, scene);

        todayText.on("pointerup", () => {
            if (!todayContainer.visible) {
                todayContainer.setVisible(true);
                todayText.setColor("#a8614c");
                weekContainer.setVisible(false);
                weekText.setColor("#ffffff");
                alltimeContainer.setVisible(false);
                alltimeText.setColor("#ffffff");
            }
        }, scene);

        weekText.on("pointerup", () => {
            if (!weekContainer.visible) {
                todayContainer.setVisible(false);
                todayText.setColor("#ffffff");
                weekContainer.setVisible(true);
                weekText.setColor("#a8614c");
                alltimeContainer.setVisible(false);
                alltimeText.setColor("#ffffff");
            }
        }, scene);

        alltimeText.on("pointerup", () => {
            if (!alltimeContainer.visible) {
                todayContainer.setVisible(false);
                todayText.setColor("#ffffff");
                weekContainer.setVisible(false);
                weekText.setColor("#ffffff");
                alltimeContainer.setVisible(true);
                alltimeText.setColor("#a8614c");
            }
        }, scene);
    }

    update() {
        //
    }
}
