import shuffle from '/libs/shuffle.js';

function frontface() {
    const scene = this;

    //Bird animation
    scene.bird = scene.physics.add.sprite(360, 300, 'bird').setDepth(1);
    scene.anims.create({
        key: 'fly',
        frames: scene.anims.generateFrameNumbers('bird', { start: 0, end: 8 }),
        frameRate: 8,
        repeat: -1
    });
    scene.bird.play('fly');
    //Bird animation


    //Interface
    scene.background = scene.add.tileSprite(0, 0, 2880, 2400, 'background').setDepth(0);
    scene.background.tilePositionY = -300;
    scene.background.tilePositionX = -400;
    //Interface

    //Score + Answer
    const fontColor = scene.game.settings.patterns.fontColor;
    const patterns = scene.game.settings.patterns;
    const score = scene.game.settings.score;
    const highScore = scene.game.settings.highScore;
    const words = scene.game.settings.words;

    scene.scoreText = scene.add.text(360 - 54, 30, patterns[scene.scene.key].score + score, { font: "40px Arial", fill: fontColor }).setDepth(1);
    scene.lastScoreText = scene.add.text(40, 25, highScore, { font: "50px Arial", fill: fontColor }).setDepth(1);
    scene.inputText = scene.add.text(360 - 127, 470, `| ${shuffle(words).join(' ')}`, { font: "30px Arial", fill: fontColor, fixedWidth: 264 }).setDepth(1);
    scene.timeText = scene.add.text(300, 170, "", { font: "250px Arial", fill: 'orange' }).setDepth(2);
    //Score + Answer

    //Input
    scene.keyInput = function (event) {
        const inputElement = this;
        
        let currentKey = event.key;
        if (currentKey === "Unidentified") currentKey = inputElement.value[inputElement.value.length - 1].toLowerCase();
        
        inputElement.value = '*'; //clear

        scene.keyDown(currentKey);
    }
    document.querySelector("#keyInput").addEventListener("keyup", scene.keyInput);
    //Input

    //Voice action
    if (!scene.game.settings.lastword) scene.game.settings.lastword = scene.inputText.text.match(/ ([a-z]*) /)[1];
    //
}

export default frontface;