export default class Endmenu extends Phaser.Scene {
  constructor() {
    super('Endmenu');
  }

  init() {
    const isRight = this.checkAnswer();

    this.add.image(360, 300, 'background');
    this.add.image(360, 300, 'frame');

    //Score
    this.add.text(40, 10, 'score', { font: '30px Arial', fill: '#48dbfb' });
    this.add.text(76, 45, this.game.settings.score, { font: '35px Arial', fill: '#48dbfb' }).setOrigin(0.5, 0);
    this.textAnswer = this.add.text(366, 530, '', { font: '35px Arial', fill: '#48dbfb' }).setOrigin(0.5, 0);
    //

    //Start Button
    const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    const text = this.add.text(0, 0, 'NEXT', { font: '70px Arial', fill: '#fff' }).setInteractive();
    text.x = screenCenterX - text.width / 2;
    text.y = screenCenterY - text.height / 2;

    text.once(
      'pointerup',
      function () {
        this.scene.stop('Endmenu');
        this.scene.start('Level');
      },
      this,
    );
    //Start Button

    //Answer Draw
    const answerColor = isRight ? '#1dd1a1' : '#ff6b6b';
    this.answer = this.add
      .text(366, 520, this.game.settings.answer, { font: '35px Arial', fill: answerColor })
      .setOrigin(0.5, 0);
    if (this.answer.width > 720) this.answer.setFontSize((1400 / this.answer.width) * 17);

    if (!isRight) {
      this.question = this.add
        .text(366, 555, `(${this.game.settings.question})`, { font: '35px Arial', fill: '#0a3d62' })
        .setOrigin(0.5, 0);
      if (this.question.width > 720) this.question.setFontSize((1400 / this.question.width) * 17);
    }
    //Answer Draw

    //Music + Music Interface
    this.anims.create({ key: '0', frames: [{ key: 'volume', frame: '0' }], frameRate: 1, repeat: 0 });
    this.anims.create({ key: '1', frames: [{ key: 'volume', frame: '1' }], frameRate: 1, repeat: 0 });
    this.anims.create({ key: '2', frames: [{ key: 'volume', frame: '2' }], frameRate: 1, repeat: 0 });
    this.anims.create({ key: '3', frames: [{ key: 'volume', frame: '3' }], frameRate: 1, repeat: 0 });
    this.volume = this.add.sprite(677, 38, 'volume').setScale(1.4).setInteractive();
    this.volume.tint = 0x9af0ff;
    this.volume.play($localStorage.volume);

    this.volume.on(
      'pointerup',
      function () {
        $localStorage.volume = Number($localStorage.volume) >= 3 ? 0 : Number($localStorage.volume) + 1;
        this.game.music.volume = $localStorage.volume * 0.33;
        this.volume.play($localStorage.volume);
      },
      this,
    );
    //Music

    window.level = this;
  }

  checkAnswer() {
    if (this.game.settings.question !== this.game.settings.answer) {
      this.game.settings.score -= 5;
      return false;
    } else {
      this.game.settings.score += 7;
      return true;
    }
  }
}
