export default class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu" });
    }

    create() {
        this.physics.world.on("worldstep", () => {
            //console.log(1);
        });
    }

    update() {}
}
