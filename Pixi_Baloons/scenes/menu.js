import Sprite from "../utils/sprite.js"

export default class Menu {
    constructor(app) {
        this.app = app;
        
        this.container = new PIXI.Container();
        app.stage.addChild(this.container);
        
        this.onEnd = new Promise(resolve => {
            this.end = resolve;
        })

        this.create();
    }

    create() {
        const { container } = this;

        const background = new Sprite(container, "img/background.png", 0, 0);
        const frame = new Sprite(container, "img/frame.png", 0, 0);
        const inputs = new Sprite(container, "img/inputs.png", 50, 440, 225, 160)
    
        const start = new PIXI.Text("START", { fontFamily : 'Arial', fontSize: 70, fill: '#fff' });
        start.x = 380;
        start.y = 300;
        start.anchor.set(0.5);
        start.interactive = true;
        start.on('mousedown', this.end);
        start.on('touchstart', this.end);

        container.addChild(start);

        window.start = start
    }

    destroy() {
        const { container } = this;

        container.destroy();
        delete this;
    }
}