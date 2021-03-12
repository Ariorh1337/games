import over from "/libs/ui/over.js";
import click from "/libs/ui/click.js";

export default class UI extends Phaser.Scene {
    constructor() {
        super('UI');
    }

    preload() {
        this.load.svg("exitBtn", "../RubicShape/src/exitBtn.svg");
    }

    init() {
        this.gameScene = this.scene.get("Game");
    }

    create() {
        const { width, height } = this.game.config;

        const exitBtn = this.add.image(width * 0.85, height * 0.085, "exitBtn")
            .setOrigin(0.5)
            .setInteractive();
        over.scale(exitBtn, 1.2, 1);
        click.alpha(exitBtn, 1, .8);

        exitBtn.on("pointerdown", this.gameScene.gameOver.bind(this.gameScene));
    }

    update() {}
}