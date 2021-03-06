import Bullet from "./bullet.js";

export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.settings = { 
            x, 
            y, 
            angle: 0,
            radius: 25,
            hp_max: 1000,
            hp: 1000
        };
        this.create(scene);
    }

    create(scene) {
        const { x, y, radius, hp_max, hp } = this.settings;

        const body = scene.add.circle(0, 0, radius, 0xff66ff).setOrigin(0.5).setScale(hp / hp_max);
        body.key = "player.body";
        body.parent = this;

        const shield = scene.add.rectangle(body.x -  body.width, body.y, 10, body.height, 0x55aeff).setOrigin(0.5);
        shield.key = "player.shield";
        shield.parent = this;

        const player = scene.add.container(x, y, [body, shield]);
        scene.physics.add.existing(body);
        scene.physics.add.existing(shield);

        body.body.pushable = false;
        shield.body.pushable = false;


        const shieldAlpha = scene.tweens.add({
            targets: shield,
            alpha: { from: 0.1, to: 1 },
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity, 0: no repeat
            yoyo: false
        });

        const bodySize = scene.tweens.add({
            targets: body,
            scaleX: `-=0.1`,
            scaleY: `-=0.1`,
            ease: 'Elastic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 2000,
            repeat: 0,            // -1: infinity, 0: no repeat
            yoyo: false
        });

        this.sprites = {
            body,
            shield
        }
        this.tween = {
            shield: shieldAlpha,
            body: bodySize
        }
        this.container = player;
    }

    move(pointer) {
        const player = this.container;
        const {x,y} = pointer;
        const rad2deg = (radians) => {
            const pi = Math.PI;
            return radians * (180/pi);
        }

        const radian = Math.atan2(y - player.y, x - player.x);
        const degree = rad2deg(radian);
        
        player.setAngle(degree);
        this.settings.angle = degree;
        this.settings.radian = radian;
    }

    shoot() {
        if (this.sprites.shield.alpha < 1) {
            this.tween.shield.restart();
            return;
        }

        this.tween.shield.restart();

        const {fromX, fromY, toX, toY, angle} = this.makePosFromAngle();

        window.bullet = new Bullet(this.scene, fromX, fromY, toX, toY, angle);
    }

    shieldHit() {
        this.tween.shield.restart();
        
        const {fromX, fromY} = this.makePosFromAngle();
        const particle = this.scene.particles.shieldDestroy;
        particle.setPosition(fromX, fromY);
        particle.explode();
    }

    playerHit() {
        this.settings.hp -=  100;
        const { hp_max, hp } = this.settings;

        this.tween.body.data.forEach(data => {
            if (data.key === "scaleX" || data.key === "scaleY") {
                data.start = (hp + 100) / hp_max;
                data.end= hp / hp_max;
            }
        })
        this.tween.body.restart();
        
        this.scene.cameras.main.shake(250,0.01,0.01);

        if (this.settings.hp <= 0) this.scene.gameOver();
    }

    makePosFromAngle() {
        const { x, y, radius, radian, angle} = this.settings;

        const fromX = x + -(radius * 2) * Math.cos(radian);
        const fromY = y + -(radius * 2) * Math.sin(radian);

        const toX = x + (radius * 9) * Math.cos(radian);
        const toY = y + (radius * 9) * Math.sin(radian);

        return {
            fromX,
            fromY,
            toX,
            toY,
            angle
        }
    }
}