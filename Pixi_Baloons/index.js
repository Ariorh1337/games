//import * as PIXI from "pixi.js"
import Menu from "./scenes/menu.js";
import Game from "./scenes/game.js";

const app = new PIXI.Application({
    width: 720,
    height: 600
});
document.body.appendChild( app.view );

startMenu();

function startMenu() {
    const menu = new Menu(app);
    menu.onEnd.then(() => {
        console.log("Game")
        startGame();
    })
}

function startGame() {
    const game = new Game(app);
    game.onEnd.then(() => {
        console.log("Menu")
        startMenu();
    })
}