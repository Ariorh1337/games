class Enemy {
    constructor(scene, x, y, spriteKey) {
        this.parentScene = scene;
        this.pos = { x, y }
        this.res = {
            sprite: spriteKey
        }

        this.visual = scene.physics.add.sprite(x, y, this.res.sprite).setDepth(2).setScale(1.5);

        this.layerCollision();
    }

    layerCollision() {
        const scene = this.parentScene;

        scene.layers.forEach(layer => {
            scene.physics.add.collider(this.visual, layer, this.tilesCollide).name = "enemy";
            layer.setCollisionByProperty({ "collides": "true" });
        })
    }

    wallbounce() {
        this.visual.body.bounce.x = 1;
    }

    startToWalk() {
        const scene = this.parentScene;

        scene.time.delayedCall(Phaser.Math.Between(1, 1500), (entity) => {
            try {
                entity.visual.body.setVelocityX(100);
            } catch (err) { console.error(err) }
        }, [this]);
    }

    tilesCollide(player, layer) {
        if (player.body.velocity.x > 0) player.flipX = false;
        else player.flipX = true;
    }

    gravity(bool) {
        this.visual.body.allowGravity = bool;
    }

    destroy() {
        const sprite = this.visual;
        const colliders = this.parentScene.physics.world.colliders.getActive().filter(function (i) {
            return i.object1 === sprite || i.object2 === sprite;
        });

        colliders.forEach(collider => { collider.destroy() });
        sprite.destroy();
    }
}

class Fall extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, "fall.sprite");

        this.res.animations = {
            "dead": {
                "key": "fall.dead",
                "frame": "4",
                "frameRate": 1,
                "repeat": 0
            },
            "walk": {
                "key": "fall.walk",
                "frames": {
                    start: 0,
                    end: 3
                },
                "frameRate": 8,
                "repeat": -1
            },
        }
        this.animation();

        this.visual.setSize(41, 30, 20.5);
        this.visual.play(this.res.animations.walk.key);

        this.wallbounce();
        this.startToWalk();

        this.visual.class = this;

        scene.physics.add.collider(this.visual, scene.player.visual, this.playerCollide)
    }



    animation() {
        const scene = this.parentScene;
        const dead = this.res.animations.dead;
        const walk = this.res.animations.walk;

        this.animation[dead.key] = scene.anims.create({
            key: dead.key,
            frames: [{ key: this.res.sprite, frame: dead.frame }],
            frameRate: dead.frameRate,
            repeat: dead.repeat
        });

        this.animation[walk.key] = scene.anims.create({
            key: walk.key,
            frames: scene.anims.generateFrameNames( this.res.sprite, walk.frames),
            frameRate: walk.frameRate,
            repeat: walk.repeat
        });
    }

    playerCollide(enemy, player) {
        if (!player.body.touching.down) {
            player.scene.UI.changeLives(-1);
        }

        if (player.body.touching.left) {
            player.setVelocityY(-230);
            player.setVelocityX(160);
        }

        if (player.body.touching.right) {
            player.setVelocityY(-230);
            player.setVelocityX(-160);
        }

        if (player.body.touching.down) {
            player.setVelocityY(-230);
        }

        enemy.destroy()
    }
}

class Fly extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, "fly.sprite");

        this.res.animations = {
            "walk": {
                "key": "fly.walk",
                "frames": {
                    start: 0,
                    end: 4
                },
                "frameRate": 8,
                "repeat": -1
            },
        }

        this.animation();

        this.gravity(false);
        this.visual.play(this.res.animations.walk.key);

        this.wallbounce();
        this.startToWalk();

        this.visual.class = this;

        scene.physics.add.collider(this.visual, scene.player.visual, this.playerCollide)
    }

    animation() {
        const scene = this.parentScene;
        const walk = this.res.animations.walk;

        this.animation[walk.key] = scene.anims.create({
            key: walk.key,
            frames: scene.anims.generateFrameNames( this.res.sprite, walk.frames),
            frameRate: walk.frameRate,
            repeat: walk.repeat
        });
    }

    playerCollide(enemy, player) {
        if (player.body.touching.down) {
            player.setVelocityY(-230);
            enemy.destroy()
        } else {
            player.scene.UI.changeLives(-1);

            if (player.body.touching.up) {
                player.setVelocityY(10);
            }

            if (player.body.touching.left) {
                player.setVelocityY(-230);
                player.setVelocityX(160);
                enemy.setVelocityX(-200);
            }

            if (player.body.touching.right) {
                player.setVelocityY(-230);
                player.setVelocityX(-160);
                enemy.setVelocityX(200);
            }

            if (player.body.touching.left || player.body.touching.right) {
                player.scene.time.delayedCall(Phaser.Math.Between(50, 250), (entity) => {
                    entity.class.tilesCollide(entity)
                }, [enemy]);
            }
        }
    }
}

class Question extends Enemy {
    constructor(scene, x, y) {
        super(scene, x, y, "event.sprite");

        this.res.chance = {
            "finish": 3,
            "lifes": 2,
            "score": 1,
            "used": 0
        }

        const chance = Phaser.Math.Between(1, 100);

        if (chance >= 97) {
            this.visual.setFrame(this.res.chance.finish);
            this.type = this.res.chance.finish;
        }
        if (chance >= 75 && chance < 97) {
            this.visual.setFrame(this.res.chance.lifes);
            this.type = this.res.chance.lifes;
        }
        if (chance >= 0 && chance < 75) {
            this.visual.setFrame(this.res.chance.score);
            this.type = this.res.chance.score;
        }

        this.gravity(false);
        this.visual.setScale(1);
        this.visual.setDepth(1)

        this.visual.class = this;

        this.overlap = scene.physics.add.overlap(this.visual, scene.player.visual, this.playerOverlap)
    }

    playerOverlap(question, player) {
        const UI = question.scene.UI;
        const isUIopened = UI.open;

        if (!isUIopened) {
            if (!question.class.word) question.class.word = Phaser.Math.Between(0, UI.words.length - 1);

            const type = question.class.type;
            if (type === 2 || type === 1) question.setFrame(0);

            question.class.overlap.destroy();
            UI.questionStart(question.class.word, type, question);
            UI.animationUP();
        }
    }
}

export default {
    Enemy, Fall, Fly, Question
}
