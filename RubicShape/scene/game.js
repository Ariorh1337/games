import Player from "../actor/player.js";

export default class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image("triangle", "../RubicShape/src/triangle.svg");
        this.load.image("square", "../RubicShape/src/square.svg");
    }

    init() {
        window.scene = this;
    }

    create() {
        const { width, height } = this.game.config;
       
        const background = this.add.rectangle(0, 0, width, height, 0x838383).setOrigin(0);

        const player = new Player(this, width / 2, height / 2);
        this.player = player;
        this.input.on('pointermove', player.move.bind(player));
        this.input.on('pointerup', player.shoot.bind(player));

        this.particles = {
            bulletDestroy: this.add.particles('triangle').createEmitter({
                x: -1000,
                y: -1000,
                speed: { min: -100, max: 100 },
                angle: { min: 0, max: 360 },
                scale: { start: 0.3, end: 0 },
                blendMode: 'SCREEN',
                lifespan: 600,
                gravityY: 0,
                quantity: { min: 3, max: 6}
            }),
            shieldDestroy: this.add.particles('square').createEmitter({
                x: -1000,
                y: -1000,
                speed: { min: -100, max: 100 },
                angle: { min: 0, max: 360 },
                scale: { start: 0.5, end: 0 },
                blendMode: 'SCREEN',
                lifespan: 600,
                gravityY: 0,
                quantity: { min: 4, max: 9}
            })
        }

        this.physics.world.on('worldbounds', function(body) {
            const bounce = Phaser.Math.Between(0, 1);

            if (bounce) body.gameObject.parent?.destroy();
        });
    }

    update() {

    }

    gameOver() {
        this.scene.manager.stop(this.scene.key);
        this.scene.manager.start("Menu");
    }
}