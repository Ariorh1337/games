export default class Player {
    constructor(parent) {
        this.pos = { x: 100, y: 450 };
        this.direction = { x: 0, y: 0 };
        this.speed = 1;

        this.sprite = parent.physics.add.sprite(this.pos.x, this.pos.y, 'player');
        this.sprite.setCollideWorldBounds(true);

        this.sprite.body.customBoundsRectangle.y = 120
        this.sprite.body.customBoundsRectangle.height = 400

        parent.anims.create({
            key: 'stay',
            frames: parent.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
            frameRate: 8,
            repeat: -1
        });

        this.sprite.play('stay');

        const angle = 0;
        this.sprite.setCircle(24, 
            60+(53 * Math.cos(((angle / 15.12) * 0.26315789473684212))), 
            32+(49 * Math.sin(((angle / 15.12) * 0.26315789473684212)))
        )
    }

    move(x, y) {
        this.sprite.x += x;
        this.sprite.y += y;

        const angle = this.sprite.angle;
        if (x > 0 && y === 0 && (Math.round(angle) === 0 || Math.round(angle) === -5)) return true;//right
        if (x < 0 && y === 0 && (Math.round(angle) === 175 || Math.round(angle) === -180)) return true;//left
        if (x === 0 && y > 0 && (Math.round(angle) === 105 || Math.round(angle) === 100)) return true;//down
        if (x === 0 && y < 0 && (Math.round(angle) === -80 || Math.round(angle) === -85)) return true;//up
        if (x > 0 && y > 0 && (Math.round(angle) === 60 || Math.round(angle) === 55)) return true;//right + down
        if (x > 0 && y < 0 && (Math.round(angle) === -30 || Math.round(angle) === -25)) return true;//right + up
        if (x < 0 && y > 0 && (Math.round(angle) === 150 || Math.round(angle) === 145)) return true;//left + down
        if (x < 0 && y < 0 && (Math.round(angle) === -135 || Math.round(angle) === -140)) return true;//left + up

        if (y === 0) {
            if (x > 0) (angle < 0) ? this.setAngle(angle + 5) : this.setAngle(angle - 5);//right
            if (x < 0) (angle < 0) ? this.setAngle(angle - 5) : this.setAngle(angle + 5);//left    
        }

        if (x === 0) {
            if (y > 0) (angle > -80 && angle < 105) ? this.setAngle(angle + 5) : this.setAngle(angle-5);//down
            if (y < 0) (angle > -80 && angle < 105) ? this.setAngle(angle - 5) : this.setAngle(angle+5);//up
        }

        if (x !== 0 && y !== 0) {
            if (x > 0 && y < 0) (angle < 150 && angle > -30) ? this.setAngle(angle - 5) : this.setAngle(angle + 5); //right + down
            if (x > 0 && y > 0) (angle < 60 && angle > -135) ? this.setAngle(angle + 5) : this.setAngle(angle - 5); //right + up
            
            if (x < 0 && y > 0) (angle < 150 && angle > -60) ? this.setAngle(angle + 5) : this.setAngle(angle - 5); //left + down
            if (x < 0 && y < 0) (angle < 60 && angle > -135) ? this.setAngle(angle - 5) : this.setAngle(angle + 5); //left + up
        }

        this.direction = { x: x, y: y };
    }

    setAngle(angle) {
        if (this.sprite.angle === angle) return true;

        this.sprite.angle = angle
        this.sprite.setCircle(24, 
            60+(53 * Math.cos(((angle / 15.12) * 0.26315789473684212))), 
            32+(49 * Math.sin(((angle / 15.12) * 0.26315789473684212)))
        )
    }

    getDirection() {
        return this.direction;
    }
}