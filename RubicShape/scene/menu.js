import over from "/libs/ui/over.js";

export default class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {

    }

    init() {
        window.scene = this;
    }

    create() {
        const { width, height } = this.game.config;
       
        const background = this.add.rectangle(0, 0, width, height, 0x838383).setOrigin(0);
       
        const play = this.add.text( width / 2, height / 2, "Start", {
            fontSize: "28px",
            fontStyle: "bold",
            color: "#000"
        }).setOrigin(0.5).setInteractive();
        over.scale(play, 1.2, 1);

        play.on("pointerdown", () => {
            this.scene.manager.start("Game");
        })
    }

    update() {

    }
}