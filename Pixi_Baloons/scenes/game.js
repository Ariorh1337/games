import Sprite from "../utils/sprite.js"
import BaloonsManager from "../actor/baloonManager.js"

export default class Game {
    constructor(app) {
        this.app = app;

        this.container = new PIXI.Container();
        app.stage.addChild(this.container);

        this.onEnd = new Promise(resolve => {
            this.end = resolve;
        })

        this.score = 0;
        this.question = 'alan does not like eggs.';
        this.words = this.question.split(" ");

        this.create();
    }

    create() {
        const { container } = this;

        const background = new Sprite(container, "img/background.png", 0, 0);
        background.body.z = 0;

        this.createBaloons();

        const frame = new Sprite(container, "img/frame.png", 0, 0);
        frame.body.z = 9;

        const scoreText = new PIXI.Text("score", { fontFamily : 'Arial', fontSize: 30, fill: '#48dbfb' });
        scoreText.x = 75;
        scoreText.y = 25;
        scoreText.anchor.set(0.5);
        scoreText.z = 10;
        container.addChild(scoreText);

        const scoreNumber = this.scoreNumber = new PIXI.Text("0", { fontFamily : 'Arial', fontSize: 30, fill: '#48dbfb' });
        scoreNumber.x = 75;
        scoreNumber.y = 55;
        scoreNumber.anchor.set(0.5);
        scoreNumber.z = 10;
        container.addChild(scoreNumber);

        this.depthUpdate();
    }

    changeScore(value) {
        this.score += value;
        this.scoreNumber = this.score;
    }

    createBaloons() {
        const { app, words } = this;

        this.baloons = new BaloonsManager(
            this,
            words,
            this.makeAnswer.bind(this)
        );

        this.baloons.loader.then(() => {
            app.ticker.add((delta) => {
                this.baloons.move(delta);
            });

            this.depthUpdate();
        });

        window.baloons = this.baloons;
    }

    makeAnswer(word) {
        console.log(word);
    }

    depthUpdate () {
        const compare = ( a, b ) => {
            if (a.z < b.z) return -1;
            if (a.z > b.z) return 1;
            return 0;
        }

        this.container.children.sort(compare);
    }

    destroy() {
        const { container } = this;

        container.destroy();
        delete this;
    }
}