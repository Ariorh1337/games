import Menu from "./scene/menu.js";
import Game from "./scene/game.js";
import UI from "./scene/ui.js";

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 0 },
            debug: {
                showBody: true,
                showStaticBody: true
            }
        },
    },
    scene: [
        Menu, 
        Game, 
        UI
    ],
    resolution: 1,
};

//DEBUG
window.scenes = Object();
//DEBUG END

const game = new Phaser.Game(config);