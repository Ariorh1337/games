export default class Sprite {
    constructor(container, src, x, y, width = 0, height = 0) {
        this.texture = PIXI.Texture.from(src);
        this.body = new PIXI.Sprite(this.texture);

        this.body.anchor.set(0);

        this.body.x = x;
        this.body.y = y;
        if (width) this.body.width = width;
        if (height) this.body.height = height;

        this.x = this.body.x;
        this.y = this.body.y;
        this.width = this.body.width;
        this.height = this.body.height;

        container.addChild(this.body);
    }

    setSize( width, height ) {
        this.body.width = width;
        this.body.height = height;
        this.width = width;
        this.height = height;
    }

    setOrigin(value) {
        this.body.anchor.set(value);
    }

    setPos(x, y) {
        this.body.x = x;
        this.body.y = y;
    }

    setX(x) {
        this.body.x = x;
    }

    setY(y) {
        this.body.y = y;
    }
}