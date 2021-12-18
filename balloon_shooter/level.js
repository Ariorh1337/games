import Balloon from './balloon.js';

export default class Level extends Phaser.Scene {
  constructor() {
    super('Level');
  }

  init() {
    this.game.settings.level += 1;
    this.game.settings.question = this.game.settings.words[this.game.settings.level];

    //Interface
    this.add.image(360, 300, 'background').setDepth(0);
    this.add.image(360, 300, 'frame').setDepth(100);
    const reload = this.add.image(680, 38, 'reload').setDepth(100).setInteractive();
    reload.once(
      'pointerup',
      function () {
        this.game.settings.level -= 1; //Это нужно что бы вернуться на этот же уровень
        this.game.settings.score -= 3;
        this.scene.stop('Level');
        this.scene.start('Level');
      },
      this,
    );
    //Interface

    //Score + Answer
    this.add.text(40, 10, 'score', { font: '30px Arial', fill: '#48dbfb' }).setDepth(101);
    this.add
      .text(76, 45, this.game.settings.score, { font: '35px Arial', fill: '#48dbfb' })
      .setOrigin(0.5, 0)
      .setDepth(101);
    this.textAnswer = this.add
      .text(366, 530, '', { font: '35px Arial', fill: '#48dbfb' })
      .setOrigin(0.5, 0)
      .setDepth(101);
    //Score + Answer

    //Balloons
    const question = this.game.settings.question;
    const gridPos = this.gridBallonsDisplayPos(question.split(' '));
    this.balloons = question.split(' ').map((text, index) => {
      return new Balloon(this, text, gridPos[index].x, gridPos[index].y);
    });
    this.explodes = new Array();
    //Balloons

    window.reload = reload;
  }

  update() {
    this.balloons.forEach(balloon => {
      balloon.move();
    });
  }

  addAnswer() {
    this.textAnswer.text = this.explodes.join(' ');
    if (this.textAnswer.width > 720) this.textAnswer.setFontSize((1400 / this.textAnswer.width) * 17);
    this.game.settings.answer = this.textAnswer.text;

    if (this.balloons.length === this.explodes.length) {
      this.game.scene.stop('Level');
      this.game.scene.start('Endmenu');
    }
  }

  clearAnswer() {
    this.explodes = new Array();
    this.textAnswer.text = '';

    const gridPos = this.gridBallonsDisplayPos(this.game.settings.question.split(' '));
    this.balloons.forEach((balloon, index) => {
      balloon.state = 0;
      balloon.changePos(gridPos[index].x, gridPos[index].y);
    });
  }

  //Тут мы делаем псевдо сетку для шаров, что бы они не наползали друг на друга
  gridBallonsDisplayPos(sentence) {
    const positions = new Array();

    return sentence.map(() => {
      let gridRow, gridCol;
      while (true) {
        gridRow = Math.floor(Math.random() * (5 - 1)) + 1;
        gridCol = Math.floor(Math.random() * (5 - 1)) + 1;
        const coordinates = `${gridRow}#${gridCol}`;
        if (!positions.includes(coordinates)) {
          positions.push(coordinates);
          break;
        }
      }
      gridRow = gridRow * 124 + Math.floor(Math.random() * 40 - 20);
      gridCol = gridCol * 200 + 400 + Math.floor(Math.random() * 100);
      return { x: gridRow, y: gridCol };
    });
  }
}
