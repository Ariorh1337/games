export default class Bullet {
    constructor(scene, owner, x, y, x2, y2, angle) {
        this.scene = scene;
        this.prop = {
            color: 0x55aeff,
            size: 20,
            alpha: 1,
            pos: { x, y },
            target: { x2, y2 },
            angle,
            owner
        }

        this.create(scene);
    }

    create(scene) {
        const {color, size, alpha, angle} = this.prop;
        const {x,y} = this.prop.pos;
        const {x2,y2} = this.prop.target;
        
        const rect = scene.add.rectangle(x, y, size, size, color, alpha);
        rect.key = "bullet";

        scene.physics.add.existing(rect);
        rect.body.collideWorldBounds = true;
        rect.body.onWorldBounds = true;

        rect.body.setBounce(1);
        rect.body.setVelocity(x - x2, y - y2);
        rect.setAngle(angle);

        rect.parent = this;
        this.rect = rect;
        const owner = this.owner;

        const collide = (a, b) => {
            if (a.key === "bullet") a.parent?.destroy();
            if (b.key === "bullet") b.parent?.destroy();
            if (a.key === "player.shield") a.parent?.shieldHit(owner);
            if (b.key === "player.shield") b.parent?.shieldHit(owner);
            if (a.key === "player.body") a.parent?.playerHit(owner);
            if (b.key === "player.body") b.parent?.playerHit(owner);
            if (a.key === "enemy.shield") a.parent?.shieldHit(owner);
            if (b.key === "enemy.shield") b.parent?.shieldHit(owner);
            if (a.key === "enemy.body") a.parent?.playerHit(owner);
            if (b.key === "enemy.body") b.parent?.playerHit(owner);
        }

        scene.physics.add.collider(rect, scene.children.list, collide);
        scene.physics.add.collider(rect, scene.player.sprites.body, collide);
        scene.physics.add.collider(rect, scene.player.sprites.shield, collide);
    }

    destroy() {
        const particle = this.scene.particles.bulletDestroy;
        particle.setPosition(this.rect.x, this.rect.y);
        particle.explode();
        this.rect.destroy();
    }
}