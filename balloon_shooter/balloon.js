export default class Balloon {
  constructor(parent, text, x, y) {
    this.parent = parent;
    const { maxSpeed, minSpeed } = this.parent.game.settings.balloons;
    this.state = 0;
    this.speed = Math.round((Math.random() * (maxSpeed - minSpeed) + minSpeed) * 100) / 100; //Случайное число от min до max с округлением до сотых

    this.img = parent.add.image(x, y, `balloon_${Math.floor(Math.random() * (8 - 1)) + 1}`).setInteractive();
    this.text = parent.add.text(x, y, text, { font: '30px Arial', fill: '#fff' }).setOrigin(0.5, 0.8);
    if (this.text.width + 6 > this.img.width) this.text.setFontSize((113 / this.text.width) * 23);

    this.img.on(
      'pointerup',
      function () {
        this.destroy();
      },
      this,
    );
  }

  move() {
    if (this.state === 0) {
      if (this.img.y < -150) {
        this.img.y = 720 - 75;
        this.text.y = 720 - 75;
      } else {
        this.img.y -= this.speed;
        this.text.y -= this.speed;
      }
    }
  }

  destroy() {
    this.state = 1;
    this.img.x = -100;
    this.img.y = -100;
    this.text.x = -100;
    this.text.y = -100;
    this.parent.explodes.push(this.text.text);
    this.parent.addAnswer();
    this.parent.sound.play('pop');
  }

  changePos(x, y) {
    this.img.x = x;
    this.img.y = y;

    this.text.x = x;
    this.text.y = y;
  }
}
