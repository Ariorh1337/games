export default class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');
  }

  preload() {
    const load = this.load;
    load.image('background', 'img/background.png');
    load.image('message', 'img/message.png');
    load.image('frame', 'img/frame.png');
    load.image('reload', 'img/reload.png');
    load.image('inputs', 'img/inputs.png');
    load.spritesheet('volume', 'img/volume.png', { frameWidth: 40, frameHeight: 40 });

    new Array(8).fill('').forEach((value, index) => {
      load.spritesheet(`balloon_${index + 1}`, `img/balloon_${index + 1}.png`, { frameWidth: 114, frameHeight: 144 });
    });

    load.audio('background', ['sound/background.mp3']);
    load.audio('pop', ['sound/pop.mp3']);
  }

  create() {
    //Interface
    this.add.image(360, 300, 'background');
    this.add.image(360, 300, 'frame');

    this.add.image(500, 90, 'message');
    this.add.text(325, 30, 'Pop the balloon so that the words form a sentence.', {
      //Лопните шары в правильном порядке, что бы слова образовали предложение.
      fontSize: 24,
      fontFamily: 'Arial',
      color: '#72e8ff',
      align: 'center',
      wordWrap: { width: 400, useAdvancedWrap: true },
    });

    this.add.image(150, 520, 'inputs').setScale(0.5);
    //Interface

    //Start Button
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    const text = this.add.text(0, 0, 'START', { font: '70px Arial', fill: '#fff' }).setInteractive();
    text.x = screenCenterX - text.width / 2;
    text.y = screenCenterY - text.height / 2;

    text.once(
      'pointerup',
      function () {
        this.scene.start('Level');
        this.scene.stop('Menu');
      },
      this,
    );
    //Start Button

    //Music + Music Interface
    this.anims.create({ key: '0', frames: [{ key: 'volume', frame: '0' }], frameRate: 1, repeat: 0 });
    this.anims.create({ key: '1', frames: [{ key: 'volume', frame: '1' }], frameRate: 1, repeat: 0 });
    this.anims.create({ key: '2', frames: [{ key: 'volume', frame: '2' }], frameRate: 1, repeat: 0 });
    this.anims.create({ key: '3', frames: [{ key: 'volume', frame: '3' }], frameRate: 1, repeat: 0 });
    this.volume = this.add.sprite(60, 50, 'volume').setScale(1.4).setInteractive();
    this.volume.tint = 0x9af0ff;
    this.volume.play(window.$localStorage.volume);

    this.volume.on(
      'pointerup',
      function () {
        $localStorage.volume = Number($localStorage.volume) >= 3 ? 0 : Number($localStorage.volume) + 1;
        this.game.music.volume = $localStorage.volume * 0.33;
        this.volume.play($localStorage.volume);
      },
      this,
    );

    this.game.music = this.sound.add('background', {
      mute: false,
      volume: Number($localStorage.volume) * 0.33,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    });
    this.game.music.play();
    //Music
  }
}
