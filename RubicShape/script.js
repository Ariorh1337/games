import Menu from "./scene/menu.js";
import Game from "./scene/game.js";

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT
    },
    width: 500,
    height: 900,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [Game, Menu]
};

const game = new Phaser.Game(config);