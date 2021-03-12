import Menu from "./menu.js";
import Game from "./game.js";

(function() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 }
            }
        },
        scene: {
            Menu: Menu,
            Game: Game
        }
    };
    
    const game = new Phaser.Game(config);
})();