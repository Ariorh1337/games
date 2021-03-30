import Menu from "./scene/menu.js";
import Game from "./scene/game.js";
import UI from "./scene/ui.js";

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
            gravity: { y: 0 },
            debug: true,
        },
    },
    scene: [
        Menu, 
        Game, 
        UI
    ],
    resolution: 1,
};

if (config.physics.arcade.debug) window.scenes = Object();

const game = new Phaser.Game(config);