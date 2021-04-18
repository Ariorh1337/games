export default class Baloon {
    constructor( sheet, frame, word, x, y ) {
        this.sheet = sheet;
        this.frame = frame;
        this.word = word;
        this.x = x;
        this.y = y;
        this.alive = true;

        this.container = new PIXI.Container();

        this.image = this.createBaloon(sheet, frame);
        this.text = this.createBaloonText(word);

        this.container.x = x;
        this.container.y = y;
    }

    createBaloon(sheet, frame) {
        const container = this.container;

        const baloon = new PIXI.AnimatedSprite(
            sheet.spritesheet.animations[ frame ]
        );

        baloon.animationSpeed = 0;
        baloon.anchor.set(0.5);

        container.addChild(baloon);
        return baloon;
    }

    createBaloonText(word) {
        const container = this.container;

        const text = new PIXI.Text(word, { fontFamily : 'Arial', fontSize: 20, fill: '#fff' });

        text.x = 0;
        text.y = -10;
        text.anchor.set(0.5);

        container.addChild(text);
        return text;
    }

    move( delta ) {
        const { container, alive } = this;

        if (!alive) return;
        if (container.y < -150) {
            container.y = 645;
        } else {
            container.y -= 2 * delta;
        }
    }

    destroy() {
        this.alive = false;

        this.image.play();

        this.text.x = -100;
        this.text.y = -100;

        setTimeout(() => {
            this.image.x = -100;
            this.image.y = -100;
        }, 100);

        //this.parent.explodes.push(this.text.text);
        //this.parent.addAnswer();
        //this.parent.sound.play('pop');
    }

    setPos(x, y) {
        this.container.x = x;
        this.container.y = y;
    }
}