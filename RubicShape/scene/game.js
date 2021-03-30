import Body from "../actor/body.js";
import round from "../../libs/round.js";

export default class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image("triangle", "../RubicShape/src/triangle.svg");
        this.load.image("square", "../RubicShape/src/square.svg");
    }

    init() {
        this.UI = this.scene.get("UI");
        this.UI.scene.start();

        if (this.game.config.debug) window.scenes.game = this;
    }

    create() {
        const { width, height } = this.game.config;
       
        const background = this.background = this.add.rectangle(0, 0, width, height, 0x838383).setOrigin(0);

        const test = this.add.image(
            round(width / 2), 
            round(height / 2), 
            "square"
        ).setOrigin(0.5).setScale(10).setInteractive();

        const player = this.player = new Body(
            this, 
            "player", 
            round(width / 2), 
            round(height / 2)
        );

        test.on('pointermove', player.move.bind(player));
        test.on('pointerup', player.shoot.bind(player));

        this.createParticles();
    }

    createParticles() {
        const template = {
            x: -1000,
            y: -1000,
            speed: { min: -100, max: 100 },
            angle: { min: 0, max: 360 },
            blendMode: 'SCREEN',
            lifespan: 600,
            gravityY: 0,
            rotate: { min: 0, max: 360 }
        };

        this.particles = {
            bulletDestroy: this.add.particles('triangle')
                .createEmitter(
                    Object.assign({
                        scale: { start: 0.3, end: 0 },
                        quantity: { min: 3, max: 6}
                    }, template)
                ),
            shieldDestroy: this.add.particles('square')
                .createEmitter(
                    Object.assign({
                        scale: { start: 0.5, end: 0 },
                        quantity: { min: 4, max: 9}
                    }, template)
                )
        }
    }

    update() {

    }

    gameOver() {
        this.scene.manager.stop("UI");
        this.scene.manager.stop("Game");
        this.scene.manager.start("Menu");
    }
}