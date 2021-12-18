export default class Boot extends Phaser.Scene {
    constructor() {
        super({ key: "Boot" });
    }

    preload() {
        this.load.image("phaser-logo", "assets/img/phaser-logo.png");
    }

    create() {
        this.scene.start("MainScene");
    }
}
