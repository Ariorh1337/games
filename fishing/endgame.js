export default class Endgame extends Phaser.Scene {
    constructor() {
        super('Endgame');
    }

    preload() {}
    
    create() {
        //Interface
        this.add.image(360, 300, 'background');
        this.add.text(30, 20, `Score: ${this.game.settings.score}`, { font: "30px Arial", fill: "#fff" }).setDepth(101);
        //Interface
    
        //Start Button
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        const text = this.add.text(0, 0, "try again", { font: "70px Arial", fill: "#fff" }).setInteractive();
        text.x = screenCenterX - text.width / 2;
        text.y = screenCenterY - text.height / 2;

        text.once('pointerup', function () {
            this.scene.stop('Endgame')
            this.scene.start('Level');
        }, this);
        //Start Button

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
    }
}