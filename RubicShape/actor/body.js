import Bullet from "./bullet.js";
import round from "../../libs/round.js";

export default class Body {
    constructor(scene, type, x, y) {
        this.scene = scene;
        this.settings = { 
            x, 
            y, 
            angle: 0,
            radius: 25,
            hp_max: 1000,
            hp: 1000,
            type
        };
        this.create(scene);
    }

    create(scene) {
        const { x, y, radius, hp_max, hp, type } = this.settings;

        const body = scene.add.circle(x, y, radius, 0xff66ff).setOrigin(0.5).setScale(hp / hp_max);
        body.key = `${type}.body`;
        body.parent = this;

        const bodyPhysic = scene.matter.add.circle(x, y, radius, { ignoreGravity: true });
        scene.matter.add.worldConstraint(bodyPhysic, 0, 1, { pointA: { x, y }});

        const shield = scene.add.rectangle(body.x -  body.width, body.y, 10, body.height, 0x55aeff).setOrigin(0.5);
        shield.key = `${type}.shield`;
        shield.parent = this;

        const shieldPhysic = scene.matter.add.rectangle(body.x -  body.width, body.y, 10, body.height, { ignoreGravity: true });
        scene.matter.add.worldConstraint(shieldPhysic, 0, 1, { pointA: { x: body.x -  body.width, y: body.y }});

        const shieldAlpha = scene.tweens.add({
            paused: true,
            targets: shield,
            alpha: { from: 0.1, to: 1 },
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 400,
            repeat: 0,            // -1: infinity, 0: no repeat
            yoyo: false
        });

        const bodySize = scene.tweens.add({
            paused: true,
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
        this.physic = {
            bodyPhysic,
            shieldPhysic
        }
        this.tween = {
            body: bodySize,
            shield: shieldAlpha
        }
    }

    move(pointer) {
        const body = this.sprites.body;
        const shield = this.sprites.shield;
        const bodyPhysic = this.physic.bodyPhysic;
        const shieldPhysic = this.physic.shieldPhysic;

        const {x,y} = pointer;
        const rad2deg = (radians) => {
            const pi = Math.PI;
            return radians * (180/pi);
        }

        const radian = Math.atan2(y - body.y, x - body.x);
        const degree = rad2deg(radian);


        body.setAngle(degree);
        shield.setAngle(degree);

        this.scene.matter.body.setAngle(bodyPhysic, radian);
        this.scene.matter.body.setAngle(shieldPhysic, radian);

        this.settings.angle = degree;
        this.settings.radian = radian;
    }

    shoot() {
        this.tween.shield.restart();

        if (this.sprites.shield.alpha < 1) return;

        const {fromX, fromY, toX, toY, angle} = this.makePosFromAngle();

        new Bullet(this.scene, this.type, fromX, fromY, toX, toY, angle);
    }

    shieldHit(gunman) {
        this.tween.shield.restart();
        
        const {fromX, fromY} = this.makePosFromAngle();
        const particle = this.scene.particles.shieldDestroy;
        particle.setPosition(fromX, fromY);
        particle.explode();
    }

    playerHit(gunman) {
        this.settings.hp -=  100;
        const { hp_max, hp } = this.settings;

        this.tween.body.data.forEach(data => {
            if (data.key === "scaleX" || data.key === "scaleY") {
                data.start = (hp + 100) / hp_max;
                data.end = hp / hp_max;
            }
        })
        this.tween.body.restart();
        
        this.scene.cameras.main.shake( 250, 0.01, 0.01);

        if (this.settings.hp <= 0) this.scene.gameOver();
    }

    makePosFromAngle() {
        const { x, y, radius, radian, angle} = this.settings;

        const fromX = round(x + -(radius * 3) * Math.cos(radian));
        const fromY = round(y + -(radius * 3) * Math.sin(radian));

        const toX = round(x + (radius * 9) * Math.cos(radian));
        const toY = round(y + (radius * 9) * Math.sin(radian));

        return {
            fromX,
            fromY,
            toX,
            toY,
            angle
        }
    }
}