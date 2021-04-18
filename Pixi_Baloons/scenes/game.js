import Sprite from "../utils/sprite.js"
import Baloon from "../actor/baloon.js"

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

        container.children.sort(this.depthCompare);
    }

    changeScore(value) {
        this.score += value;
        this.scoreNumber = this.score;
    }

    createBaloons() {
        const scene = this;
        const { container, app, words } = this;

        const baloons = this.baloons = new Array();
        const frames = ["blue", "orange", "red", "mint", "cold", "pink", "rose", "purple"];

        const setup = () => {
            let sheet = app.loader.resources["img/baloons.json"];

            this.gridBallonsDisplayPos(words).forEach((pos, index) => {
                const word = words[index];

                const random = Math.floor(Math.random() * 8);
                const frame = frames[random];

                const baloon = new Baloon(sheet, frame, word, pos.x, pos.y);

                baloon.container.z = 1;
                container.addChild(baloon.container);
                baloons.push(baloon);
            });

            container.children.sort(this.depthCompare);

            app.ticker.add((delta) => {
                baloons.forEach((baloon) => {
                    baloon.move(delta);
                });
            });
        }

        app.loader
            .add("img/baloons.json")
            .load(setup);

        window.baloons = baloons;
    }

    createBaloon(sheet, word, name) {
        const container = new PIXI.Container();

        const baloon = new PIXI.AnimatedSprite(
            sheet.spritesheet.animations[ name ]
        );

        baloon.animationSpeed = 0;
        baloon.anchor.set(0.5);
        container.addChild(baloon);

        const text = this.createBaloonText(word);
        container.addChild(text);

        return container;
    }

    createBaloonText(word) {
        const text = new PIXI.Text(word, { fontFamily : 'Arial', fontSize: 20, fill: '#fff' });

        text.x = 0;
        text.y = -10;
        text.anchor.set(0.5);

        return text;
    }

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

    depthCompare( a, b ) {  
        if (a.z < b.z) return -1;
        if (a.z > b.z) return 1;
        return 0;
    }

    destroy() {
        const { container } = this;

        container.destroy();
        delete this;
    }
}