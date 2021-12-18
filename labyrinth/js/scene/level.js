import Player from '/labyrinth/js/troupe/player.js';
import troupe from '/labyrinth/js/troupe/enemy.js';
const { Enemy, Fall, Fly, Question } = troupe;
import shuffle from '/libs/shuffle.js';

export default class Level extends Phaser.Scene {
    constructor() {
        super('Level');
    }

    preload() {
        const scene = this;

        scene.load.image('background', '/labyrinth/img/ui/background.jpg');

        scene.load.image('terrain', '/labyrinth/img/level/tile.png');
        scene.load.tilemapTiledJSON("map", '/labyrinth/js/data/map.json');

        //Создаем игрока и подкгружаем текстуры
        this.player = new Player();
        scene.load.spritesheet('player.sprite', "/labyrinth/img/actor/player.png", { frameWidth: 55, frameHeight: 63 });
        scene.load.audio('jump', ["/labyrinth/sound/background.mp3"]);

        scene.load.spritesheet('fall.sprite', "/labyrinth/img/actor/fall.png", { frameWidth: 41, frameHeight: 30 });
        scene.load.spritesheet('fly.sprite', "/labyrinth/img/actor/fly.png", { frameWidth: 49, frameHeight: 38 });
        scene.load.spritesheet('event.sprite', "/labyrinth/img/actor/event.png", { frameWidth: 63, frameHeight: 63 });
    }

    create() {
        //Interface
        this.background = this.add.tileSprite(790, 790, 1587 * 3, 1587 * 3, 'background').setDepth(0);
        this.background.tilePositionY = -300;
        this.background.tilePositionX = -400;
        //Interface

        const loaded_map_data = this.game.cache.tilemap.entries.entries.map;
        loaded_map_data.data.tileheight = 63.5
        loaded_map_data.data.tilewidth = 63.5

        //Рисуем Карту
        this.level = { map: this.make.tilemap({ key: "map" }) };
        const map = this.level.map;

        this.level.tileset = map.addTilesetImage('tilemap', 'terrain');
        const tileset = this.level.tileset;

        //Всего в наличии 9 шаблонов, создаем все
        const layers = [];
        for (let i = 1; i <= 9; i++) {
            layers.push(map.createDynamicLayer(`level${i}`, tileset).setDepth(1));
        }
        this.layers = layers;
        //Каждый кусок размером 1550х1550

        //Рисуем игрока
        this.player.create(this);
        this.player.setPos(100, 100);

        //Расставляем блоки вокруг игрока
        this.layerGenerate();

        //Показываем UI
        var ui = this.scene.get('UI');
        ui.scene.start('UI');
        this.UI = ui;

        if (this.game.config.physics.arcade.debug) {
            //TEST ONLY
            window.scene = this;
            window.player = this.player;
            window.layer = layers;
            this.cameras.cameras[0].zoom = 1;
            window.Enemy = Enemy;
            window.UI = ui;
            //TEST ONLY
        }
    }

    update() {
        this.player.update(this);
        this.layerUpdate();
    }

    layerGenerate() {
        const layerXSize = 1587;
        const layerYSize = 1587;
        const playerPos = this.player.getLayerPos();
        const layerRandom = shuffle(this.layers);

        layerRandom.forEach((layer, index) => {
            if (index === 0) {
                this.layers[index].x = (playerPos.x - 1) * layerXSize;
                this.layers[index].y = (playerPos.y - 1) * layerYSize;
            }
            if (index === 1) {
                this.layers[index].x = (playerPos.x) * layerXSize;
                this.layers[index].y = (playerPos.y - 1) * layerYSize;
            }
            if (index === 2) {
                this.layers[index].x = (playerPos.x + 1) * layerXSize;
                this.layers[index].y = (playerPos.y - 1) * layerYSize;
            }
            //---
            if (index === 3) {
                this.layers[index].x = (playerPos.x - 1) * layerXSize;
                this.layers[index].y = (playerPos.y) * layerYSize;
            }
            if (index === 4) {
                this.layers[index].x = (playerPos.x) * layerXSize;
                this.layers[index].y = (playerPos.y) * layerYSize;
            }
            if (index === 5) {
                this.layers[index].x = (playerPos.x + 1) * layerXSize;
                this.layers[index].y = (playerPos.y) * layerYSize;
            }
            //---
            if (index === 6) {
                this.layers[index].x = (playerPos.x - 1) * layerXSize;
                this.layers[index].y = (playerPos.y + 1) * layerYSize;
            }
            if (index === 7) {
                this.layers[index].x = (playerPos.x) * layerXSize;
                this.layers[index].y = (playerPos.y + 1) * layerYSize;
            }
            if (index === 8) {
                this.layers[index].x = (playerPos.x + 1) * layerXSize;
                this.layers[index].y = (playerPos.y + 1) * layerYSize;
            }

            if (index >= 0 && index <= 8) this.spawnEntityOnLayer(this, this.layers[index]);
        });
    }

