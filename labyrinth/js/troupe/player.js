export default class Player {
    constructor() {
        this.settings = {
            lives: 3,
            coins: 0
        }
    }

    create(scene) {
        this.visual = scene.physics.add.sprite(55, 63, 'player.sprite').setDepth(2).setScale(0.9);

        //Анимация
        scene.anims.create({
            key: 'stay',
            frames: [{ key: "player.sprite", frame: "11" }],
            frameRate: 1,
            repeat: 0
        });
        this.visual.play('stay');

        scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNames("player.sprite", {start: 0, end: 10}),
            frameRate: 10,
            repeat: -1
        });

        scene.anims.create({
            key: 'jump',
            frames: [{ key: "player.sprite", frame: "12" }],
            frameRate: 1,
            repeat: 0
        });

        //Камера следует за игроком
        scene.cameras.main.startFollow(this.visual);

        //Управление
        scene.inputKey = scene.input.keyboard.addKeys('W,S,A,D,UP,DOWN,LEFT,RIGHT')

        //Изменяем размер колайдера столкновений
        this.visual.setSize(46, 63, 35);

        //Добавляем состояние: в прыжке
        this.visual.state = {
            inJump: false,
            isCollide: false
        }

        this.visual.setMaxVelocity(300, 400).setFriction(800, 0);
        this.visual.once = false;

        this.layerPos = {
            layerX: 0,
            layerY: 0
        }

        //Добавляем столкновение с картой
        scene.layers.forEach(layer => {
            scene.physics.add.collider(this.visual, layer, this.tilesCollide);
            layer.setCollisionByProperty({ "collides": "true" });
        })
    }

    move(scene) {
        const input = scene.inputKey;
        const player = this.visual;
        const touch = scene.UI.settings.input.isPressed;

        const touchDir = (touch) ? scene.UI.settings.input.direction : false;

        if (player.scene.UI.open) {
            player.play("stay")
            return false;
        }

        const move = {
            left: false,
            right: false,
            up: false,
            wallUp: false,
            down: false
        }

        //Лево - this.moveLeft();
        if (input.LEFT.isDown) move.left = true;
        if (input.A.isDown) move.left = true;
        if (touchDir === 0) move.left = true;
        if (touchDir === 1) move.left = true;

        //Право - this.moveRight();
        if (input.RIGHT.isDown) move.right = true;
        if (input.D.isDown) move.right = true;
        if (touchDir === 3) move.right = true;
        if (touchDir === 4) move.right = true;

        //Обычный прыжок - this.moveUP(false);
        if (input.UP.isDown && player.body.onFloor()) move.up = true;
        if (input.W.isDown && player.body.onFloor()) move.up = true;
        if (touchDir === 1 && player.body.onFloor()) move.up = true;
        if (touchDir === 2 && player.body.onFloor()) move.up = true;
        if (touchDir === 3 && player.body.onFloor()) move.up = true;

        //Карабкаться по стене и потолку - this.moveUP(true);
        if (input.UP.isDown && player.state.isCollide && !player.body.onFloor()) move.wallUp = true;
        if (input.W.isDown && player.state.isCollide && !player.body.onFloor()) move.wallUp = true;
        if (touchDir === 1 && player.state.isCollide && !player.body.onFloor()) move.wallUp = true;
        if (touchDir === 2 && player.state.isCollide && !player.body.onFloor()) move.wallUp = true;
        if (touchDir === 3 && player.state.isCollide && !player.body.onFloor()) move.wallUp = true;

        //На месте
        if (player.body.onFloor() && !move.left && !move.right && !move.up && !move.wallUp) player.play("stay", true);

        if (move.left) this.moveLeft();
        if (move.right) this.moveRight();
        if (move.up) this.moveUP(false);
        if (move.wallUp) this.moveUP(true);
    }

    moveRight() {
        const player = this.visual;

        player.setVelocityX(160);
        if (player.body.onFloor()) player.play("walk", true); //Это что бы анимация ходьбы не перебивала анимацию прыжка
        player.flipX = false;
    }

    moveLeft() {
        const player = this.visual;

        player.setVelocityX(-160);
        if (player.body.onFloor()) player.play("walk", true); //Это что бы анимация ходьбы не перебивала анимацию прыжка
        player.flipX = true;
    }

    moveUP(wallWalk = false) {
        const player = this.visual;

        if (!wallWalk) {
            player.state.inJump = true;
            player.setVelocityY(-330);
            player.play("jump", true);
            player.state.isCollide = false;
        } else {
            player.setVelocityY(-110);
            player.play("jump", true);
        }
    }

    setPos(x, y) {
        if (x === '' || y === '') return false;

        if (!isNaN(Number(x))) this.visual.x = x;
        if (!isNaN(Number(y))) this.visual.y = y;
    }

    getPos() {
        return { "x": this.visual.x, "y": this.visual.y };
    }

    getLayerPos() {
        return { "x": Math.floor(this.visual.x / 1587), "y": Math.floor(this.visual.y / 1587) };
    }

    murder(scene) {

    }

    zoom(int) {
        this.visual.scene.cameras.cameras[0].zoom = int;
    }

    tilesCollide(player, layer) {
        if (player.body.velocity.x > 0) {
            player.setVelocityX(player.body.velocity.x - 32);
        } else if (player.body.velocity.x < 0) {
            player.setVelocityX(player.body.velocity.x + 32);
        }

        if (player.state.inJump && player.body.blocked.down) {
            player.state.inJump = false;
        }

        if (player.body.blocked.left && player.body.blocked.right && player.body.blocked.up) {
            player.state.inJump = false;
        }

        player.state.isCollide = true;
    }

    getTileY() {
        const player = this.visual;

        return (player.body.y + (player.body.height - 0.4) + 0.4) / (63.82 - 0.06);
    }

    update(scene) {
        this.move(scene);
        this.visual.state.isCollide = false;
    }
}
