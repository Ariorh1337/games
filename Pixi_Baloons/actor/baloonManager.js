import Baloon from "./baloon.js"

export default class BaloonsManager {
    constructor(scene, words, callback) {
        this.scene = scene;
        this.words = words;

        this.alive = new Array();
        this.dead = new Array();

        this.frames = ["blue", "orange", "red", "mint", "cold", "pink", "rose", "purple"];
        this.resource = "img/baloons.json";

        this.callback = callback;

        this.container = new PIXI.Container();

        this.scene.container.addChild(this.container);

        this.loader = new Promise(resolve => {
            this.loaderResolve = resolve;
        })

        this.scene.app.loader
            .add("img/baloons.json")
            .load(this.createBaloons.bind(this));
    }

    createBaloons() {
        const sheet = this.scene.app.loader.resources[this.resource];

        const positions = this.gridBallonsDisplayPos(this.words);

        positions.forEach((pos, index) => {
            const word = this.words[index];

            const frame = this.randomFrame();

            const baloon = new Baloon(sheet, frame, word, pos.x, pos.y);
            baloon.container.z = 1;

            baloon.onClick = () => {
                baloon.destroy();

                this.dead.push(baloon);

                this.callback(word);
            }

            this.container.addChild(baloon.container);

            this.alive.push(baloon);
        });

        this.loaderResolve();
    }

    move(delta) {
        this.alive.forEach((baloon) => {
            baloon.move(delta);
        });
    }

    randomFrame() {
        const framesLength = this.frames.length - 1;
        const random = Math.floor(Math.random() * framesLength);
        const frame = this.frames[random];

        return frame;
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
}