export default class Fish {
    constructor(parent, text, x, y) {
        this.parent = parent;
        this.state = 0; //Рыбка жива и может двигаться
        this.speed = parent.game.settings.fish.speed;
        this.oldPos = { x, y };
        this.level = Number(parent.game.settings.level);

        this.img = parent.add.sprite(x, y, `fish`).setScale(0.85, 0.8);
        const randomSkin = Math.floor(Math.random() * 6);

        if (randomSkin > 0) this.img.play(randomSkin);
        
        this.text = parent.add.text(x - 7, y + 5, text, { font: "15px Arial", fill: "#fff" }).setOrigin(0.5, 0.8);
        if (this.text.width + 6 > this.img.width) this.text.setFontSize(113 / this.text.width * 23);

        this.collisionRect = this.parent.add.rectangle(x - 17, y, 20, 20, '#ffffff', '0');
        this.parent.physics.add.existing(this.collisionRect);

        this.parent.physics.add.collider(this.parent.player.sprite, this.collisionRect, this.eated, null, this);
    }

    move() {
        if (this.state === 0) { 
            if (this.img.x < -150) { //Возвращаем рыбок в правую часть экрана при выходе за пределы
                if (this.level === this.parent.game.settings.level) { //Проверяем рыбку на соответствие текущему уровню
                    this.img.x = 720 + 150;
                    this.text.x = this.img.x - 5;
                    this.collisionRect.x = this.img.x - 17;
                    this.collisionRect.y = this.img.y;
                } else this.destroy();
            } else { //Ведем рыбок в правую часть экрана
                this.img.x -= this.speed;
                this.text.x -= this.speed;
                this.collisionRect.x = this.img.x - 17;
                this.collisionRect.y = this.img.y;
            }    
        }
    }

    eated() {
        this.parent.makeAnswer(this.text.text);
        this.parent.game.sounds.eat.play();
        this.destroy();
    }

    destroy() {
        this.state = 1; //Рыбка мертва и двигаться уже не может
        this.img.x = -100;
        this.img.y = -100;
        this.text.x = -100;
        this.text.y = -100;
        this.collisionRect.x = this.img.x - 17;
        this.collisionRect.y = this.img.y;
    }

    changePos(x, y) {
        this.img.x = x;
        this.img.y = y;

        this.text.x = this.img.x - 7;
        this.text.y = y;
    }
}