import "phaser";
import "phaser/plugins/spine/dist/SpinePlugin";

import Boot from "./scenes/Boot";
import Menu from "./scenes/Menu";


const DEFAULT_WIDTH = 720;
const DEFAULT_HEIGHT = 1280;

const config = {
    type: Phaser.WEBGL,
    backgroundColor: "#ffffff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [Boot, Menu],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { x: 0, y: 0 },
            fps: 10,
        },
    },
    resolution: 1,
    plugins: {
        scene: [
            {
                key: "SpinePlugin",
                plugin: window.SpinePlugin,
                mapping: "spine",
            },
        ],
    },
};

window.addEventListener("load", () => {
    const game = new Phaser.Game(config);
});