    layerUpdate() {
        const scene = this;
        const layerXSize = 1587;
        const layerYSize = 1587;
        const { x, y } = this.player.getLayerPos();
        const { layerX, layerY } = this.player.layerPos;

        if (x === layerX && y === layerY) return false;
        
        if (x > layerX && y === layerY) { //Право
            var lyrarray = this.layers.filter((layer) => {
                if (layer.x < (layerX * layerXSize)) return layer;
            })

            lyrarray = shuffle(lyrarray);
            lyrarray.forEach((layer, index) => {
                if (index === 0) {
                    layer.x = (x + 1) * layerXSize;
                    layer.y = (y - 1) * layerYSize;    
                }
                if (index === 1) {
                    layer.x = (x + 1) * layerXSize;
                    layer.y = (y) * layerYSize;
                }
                if (index === 2) {
                    layer.x = (x + 1) * layerXSize;
                    layer.y = (y + 1) * layerYSize;
                }

                scene.spawnEntityOnLayer(scene, layer)
            })

            this.background.x += 1587
            this.background.tilePositionX -= 30
        } 
        if (x < layerX && y === layerY) { //Лево
            var lyrarray = this.layers.filter((layer) => {
                if (layer.x > (layerX * layerXSize)) return layer;
            })

            lyrarray = shuffle(lyrarray);
            lyrarray.forEach((layer, index) => {
                if (index === 0) {
                    layer.x = (x - 1) * layerXSize;
                    layer.y = (y - 1) * layerYSize;    
                }
                if (index === 1) {
                    layer.x = (x - 1) * layerXSize;
                    layer.y = (y) * layerYSize;
                }
                if (index === 2) {
                    layer.x = (x - 1) * layerXSize;
                    layer.y = (y + 1) * layerYSize;
                }

                scene.spawnEntityOnLayer(scene, layer)
            })

            this.background.x -= 1587;
            this.background.tilePositionX += 30
        }
        if (y > layerY && x === layerX) { //Низ
            var lyrarray = this.layers.filter((layer) => {
                if (layer.y < (layerY * layerYSize)) return layer;
            })

            lyrarray = shuffle(lyrarray);
            lyrarray.forEach((layer, index) => {
                if (index === 0) {
                    layer.x = (x - 1) * layerXSize;
                    layer.y = (y + 1) * layerYSize;    
                }
                if (index === 1) {
                    layer.x = (x) * layerXSize;
                    layer.y = (y + 1) * layerYSize;
                }
                if (index === 2) {
                    layer.x = (x + 1) * layerXSize;
                    layer.y = (y + 1) * layerYSize;
                }

                scene.spawnEntityOnLayer(scene, layer)
            })

            this.background.y += 1587;
            this.background.tilePositionY -= 30;
        } 
        if (y < layerY && x === layerX) { //Верх
            var lyrarray = this.layers.filter((layer) => {
                if (layer.y > (layerY * layerYSize)) return layer;
            })

            lyrarray = shuffle(lyrarray);
            lyrarray.forEach((layer, index) => {
                if (index === 0) {
                    layer.x = (x - 1) * layerXSize;
                    layer.y = (y - 1) * layerYSize;    
                }
                if (index === 1) {
                    layer.x = (x) * layerXSize;
                    layer.y = (y - 1) * layerYSize;
                }
                if (index === 2) {
                    layer.x = (x + 1) * layerXSize;
                    layer.y = (y - 1) * layerYSize;
                }

                scene.spawnEntityOnLayer(scene, layer)
            })

            this.background.y -= 1587;
            this.background.tilePositionY += 30;
        }

        this.player.layerPos.layerX = x;
        this.player.layerPos.layerY = y;
    }

    spawnEntityOnLayer(scene, layer) {
        if (!layer.entitys) layer.entitys = new Array();
        else {
            layer.entitys.forEach(entity => {
                entity.destroy();
            })
            layer.entitys = new Array();
        }

        layer.forEachTile((tile, index, array) => {
            if (tile.properties.spawn) {
                if (tile.properties.spawn === 'fall' || tile.properties.spawn === "fly" || tile.properties.spawn === "question") {
                    tile.visible = false;

                    const x = tile.x * tile.baseHeight + layer.x + (tile.baseHeight / 2);
                    const y = tile.y * tile.baseWidth + layer.y + (tile.baseWidth / 2);

                    //new Enemy(scene, x, y, tile.properties.spawn)
                    if (tile.properties.spawn === 'fall') layer.entitys.push(new Fall(scene, x, y));
                    if (tile.properties.spawn === 'fly') layer.entitys.push(new Fly(scene, x, y));
                    if (tile.properties.spawn === 'question') layer.entitys.push(new Question(scene, x, y));
                }
            }
        })
    }
}
