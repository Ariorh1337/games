export default class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {
        const load = this.load;
        load.image('background', 'img/background.png');

        load.spritesheet('fish', 'img/fish.png', { frameWidth: 136, frameHeight: 66 });
        load.spritesheet('lifes', 'img/lifes.png', { frameWidth: 20, frameHeight: 20 });
        load.spritesheet('player', 'img/player.png', { frameWidth: 170, frameHeight: 110 });
        load.spritesheet('volume', 'img/volume.png', { frameWidth: 40, frameHeight: 40 });

        load.audio('background', ['sound/background.mp3']);
        load.audio('eat', ['sound/eat.mp3']);
        load.audio('nope', ['sound/nope.mp3']);
    }
    
    create() {
        //Interface
        this.add.image(360, 300, 'background');
        //Interface
    
        //Start Button
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        const text = this.add.text(0, 0, "START", { font: "70px Arial", fill: "#fff" }).setInteractive();
        text.x = screenCenterX - text.width / 2;
        text.y = screenCenterY - text.height / 2;

        text.once('pointerup', function () {
            this.scene.stop('Menu')
            this.scene.start('Level');
        }, this);
        //Start Button

        //Music + Music Interface
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

        this.game.music = this.sound.add('background', {
            mute: false,
            volume: Number($localStorage.volume) * 0.33,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        });
        this.game.music.play();
        
        this.game.music = this.sound.add('background', {
            mute: false,
            volume: 3 * 0.33,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        });
        this.game.music.play();
        //Music
    }
}