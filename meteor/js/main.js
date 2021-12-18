import iframeLocalStorageFix from '/libs/localstorage.js';
iframeLocalStorageFix();

function createMeteorites(t) {
  (this.meteorites[0] = this.game.add.sprite(
    this.game.world.centerX - t.popupWidth / 2 - 20,
    t.popupBottom,
    'mmeteor1',
  )),
    (this.meteorites[1] = this.game.add.sprite(
      this.game.world.centerX - t.popupWidth / 2,
      t.popupBottom + 200,
      'mmeteor2',
    )),
    (this.meteorites[2] = this.game.add.sprite(
      this.game.world.centerX - t.popupWidth / 2 + 50,
      t.popupBottom + 100,
      'mmeteor3',
    )),
    (this.meteorites[3] = this.game.add.sprite(this.game.world.centerX - 150, t.popupTop - 40, 'mmeteor4')),
    (this.meteorites[4] = this.game.add.sprite(this.game.world.centerX + 100, t.popupTop - 80, 'mmeteor5')),
    (this.meteorites[5] = this.game.add.sprite(this.game.world.centerX + 120, t.popupTop + 15, 'mmeteor6')),
    (this.meteorites[6] = this.game.add.sprite(
      this.game.world.centerX + t.popupWidth / 2 + 20,
      t.popupTop + 100,
      'mmeteor7',
    )),
    (this.meteorites[7] = this.game.add.sprite(
      this.game.world.centerX + t.popupWidth / 2 + 70,
      t.popupTop - 20,
      'mmeteor8',
    )),
    this.meteorites.forEach(function (t) {
      t.anchor.set(0.5, 0.5);
    }),
    this.game.add.tween(this.meteorites[0]).to(
      {
        y: '-10',
      },
      2500,
      t.meteoritesEasing,
      !0,
      0,
      -1,
      !0,
    ),
    this.game.add.tween(this.meteorites[1]).to(
      {
        y: '-10',
      },
      2500,
      t.meteoritesEasing,
      !0,
      0,
      -1,
      !0,
    ),
    this.game.add.tween(this.meteorites[2]).to(
      {
        y: '-10',
      },
      2e3,
      t.meteoritesEasing,
      !0,
      223,
      -1,
      !0,
    ),
    this.game.add.tween(this.meteorites[3]).to(
      {
        y: '-10',
      },
      2500,
      t.meteoritesEasing,
      !0,
      223,
      -1,
      !0,
    ),
    this.game.add.tween(this.meteorites[4]).to(
      {
        y: '-10',
      },
      2e3,
      t.meteoritesEasing,
      !0,
      23,
      -1,
      !0,
    ),
    this.game.add.tween(this.meteorites[5]).to(
      {
        y: '+10',
      },
      2e3,
      t.meteoritesEasing,
      !0,
      223,
      -1,
      !0,
    ),
    this.game.add.tween(this.meteorites[6]).to(
      {
        y: '+10',
      },
      1500,
      t.meteoritesEasing,
      !0,
      223,
      -1,
      !0,
    ),
    this.game.add.tween(this.meteorites[7]).to(
      {
        y: '-10',
      },
      1500,
      t.meteoritesEasing,
      !0,
      223,
      -1,
      !0,
    );
}

function animateMeteorites() {
  for (
    let t = [
        {
          y: '+200',
          x: '-300',
          alpha: 0,
        },
        {
          y: '+200',
          x: '-300',
          alpha: 0,
        },
        {
          y: '+200',
          x: '-300',
          alpha: 0,
        },
        {
          y: '+200',
          x: '-300',
          alpha: 0,
        },
        {
          y: '+200',
          x: '-300',
          alpha: 0,
        },
        {
          y: '+200',
          x: '-300',
          alpha: 0,
        },
        {
          y: '+200',
          x: '-200',
          alpha: 0,
        },
        {
          y: '-200',
          x: '+200',
          alpha: 0,
        },
      ],
      e = 0;
    e < 8;
    e++
  )
    this.game.add.tween(this.meteorites[e]).to(t[e], 250, Phaser.Easing.Linear.In, !0, 0, 0, !1);
}

function makeBackground(t) {
  (this.background = this.game.add.tileSprite(
    this.game.world.centerX,
    this.game.world.height,
    1400,
    10182,
    'background',
  )),
    this.background.anchor.set(0.5, 1),
    this.background.scale.set(this.game.world.width / 1100),
    (this.background.y = this.game.world.height),
    this.game.physics.enable(this.background, Phaser.Physics.ARCADE),
    (this.background.body.velocity.y = t.backSpeed),
    (this.earth = this.game.add.sprite(0, 0, 'earth')),
    this.earth.scale.set(this.game.world.width / 1100),
    this.earth.alignIn(this.background, Phaser.BOTTOM_CENTER),
    this.game.physics.enable(this.earth, Phaser.Physics.ARCADE),
    (this.earth.body.velocity.y = t.backSpeed),
    (this.autoCull = !0),
    (this.stars = []);
  for (let e = 1; e < 200; e++) {
    const a = this.game.add.sprite(RandomInt(1200), this.game.world.height - RandomInt(1e4), 'star' + RandomInt(3));
    a.anchor.set(0.5, 0.5),
      this.game.physics.enable(a, Phaser.Physics.ARCADE),
      (a.body.velocity.y = t.backSpeed / 2),
      this.game.add.tween(a).to(
        {
          alpha: 0.3,
        },
        1e3,
        Phaser.Easing.Linear.In,
        !0,
        RandomInt(1e3),
        -1,
        !0,
      ),
      (a.autoCull = !0),
      this.stars.push(a);
  }
  (this.moon = this.game.add.sprite(this.game.world.centerX, -1e3, 'moon')),
    this.game.physics.enable(this.moon, Phaser.Physics.ARCADE),
    (this.moon.body.velocity.y = t.backSpeed),
    (this.moon.autoCull = !0),
    (this.venus = this.game.add.sprite(this.game.world.centerX, -2e3, 'venus')),
    this.game.physics.enable(this.venus, Phaser.Physics.ARCADE),
    (this.venus.body.velocity.y = t.backSpeed),
    (this.venus.autoCull = !0),
    (this.mars = this.game.add.sprite(300, -4e3, 'mars')),
    this.game.physics.enable(this.mars, Phaser.Physics.ARCADE),
    (this.mars.body.velocity.y = t.backSpeed),
    (this.mars.autoCull = !0),
    (this.planet9 = this.game.add.sprite(this.game.world.width - 200, -3500, 'planet9')),
    this.game.physics.enable(this.planet9, Phaser.Physics.ARCADE),
    (this.planet9.body.velocity.y = t.backSpeed),
    (this.planet9.autoCull = !0),
    (this.saturn = this.game.add.sprite(this.game.world.centerX - 200, -5e3, 'saturn')),
    this.game.physics.enable(this.saturn, Phaser.Physics.ARCADE),
    (this.saturn.body.velocity.y = t.backSpeed),
    (this.saturn.autoCull = !0),
    (this.zond = this.game.add.sprite(this.game.world.centerX - 400, this.game.world.centerY + 100, 'zond')),
    this.zond.anchor.set(0.5, 0.5),
    (this.zond.autoCull = !0),
    this.game.physics.enable(this.zond, Phaser.Physics.ARCADE),
    (this.zond.body.velocity.y = t.backSpeed),
    this.zond.scale.set(0.3, 0.3),
    0 === t.backSpeed &&
      ((this.zond.angle = -1),
      this.game.add.tween(this.zond).to(
        {
          y: '+20',
          angle: '+2',
        },
        6e3 + RandomInt(3e3),
        Phaser.Easing.Linear.In,
        !0,
        RandomInt(1e3),
        -1,
        !0,
      )),
    this.game.add.tween(this.zond).to(
      {
        x: '+40',
      },
      1e4,
      t.meteoritesEasing,
      !0,
      RandomInt(1e3),
      -1,
      !0,
    ),
    (this.starfall1 = this.game.add.sprite(-3001, this.game.world.centerY - 400, 'fall')),
    this.starfall1.anchor.set(0.5, 0.5),
    (this.starfall1.data.height = -8e3),
    (this.starfall2 = this.game.add.sprite(-3001, this.game.world.centerY - 460, 'fall')),
    this.starfall2.anchor.set(0.5, 0.5),
    (this.starfall3 = this.game.add.sprite(-3001, this.game.world.centerY - 520, 'fall')),
    this.starfall3.anchor.set(0.5, 0.5),
    (this.starfall1.autoCull = !0),
    (this.starfall2.autoCull = !0),
    (this.starfall3.autoCull = !0),
    (this.comet = this.game.add.sprite(-3001, this.game.world.centerY - 400, 'comet')),
    this.comet.anchor.set(0.5, 0.5),
    (this.comet.data.height = -4e3),
    (this.comet.autoCull = !0);
}

function RandomInt(t) {
  return parseInt(Math.random() * t, 10) + 1;
}

window.gameStart = function () {
  $.ajax({
    url: '//api.words.skyeng.ru/api/public/v1/users/meanings.json',
    xhrFields: {
      withCredentials: !0,
    },
    complete: function (t) {
      for (
        200 === t.status &&
        t.responseJSON.forEach(function (t) {
          words.push(t.meaningId);
        });
        words.length < 51 && config.baseWords.length > 0;

      )
        words.push(config.baseWords.randomElement());
      config.debug && console.info(words),
        (game = new Phaser.Game(1200, 1100, Phaser.CANVAS, 'gameContainer')),
        game.state.add('boot', BootState),
        game.state.add('load', LoadState),
        game.state.add('menu', MenuState),
        game.state.add('initgame', InitGameState),
        game.state.add('play', PlayState),
        game.state.add('gameover', GameoverState),
        game.state.start('boot');
    },
  });
};
const BootState = function () {};
(BootState.prototype.init = function () {
  (this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL),
    (this.game.scale.pageAlignHorizontally = !0),
    (this.game.scale.pageAlignVertically = !0),
    this.scale.setMinMax(480, 320, 1200, 1100),
    (game.renderer.renderSession.roundPixels = !0),
    (game.time.desiredFps = 60);
}),
  (BootState.prototype.preload = function () {
    this.game.load.image('background', 'assets/img/back.jpg');
    this.game.load.audio('background', 'audio/background.mp3');
  }),
  (BootState.prototype.create = function () {
    (this.background = this.game.add.tileSprite(
      this.game.world.centerX,
      this.game.world.height,
      1400,
      10182,
      'background',
    )),
      this.background.anchor.set(0.5, 1),
      this.game.physics.startSystem(Phaser.Physics.ARCADE),
      this.game.state.start('load');
    document.body.onclick = arr => {
      let music = this.game.add.audio('background');
      music.loopFull(0.6);
      music.play();
      music.volume = 0.03;
      document.body.onclick = arr => {};
    };
  });
let config = {
    debug: !1,
    fonts: {
      main: 'Open Sans',
      title: 'Russo One',
    },
    menu: {
      popupTop: 200,
      popupWidth: 550,
      popupHeight: 220,
      popupBottom: 430,
      meteoritesEasing: Phaser.Easing.Cubic.InOut,
      backSpeed: 0,
    },
    gameover: {
      popupTop: 200,
      popupWidth: 400,
      popupHeight: 260,
      popupBottom: 460,
      meteoritesEasing: Phaser.Easing.Cubic.InOut,
      backSpeed: 0,
      greetings: [
        'Миссия выполнена',
        'Вау! Вы можете гордиться собой',
        'Впечатляет!',
        'Так держать!',
        'Хороший рывок',
        'Все только начинается',
      ],
      greetingsLimits: [50, 41, 31, 21, 11, 0],
      pageWords: 6,
      lineSpacing: 45,
    },
    play: {
      moveTime: 100,
      gravity: 60,
      beamSpeed: 3800,
      backSpeed: 36,
    },
    baseWords: [
      252302,
      234044,
      252301,
      252291,
      77051,
      96033,
      252290,
      252289,
      119375,
      189042,
      96246,
      116372,
      217389,
      234411,
      252288,
      252287,
      72876,
      93982,
      252286,
      92085,
      195325,
      252285,
      153501,
      252284,
      107198,
      252283,
      53205,
      252282,
      45997,
      54946,
      171256,
      252280,
      72187,
      205737,
      252278,
      252277,
      15890,
      252276,
      252275,
      252279,
      252273,
      252272,
      252271,
      252270,
      245413,
      252269,
      130392,
      232467,
      44069,
      252268,
      252817,
      252829,
      252814,
      238144,
      252819,
    ],
  },
  game = null,
  words = [],
  global = {
    score: 0,
    correctWords: [],
    incorrectWords: [],
  };
Array.prototype.randomElement = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};
const GameoverState = function () {};
(GameoverState.prototype.preload = function () {}),
  (GameoverState.prototype.create = function () {
    (this.scrollPosition = 0),
      (this.meteorites = new Array(8)),
      (this.correctlabels = []),
      (this.incorrectlabels = []),
      (this.more = !1),
      this.makeBackground(config.gameover),
      (this.background.y = global.backPosition),
      (this.earth.y = global.backPosition),
      (this.popup = this.game.add.graphics(
        this.game.world.centerX - config.gameover.popupWidth / 2,
        config.gameover.popupTop,
      )),
      this.popup.anchor.set(0.5),
      this.popup.beginFill(16777215),
      this.popup.lineStyle(4, 14540253, 0.8),
      this.popup.drawRoundedRect(0, 0, config.gameover.popupWidth, config.gameover.popupHeight, 8),
      (this.button = this.game.add.button(
        this.game.world.centerX,
        config.gameover.popupBottom + 20,
        'button',
        this.actionOnClick,
        this,
        1,
      )),
      this.button.anchor.set(0.5, 0),
      this.createMeteorites(config.gameover),
      this.createLabels(),
      (this.moreText = this.game.add.text(0, 0, 'Подробнее', {
        font: '20px ' + config.fonts.title,
        fill: '#000000',
      })),
      (this.moreButton = this.game.add.button(
        this.game.world.centerX,
        config.gameover.popupBottom - 90,
        'more',
        this.moreOnClick,
        this,
        1,
      )),
      this.moreButton.anchor.set(0.5, 0),
      this.moreText.alignTo(this.moreButton, Phaser.BOTTOM_CENTER, 0, -40),
      (this.backButton = this.game.add.button(-1e3, config.gameover.popupTop - 25, 'back', this.backOnClick, this, 1)),
      this.backButton.anchor.set(0.5, 0);
    for (
      var t = '', e = 0;
      e < config.gameover.greetings.length;
      e++ //t is not defined
    )
      if (global.score >= config.gameover.greetingsLimits[e]) {
        t = config.gameover.greetings[e];
        break;
      }
    (this.greetingLabel = this.game.add.text(this.game.world.centerX + 2, config.gameover.popupTop - 30, t, {
      font: '32px ' + config.fonts.title,
      fill: '#36e1e1',
      fontWeight: 'bold',
    })),
      this.greetingLabel.setShadow(3, 2, '#00aaaa', 3),
      this.greetingLabel.anchor.setTo(0.5, 0.5),
      this.button.onInputOver.add(this.overPlayButton, this),
      this.button.onInputOut.add(this.outPlayButton, this),
      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]),
      (this.volume = $localStorage.getItem('volume')),
      !this.volume ? (this.volume = 3) : Number(this.volume),
      (game.sound.volume = this.volume * 0.33),
      (this.volume_btn = this.game.add.button(
        10,
        10,
        'volume',
        this.actionOnVolumeClick,
        this,
        Number(this.volume), //hover frame
        Number(this.volume), //default frame
      ));
  }),
  (GameoverState.prototype.start = function () {
    this.game.state.start('initgame');
  }),
  (GameoverState.prototype.actionOnVolumeClick = function () {
    this.volume = Number(this.volume) + 1;
    if (this.volume > 3) this.volume = 0;
    $localStorage.setItem('volume', this.volume);
    this.volume_btn.setFrames(this.volume);
    game.sound.volume = Number(this.volume) * 0.33;
  }),
  (GameoverState.prototype.actionOnClick = function () {
    this.game.add.tween(this.result1Label).to(
      {
        alpha: 0,
      },
      250,
      Phaser.Easing.Linear.None,
      !0,
      0,
      0,
      !1,
    ),
      this.game.add.tween(this.result2Label).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.button).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.moreText).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.moreButton).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.more
        ? (this.correctlabels.forEach(function (t) {
            t.data.button.kill(), t.kill();
          }),
          this.incorrectlabels.forEach(function (t) {
            t.data.button.kill(), t.kill();
          }),
          this.correctlabels.length > config.gameover.pageWords && (this.up.kill(), this.down.kill()))
        : this.game.add.tween(this.moreButton).to(
            {
              alpha: 0,
            },
            250,
            Phaser.Easing.Linear.None,
            !0,
            0,
            0,
            !1,
          ),
      this.game.add.tween(this.background).to(
        {
          y: this.game.world.height,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.hideMeteorites();
    const t = this.game.add.tween(this.popup).to(
      {
        x: this.game.world.centerX - 10,
        y: 200,
        width: 20,
        height: 4,
      },
      400,
      Phaser.Easing.Linear.None,
      !1,
      50,
      0,
      !1,
    );
    t.onComplete.add(this.startGame, this), t.start();
  }),
  (GameoverState.prototype.moreOnClick = function () {
    (this.result1Label.text = 'Верно (' + global.correctWords.length + ')'),
      (this.result2Label.text = 'Повторить (' + global.incorrectWords.length + ')'),
      this.game.add.tween(this.greetingLabel).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.result1Label).to(
        {
          x: '-120',
          y: '-120',
        },
        400,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.result2Label).to(
        {
          x: '+120',
          y: '-120',
        },
        400,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.moreButton).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.hideMeteorites(),
      this.game.add.tween(this.moreText).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.button).to(
        {
          y: '+80',
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      );
    const t = this.game.add.tween(this.popup).to(
      {
        y: '-40',
        x: '-' + config.gameover.popupWidth / 2,
        height: config.gameover.popupHeight + 100,
        width: 2 * config.gameover.popupWidth,
      },
      400,
      Phaser.Easing.Linear.None,
      !1,
      50,
      0,
      !1,
    );
    t.start(), t.onComplete.add(this.moreInfo, this);
  }),
  (GameoverState.prototype.backOnClick = function () {
    (this.backButton.x = -1e3),
      (this.result1Label.text = 'Верно \n' + global.correctWords.length),
      (this.result2Label.text = 'Повторить \n' + global.incorrectWords.length),
      this.game.add.tween(this.greetingLabel).to(
        {
          alpha: 1,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.result1Label).to(
        {
          x: '+120',
          y: '+120',
        },
        300,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.result2Label).to(
        {
          x: '-120',
          y: '+120',
        },
        300,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.moreButton).to(
        {
          alpha: 1,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.moreText).to(
        {
          alpha: 1,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.correctlabels.forEach(function (t) {
        t.data.button.kill(), t.kill();
      }),
      this.incorrectlabels.forEach(function (t) {
        t.data.button.kill(), t.kill();
      }),
      this.correctlabels.length > config.gameover.pageWords && (this.up.kill(), this.down.kill()),
      this.game.add.tween(this.button).to(
        {
          y: '-80',
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      );
    const t = this.game.add.tween(this.popup).to(
      {
        y: '+40',
        x: '+' + config.gameover.popupWidth / 2,
        height: config.gameover.popupHeight,
        width: config.gameover.popupWidth,
      },
      300,
      Phaser.Easing.Linear.None,
      !1,
      50,
      0,
      !1,
    );
    t.start(), t.onComplete.add(this.backComplete, this);
  }),
  (GameoverState.prototype.backComplete = function () {
    this.createMeteorites(config.gameover), (this.greetingLabel.x += 2e3), (this.moreButton.x += 2e3);
    for (let t = '', e = 0; e < config.gameover.greetings.length; e++)
      if (global.score >= config.gameover.greetingsLimits[e]) {
        t = config.gameover.greetings[e];
        break;
      }
    (this.greetingLabel = this.game.add.text(this.game.world.centerX + 2, config.gameover.popupTop - 30, t, {
      font: '32px ' + config.fonts.title,
      fill: '#36e1e1',
      fontWeight: 'bold',
    })),
      this.greetingLabel.setShadow(3, 2, '#00aaaa', 3),
      this.greetingLabel.anchor.setTo(0.5, 0.5);
  }),
  (GameoverState.prototype.render = function () {}),
  (GameoverState.prototype.listenOnClick = function (t) {
    const e = t.data.sound;
    if (e.lenght !== 0) {
      const sound = new Audio(e);
      sound.play();
    }
  }),
  (GameoverState.prototype.startGame = function () {
    this.game.state.start('initgame');
  }),
  (GameoverState.prototype.moreInfo = function () {
    this.greetingLabel.kill(),
      (this.moreButton.x -= 2e3),
      (this.backButton.x = this.game.world.centerX + config.gameover.popupWidth - 35);
    let group = game.add.group();
    for (var t = 0; t < global.correctWords.length; t++) {
      //t is not defined
      let e = this.game.add.text(this.game.world.centerX - 320, 230 + config.gameover.lineSpacing * t, '', {
          font: '20px ' + config.fonts.main,
          fill: '#000',
          wordWrap: !0,
          wordWrapWidth: 300,
        }),
        a = this.game.cache.getJSON('words');
      (a = a[global.correctWords[t]]),
        (e.text = a.text + ' - ' + a.translation.text),
        (e.data.image = 'image_' + global.correctWords[t]),
        (e.data.position = t),
        (e.inputEnabled = !0),
        (e.wordWrap = !0),
        (e.lineSpacing = -13),
        e.events.onInputOver.add(this.overLabel, this),
        e.events.onInputOut.add(this.outLabel, this),
        e.events.onInputOut.add(this.outLabel, this),
        this.correctlabels.push(e);
      const i = this.game.add.button(
        this.game.world.centerX - 340,
        230 + config.gameover.lineSpacing * t,
        'listen',
        this.listenOnClick,
        this,
        1,
      );
      i.anchor.set(0.5, 0), (i.data.sound = 'https:' + a.soundUrl), group.add(e), group.add(i), (e.data.button = i);
    }
    const s = game.add.graphics(0, 0);
    for (
      s.beginFill(16777215),
        s.drawRect(0, 229, this.game.world.width, config.gameover.lineSpacing * config.gameover.pageWords),
        group.mask = s,
        this.correctlabels.length > config.gameover.pageWords &&
          ((this.up = this.game.add.button(this.game.world.centerX - 50, 240, 'scroll', this.upOnClick, this, 0, 0)),
          (this.down = this.game.add.button(this.game.world.centerX - 50, 360, 'scroll', this.downOnClick, this, 1, 1)),
          (this.down.alpha = this.correctlabels.length > config.gameover.pageWords ? 1 : 0.5),
          (this.up.alpha = 0.5)),
        t = 0;
      t < global.incorrectWords.length;
      t++
    ) {
      const o = this.game.add.text(this.game.world.centerX + 60, 230 + config.gameover.lineSpacing * t, '', {
        font: '20px ' + config.fonts.main,
        fill: '#000',
        wordWrap: !0,
        wordWrapWidth: 300,
      });
      let a = this.game.cache.getJSON('words');
      (a = a[global.incorrectWords[t]]),
        (o.text = a.text + ' - ' + a.translation.text),
        (o.data.image = 'image_' + global.incorrectWords[t]),
        (o.inputEnabled = !0),
        (o.wordWrap = !0),
        (o.lineSpacing = -13),
        (o.data.position = -1),
        o.events.onInputOver.add(this.overLabel, this),
        o.events.onInputOut.add(this.outLabel, this),
        this.incorrectlabels.push(o);
      const i = this.game.add.button(
        this.game.world.centerX + 40,
        230 + config.gameover.lineSpacing * t,
        'listen',
        this.listenOnClick,
        this,
        1,
      );
      i.anchor.set(0.5, 0), (i.data.sound = 'https:' + a.soundUrl), (o.data.button = i);
    }
    (this.hint = this.game.add.sprite(-1e3, 0, 'image_1')), (this.more = !0);
  }),
  (GameoverState.prototype.update = function () {
    this.more && this.hint.x > 0 && ((this.hint.x = this.game.input.x), (this.hint.y = this.game.input.y)),
      this.input.keyboard.downDuration(Phaser.Keyboard.SPACEBAR, 10) && this.actionOnClick();
  }),
  (GameoverState.prototype.overLabel = function (t) {
    ((t.data.position >= this.scrollPosition && t.data.position < this.scrollPosition + config.gameover.pageWords) ||
      t.data.position < 0) &&
      (this.hint.loadTexture(t.data.image), (this.hint.x = this.game.input.x), (this.hint.y = this.game.input.y));
  }),
  (GameoverState.prototype.outLabel = function () {
    this.hint.x = -1e3;
  }),
  (GameoverState.prototype.upOnClick = function () {
    if (this.scrollPosition > 0) {
      for (let t = 0; t < this.correctlabels.length; t++) {
        const e = this.correctlabels[t];
        this.game.add.tween(e).to(
          {
            y: '+' + config.gameover.lineSpacing * config.gameover.pageWords,
          },
          200,
          Phaser.Easing.Linear.In,
          !0,
          0,
          0,
        ),
          this.game.add.tween(e.data.button).to(
            {
              y: '+' + config.gameover.lineSpacing * config.gameover.pageWords,
            },
            200,
            Phaser.Easing.Linear.In,
            !0,
            0,
            0,
          );
      }
      (this.scrollPosition -= config.gameover.pageWords),
        0 === this.scrollPosition && (this.up.alpha = 0.5),
        (this.down.alpha = this.correctlabels.length > config.gameover.pageWords);
    }
  }),
  (GameoverState.prototype.downOnClick = function () {
    if (this.scrollPosition + config.gameover.pageWords < this.correctlabels.length) {
      for (let t = 0; t < this.correctlabels.length; t++) {
        const e = this.correctlabels[t];
        this.game.add.tween(e).to(
          {
            y: '-' + config.gameover.lineSpacing * config.gameover.pageWords,
          },
          200,
          Phaser.Easing.Linear.In,
          !0,
          0,
          0,
        ),
          this.game.add.tween(e.data.button).to(
            {
              y: '-' + config.gameover.lineSpacing * config.gameover.pageWords,
            },
            200,
            Phaser.Easing.Linear.In,
            !0,
            0,
            0,
          );
      }
      (this.scrollPosition += config.gameover.pageWords),
        this.scrollPosition + config.gameover.pageWords > this.correctlabels.length && (this.down.alpha = 0.5),
        (this.up.alpha = 1);
    }
  }),
  (GameoverState.prototype.overPlayButton = function () {
    this.game.add.tween(this.button.scale).to(
      {
        x: 1.1,
        y: 1.1,
      },
      200,
      Phaser.Easing.Linear.None,
      !0,
      0,
      0,
      !1,
    );
  }),
  (GameoverState.prototype.outPlayButton = function () {
    this.game.add.tween(this.button.scale).to(
      {
        x: 1,
        y: 1,
      },
      200,
      Phaser.Easing.Linear.None,
      !0,
      0,
      0,
      !1,
    );
  }),
  (GameoverState.prototype.resize = function (t, e) {
    (this.background.height = e), (this.background.popupWidth = t);
  }),
  (GameoverState.prototype.createLabels = function () {
    (this.result1Label = this.game.add.text(
      this.game.world.centerX - 90,
      config.gameover.popupTop + 110,
      'Верно\n ' + global.correctWords.length,
      {
        font: '30px ' + config.fonts.main,
        fill: '#42b042',
        align: 'center',
      },
    )),
      this.result1Label.anchor.setTo(0.5, 0.5),
      (this.result2Label = this.game.add.text(
        this.game.world.centerX + 90,
        config.gameover.popupTop + 110,
        'Повторить\n ' + global.incorrectWords.length,
        {
          font: '30px ' + config.fonts.main,
          fill: '#c83636',
          align: 'center',
        },
      )),
      this.result2Label.anchor.setTo(0.5, 0.5);
  }),
  (GameoverState.prototype.createMeteorites = createMeteorites),
  (GameoverState.prototype.hideMeteorites = animateMeteorites),
  (GameoverState.prototype.makeBackground = makeBackground);
const InitGameState = function () {};
(InitGameState.prototype.preload = function () {
  (this.background = this.game.add.tileSprite(
    this.game.world.centerX,
    this.game.world.height,
    1400,
    10182,
    'background',
  )),
    this.background.anchor.set(0.5, 1),
    this.background.scale.set(this.game.world.width / 1100);
  for (
    var t = words.slice(), e = config.baseWords.slice(), a = '123', i = 1;
    i <= 55;
    i++ //a is not defined
  )
    if (t.length > 0) a += ',' + t.randomElement();
    else {
      if (0 === e.length) break;
      a += ',' + e.randomElement();
    }
  this.game.load.json('words', 'https://dictionary.skyeng.ru/api/public/v1/meanings?ids=' + a);
}),
  (InitGameState.prototype.create = function () {
    this.game.state.start('play');
  });
const LoadState = function () {
  this.assets = {
    earth: 'assets/img/earth.png',
    canon: 'assets/img/cannon.png',
    platform: 'assets/img/cannon_down.png',
    meteor_light: 'assets/img/meteor_light_back.png',
    meteor1: 'assets/img/meteor_1.png',
    meteor2: 'assets/img/meteor_2.png',
    meteor3: 'assets/img/meteor_3.png',
    meteor4: 'assets/img/meteor_4.png',
    mmeteor1: 'assets/img/met_menu1.png',
    mmeteor2: 'assets/img/met_menu2.png',
    mmeteor3: 'assets/img/met_menu3.png',
    mmeteor4: 'assets/img/met_menu4.png',
    mmeteor5: 'assets/img/met_menu5.png',
    mmeteor6: 'assets/img/met_menu6.png',
    mmeteor7: 'assets/img/met_menu7.png',
    mmeteor8: 'assets/img/met_menu8.png',
    beam: 'assets/img/shoot_light.png',
    beam_light: 'assets/img/shoot_light_1.png',
    button: 'assets/img/b_play.png',
    more: 'assets/img/b_more.png',
    listen: 'assets/img/b_listen.png',
    star1: 'assets/img/star_light.png',
    star2: 'assets/img/star_dark.png',
    star3: 'assets/img/star_circle.png',
    control1: 'assets/img/start_txt_controls1.png',
    control2: 'assets/img/start_txt_controls2.png',
    zond: 'assets/img/meteozond.png',
    plain: 'assets/img/airplane.png',
    fall: 'assets/img/meteorite.png',
    moon: 'assets/img/moon.png',
    venus: 'assets/img/venus.png',
    mars: 'assets/img/mars.png',
    planet9: 'assets/img/planet-small_9.png',
    heart_red: 'assets/img/heart_red.png',
    heart_black: 'assets/img/heart_black.png',
    comet: 'assets/img/comet.png',
    saturn: 'assets/img/saturn.png',
    back: 'assets/img/b_close.png',
  };
};
(LoadState.prototype.preload = function () {
  (this.background = this.game.add.tileSprite(
    this.game.world.centerX,
    this.game.world.height,
    1400,
    10182,
    'background',
  )),
    this.background.anchor.set(0.5, 1),
    this.background.scale.set(this.game.world.width / 1100);
  const t = this.game.add.text(game.world.centerX, 350, 'Загрузка...', {
    font: '30px Open Sans',
    fill: '#ffffff',
  });
  t.anchor.setTo(0.5, 0.5);
  for (let key in this.assets) this.game.load.image(key, this.assets[key]);
  this.game.load.spritesheet('explode', 'assets/img/meteor_explosion.png', 433, 433, 9),
    this.game.load.spritesheet('hologram', 'assets/img/meteor_hologram.png', 433, 433, 10),
    this.game.load.spritesheet('text_blocks', 'assets/img/cannon_down_txt_container.png', 23, 49, 3),
    this.game.load.spritesheet('scroll', 'assets/img/b_scroll.png', 55, 55, 2),
    this.game.load.spritesheet('volume', 'assets/img/volume.png', 48, 48);
}),
  (LoadState.prototype.create = function () {
    this.game.state.start('menu');
  });
const MenuState = function () {};
(MenuState.prototype.preload = function () {}),
  (MenuState.prototype.create = function () {
    (this.meteorites = []),
      this.makeBackground(config.menu),
      (this.popup = this.game.add.graphics(this.game.world.centerX - config.menu.popupWidth / 2, config.menu.popupTop)),
      this.popup.anchor.set(0.5),
      this.popup.beginFill(16777215),
      this.popup.lineStyle(4, 14540253, 0.8),
      this.popup.drawRoundedRect(0, 0, config.menu.popupWidth, config.menu.popupHeight, 8),
      (this.button = this.game.add.button(
        this.game.world.centerX,
        config.menu.popupBottom + 120,
        'button',
        this.actionOnClick,
        this,
        1,
      )),
      this.button.anchor.set(0.5, 0.5),
      this.createMeteorites(config.menu),
      this.createLabels(),
      this.button.onInputOver.add(this.overPlayButton, this),
      this.button.onInputOut.add(this.outPlayButton, this),
      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]),
      (this.volume = $localStorage.getItem('volume')),
      !this.volume ? (this.volume = 3) : Number(this.volume),
      (game.sound.volume = this.volume * 0.33),
      (this.volume_btn = this.game.add.button(
        10,
        10,
        'volume',
        this.actionOnVolumeClick,
        this,
        Number(this.volume), //hover frame
        Number(this.volume), //default frame
      ));
  }),
  (MenuState.prototype.update = function () {
    this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.actionOnClick();
  }),
  (MenuState.prototype.start = function () {
    this.game.state.start('initgame');
  }),
  (MenuState.prototype.actionOnClick = function () {
    this.game.add.tween(this.nameLabel).to(
      {
        alpha: 0,
      },
      250,
      Phaser.Easing.Linear.None,
      !0,
      0,
      0,
      !1,
    ),
      this.game.add.tween(this.result1Label).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.playLabel).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.button).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.controlLabel).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.controlLabel2).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.controlLabel3).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.controlLabel4).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.controlLabel5).to(
        {
          alpha: 0,
        },
        250,
        Phaser.Easing.Linear.None,
        !0,
        0,
        0,
        !1,
      ),
      this.hideMeteorites();
    const t = this.game.add.tween(this.popup).to(
      {
        x: this.game.world.centerX - 10,
        y: 200,
        width: 20,
        height: 4,
      },
      800,
      Phaser.Easing.Linear.None,
      !1,
      50,
      0,
      !1,
    );
    t.onComplete.add(this.startGame, this), t.start();
  }),
  (MenuState.prototype.actionOnVolumeClick = function () {
    this.volume = Number(this.volume) + 1;
    if (this.volume > 3) this.volume = 0;
    $localStorage.setItem('volume', this.volume);
    this.volume_btn.setFrames(this.volume);
    game.sound.volume = Number(this.volume) * 0.33;
  }),
  (MenuState.prototype.render = function () {}),
  (MenuState.prototype.startGame = function () {
    this.game.state.start('initgame');
  }),
  (MenuState.prototype.overPlayButton = function () {
    this.game.add.tween(this.button.scale).to(
      {
        x: 1.1,
        y: 1.1,
      },
      200,
      Phaser.Easing.Linear.None,
      !0,
      0,
      0,
      !1,
    );
  }),
  (MenuState.prototype.outPlayButton = function () {
    this.game.add.tween(this.button.scale).to(
      {
        x: 1,
        y: 1,
      },
      200,
      Phaser.Easing.Linear.None,
      !0,
      0,
      0,
      !1,
    );
  }),
  (MenuState.prototype.resize = function (t, e) {
    (this.background.height = e), (this.background.popupWidth = t);
  }),
  (MenuState.prototype.createLabels = function () {
    (this.nameLabel = this.game.add.text(this.game.world.centerX, config.menu.popupTop + 50, 'Метеоритный дождь', {
      font: '38px ' + config.fonts.title,
      fill: '#004488',
      fontWeight: 'bold',
    })),
      this.nameLabel.anchor.setTo(0.5, 0.5),
      this.nameLabel.setShadow(3, 2, '#00aaaa', 3),
      (this.result1Label = this.game.add.text(
        this.game.world.centerX,
        config.menu.popupTop + 150,
        'Перемещайте пушку, уничтожайте\nметеориты с правильным переводом и\nполучайте баллы',
        {
          font: '24px ' + config.fonts.main,
          fill: '#004488',
          fontWeight: 'bold',
        },
      )),
      this.result1Label.anchor.setTo(0.5, 0.5),
      (this.playLabel = this.game.add.text(this.game.world.centerX, 420, 'Играть', {
        font: '20px ' + config.fonts.main,
        fill: '#333',
      })),
      this.playLabel.anchor.setTo(0.5, 0.5),
      this.playLabel.alignTo(this.button, Phaser.BOTTOM_CENTER, 0, 5),
      (this.controlLabel = this.game.add.text(this.game.world.centerX, this.game.world.height - 325, 'Управление', {
        font: '20px ' + config.fonts.main,
        fill: '#333',
      })),
      this.controlLabel.anchor.setTo(0.5, 0.5),
      (this.controlLabel2 = this.game.add.text(
        this.game.world.centerX - 150,
        this.game.world.height - 210,
        'Передвижение пушки –\n стрелки вправо-влево',
        {
          font: '20px ' + config.fonts.main,
          fill: '#ffffff',
        },
      )),
      this.controlLabel2.anchor.setTo(0.5, 0),
      (this.controlLabel3 = this.game.add.text(
        this.game.world.centerX + 150,
        this.game.world.height - 210,
        'Выстрел пробел',
        {
          font: '20px ' + config.fonts.main,
          fill: '#ffffff',
        },
      )),
      this.controlLabel3.anchor.setTo(0.5, 0),
      (this.controlLabel4 = this.game.add.sprite(
        this.game.world.centerX - 150,
        this.game.world.height - 220,
        'control1',
      )),
      this.controlLabel4.anchor.setTo(0.5, 1),
      this.controlLabel4.scale.setTo(1.5, 1.5),
      (this.controlLabel5 = this.game.add.sprite(
        this.game.world.centerX + 150,
        this.game.world.height - 220,
        'control2',
      )),
      this.controlLabel5.anchor.setTo(0.5, 1),
      this.controlLabel5.scale.setTo(1.5, 1.5);
  }),
  (MenuState.prototype.createMeteorites = createMeteorites),
  (MenuState.prototype.hideMeteorites = animateMeteorites),
  (MenuState.prototype.makeBackground = makeBackground);
const PlayState = function (t) {};
(PlayState.prototype.preload = function () {
  this.game.load.audio('correct', 'audio/correct.mp3');
  this.game.load.audio('miss', 'audio/miss.mp3');
  this.game.load.audio('over', 'audio/over.mp3');
  this.game.load.audio('hit', 'audio/hit.mp3');
}),
  (PlayState.prototype.create = function () {
    (this.game.time.advancedTiming = !0),
      (this.game.disableVisibilityChange = !0),
      (this.game.stage.disableVisibilityChange = !0),
      (this.makeBackground = makeBackground),
      (this.step = this.game.width / 5),
      (this.meteorSprites = []),
      (this.flareSprites = []),
      (this.wordLabels = []),
      (this.hearts = []),
      (this.created = !1),
      (this.initialized = !1),
      (global.correctWords.length = 0),
      (global.incorrectWords.length = 0);
    const t = 15,
      e = -t,
      a = -t,
      i = this.game.world.width + 2 * t,
      s = this.game.world.height + 2 * t;
    this.game.world.setBounds(e, a, i, s),
      this.game.world.camera.position.set(0),
      (this.position = 2),
      (this.gunpostition = 2),
      (this.score = 0),
      (this.lifes = 5),
      (this.word = 0),
      (this.speeFactor = 1),
      (this.changePosition = !1),
      this.makeBackground(config.play),
      (this.meteors = this.game.add.group()),
      (this.platform = this.game.add.sprite(this.game.world.centerX, this.game.height, 'platform')),
      this.platform.anchor.set(0.5, 1),
      (this.width = this.platform.width),
      (this.step = this.width / 5),
      (this.left = this.game.world.centerX - this.width / 2),
      this.game.physics.enable(this.platform, Phaser.Physics.ARCADE),
      (this.platform.immovable = !0),
      (this.beam = game.add.weapon(1, 'beam')),
      (this.beam.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS),
      (this.beam.bulletAngleOffset = 90),
      (this.beam.bulletSpeed = config.play.beamSpeed),
      (this.canon = this.game.add.sprite(
        this.left + this.step * this.position,
        this.game.height - this.platform.height + 25,
        'canon',
      )),
      this.canon.anchor.setTo(0.5, 1),
      this.game.physics.enable(this.canon, Phaser.Physics.ARCADE),
      this.beam.trackSprite(this.canon, 0, -140),
      this.createTextBlocks(),
      this.createHearts(),
      this.createMeteorites(),
      this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR]),
      this.game.load.start(),
      (this.initialized = !0),
      (this.timer = this.time.totalElapsedSeconds());
  }),
  (PlayState.prototype.update = function () {
    if (this.initialized) {
      if (
        (this.game.physics.arcade.overlap(this.beam.bullets, this.meteors, this.beamMeteorHit, null, this),
        this.updateSpeed(),
        (this.scoreLabel.text = this.score),
        this.created)
      ) {
        this.meteorSprites[1].y > this.game.world.height - 460 && this.downMeteorites();
        for (let t = 0; t < 4; t++) {
          const e = this.meteorSprites[t],
            a = (this.time.totalElapsedSeconds() - e.accum) * this.speeFactor * config.play.gravity;
          (e.y += a), (e.wordLabel.y += a), (e.flare.y += a), (e.accum = this.time.totalElapsedSeconds());
        }
      }
      let i, s;
      this.changePosition ||
        (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)
          ? this.position > 1 &&
            ((this.changePosition = !0),
            this.position--,
            (i = this.left + this.step * this.position),
            (s = this.game.add.tween(this.canon).to(
              {
                x: i,
              },
              config.play.moveTime,
              Phaser.Easing.Linear.In,
              !0,
              0,
              0,
              !1,
            )),
            'undefined' != typeof this.canonimagemask &&
              this.game.add.tween(this.canonimagemask).to(
                {
                  x: i,
                },
                config.play.moveTime,
                Phaser.Easing.Linear.In,
                !0,
                0,
                0,
                !1,
              ),
            s.onComplete.add(this.stopCanon, this))
          : this.input.keyboard.isDown(Phaser.Keyboard.RIGHT) &&
            this.position < 4 &&
            ((this.changePosition = !0),
            (this.position = Math.min(4, ++this.position)),
            (i = this.left + this.step * this.position),
            (s = this.game.add.tween(this.canon).to(
              {
                x: i,
              },
              config.play.moveTime,
              Phaser.Easing.Linear.In,
              !0,
              0,
              0,
              !1,
            )),
            'undefined' != typeof this.canonimagemask &&
              this.game.add.tween(this.canonimagemask).to(
                {
                  x: i,
                },
                config.play.moveTime,
                Phaser.Easing.Linear.In,
                !0,
                0,
                0,
                !1,
              ),
            s.onComplete.add(this.stopCanon, this)),
        this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && this.created && this.fireBeam()),
        'undefined' != typeof this.canonimagemask && this.canonimagemask.alignIn(this.canon, Phaser.TOP_CENTER, 3, -48),
        this.updateBack(),
        (this.timer = this.time.totalElapsedSeconds());
    }
  }),
  (PlayState.prototype.stopCanon = function () {
    this.changePosition = !1;
  }),
  (PlayState.prototype.fireBeam = function () {
    if (!this.fired) {
      (this.fired = !0), this.beam.fire();
      const t = this.game.add.sprite(this.canon.x, this.canon.y - 195, 'beam_light');
      t.anchor.set(0.5, 1);
      const e =
          this.position === this.correctWord
            ? this.canon.y - 200 - this.meteorSprites[0].y - this.meteorSprites[0].height / 2
            : this.game.world.height,
        a = e / t.height;
      this.game.add.tween(t.scale).to(
        {
          y: a,
        },
        200,
        Phaser.Easing.Cubic.In,
        !0,
        0,
        0,
      );
      const i = this.game.add.tween(t).to(
        {
          y: '-5',
        },
        200,
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
      );
      i.onComplete.add(this.collapseBeam, this);
    }
  }),
  (PlayState.prototype.collapseBeam = function (t) {
    t.anchor.set(0.5, 0),
      (t.y = t.y - t.height),
      this.game.add.tween(t.scale).to(
        {
          y: 0.6,
        },
        100,
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
      );
    const e = this.game.add.tween(t).to(
      {
        y: '-5',
      },
      100,
      Phaser.Easing.Linear.In,
      !0,
      0,
      0,
    );
    e.onComplete.add(function (t) {
      t.kill();
    }, this);
  }),
  (PlayState.prototype.updateBack = function () {
    this.starfall1.x < 0 &&
      this.background.body.y > this.starfall1.data.height &&
      ((this.starfall1.x = this.game.world.width + 50),
      (this.starfall1.y = this.game.world.centerY - 400),
      (this.starfall1.data.height = this.starfall1.data.height + 3e3),
      (this.starfall2.x = this.game.world.width + 20),
      (this.starfall2.y = this.game.world.centerY - 460),
      (this.starfall3.x = this.game.world.width + 20),
      (this.starfall3.y = this.game.world.centerY - 520),
      this.game.add.tween(this.starfall1).to(
        {
          x: '-5000',
          y: '+8000',
        },
        6500 + RandomInt(1500),
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.starfall2).to(
        {
          x: '-5000',
          y: '+8000',
        },
        6500 + RandomInt(1500),
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.starfall3).to(
        {
          x: '-5000',
          y: '+8000',
        },
        6500 + RandomInt(1500),
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
        !1,
      )),
      this.comet.x < 0 &&
        this.background.body.y > this.comet.data.height &&
        ((this.comet.x = this.game.world.width + 50),
        (this.comet.y = this.game.world.centerY - 400),
        (this.comet.data.height = this.comet.data.height + 3e3 + RandomInt(600)),
        this.game.add.tween(this.comet).to(
          {
            x: '-3000',
            y: '+280',
          },
          6e3 + RandomInt(500),
          Phaser.Easing.Linear.In,
          !0,
          0,
          0,
          !1,
        ));
  }),
  (PlayState.prototype.makeEarthquake = function (t) {
    const hit = this.game.add.audio('hit');
    let delay;
    const over = this.game.add.audio('over');
    'object' == typeof t
      ? (t.loadTexture('explode'),
        t.animations.add('explode', [1, 2, 3, 3, 4, 4]),
        t.animations.play('explode', 30, !1, !0),
        (delay = 100))
      : (delay = t),
      this.game.add.tween(this.game.camera).to(
        {
          x: this.game.camera.x - 10,
        },
        100,
        Phaser.Easing.Bounce.InOut,
        !0,
        delay,
        4,
        !0,
      ),
      this.incorrectAnswer(),
      0 === this.lifes ? over.play() : hit.play();
  }),
  (PlayState.prototype.render = function () {
    config.debug &&
      (this.game.debug.text('Speed: ' + this.speeFactor, 10, 500),
      this.game.debug.text('Correct: ' + this.correctWord, 10, 520),
      this.game.debug.text('Backposition: ' + this.background.body.y + '/' + this.background.height, 10, 540));
  }),
  (PlayState.prototype.setGameoverState = function () {
    (this.changePosition = !0),
      this.game.load.onLoadComplete.remove(this.loadedCanonImage, this),
      (global.score = this.score),
      (global.backPosition = this.background.y),
      this.game.add.tween(this.platform).to(
        {
          y: '+300',
        },
        1e3,
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.textblock).to(
        {
          y: '+300',
        },
        1e3,
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.textblockleft).to(
        {
          y: '+300',
        },
        1e3,
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.textblockright).to(
        {
          y: '+300',
        },
        1e3,
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
        !1,
      ),
      this.game.add.tween(this.translationLabel).to(
        {
          y: '+300',
        },
        1e3,
        Phaser.Easing.Linear.In,
        !0,
        0,
        0,
        !1,
      );
    const t = this.game.add.tween(this.canon).to(
      {
        y: '+300',
      },
      1e3,
      Phaser.Easing.Linear.In,
      !0,
      0,
      0,
      !1,
    );
    t.onComplete.add(function () {
      this.game.state.start('gameover');
    }, this);
  }),
  (PlayState.prototype.resetMeteors = function () {
    if (0 === this.lifes) {
      this.setGameoverState();
    } else {
      this.createMeteorites();
    }
  }),
  (PlayState.prototype.updateSpeed = function () {
    switch (this.score) {
      case 3:
        this.speeFactor = 600 / config.play.gravity / 9;
        break;
      case 6:
        this.speeFactor = 600 / config.play.gravity / 8;
        break;
      case 12:
        this.speeFactor = 600 / config.play.gravity / 7;
        break;
      case 20:
        this.speeFactor = 600 / config.play.gravity / 6;
        break;
      case 30:
        this.speeFactor = 600 / config.play.gravity / 5;
    }
    this.background.body.velocity.y = config.play.backSpeed * this.speeFactor;
  }),
  (PlayState.prototype.beamMeteorHit = function (t, e) {
    if (this.created) {
      let a = 1900;
      for (let i = 0; i < 4; i++) {
        const s = this.meteorSprites[i];
        const miss = this.game.add.audio('miss');
        const mcorrect = this.game.add.audio('correct');
        if ((this.flareSprites[i].kill(), s.data.correct))
          if (s.name === e.name) {
            t.kill(),
              this.correctAnswer(),
              mcorrect.play(),
              this.updateSpeed(),
              this.score === Math.min(words.length, 50) && this.setGameoverState(),
              s.loadTexture('explode');
            const o = s.animations.add('explode', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            o.onComplete.add(function (t) {
              t.kill(), t.wordLabel.kill();
            }),
              s.animations.play('explode', 30, !1, !0);
            const n = (this.game.world.height - 400) / s.y;
            (a = s.y > 200 ? 200 * n : 1800), console.log(n);
          } else this.showCorrect(s), (a = 3800);
        else
          this.wordLabels[i].kill(),
            s.loadTexture('hologram'),
            s.animations.add('explode', [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9]),
            s.animations.play('explode', 30, !1, !0),
            miss.play();
      }
      config.debug &&
        (console.info('Beam into: ' + e.name), console.info('Score: ' + this.score + ' lifes: ' + this.lifes)),
        (this.created = !1),
        this.game.time.events.add(a, this.resetMeteors, this);
    }
  }),
  (PlayState.prototype.downMeteorites = function () {
    if (this.created) {
      (this.created = !1),
        config.debug && console.info('Drop meteorites, Score: ' + this.score + ' lifes: ' + this.lifes);
      for (let t = 0; t < 4; t++) t != this.correctWord - 1 && this.wordLabels[t].kill();
      this.flareSprites.forEach(function (t) {
        t.kill();
      });
      for (let t = 0; t < 4; t++) {
        const e = this.meteorSprites[t];
        e.data.correct === !0
          ? this.showCorrect(e)
          : (e.loadTexture('hologram'),
            e.animations.add('explode', [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9]),
            e.animations.play('explode', 30, !1, !0));
      }
      (this.created = !1), this.game.time.events.add(3800, this.resetMeteors, this);
    }
  }),
  (PlayState.prototype.showCorrect = function (t) {
    (t.body.velocity.y = 0), (t.wordLabel.body.velocity.y = 0);
    const e = t.scale;
    e.sprite = t;
    const a = this.game.add.tween(e).to(
      {
        x: 1.1,
        y: 1.1,
      },
      300,
      Phaser.Easing.Linear.In,
      !0,
      0,
      2,
      !0,
    );
    a.onComplete.add(function (t) {
      t.sprite.wordLabel.kill();
    }, this);
    const i = this.game.world.height - t.y - t.height,
      s = this.game.add.tween(t).to(
        {
          y: '+' + i,
        },
        600,
        Phaser.Easing.Linear.In,
        !1,
        0,
        0,
        !1,
      );
    s.onComplete.add(this.makeEarthquake, this);
    const o = this.game.add.tween(t).to(
      {
        y: '+300',
      },
      400,
      Phaser.Easing.Linear.In,
      !1,
      0,
      0,
      !1,
    );
    a.chain(s), s.chain(o);
  }),
  (PlayState.prototype.loadedCanonImage = function () {
    'undefined' != typeof this.canonimagemask && this.canonimagemask.kill(),
      (this.canonimagemask = this.game.add.sprite(0, 0, 'image_' + this.word)),
      this.canonimagemask.anchor.set(0.5, 0.5),
      this.canonimagemask.alignIn(this.canon, Phaser.TOP_CENTER, 3, -48);
    const t = Math.max(164 / this.canonimagemask.width, 124 / this.canonimagemask.height);
    this.canonimagemask.scale.set(t, t);
  }),
  (PlayState.prototype.createMeteorites = function () {
    let t,
      e,
      a = [];
    this.correctWord = RandomInt(4);
    for (let i = this.game.cache.getJSON('words'); a.length < 3 && this.word < 55; )
      this.word++,
        (i = i[this.word]),
        (this.text = i.translation.text),
        (t = i.text),
        (a = i.alternativeTranslations),
        (e = i.images),
        config.debug &&
          console.info('Meaningid: ' + i.id + ' Слово: ' + this.text + ', ответ: ' + t + ' - ' + this.correctWord);
    if (a.length < 3 && 55 == this.word) return void this.setGameoverState();
    e.length > 0 &&
      ('undefined' != typeof this.canonimagemask && this.canonimagemask.kill(),
      this.game.load.image(
        'image_' + this.word,
        e[0].url.replace(/\/\/.*?\/image/, '//user31395.clients-cdnnow.ru/image'),
      ),
      this.game.load.onLoadComplete.add(this.loadedCanonImage, this),
      (this.game.load.crossorigin = !0),
      (this.game.load.crossOrigin = 'Anonymous'),
      this.game.load.start());
    let s = [];
    for (o = 1; o <= 4; o++) o === this.correctWord ? (s[o - 1] = t) : (s[o - 1] = a.randomElement().text);
    this.translationLabel.text = this.text;
    for (let o = 1; o <= 4; o++) {
      const n = this.game.add.sprite(this.left + this.step * o, -90, 'meteor_light');
      n.anchor.setTo(0.5, 0.5),
        (n.name = 'flare' + o),
        (n.checkWorldBounds = !0),
        this.game.physics.enable(n, Phaser.Physics.ARCADE),
        (this.flareSprites[o - 1] = n),
        this.game.add.tween(n).to(
          {
            x: '+2',
          },
          250,
          Phaser.Easing.Linear.In,
          !0,
          0,
          -1,
          !0,
        ),
        this.game.add.tween(n).to(
          {
            alpha: 0.6,
          },
          1e3,
          Phaser.Easing.Linear.In,
          !0,
          0,
          -1,
          !0,
        ),
        this.meteors.add(n);
    }
    for (var o = 1; o <= 4; o++) {
      //o is not defined
      const r = RandomInt(4),
        h = this.game.add.sprite(this.left + this.step * o, -40, 'meteor' + r);
      h.anchor.setTo(0.5, 0.5),
        (h.name = 'meteorite' + o),
        this.game.physics.enable(h, Phaser.Physics.ARCADE),
        (h.accum = this.time.totalElapsedSeconds()),
        (this.meteorSprites[o - 1] = h),
        (h.data.correct = o === this.correctWord),
        this.game.add.tween(h).to(
          {
            angle: '+2',
          },
          500 + RandomInt(300),
          Phaser.Easing.Linear.In,
          !0,
          RandomInt(350),
          -1,
          !0,
        ),
        this.meteors.add(h);
      const g = {
          font: '24px Open Sans',
          fill: '#000000',
          wordWrap: !0,
          wordWrapWidth: h.width - 20,
          align: 'center',
        },
        l = this.game.add.text(0, 0, s[o - 1], g);
      game.physics.arcade.enable(l),
        l.anchor.set(0.5, 0.5),
        l.alignTo(h, Phaser.TOP_CENTER, 0, -125 - l.height / 2),
        (this.wordLabels[o - 1] = l),
        (h.wordLabel = l),
        (h.flare = this.flareSprites[o - 1]);
    }
    (this.created = !0), (this.fired = !1);
  }),
  (PlayState.prototype.createTextBlocks = function () {
    (this.textblock = this.game.add.sprite(0, 0, 'text_blocks', 1)),
      this.textblock.anchor.setTo(0.5, 0.5),
      this.textblock.alignTo(this.platform, Phaser.BOTTOM_CENTER, 0, -49),
      this.textblock.scale.setTo(32, 1),
      (this.textblockleft = this.game.add.sprite(0, 0, 'text_blocks', 0)),
      this.textblockleft.anchor.setTo(0, 0.5),
      this.textblockleft.alignTo(this.textblock, Phaser.LEFT_CENTER, -19, 0),
      (this.textblockright = this.game.add.sprite(0, 0, 'text_blocks', 2)),
      this.textblockright.anchor.setTo(0, 0.5),
      this.textblockright.alignTo(this.textblock, Phaser.RIGHT_CENTER, 0, 0),
      (this.translationLabel = this.game.add.text(0, 0, '', {
        font: '25px Open Sans',
        fill: '#000000',
      })),
      this.translationLabel.anchor.set(0.5, 0),
      this.translationLabel.alignTo(this.platform, Phaser.BOTTOM_CENTER, 0, -40),
      (this.scoreLabel = this.game.add.text(this.left, 10, this.score, {
        font: '40px Open Sans',
        fill: '#ffffff',
      })),
      this.scoreLabel.anchor.setTo(0);
  }),
  (PlayState.prototype.correctAnswer = function () {
    this.score++, global.correctWords.push(this.word);
  }),
  (PlayState.prototype.incorrectAnswer = function () {
    this.hearts[this.lifes - 1].loadTexture('heart_black'), this.lifes--, global.incorrectWords.push(this.word);
  }),
  (PlayState.prototype.createHearts = function () {
    for (let t = 0; t < 5; t++) {
      const e = this.game.add.sprite(this.left + 10 + 25 * t, 65, 'heart_red');
      e.anchor.set(0.5, 0.5), this.hearts.push(e);
    }
  });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyIsImdhbWUuanMiLCJib290LmpzIiwiY29uZmlnLmpzIiwiZ2FtZW92ZXIuanMiLCJpbml0LmpzIiwibG9hZC5qcyIsIm1lbnUuanMiLCJwbGF5LmpzIl0sIm5hbWVzIjpbImNyZWF0ZU1ldGVvcml0ZXMiLCJzZXR0aW5ncyIsInRoaXMiLCJtZXRlb3JpdGVzIiwiZ2FtZSIsImFkZCIsInNwcml0ZSIsIndvcmxkIiwiY2VudGVyWCIsInBvcHVwV2lkdGgiLCJwb3B1cEJvdHRvbSIsInBvcHVwVG9wIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmNob3IiLCJzZXQiLCJ0d2VlbiIsInRvIiwieSIsIm1ldGVvcml0ZXNFYXNpbmciLCJhbmltYXRlTWV0ZW9yaXRlcyIsIm1vdmUiLCJ4IiwiYWxwaGEiLCJpIiwiUGhhc2VyIiwiRWFzaW5nIiwiTGluZWFyIiwiSW4iLCJtYWtlQmFja2dyb3VuZCIsImJhY2tncm91bmQiLCJ0aWxlU3ByaXRlIiwiaGVpZ2h0Iiwic2NhbGUiLCJ3aWR0aCIsInBoeXNpY3MiLCJlbmFibGUiLCJQaHlzaWNzIiwiQVJDQURFIiwiYm9keSIsInZlbG9jaXR5IiwiYmFja1NwZWVkIiwiZWFydGgiLCJhbGlnbkluIiwiQk9UVE9NX0NFTlRFUiIsImF1dG9DdWxsIiwic3RhcnMiLCJzdGFyIiwiUmFuZG9tSW50IiwicHVzaCIsIm1vb24iLCJ2ZW51cyIsIm1hcnMiLCJwbGFuZXQ5Iiwic2F0dXJuIiwiem9uZCIsImNlbnRlclkiLCJhbmdsZSIsInN0YXJmYWxsMSIsImRhdGEiLCJzdGFyZmFsbDIiLCJzdGFyZmFsbDMiLCJjb21ldCIsIm4iLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJnYW1lU3RhcnQiLCIkIiwiYWpheCIsInVybCIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsImNvbXBsZXRlIiwic3RhdHVzIiwicmVzcG9uc2VKU09OIiwid29yZHMiLCJtZWFuaW5nSWQiLCJsZW5ndGgiLCJjb25maWciLCJiYXNlV29yZHMiLCJyYW5kb21FbGVtZW50IiwiZGVidWciLCJjb25zb2xlIiwiaW5mbyIsIkdhbWUiLCJDQU5WQVMiLCJzdGF0ZSIsIkJvb3RTdGF0ZSIsIkxvYWRTdGF0ZSIsIk1lbnVTdGF0ZSIsIkluaXRHYW1lU3RhdGUiLCJQbGF5U3RhdGUiLCJHYW1lb3ZlclN0YXRlIiwic3RhcnQiLCJwcm90b3R5cGUiLCJpbml0Iiwic2NhbGVNb2RlIiwiU2NhbGVNYW5hZ2VyIiwiU0hPV19BTEwiLCJwYWdlQWxpZ25Ib3Jpem9udGFsbHkiLCJwYWdlQWxpZ25WZXJ0aWNhbGx5Iiwic2V0TWluTWF4IiwicmVuZGVyZXIiLCJyZW5kZXJTZXNzaW9uIiwicm91bmRQaXhlbHMiLCJ0aW1lIiwiZGVzaXJlZEZwcyIsInByZWxvYWQiLCJsb2FkIiwiaW1hZ2UiLCJjcmVhdGUiLCJzdGFydFN5c3RlbSIsImZvbnRzIiwibWFpbiIsInRpdGxlIiwibWVudSIsInBvcHVwSGVpZ2h0IiwiQ3ViaWMiLCJJbk91dCIsImdhbWVvdmVyIiwiZ3JlZXRpbmdzIiwiZ3JlZXRpbmdzTGltaXRzIiwicGFnZVdvcmRzIiwibGluZVNwYWNpbmciLCJwbGF5IiwibW92ZVRpbWUiLCJncmF2aXR5IiwiYmVhbVNwZWVkIiwiZ2xvYmFsIiwic2NvcmUiLCJjb3JyZWN0V29yZHMiLCJpbmNvcnJlY3RXb3JkcyIsIkFycmF5Iiwic3BsaWNlIiwiZmxvb3IiLCJzY3JvbGxQb3NpdGlvbiIsImNvcnJlY3RsYWJlbHMiLCJpbmNvcnJlY3RsYWJlbHMiLCJtb3JlIiwiYmFja1Bvc2l0aW9uIiwicG9wdXAiLCJncmFwaGljcyIsImJlZ2luRmlsbCIsImxpbmVTdHlsZSIsImRyYXdSb3VuZGVkUmVjdCIsImJ1dHRvbiIsImFjdGlvbk9uQ2xpY2siLCJjcmVhdGVMYWJlbHMiLCJtb3JlVGV4dCIsInRleHQiLCJmb250IiwiZmlsbCIsIm1vcmVCdXR0b24iLCJtb3JlT25DbGljayIsImFsaWduVG8iLCJiYWNrQnV0dG9uIiwiYmFja09uQ2xpY2siLCJtZXNzYWdlIiwiZ3JlZXRpbmdMYWJlbCIsImZvbnRXZWlnaHQiLCJzZXRTaGFkb3ciLCJzZXRUbyIsIm9uSW5wdXRPdmVyIiwib3ZlclBsYXlCdXR0b24iLCJvbklucHV0T3V0Iiwib3V0UGxheUJ1dHRvbiIsImlucHV0Iiwia2V5Ym9hcmQiLCJhZGRLZXlDYXB0dXJlIiwiS2V5Ym9hcmQiLCJTUEFDRUJBUiIsInJlc3VsdDFMYWJlbCIsIk5vbmUiLCJyZXN1bHQyTGFiZWwiLCJwMSIsImtpbGwiLCJ1cCIsImRvd24iLCJoaWRlTWV0ZW9yaXRlcyIsInAiLCJvbkNvbXBsZXRlIiwic3RhcnRHYW1lIiwibW9yZUluZm8iLCJiYWNrQ29tcGxldGUiLCJyZW5kZXIiLCJsaXN0ZW5PbkNsaWNrIiwic291bmQiLCJsZW5naHQiLCJvbkxvYWRDb21wbGV0ZSIsInBsYXlXb3JkIiwiYXVkaW8iLCJtdXNpYyIsInJlbW92ZSIsImdyb3VwIiwiY29ycmVjdFRleHQiLCJ3b3JkV3JhcCIsIndvcmRXcmFwV2lkdGgiLCJ3b3JkSlNPTiIsImNhY2hlIiwiZ2V0SlNPTiIsInBvc2l0aW9uIiwiaW5wdXRFbmFibGVkIiwiZXZlbnRzIiwib3ZlckxhYmVsIiwib3V0TGFiZWwiLCJsaXN0ZW5CdXR0b24iLCJtYXNrIiwiZHJhd1JlY3QiLCJ1cE9uQ2xpY2siLCJkb3duT25DbGljayIsImluY29ycmVjdFRleHQiLCJoaW50IiwidXBkYXRlIiwiZG93bkR1cmF0aW9uIiwibG9hZFRleHR1cmUiLCJ0IiwicmVzaXplIiwiYWxpZ24iLCJ0MSIsInNsaWNlIiwidDIiLCJpZHMiLCJqc29uIiwiYXNzZXRzIiwiY2Fub24iLCJwbGF0Zm9ybSIsIm1ldGVvcl9saWdodCIsIm1ldGVvcjEiLCJtZXRlb3IyIiwibWV0ZW9yMyIsIm1ldGVvcjQiLCJtbWV0ZW9yMSIsIm1tZXRlb3IyIiwibW1ldGVvcjMiLCJtbWV0ZW9yNCIsIm1tZXRlb3I1IiwibW1ldGVvcjYiLCJtbWV0ZW9yNyIsIm1tZXRlb3I4IiwiYmVhbSIsImJlYW1fbGlnaHQiLCJsaXN0ZW4iLCJzdGFyMSIsInN0YXIyIiwic3RhcjMiLCJjb250cm9sMSIsImNvbnRyb2wyIiwicGxhaW4iLCJmYWxsIiwiaGVhcnRfcmVkIiwiaGVhcnRfYmxhY2siLCJiYWNrIiwibG9hZGluZ0xhYmVsIiwia2V5Iiwic3ByaXRlc2hlZXQiLCJpc0Rvd24iLCJuYW1lTGFiZWwiLCJwbGF5TGFiZWwiLCJjb250cm9sTGFiZWwiLCJjb250cm9sTGFiZWwyIiwiY29udHJvbExhYmVsMyIsImNvbnRyb2xMYWJlbDQiLCJjb250cm9sTGFiZWw1IiwiYWR2YW5jZWRUaW1pbmciLCJkaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSIsInN0YWdlIiwic3RlcCIsIm1ldGVvclNwcml0ZXMiLCJmbGFyZVNwcml0ZXMiLCJ3b3JkTGFiZWxzIiwiaGVhcnRzIiwiY3JlYXRlZCIsImluaXRpYWxpemVkIiwibWFyZ2luIiwidyIsImgiLCJzZXRCb3VuZHMiLCJjYW1lcmEiLCJndW5wb3N0aXRpb24iLCJsaWZlcyIsIndvcmQiLCJzcGVlRmFjdG9yIiwiY2hhbmdlUG9zaXRpb24iLCJtZXRlb3JzIiwibGVmdCIsImltbW92YWJsZSIsIndlYXBvbiIsImJ1bGxldEtpbGxUeXBlIiwiV2VhcG9uIiwiS0lMTF9DQU1FUkFfQk9VTkRTIiwiYnVsbGV0QW5nbGVPZmZzZXQiLCJidWxsZXRTcGVlZCIsInRyYWNrU3ByaXRlIiwiY3JlYXRlVGV4dEJsb2NrcyIsImNyZWF0ZUhlYXJ0cyIsIkxFRlQiLCJSSUdIVCIsInRpbWVyIiwidG90YWxFbGFwc2VkU2Vjb25kcyIsImFyY2FkZSIsIm92ZXJsYXAiLCJidWxsZXRzIiwiYmVhbU1ldGVvckhpdCIsInVwZGF0ZVNwZWVkIiwic2NvcmVMYWJlbCIsImRvd25NZXRlb3JpdGVzIiwibSIsImRlbHRhIiwiYWNjdW0iLCJ3b3JkTGFiZWwiLCJmbGFyZSIsIm5lZWRQb3NpdGlvbiIsImNhbm9uaW1hZ2VtYXNrIiwic3RvcENhbm9uIiwibWluIiwiZmlyZUJlYW0iLCJUT1BfQ0VOVEVSIiwidXBkYXRlQmFjayIsImZpcmVkIiwiZmlyZSIsImRpc3QiLCJjb3JyZWN0V29yZCIsIm1vdmUyIiwiY29sbGFwc2VCZWFtIiwibWFrZUVhcnRocXVha2UiLCJhbmltYXRpb25zIiwiZGVsYXkiLCJCb3VuY2UiLCJzZXRHYW1lb3ZlclN0YXRlIiwibG9hZGVkQ2Fub25JbWFnZSIsInRleHRibG9jayIsInRleHRibG9ja2xlZnQiLCJ0ZXh0YmxvY2tyaWdodCIsInRyYW5zbGF0aW9uTGFiZWwiLCJyZXNldE1ldGVvcnMiLCJtZXRlb3JpdGUiLCJjb3JyZWN0IiwibmFtZSIsImNvcnJlY3RBbnN3ZXIiLCJleCIsImsiLCJsb2ciLCJzaG93Q29ycmVjdCIsImluY29ycmVjdEFuc3dlciIsInNob3ciLCJjaGFpbiIsIm1heCIsInRyYW5zbGF0aW9uIiwiaW1hZ2VzIiwiYWx0ZXJuYXRpdmVzIiwiaWQiLCJjcm9zc29yaWdpbiIsImNyb3NzT3JpZ2luIiwiY2hlY2tXb3JsZEJvdW5kcyIsIm1ldGVvciIsInN0eWxlIiwiTEVGVF9DRU5URVIiLCJSSUdIVF9DRU5URVIiLCJoZWFydCJdLCJtYXBwaW5ncyI6IkFBSUEsUUFBQUEsa0JBQUFDLEdBQ0FDLEtBQUFDLFdBQUEsR0FBQUQsS0FBQUUsS0FBQUMsSUFBQUMsT0FBQUosS0FBQUUsS0FBQUcsTUFBQUMsUUFBQVAsRUFBQVEsV0FBQSxFQUFBLEdBQUFSLEVBQUFTLFlBQUEsWUFDQVIsS0FBQUMsV0FBQSxHQUFBRCxLQUFBRSxLQUFBQyxJQUFBQyxPQUFBSixLQUFBRSxLQUFBRyxNQUFBQyxRQUFBUCxFQUFBUSxXQUFBLEVBQUFSLEVBQUFTLFlBQUEsSUFBQSxZQUNBUixLQUFBQyxXQUFBLEdBQUFELEtBQUFFLEtBQUFDLElBQUFDLE9BQUFKLEtBQUFFLEtBQUFHLE1BQUFDLFFBQUFQLEVBQUFRLFdBQUEsRUFBQSxHQUFBUixFQUFBUyxZQUFBLElBQUEsWUFDQVIsS0FBQUMsV0FBQSxHQUFBRCxLQUFBRSxLQUFBQyxJQUFBQyxPQUFBSixLQUFBRSxLQUFBRyxN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S0FBQWdJLFFBQ0FELE9BQUFFLGFBQUFsRixLQUFBL0MsS0FBQXVSLE9BR0E3TCxVQUFBRyxVQUFBeVAsZ0JBQUEsV0FDQXRWLEtBQUE2USxPQUFBN1EsS0FBQXNSLE1BQUEsR0FBQWpFLFlBQUEsZUFDQXJOLEtBQUFzUixRQUNBdkosT0FBQUcsZUFBQW5GLEtBQUEvQyxLQUFBdVIsT0FHQTdMLFVBQUFHLFVBQUF3TSxhQUFBLFdBQ0EsSUFBQSxHQUFBL1EsR0FBQSxFQUFBQSxFQUFBLEVBQUFBLElBQUEsQ0FDQSxHQUFBK1UsR0FBQXJXLEtBQUFFLEtBQUFDLElBQUFDLE9BQUFKLEtBQUEyUixLQUFBLEdBQUEsR0FBQXJRLEVBQUEsR0FBQSxZQUNBK1UsR0FBQXpWLE9BQUFDLElBQUEsR0FBQSxJQUNBYixLQUFBNlEsT0FBQTlOLEtBQUFzVCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IExhRnV0IG9uIDE0LjA2LjIwMTcuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTWV0ZW9yaXRlcyhzZXR0aW5ncykge1xuICAgIHRoaXMubWV0ZW9yaXRlc1swXSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYIC0gc2V0dGluZ3MucG9wdXBXaWR0aCAvIDIgLSAyMCwgc2V0dGluZ3MucG9wdXBCb3R0b20sICdtbWV0ZW9yMScpO1xuICAgIHRoaXMubWV0ZW9yaXRlc1sxXSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYIC0gc2V0dGluZ3MucG9wdXBXaWR0aCAvIDIsIHNldHRpbmdzLnBvcHVwQm90dG9tICsgMjAwLCAnbW1ldGVvcjInKTtcbiAgICB0aGlzLm1ldGVvcml0ZXNbMl0gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIHNldHRpbmdzLnBvcHVwV2lkdGggLyAyICsgNTAsIHNldHRpbmdzLnBvcHVwQm90dG9tICsgMTAwLCAnbW1ldGVvcjMnKTtcbiAgICB0aGlzLm1ldGVvcml0ZXNbM10gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIDE1MCwgc2V0dGluZ3MucG9wdXBUb3AgLSA0MCwgJ21tZXRlb3I0Jyk7XG4gICAgdGhpcy5tZXRlb3JpdGVzWzRdID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclggKyAxMDAsIHNldHRpbmdzLnBvcHVwVG9wIC0gODAsICdtbWV0ZW9yNScpO1xuICAgIHRoaXMubWV0ZW9yaXRlc1s1XSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYICsgMTIwLCBzZXR0aW5ncy5wb3B1cFRvcCArIDE1LCAnbW1ldGVvcjYnKTtcbiAgICB0aGlzLm1ldGVvcml0ZXNbNl0gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCArIHNldHRpbmdzLnBvcHVwV2lkdGggLyAyICsgMjAsIHNldHRpbmdzLnBvcHVwVG9wICsgMTAwLCAnbW1ldGVvcjcnKTtcbiAgICB0aGlzLm1ldGVvcml0ZXNbN10gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCArIHNldHRpbmdzLnBvcHVwV2lkdGggLyAyICsgNzAsIHNldHRpbmdzLnBvcHVwVG9wIC0gMjAsICdtbWV0ZW9yOCcpO1xuXG4gICAgdGhpcy5tZXRlb3JpdGVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICBpdGVtLmFuY2hvci5zZXQoMC41LCAwLjUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1ldGVvcml0ZXNbMF0pLnRvKHt5OiAnLTEwJ30sIDI1MDAsICBzZXR0aW5ncy5tZXRlb3JpdGVzRWFzaW5nLCB0cnVlLCAwLCAtMSwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1ldGVvcml0ZXNbMV0pLnRvKHt5OiAnLTEwJ30sIDI1MDAsIHNldHRpbmdzLm1ldGVvcml0ZXNFYXNpbmcsIHRydWUsIDAsIC0xLCB0cnVlKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMubWV0ZW9yaXRlc1syXSkudG8oe3k6ICctMTAnfSwgMjAwMCwgc2V0dGluZ3MubWV0ZW9yaXRlc0Vhc2luZywgdHJ1ZSwgMjIzLCAtMSwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1ldGVvcml0ZXNbM10pLnRvKHt5OiAnLTEwJ30sIDI1MDAsIHNldHRpbmdzLm1ldGVvcml0ZXNFYXNpbmcsIHRydWUsIDIyMywgLTEsIHRydWUpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5tZXRlb3JpdGVzWzRdKS50byh7eTogJy0xMCd9LCAyMDAwLCBzZXR0aW5ncy5tZXRlb3JpdGVzRWFzaW5nLCB0cnVlLCAyMywgLTEsIHRydWUpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5tZXRlb3JpdGVzWzVdKS50byh7eTogJysxMCd9LCAyMDAwLCBzZXR0aW5ncy5tZXRlb3JpdGVzRWFzaW5nLCB0cnVlLCAyMjMsIC0xLCB0cnVlKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMubWV0ZW9yaXRlc1s2XSkudG8oe3k6ICcrMTAnfSwgMTUwMCwgc2V0dGluZ3MubWV0ZW9yaXRlc0Vhc2luZywgdHJ1ZSwgMjIzLCAtMSwgdHJ1ZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1ldGVvcml0ZXNbN10pLnRvKHt5OiAnLTEwJ30sIDE1MDAsIHNldHRpbmdzLm1ldGVvcml0ZXNFYXNpbmcsIHRydWUsIDIyMywgLTEsIHRydWUpOyAgICBcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZU1ldGVvcml0ZXMoKSB7XG4gICAgdmFyIG1vdmUgPSBbXG4gICAgICAgIHt5OiAnKzIwMCcsIHg6ICctMzAwJywgYWxwaGE6IDB9LFxuICAgICAgICB7eTogJysyMDAnLCB4OiAnLTMwMCcsIGFscGhhOiAwfSxcbiAgICAgICAge3k6ICcrMjAwJywgeDogJy0zMDAnLCBhbHBoYTogMH0sXG4gICAgICAgIHt5OiAnKzIwMCcsIHg6ICctMzAwJywgYWxwaGE6IDB9LFxuICAgICAgICB7eTogJysyMDAnLCB4OiAnLTMwMCcsIGFscGhhOiAwfSxcbiAgICAgICAge3k6ICcrMjAwJywgeDogJy0zMDAnLCBhbHBoYTogMH0sXG4gICAgICAgIHt5OiAnKzIwMCcsIHg6ICctMjAwJywgYWxwaGE6IDB9LFxuICAgICAgICB7eTogJy0yMDAnLCB4OiAnKzIwMCcsIGFscGhhOiAwfSxcblxuICAgIF07XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IDg7IGkgKyspIHtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1ldGVvcml0ZXNbaV0pLnRvKG1vdmVbaV0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuSW4sIHRydWUsIDAsIDAsIGZhbHNlKTtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFrZUJhY2tncm91bmQoc2V0dGluZ3MpIHtcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnRpbGVTcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQsIDE0MDAsIDEwMTgyLCAgJ2JhY2tncm91bmQnKTtcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldCgwLjUsIDEpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5zY2FsZS5zZXQodGhpcy5nYW1lLndvcmxkLndpZHRoIC8gMTEwMCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnkgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLmJhY2tncm91bmQsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmJvZHkudmVsb2NpdHkueSA9IHNldHRpbmdzLmJhY2tTcGVlZDtcbi8v0LfQtdC80LvRj1xuICAgIHRoaXMuZWFydGggPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsICdlYXJ0aCcpO1xuICAgIHRoaXMuZWFydGguc2NhbGUuc2V0KHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIDExMDApO1xuICAgIHRoaXMuZWFydGguYWxpZ25Jbih0aGlzLmJhY2tncm91bmQsIFBoYXNlci5CT1RUT01fQ0VOVEVSKTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcy5lYXJ0aCwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICB0aGlzLmVhcnRoLmJvZHkudmVsb2NpdHkueSA9IHNldHRpbmdzLmJhY2tTcGVlZDtcbiAgICB0aGlzLmF1dG9DdWxsID0gdHJ1ZTtcbi8v0LfQstC10LfQtNGLXG4gICAgdGhpcy5zdGFycyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCAyMDA7IGkrKykge1xuICAgICAgICB2YXIgc3RhciA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKFJhbmRvbUludCgxMjAwKSwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIFJhbmRvbUludCgxMDAwMCksICdzdGFyJyArIFJhbmRvbUludCgzKSk7XG4gICAgICAgIHN0YXIuYW5jaG9yLnNldCgwLjUsIDAuNSk7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZShzdGFyLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICBzdGFyLmJvZHkudmVsb2NpdHkueSA9IHNldHRpbmdzLmJhY2tTcGVlZCAvIDI7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4oc3RhcikudG8oe2FscGhhOiAwLjN9LCAxMDAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgUmFuZG9tSW50KDEwMDApLCAtMSwgdHJ1ZSk7XG4gICAgICAgIHN0YXIuYXV0b0N1bGwgPSB0cnVlO1xuICAgICAgICAvL3N0YXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJzLnB1c2goc3Rhcik7XG4gICAgfVxuICAgIC8v0L/Qu9Cw0L3QtdGC0YtcbiAgICB0aGlzLm1vb24gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgLTEwMDAsICdtb29uJyk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMubW9vbiwgUGhhc2VyLlBoeXNpY3MuQVJDQURFKTtcbiAgICB0aGlzLm1vb24uYm9keS52ZWxvY2l0eS55ID0gc2V0dGluZ3MuYmFja1NwZWVkO1xuICAgIHRoaXMubW9vbi5hdXRvQ3VsbCA9IHRydWU7XG4gICAgXG4gICAgdGhpcy52ZW51cyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCAtMjAwMCwgJ3ZlbnVzJyk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMudmVudXMsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy52ZW51cy5ib2R5LnZlbG9jaXR5LnkgPSBzZXR0aW5ncy5iYWNrU3BlZWQ7XG4gICAgdGhpcy52ZW51cy5hdXRvQ3VsbCA9IHRydWU7XG4gICAgXG4gICAgdGhpcy5tYXJzID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMzAwLCAtNDAwMCwgJ21hcnMnKTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUodGhpcy5tYXJzLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIHRoaXMubWFycy5ib2R5LnZlbG9jaXR5LnkgPSBzZXR0aW5ncy5iYWNrU3BlZWQ7XG4gICAgdGhpcy5tYXJzLmF1dG9DdWxsID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLnBsYW5ldDkgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQud2lkdGggLSAyMDAsIC0zNTAwLCAncGxhbmV0OScpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLnBsYW5ldDksIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5wbGFuZXQ5LmJvZHkudmVsb2NpdHkueSA9IHNldHRpbmdzLmJhY2tTcGVlZDtcbiAgICB0aGlzLnBsYW5ldDkuYXV0b0N1bGwgPSB0cnVlO1xuXG4gICAgdGhpcy5zYXR1cm4gPSAgdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclggLSAyMDAsIC01MDAwLCAnc2F0dXJuJyk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMuc2F0dXJuLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIHRoaXMuc2F0dXJuLmJvZHkudmVsb2NpdHkueSA9IHNldHRpbmdzLmJhY2tTcGVlZDtcbiAgICB0aGlzLnNhdHVybi5hdXRvQ3VsbCA9IHRydWU7XG5cblxuLy/Qt9C+0L3QtFxuICAgIHRoaXMuem9uZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYIC0gNDAwLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArIDEwMCwgJ3pvbmQnKTtcbiAgICB0aGlzLnpvbmQuYW5jaG9yLnNldCgwLjUsIDAuNSk7XG4gICAgdGhpcy56b25kLmF1dG9DdWxsID0gdHJ1ZTtcblxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLnpvbmQsIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy56b25kLmJvZHkudmVsb2NpdHkueSA9IHNldHRpbmdzLmJhY2tTcGVlZDtcbiAgICB0aGlzLnpvbmQuc2NhbGUuc2V0KDAuMywgMC4zKTtcbiAgICBpZihzZXR0aW5ncy5iYWNrU3BlZWQgPT09IDApIHtcbiAgICAgICAgdGhpcy56b25kLmFuZ2xlID0gLTE7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy56b25kKS50byh7eTogJysyMCcsIGFuZ2xlOiAnKzInfSwgNjAwMCArIFJhbmRvbUludCgzMDAwKSwgUGhhc2VyLkVhc2luZy5MaW5lYXIuSW4sIHRydWUsIFJhbmRvbUludCgxMDAwKSwgLTEsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuem9uZCkudG8oe3g6ICcrNDAnfSwgMTAwMDAsIHNldHRpbmdzLm1ldGVvcml0ZXNFYXNpbmcsIHRydWUsIFJhbmRvbUludCgxMDAwKSwgLTEsIHRydWUpO1xuXG5cbi8v0L/QsNC00LDRjtGJ0LjQtSDQvNC10YLQtdC+0YDQuNGC0YtcbiAgICB0aGlzLnN0YXJmYWxsMSA9ICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgtMzAwMSwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSA0MDAsICdmYWxsJyk7XG4gICAgdGhpcy5zdGFyZmFsbDEuYW5jaG9yLnNldCgwLjUsIDAuNSk7XG4gICAgdGhpcy5zdGFyZmFsbDEuZGF0YS5oZWlnaHQgPSAtIDgwMDA7XG4gICAgdGhpcy5zdGFyZmFsbDIgPSAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoLTMwMDEsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gNDYwLCAnZmFsbCcpO1xuICAgIHRoaXMuc3RhcmZhbGwyLmFuY2hvci5zZXQoMC41LCAwLjUpO1xuICAgIHRoaXMuc3RhcmZhbGwzID0gIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKC0zMDAxLCB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtIDUyMCwgJ2ZhbGwnKTtcbiAgICB0aGlzLnN0YXJmYWxsMy5hbmNob3Iuc2V0KDAuNSwgMC41KTtcbiAgICB0aGlzLnN0YXJmYWxsMS5hdXRvQ3VsbCA9IHRydWU7XG4gICAgdGhpcy5zdGFyZmFsbDIuYXV0b0N1bGwgPSB0cnVlO1xuICAgIHRoaXMuc3RhcmZhbGwzLmF1dG9DdWxsID0gdHJ1ZTtcblxuXG4vL9C60L7QvNC10YLQsFxuICAgIHRoaXMuY29tZXQgPSAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoLTMwMDEsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gNDAwLCAnY29tZXQnKTtcbiAgICB0aGlzLmNvbWV0LmFuY2hvci5zZXQoMC41LCAwLjUpO1xuICAgIHRoaXMuY29tZXQuZGF0YS5oZWlnaHQgPSAtIDQwMDA7XG4gICAgdGhpcy5jb21ldC5hdXRvQ3VsbCA9IHRydWU7XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IExhRnV0IG9uIDE2LjA1LjIwMTcuXG4gKi9cblxudmFyIGdhbWUgPSBudWxsO1xudmFyIHdvcmRzID0gW107XG52YXIgZ2xvYmFsID0ge1xuICAgIHNjb3JlOiAwLFxuICAgIGNvcnJlY3RXb3JkczogW10sXG4gICAgaW5jb3JyZWN0V29yZHM6IFtdXG59O1xuXG4vLyAgVGhlIEdvb2dsZSBXZWJGb250IExvYWRlciB3aWxsIGxvb2sgZm9yIHRoaXMgb2JqZWN0LCBzbyBjcmVhdGUgaXQgYmVmb3JlIGxvYWRpbmcgdGhlIHNjcmlwdC5cblxuZnVuY3Rpb24gUmFuZG9tSW50KG4pIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoKE1hdGgucmFuZG9tKCkgKiAobikpLCAxMCkgKyAxO1xufVxuQXJyYXkucHJvdG90eXBlLnJhbmRvbUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGVuZ3RoKSwgMSlbMF07XG59O1xuXG5mdW5jdGlvbiBnYW1lU3RhcnQoKSB7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IFwiLy9hcGkud29yZHMuc2t5ZW5nLnJ1L2FwaS9wdWJsaWMvdjEvdXNlcnMvbWVhbmluZ3MuanNvblwiLFxuICAgICAgICB4aHJGaWVsZHM6IHtcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oIGRhdGEgKSB7XG4gICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5yZXNwb25zZUpTT04uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB3b3Jkcy5wdXNoKGl0ZW0ubWVhbmluZ0lkKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAod29yZHMubGVuZ3RoIDwgNTEgJiYgY29uZmlnLmJhc2VXb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgd29yZHMucHVzaChjb25maWcuYmFzZVdvcmRzLnJhbmRvbUVsZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjb25maWcuZGVidWcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8od29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSgxMjAwLCAxMTAwICwgUGhhc2VyLkNBTlZBUywgJ2dhbWVDb250YWluZXInKTtcblxuICAgICAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoJ2Jvb3QnLCBCb290U3RhdGUpO1xuICAgICAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoJ2xvYWQnLCBMb2FkU3RhdGUpO1xuICAgICAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoJ21lbnUnLCBNZW51U3RhdGUpO1xuICAgICAgICAgICAgZ2FtZS5zdGF0ZS5hZGQoJ2luaXRnYW1lJywgSW5pdEdhbWVTdGF0ZSk7XG4gICAgICAgICAgICBnYW1lLnN0YXRlLmFkZCgncGxheScsIFBsYXlTdGF0ZSk7XG4gICAgICAgICAgICBnYW1lLnN0YXRlLmFkZCgnZ2FtZW92ZXInLCBHYW1lb3ZlclN0YXRlKTtcblxuICAgICAgICAgICAgZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTGFGdXQgb24gMTcuMDUuMjAxNy5cbiAqL1xuXG52YXIgQm9vdFN0YXRlID0gZnVuY3Rpb24oKSB7fTtcblxuLy9ub2luc3BlY3Rpb24gSlNBbm5vdGF0b3JcbkJvb3RTdGF0ZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25WZXJ0aWNhbGx5ID0gdHJ1ZTtcbiAgICB0aGlzLnNjYWxlLnNldE1pbk1heCg0ODAsIDMyMCwgMTIwMCwgMTEwMCk7XG4gICAgZ2FtZS5yZW5kZXJlci5yZW5kZXJTZXNzaW9uLnJvdW5kUGl4ZWxzID0gdHJ1ZTtcbiAgICBnYW1lLnRpbWUuZGVzaXJlZEZwcyA9IDYwO1xuXG59O1xuXG5Cb290U3RhdGUucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCAnYXNzZXRzL2ltZy9iYWNrLmpwZycpO1xufTtcblxuQm9vdFN0YXRlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYoZ2FtZVNjYWxlICE9IDApIHtcbiAgICAvLyAgICAgJCgnY2FudmFzJykuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUoJyArIGdhbWVTY2FsZSArICcpJyk7XG4gICAgLy8gfVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCwgMTQwMCwgMTAxODIsICAnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5hbmNob3Iuc2V0KDAuNSwgMSk7XG5cbiAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnbG9hZCcpO1xufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTGFGdXQgb24gMTMuMDYuMjAxNy5cbiAqL1xuXG52YXIgY29uZmlnID0ge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBmb250czoge1xuICAgICAgICBtYWluOiAnT3BlbiBTYW5zJyxcbiAgICAgICAgdGl0bGU6ICdSdXNzbyBPbmUnXG4gICAgfSxcbiAgICBtZW51OiB7ICAvL9GN0LrRgNCw0L0g0LzQtdC90Y5cbiAgICAgICAgcG9wdXBUb3A6IDIwMCwgIC8v0LLQtdGA0YUg0L/QvtC/0LDQv9CwXG4gICAgICAgIHBvcHVwV2lkdGg6IDU1MCwgLy/RiNC40YDQuNC90LBcbiAgICAgICAgcG9wdXBIZWlnaHQ6IDIyMCwgLy/QstGL0YHQvtGC0LBcbiAgICAgICAgcG9wdXBCb3R0b206IDQzMCwgIC8vL3BvcHVwVG9wICsgcG9wdXBIZWlnaHQsXG4gICAgICAgIG1ldGVvcml0ZXNFYXNpbmc6IFBoYXNlci5FYXNpbmcuQ3ViaWMuSW5PdXQsXG4gICAgICAgIGJhY2tTcGVlZDogMCAgLy/RgdC60L7RgNC+0YHRgtGMINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0LHQtdC60LPRgNCw0YPQvdC00LBcbiAgICB9LFxuICAgIGdhbWVvdmVyOiB7ICAvL9GN0LrRgNCw0L0g0YDQtdC30YPQu9GM0YLQsNGC0L7QsiDQuNCz0YDRi1xuICAgICAgICBwb3B1cFRvcDogMjAwLCAvL9Cy0LXRgNGFINC/0L7Qv9Cw0L/QsFxuICAgICAgICBwb3B1cFdpZHRoOiA0MDAsIC8v0YjQuNGA0LjQvdCwXG4gICAgICAgIHBvcHVwSGVpZ2h0OiAyNjAsICAvL9Cy0YvRgdC+0YLQsFxuICAgICAgICBwb3B1cEJvdHRvbTogNDYwLCAgLy8vcG9wdXBUb3AgKyBwb3B1cEhlaWdodCxcbiAgICAgICAgbWV0ZW9yaXRlc0Vhc2luZzogUGhhc2VyLkVhc2luZy5DdWJpYy5Jbk91dCxcbiAgICAgICAgYmFja1NwZWVkOiAwLFxuICAgICAgICBncmVldGluZ3M6WyAgLy/RgtC10LrRgdGC0YtcbiAgICAgICAgICAgICfQnNC40YHRgdC40Y8g0LLRi9C/0L7Qu9C90LXQvdCwJyxcbiAgICAgICAgICAgICfQktCw0YMhINCS0Ysg0LzQvtC20LXRgtC1INCz0L7RgNC00LjRgtGM0YHRjyDRgdC+0LHQvtC5JyxcbiAgICAgICAgICAgICfQktC/0LXRh9Cw0YLQu9GP0LXRgiEnLFxuICAgICAgICAgICAgJ9Ci0LDQuiDQtNC10YDQttCw0YLRjCEnLFxuICAgICAgICAgICAgJ9Cl0L7RgNC+0YjQuNC5INGA0YvQstC+0LonLFxuICAgICAgICAgICAgJ9CS0YHQtSDRgtC+0LvRjNC60L4g0L3QsNGH0LjQvdCw0LXRgtGB0Y8nXG4gICAgICAgIF0sXG4gICAgICAgIGdyZWV0aW5nc0xpbWl0czogWyAgLy/Qu9C40LzQuNGC0Ysg0L/QvtC30LTRgNCw0LLQu9C10L3QuNC5XG4gICAgICAgICAgICA1MCwgNDEsIDMxLCAyMSwgMTEsIDBcbiAgICAgICAgXSxcbiAgICAgICAgcGFnZVdvcmRzOiA2LCAgIC8v0YHQutC+0LvRjNC60L4g0YHQu9C+0LIg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG4gICAgICAgIGxpbmVTcGFjaW5nOiA0NSAgLy/RgNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINGB0YLRgNC+0LrQsNC8XG4gICAgfSxcbiAgICBwbGF5OiB7XG4gICAgICAgIG1vdmVUaW1lOiAxMDAsIC8vINCy0YDQtdC80Y8g0L/QtdGA0LXQvNC10YnQtdC90LjRjyDQv9GD0YjQutC4XG4gICAgICAgIGdyYXZpdHk6IDYwMCAvIDEwLCAgLy/RgdC60L7RgNC+0YHRgtGMINC/0LDQtNC10L3QuNGPINC80LXRgtC10L7RgNC40YLQvtCyXG4gICAgICAgIGJlYW1TcGVlZDogMzgwMCwgIC8v0YHQutC+0YDQvtGB0YLRjCDQv9C+0LvQtdGC0LAg0LvQsNC30LXRgNCwXG4gICAgICAgIGJhY2tTcGVlZDogMzYgIC8v0YHQutC+0YDQvtGB0YLRjCDQv9C10YDQtdC80LXRidC10L3QuNGPINCx0LXQutCz0YDQsNGD0L3QtNCwXG4gICAgfSxcbiAgICBiYXNlV29yZHM6IFsgIC8v0YHQv9C40YHQvtC6INGB0LvQvtCyINC10YHQu9C4INC90LUg0YPQtNCw0LvQvtGB0Ywg0L3QuNGH0LXQs9C+INC/0L7Qu9GD0YfQuNGC0YxcbiAgICAgICAgMjUyMzAyLFxuICAgICAgICAyMzQwNDQsXG4gICAgICAgIDI1MjMwMSxcbiAgICAgICAgMjUyMjkxLFxuICAgICAgICA3NzA1MSxcbiAgICAgICAgOTYwMzMsXG4gICAgICAgIDI1MjI5MCxcbiAgICAgICAgMjUyMjg5LFxuICAgICAgICAxMTkzNzUsXG4gICAgICAgIDE4OTA0MixcbiAgICAgICAgOTYyNDYsXG4gICAgICAgIDExNjM3MixcbiAgICAgICAgMjE3Mzg5LFxuICAgICAgICAyMzQ0MTEsXG4gICAgICAgIDI1MjI4OCxcbiAgICAgICAgMjUyMjg3LFxuICAgICAgICA3Mjg3NixcbiAgICAgICAgOTM5ODIsXG4gICAgICAgIDI1MjI4NixcbiAgICAgICAgOTIwODUsXG4gICAgICAgIDE5NTMyNSxcbiAgICAgICAgMjUyMjg1LFxuICAgICAgICAxNTM1MDEsXG4gICAgICAgIDI1MjI4NCxcbiAgICAgICAgMTA3MTk4LFxuICAgICAgICAyNTIyODMsXG4gICAgICAgIDUzMjA1LFxuICAgICAgICAyNTIyODIsXG4gICAgICAgIDQ1OTk3LFxuICAgICAgICA1NDk0NixcbiAgICAgICAgMTcxMjU2LFxuICAgICAgICAyNTIyODAsXG4gICAgICAgIDcyMTg3LFxuICAgICAgICAyMDU3MzcsXG4gICAgICAgIDI1MjI3OCxcbiAgICAgICAgMjUyMjc3LFxuICAgICAgICAxNTg5MCxcbiAgICAgICAgMjUyMjc2LFxuICAgICAgICAyNTIyNzUsXG4gICAgICAgIDI1MjI3OSxcbiAgICAgICAgMjUyMjczLFxuICAgICAgICAyNTIyNzIsXG4gICAgICAgIDI1MjI3MSxcbiAgICAgICAgMjUyMjcwLFxuICAgICAgICAyNDU0MTMsXG4gICAgICAgIDI1MjI2OSxcbiAgICAgICAgMTMwMzkyLFxuICAgICAgICAyMzI0NjcsXG4gICAgICAgIDQ0MDY5LFxuICAgICAgICAyNTIyNjgsXG4gICAgICAgIDI1MjgxNyxcbiAgICAgICAgMjUyODI5LFxuICAgICAgICAyNTI4MTQsXG4gICAgICAgIDIzODE0NCxcbiAgICAgICAgMjUyODE5XG4gICAgXVxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBMYUZ1dCBvbiAxOS4wNS4yMDE3LlxuICovXG5cblxudmFyIEdhbWVvdmVyU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKCkge1xuXG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5tZXRlb3JpdGVzID0gbmV3IEFycmF5KDgpO1xuICAgIHRoaXMuY29ycmVjdGxhYmVscyA9IFtdO1xuICAgIHRoaXMuaW5jb3JyZWN0bGFiZWxzID0gW107XG5cbiAgICB0aGlzLm1vcmUgPSBmYWxzZTtcbiAgICB0aGlzLm1ha2VCYWNrZ3JvdW5kKGNvbmZpZy5nYW1lb3Zlcik7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnkgPSBnbG9iYWwuYmFja1Bvc2l0aW9uO1xuICAgIHRoaXMuZWFydGgueSA9IGdsb2JhbC5iYWNrUG9zaXRpb247XG5cbiAgICB0aGlzLnBvcHVwID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcyh0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIGNvbmZpZy5nYW1lb3Zlci5wb3B1cFdpZHRoIC8gMiwgY29uZmlnLmdhbWVvdmVyLnBvcHVwVG9wKTtcbiAgICB0aGlzLnBvcHVwLmFuY2hvci5zZXQoMC41KTtcbiAgICB0aGlzLnBvcHVwLmJlZ2luRmlsbCgweEZGRkZGRik7XG4gICAgdGhpcy5wb3B1cC5saW5lU3R5bGUoNCwgMHhkZGRkZGQsIDAuOCk7XG5cbiAgICB0aGlzLnBvcHVwLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCBjb25maWcuZ2FtZW92ZXIucG9wdXBXaWR0aCwgY29uZmlnLmdhbWVvdmVyLnBvcHVwSGVpZ2h0LCA4KTtcblxuICAgIHRoaXMuYnV0dG9uID0gdGhpcy5nYW1lLmFkZC5idXR0b24odGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIGNvbmZpZy5nYW1lb3Zlci5wb3B1cEJvdHRvbSArIDIwLCAnYnV0dG9uJywgdGhpcy5hY3Rpb25PbkNsaWNrLCB0aGlzLCAxKTtcbiAgICB0aGlzLmJ1dHRvbi5hbmNob3Iuc2V0KDAuNSwgMCk7XG5cbiAgICB0aGlzLmNyZWF0ZU1ldGVvcml0ZXMoY29uZmlnLmdhbWVvdmVyKTtcbiAgICB0aGlzLmNyZWF0ZUxhYmVscygpO1xuXG4gICAgdGhpcy5tb3JlVGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCgwLCAwLCAn0J/QvtC00YDQvtCx0L3QtdC1Jywge1xuICAgICAgICBmb250OiAnMjBweCAnICsgY29uZmlnLmZvbnRzLnRpdGxlLFxuICAgICAgICBmaWxsOiAnIzAwMDAwMCdcbiAgICB9KTtcbiAgICB0aGlzLm1vcmVCdXR0b24gPSB0aGlzLmdhbWUuYWRkLmJ1dHRvbih0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgY29uZmlnLmdhbWVvdmVyLnBvcHVwQm90dG9tIC0gOTAsICdtb3JlJywgdGhpcy5tb3JlT25DbGljaywgdGhpcywgMSk7XG4gICAgdGhpcy5tb3JlQnV0dG9uLmFuY2hvci5zZXQoMC41LCAwKTtcbiAgICB0aGlzLm1vcmVUZXh0LmFsaWduVG8odGhpcy5tb3JlQnV0dG9uLCBQaGFzZXIuQk9UVE9NX0NFTlRFUiwgMCwgLTQwKTtcblxuICAgIHRoaXMuYmFja0J1dHRvbiA9IHRoaXMuZ2FtZS5hZGQuYnV0dG9uKC0xMDAwLCBjb25maWcuZ2FtZW92ZXIucG9wdXBUb3AgLSAyNSwgJ2JhY2snLCB0aGlzLmJhY2tPbkNsaWNrLCB0aGlzLCAxKTtcbiAgICB0aGlzLmJhY2tCdXR0b24uYW5jaG9yLnNldCgwLjUsIDApO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY29uZmlnLmdhbWVvdmVyLmdyZWV0aW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihnbG9iYWwuc2NvcmUgPj0gY29uZmlnLmdhbWVvdmVyLmdyZWV0aW5nc0xpbWl0c1tpXSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IGNvbmZpZy5nYW1lb3Zlci5ncmVldGluZ3NbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmdyZWV0aW5nTGFiZWwgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclggKyAyLCBjb25maWcuZ2FtZW92ZXIucG9wdXBUb3AgLSAzMCwgbWVzc2FnZSwge1xuICAgICAgICBmb250OiAnMzJweCAnICsgY29uZmlnLmZvbnRzLnRpdGxlLFxuICAgICAgICBmaWxsOiAnIzM2ZTFlMScsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgIH0pO1xuICAgIHRoaXMuZ3JlZXRpbmdMYWJlbC5zZXRTaGFkb3coMywgMiwgJyMwMGFhYWEnLCAzKTtcbiAgICB0aGlzLmdyZWV0aW5nTGFiZWwuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcblxuICAgIHRoaXMuYnV0dG9uLm9uSW5wdXRPdmVyLmFkZCh0aGlzLm92ZXJQbGF5QnV0dG9uLCB0aGlzKTtcbiAgICB0aGlzLmJ1dHRvbi5vbklucHV0T3V0LmFkZCh0aGlzLm91dFBsYXlCdXR0b24sIHRoaXMpO1xuXG4gICAgdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleUNhcHR1cmUoW1xuICAgICAgICBQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIgICAgLy8vaHR0cHM6Ly9jb2RlcGVuLmlvL2Fub24vcGVuL1pLVkVOcFxuICAgIF0pO1xufTtcblxuR2FtZW92ZXJTdGF0ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdpbml0Z2FtZScpO1xufTtcblxuR2FtZW92ZXJTdGF0ZS5wcm90b3R5cGUuYWN0aW9uT25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucmVzdWx0MUxhYmVsKS50byh7YWxwaGE6IDB9LCAyNTAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucmVzdWx0MkxhYmVsKS50byh7YWxwaGE6IDB9LCAyNTAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICAvL3RoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5wbGF5TGFiZWwpLnRvKHthbHBoYTogMH0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5idXR0b24pLnRvKHthbHBoYTogMH0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5tb3JlVGV4dCkudG8oe2FscGhhOiAwfSwgMjUwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1vcmVCdXR0b24pLnRvKHthbHBoYTogMH0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuXG4gICAgaWYodGhpcy5tb3JlKSB7XG4gICAgICAgIHRoaXMuY29ycmVjdGxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uIChwMSkgeyBwMS5kYXRhLmJ1dHRvbi5raWxsKCk7IHAxLmtpbGwoKSB9KTtcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RsYWJlbHMuZm9yRWFjaChmdW5jdGlvbiAocDEpIHsgcDEuZGF0YS5idXR0b24ua2lsbCgpOyBwMS5raWxsKCkgfSk7XG4gICAgICAgIGlmKHRoaXMuY29ycmVjdGxhYmVscy5sZW5ndGggPiBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzKSB7XG4gICAgICAgICAgICB0aGlzLnVwLmtpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuZG93bi5raWxsKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1vcmVCdXR0b24pLnRvKHthbHBoYTogMH0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5iYWNrZ3JvdW5kKS50byh7eTogdGhpcy5nYW1lLndvcmxkLmhlaWdodH0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuXG4gICAgdGhpcy5oaWRlTWV0ZW9yaXRlcygpO1xuXG4gICAgdmFyIHAgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucG9wdXApLnRvKHt4OiB0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIDEwLCB5OiAyMDAsIHdpZHRoOiAyMCwgaGVpZ2h0OiA0fSwgNDAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCBmYWxzZSwgNTAsIDAsIGZhbHNlKTtcbiAgICBwLm9uQ29tcGxldGUuYWRkKHRoaXMuc3RhcnRHYW1lLCB0aGlzKTtcbiAgICBwLnN0YXJ0KCk7XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5tb3JlT25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc3VsdDFMYWJlbC50ZXh0ID0gJ9CS0LXRgNC90L4gKCcgKyBnbG9iYWwuY29ycmVjdFdvcmRzLmxlbmd0aCArICcpJztcbiAgICB0aGlzLnJlc3VsdDJMYWJlbC50ZXh0ID0gJ9Cf0L7QstGC0L7RgNC40YLRjCAoJyArIGdsb2JhbC5pbmNvcnJlY3RXb3Jkcy5sZW5ndGggKyAnKSc7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmdyZWV0aW5nTGFiZWwpLnRvKHthbHBoYTogMH0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5yZXN1bHQxTGFiZWwpLnRvKHt4OiAnLTEyMCcsIHk6ICctMTIwJ30sIDQwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5yZXN1bHQyTGFiZWwpLnRvKHt4OiAnKzEyMCcsIHk6ICctMTIwJ30sIDQwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIC8vdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnBsYXlMYWJlbCkudG8oe2FscGhhOiAwfSwgMjUwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1vcmVCdXR0b24pLnRvKHthbHBoYTogMH0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuaGlkZU1ldGVvcml0ZXMoKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMubW9yZVRleHQpLnRvKHthbHBoYTogMH0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuXG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmJ1dHRvbikudG8oe3k6ICcrODAnfSwgMjUwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgdmFyIHAgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucG9wdXApLnRvKHtcbiAgICAgICAgeTogJy00MCcsIHg6ICctJyArIGNvbmZpZy5nYW1lb3Zlci5wb3B1cFdpZHRoIC8gMixcbiAgICAgICAgaGVpZ2h0OiBjb25maWcuZ2FtZW92ZXIucG9wdXBIZWlnaHQgKyAxMDAsICB3aWR0aDogY29uZmlnLmdhbWVvdmVyLnBvcHVwV2lkdGggKiAyfSwgNDAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCBmYWxzZSwgNTAsIDAsIGZhbHNlKTtcbiAgICBwLnN0YXJ0KCk7XG4gICAgcC5vbkNvbXBsZXRlLmFkZCh0aGlzLm1vcmVJbmZvLCB0aGlzKTtcbn07XG5cblxuR2FtZW92ZXJTdGF0ZS5wcm90b3R5cGUuYmFja09uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iYWNrQnV0dG9uLnggPSAtMTAwMDtcblxuICAgIHRoaXMucmVzdWx0MUxhYmVsLnRleHQgPSAn0JLQtdGA0L3QviBcXG4nICsgZ2xvYmFsLmNvcnJlY3RXb3Jkcy5sZW5ndGg7XG4gICAgdGhpcy5yZXN1bHQyTGFiZWwudGV4dCA9ICfQn9C+0LLRgtC+0YDQuNGC0YwgXFxuJyArIGdsb2JhbC5pbmNvcnJlY3RXb3Jkcy5sZW5ndGg7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmdyZWV0aW5nTGFiZWwpLnRvKHthbHBoYTogMX0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5yZXN1bHQxTGFiZWwpLnRvKHt4OiAnKzEyMCcsIHk6ICcrMTIwJ30sIDMwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5yZXN1bHQyTGFiZWwpLnRvKHt4OiAnLTEyMCcsIHk6ICcrMTIwJ30sIDMwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIC8vdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnBsYXlMYWJlbCkudG8oe2FscGhhOiAxfSwgMjUwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1vcmVCdXR0b24pLnRvKHthbHBoYTogMX0sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuXG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1vcmVUZXh0KS50byh7YWxwaGE6IDF9LCAyNTAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcblxuICAgIHRoaXMuY29ycmVjdGxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtpdGVtLmRhdGEuYnV0dG9uLmtpbGwoKTsgaXRlbS5raWxsKCl9KTtcbiAgICB0aGlzLmluY29ycmVjdGxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtpdGVtLmRhdGEuYnV0dG9uLmtpbGwoKTsgaXRlbS5raWxsKCl9KTtcblxuICAgIGlmKHRoaXMuY29ycmVjdGxhYmVscy5sZW5ndGggPiBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzKSB7XG4gICAgICAgIHRoaXMudXAua2lsbCgpO1xuICAgICAgICB0aGlzLmRvd24ua2lsbCgpO1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5idXR0b24pLnRvKHt5OiAnLTgwJ30sIDI1MCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHZhciBwID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnBvcHVwKS50byh7XG4gICAgICAgIHk6ICcrNDAnLCB4OiAnKycgKyBjb25maWcuZ2FtZW92ZXIucG9wdXBXaWR0aC8yLFxuICAgICAgICBoZWlnaHQ6IGNvbmZpZy5nYW1lb3Zlci5wb3B1cEhlaWdodCwgIHdpZHRoOiBjb25maWcuZ2FtZW92ZXIucG9wdXBXaWR0aH0sIDMwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgZmFsc2UsIDUwLCAwLCBmYWxzZSk7XG4gICAgcC5zdGFydCgpO1xuICAgIHAub25Db21wbGV0ZS5hZGQodGhpcy5iYWNrQ29tcGxldGUsIHRoaXMpO1xufTtcblxuR2FtZW92ZXJTdGF0ZS5wcm90b3R5cGUuYmFja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY3JlYXRlTWV0ZW9yaXRlcyhjb25maWcuZ2FtZW92ZXIpO1xuICAgIHRoaXMuZ3JlZXRpbmdMYWJlbC54ICs9IDIwMDA7XG4vLyAgICB0aGlzLnBsYXlMYWJlbC54ICs9IDIwMDA7XG4gICAgdGhpcy5tb3JlQnV0dG9uLnggKz0gMjAwMDtcblxuICAgIHZhciBtZXNzYWdlID0gJyc7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGNvbmZpZy5nYW1lb3Zlci5ncmVldGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoZ2xvYmFsLnNjb3JlID49IGNvbmZpZy5nYW1lb3Zlci5ncmVldGluZ3NMaW1pdHNbaV0pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBjb25maWcuZ2FtZW92ZXIuZ3JlZXRpbmdzW2ldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ncmVldGluZ0xhYmVsID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYICsgMiwgY29uZmlnLmdhbWVvdmVyLnBvcHVwVG9wIC0gMzAsIG1lc3NhZ2UsIHtcbiAgICAgICAgZm9udDogJzMycHggJyArIGNvbmZpZy5mb250cy50aXRsZSxcbiAgICAgICAgZmlsbDogJyMzNmUxZTEnLFxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgICB9KTtcbiAgICB0aGlzLmdyZWV0aW5nTGFiZWwuc2V0U2hhZG93KDMsIDIsICcjMDBhYWFhJywgMyk7XG4gICAgdGhpcy5ncmVldGluZ0xhYmVsLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5saXN0ZW5PbkNsaWNrID0gZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgIHZhciB1cmwgPSBidXR0b24uZGF0YS5zb3VuZDtcbiAgICBpZih1cmwubGVuZ2h0ID09PSAwKVxuICAgICAgICByZXR1cm47XG4gICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkKHRoaXMucGxheVdvcmQpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdsaXN0ZW4nLCB1cmwpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnN0YXJ0KCk7XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5wbGF5V29yZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbXVzaWMgPSBnYW1lLmFkZC5hdWRpbygnbGlzdGVuJyk7XG4gICAgbXVzaWMucGxheSgpO1xufTtcblxuR2FtZW92ZXJTdGF0ZS5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnaW5pdGdhbWUnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRDb21wbGV0ZS5yZW1vdmUodGhpcy5wbGF5V29yZCk7XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5tb3JlSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdyZWV0aW5nTGFiZWwua2lsbCgpO1xuICAgIC8vdGhpcy5wbGF5TGFiZWwueCAtPSAyMDAwO1xuICAgIHRoaXMubW9yZUJ1dHRvbi54IC09IDIwMDA7XG5cbiAgICB0aGlzLmJhY2tCdXR0b24ueCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYICsgY29uZmlnLmdhbWVvdmVyLnBvcHVwV2lkdGggLSAzNTtcblxuICAgIGdyb3VwID0gZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZ2xvYmFsLmNvcnJlY3RXb3Jkcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHZhciBjb3JyZWN0VGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIDMyMCwgMjMwICsgY29uZmlnLmdhbWVvdmVyLmxpbmVTcGFjaW5nICogaSwgJycsIHtcbiAgICAgICAgICAgIGZvbnQ6ICcyMHB4ICcgKyBjb25maWcuZm9udHMubWFpbixcbiAgICAgICAgICAgIGZpbGw6ICcjMDAwJyxcbiAgICAgICAgICAgIHdvcmRXcmFwOiB0cnVlLCB3b3JkV3JhcFdpZHRoOiAzMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHdvcmRKU09OID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3dvcmRzJyk7XG4gICAgICAgIHdvcmRKU09OID0gd29yZEpTT05bZ2xvYmFsLmNvcnJlY3RXb3Jkc1tpXV07XG4gICAgICAgIGNvcnJlY3RUZXh0LnRleHQgPSB3b3JkSlNPTlsndGV4dCddICsgJyAtICcgKyB3b3JkSlNPTlsndHJhbnNsYXRpb24nXS50ZXh0O1xuICAgICAgICBjb3JyZWN0VGV4dC5kYXRhLmltYWdlID0gJ2ltYWdlXycgKyAgZ2xvYmFsLmNvcnJlY3RXb3Jkc1tpXTtcbiAgICAgICAgY29ycmVjdFRleHQuZGF0YS5wb3NpdGlvbiA9IGk7XG4gICAgICAgIGNvcnJlY3RUZXh0LmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNvcnJlY3RUZXh0LndvcmRXcmFwID0gdHJ1ZTtcbiAgICAgICAgY29ycmVjdFRleHQubGluZVNwYWNpbmcgPSAtMTM7XG5cbiAgICAgICAgY29ycmVjdFRleHQuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCh0aGlzLm92ZXJMYWJlbCwgdGhpcyk7XG4gICAgICAgIGNvcnJlY3RUZXh0LmV2ZW50cy5vbklucHV0T3V0LmFkZCh0aGlzLm91dExhYmVsLCB0aGlzKTtcbiAgICAgICAgY29ycmVjdFRleHQuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKHRoaXMub3V0TGFiZWwsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvcnJlY3RsYWJlbHMucHVzaChjb3JyZWN0VGV4dCk7XG5cbiAgICAgICAgdmFyIGxpc3RlbkJ1dHRvbiA9ICB0aGlzLmdhbWUuYWRkLmJ1dHRvbih0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIDM0MCwgMjMwICsgY29uZmlnLmdhbWVvdmVyLmxpbmVTcGFjaW5nICogaSwgJ2xpc3RlbicsIHRoaXMubGlzdGVuT25DbGljaywgdGhpcywgMSk7XG4gICAgICAgIGxpc3RlbkJ1dHRvbi5hbmNob3Iuc2V0KDAuNSwgMCk7XG4gICAgICAgIGxpc3RlbkJ1dHRvbi5kYXRhLnNvdW5kID0gd29yZEpTT05bJ3NvdW5kVXJsJ107XG4gICAgICAgIC8vbGlzdGVuQnV0dG9uLmRhdGEuc291bmQgPSAnL2Fzc2V0cy9zb3VuZC5tcDMnO1xuICAgICAgICBncm91cC5hZGQoY29ycmVjdFRleHQpO1xuICAgICAgICBncm91cC5hZGQobGlzdGVuQnV0dG9uKTtcbiAgICAgICAgY29ycmVjdFRleHQuZGF0YS5idXR0b24gPSBsaXN0ZW5CdXR0b247XG4gICAgfVxuXG4gICAgLy8gIEEgbWFzayBpcyBhIEdyYXBoaWNzIG9iamVjdFxuICAgIHZhciBtYXNrID0gZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgbWFzay5iZWdpbkZpbGwoMHhmZmZmZmYpO1xuXG4gICAgbWFzay5kcmF3UmVjdCgwLCAyMjksIHRoaXMuZ2FtZS53b3JsZC53aWR0aCwgY29uZmlnLmdhbWVvdmVyLmxpbmVTcGFjaW5nICogY29uZmlnLmdhbWVvdmVyLnBhZ2VXb3Jkcyk7XG5cbiAgICBncm91cC5tYXNrID0gbWFzaztcbiAgICBpZih0aGlzLmNvcnJlY3RsYWJlbHMubGVuZ3RoID4gY29uZmlnLmdhbWVvdmVyLnBhZ2VXb3Jkcykge1xuICAgICAgICB0aGlzLnVwID0gdGhpcy5nYW1lLmFkZC5idXR0b24odGhpcy5nYW1lLndvcmxkLmNlbnRlclggLSA1MCwgMjQwLCAnc2Nyb2xsJywgdGhpcy51cE9uQ2xpY2ssIHRoaXMsIDAsIDApO1xuICAgICAgICB0aGlzLmRvd24gPSB0aGlzLmdhbWUuYWRkLmJ1dHRvbih0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIDUwLCAzNjAsICdzY3JvbGwnLCB0aGlzLiBkb3duT25DbGljaywgdGhpcywgMSwgMSk7XG4gICAgICAgIHRoaXMuZG93bi5hbHBoYSA9IHRoaXMuY29ycmVjdGxhYmVscy5sZW5ndGggPiBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzPyAxOiAwLjU7XG4gICAgICAgIHRoaXMudXAuYWxwaGEgPSAwLjU7XG4gICAgfVxuXG4gICAgZm9yKGkgPSAwOyBpIDwgZ2xvYmFsLmluY29ycmVjdFdvcmRzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgdmFyIGluY29ycmVjdFRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclggKyA2MCwgMjMwICsgY29uZmlnLmdhbWVvdmVyLmxpbmVTcGFjaW5nICogaSwgJycsIHtcbiAgICAgICAgICAgIGZvbnQ6ICcyMHB4ICcgKyBjb25maWcuZm9udHMubWFpbixcbiAgICAgICAgICAgIGZpbGw6ICcjMDAwJyxcbiAgICAgICAgICAgIHdvcmRXcmFwOiB0cnVlLCB3b3JkV3JhcFdpZHRoOiAzMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHdvcmRKU09OID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3dvcmRzJyk7XG4gICAgICAgIHdvcmRKU09OID0gd29yZEpTT05bZ2xvYmFsLmluY29ycmVjdFdvcmRzW2ldXTtcblxuICAgICAgICBpbmNvcnJlY3RUZXh0LnRleHQgPSB3b3JkSlNPTlsndGV4dCddICsgJyAtICcgKyB3b3JkSlNPTlsndHJhbnNsYXRpb24nXS50ZXh0O1xuICAgICAgICBpbmNvcnJlY3RUZXh0LmRhdGEuaW1hZ2UgPSAnaW1hZ2VfJyArICBnbG9iYWwuaW5jb3JyZWN0V29yZHNbaV07XG4gICAgICAgIGluY29ycmVjdFRleHQuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICBpbmNvcnJlY3RUZXh0LndvcmRXcmFwID0gdHJ1ZTtcbiAgICAgICAgaW5jb3JyZWN0VGV4dC5saW5lU3BhY2luZyA9IC0xMztcbiAgICAgICAgaW5jb3JyZWN0VGV4dC5kYXRhLnBvc2l0aW9uID0gLTE7XG4gICAgICAgIGluY29ycmVjdFRleHQuZXZlbnRzLm9uSW5wdXRPdmVyLmFkZCh0aGlzLm92ZXJMYWJlbCwgdGhpcyk7XG4gICAgICAgIGluY29ycmVjdFRleHQuZXZlbnRzLm9uSW5wdXRPdXQuYWRkKHRoaXMub3V0TGFiZWwsIHRoaXMpO1xuICAgICAgICB0aGlzLmluY29ycmVjdGxhYmVscy5wdXNoKGluY29ycmVjdFRleHQpO1xuXG4gICAgICAgIHZhciBsaXN0ZW5CdXR0b24gPSAgdGhpcy5nYW1lLmFkZC5idXR0b24odGhpcy5nYW1lLndvcmxkLmNlbnRlclggKyA0MCwgMjMwICsgY29uZmlnLmdhbWVvdmVyLmxpbmVTcGFjaW5nICogaSwgJ2xpc3RlbicsIHRoaXMubGlzdGVuT25DbGljaywgdGhpcywgMSk7XG4gICAgICAgIGxpc3RlbkJ1dHRvbi5hbmNob3Iuc2V0KDAuNSwgMCk7XG4gICAgICAgIGxpc3RlbkJ1dHRvbi5kYXRhLnNvdW5kID0gd29yZEpTT05bJ3NvdW5kVXJsJ107XG4gICAgICAgIC8vbGlzdGVuQnV0dG9uLmRhdGEuc291bmQgPSAnL2Fzc2V0cy9zb3VuZC5tcDMnO1xuICAgICAgICBpbmNvcnJlY3RUZXh0LmRhdGEuYnV0dG9uID0gbGlzdGVuQnV0dG9uO1xuICAgIH1cblxuXG4gICAgdGhpcy5oaW50ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoLTEwMDAsIDAsICdpbWFnZV8xJyk7XG4gICAgdGhpcy5tb3JlID0gdHJ1ZTtcblxufTtcblxuR2FtZW92ZXJTdGF0ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKHRoaXMubW9yZSlcbiAgICAgICAgaWYodGhpcy5oaW50LnggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpbnQueCA9IHRoaXMuZ2FtZS5pbnB1dC54O1xuICAgICAgICAgICAgdGhpcy5oaW50LnkgPSB0aGlzLmdhbWUuaW5wdXQueTtcbiAgICAgICAgfVxuXG4gICAgaWYgKHRoaXMuaW5wdXQua2V5Ym9hcmQuZG93bkR1cmF0aW9uKFBoYXNlci5LZXlib2FyZC5TUEFDRUJBUiwgMTApKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uT25DbGljaygpO1xuICAgIH1cbn07XG5cbkdhbWVvdmVyU3RhdGUucHJvdG90eXBlLm92ZXJMYWJlbCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYoKGl0ZW0uZGF0YS5wb3NpdGlvbiA+PSB0aGlzLnNjcm9sbFBvc2l0aW9uICYmIGl0ZW0uZGF0YS5wb3NpdGlvbiA8IHRoaXMuc2Nyb2xsUG9zaXRpb24gKyBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzKSB8fCBpdGVtLmRhdGEucG9zaXRpb24gPCAwICkge1xuICAgICAgICB0aGlzLmhpbnQubG9hZFRleHR1cmUoaXRlbS5kYXRhLmltYWdlKTtcbiAgICAgICAgdGhpcy5oaW50LnggPSB0aGlzLmdhbWUuaW5wdXQueDtcbiAgICAgICAgdGhpcy5oaW50LnkgPSB0aGlzLmdhbWUuaW5wdXQueTtcbiAgICB9XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5vdXRMYWJlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmhpbnQueCA9IC0gMTAwMDtcbn07XG5cbkdhbWVvdmVyU3RhdGUucHJvdG90eXBlLnVwT25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZih0aGlzLnNjcm9sbFBvc2l0aW9uID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ycmVjdGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmNvcnJlY3RsYWJlbHNbaV07XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHQpLnRvKHt5OiAnKycgKyBjb25maWcuZ2FtZW92ZXIubGluZVNwYWNpbmcgKiBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzfSwgMjAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMCwgMCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHQuZGF0YS5idXR0b24pLnRvKHt5OiAnKycgKyBjb25maWcuZ2FtZW92ZXIubGluZVNwYWNpbmcgKiBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzfSwgMjAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiAtPSBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzO1xuICAgICAgICBpZih0aGlzLnNjcm9sbFBvc2l0aW9uID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVwLmFscGhhID0gMC41O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG93bi5hbHBoYSA9IHRoaXMuY29ycmVjdGxhYmVscy5sZW5ndGggPiBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzO1xuICAgIH1cbn07XG5cbkdhbWVvdmVyU3RhdGUucHJvdG90eXBlLmRvd25PbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKHRoaXMuc2Nyb2xsUG9zaXRpb24gKyBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzIDwgdGhpcy5jb3JyZWN0bGFiZWxzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29ycmVjdGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmNvcnJlY3RsYWJlbHNbaV07XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHQpLnRvKHt5OiAnLScgKyBjb25maWcuZ2FtZW92ZXIubGluZVNwYWNpbmcgKiBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzfSwgMjAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMCwgMCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHQuZGF0YS5idXR0b24pLnRvKHt5OiAnLScgKyBjb25maWcuZ2FtZW92ZXIubGluZVNwYWNpbmcgKiBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzfSwgMjAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMCwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiArPSBjb25maWcuZ2FtZW92ZXIucGFnZVdvcmRzO1xuICAgICAgICBpZih0aGlzLnNjcm9sbFBvc2l0aW9uICsgY29uZmlnLmdhbWVvdmVyLnBhZ2VXb3JkcyA+IHRoaXMuY29ycmVjdGxhYmVscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZG93bi5hbHBoYSA9IDAuNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwLmFscGhhID0gMTtcbiAgICB9XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5vdmVyUGxheUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuYnV0dG9uLnNjYWxlKS50byh7eDogMS4xLCB5OiAxLjF9LCAyMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbn07XG5cbkdhbWVvdmVyU3RhdGUucHJvdG90eXBlLm91dFBsYXlCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmJ1dHRvbi5zY2FsZSkudG8oe3g6IDEsIHk6IDF9LCAyMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbn07XG5cbkdhbWVvdmVyU3RhdGUucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uIChwb3B1cFdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmJhY2tncm91bmQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuYmFja2dyb3VuZC5wb3B1cFdpZHRoID0gcG9wdXBXaWR0aDtcbn07XG5cbkdhbWVvdmVyU3RhdGUucHJvdG90eXBlLmNyZWF0ZUxhYmVscyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVzdWx0MUxhYmVsID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYIC0gOTAsIGNvbmZpZy5nYW1lb3Zlci5wb3B1cFRvcCArIDExMCwgJ9CS0LXRgNC90L5cXG4gJysgZ2xvYmFsLmNvcnJlY3RXb3Jkcy5sZW5ndGgsIHtcbiAgICAgICAgZm9udDogJzMwcHggJyArIGNvbmZpZy5mb250cy5tYWluLFxuICAgICAgICBmaWxsOiAnIzQyYjA0MicsIGFsaWduOiBcImNlbnRlclwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlc3VsdDFMYWJlbC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXG4gICAgdGhpcy5yZXN1bHQyTGFiZWwgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclggKyA5MCwgY29uZmlnLmdhbWVvdmVyLnBvcHVwVG9wICsgMTEwLCAn0J/QvtCy0YLQvtGA0LjRgtGMXFxuICcgKyBnbG9iYWwuaW5jb3JyZWN0V29yZHMubGVuZ3RoLCB7XG4gICAgICAgIGZvbnQ6ICczMHB4ICcgKyBjb25maWcuZm9udHMubWFpbixcbiAgICAgICAgZmlsbDogJyNjODM2MzYnLCBhbGlnbjogXCJjZW50ZXJcIlxuXG4gICAgfSk7XG4gICAgdGhpcy5yZXN1bHQyTGFiZWwuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcblxuICAgIC8vIHRoaXMucGxheUxhYmVsID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCA0MjAsICfQmNCz0YDQsNGC0YwnLCB7XG4gICAgLy8gICAgIGZvbnQ6ICcyMHB4ICcgKyBjb25maWcuZm9udHMubWFpbixcbiAgICAvLyAgICAgZmlsbDogJyMwMDAnXG4gICAgLy8gfSk7XG4gICAgLy8gdGhpcy5wbGF5TGFiZWwuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICAvLyB0aGlzLnBsYXlMYWJlbC5hbGlnblRvKHRoaXMuYnV0dG9uLCBQaGFzZXIuQk9UVE9NX0NFTlRFUiwgMCwgNSk7XG59O1xuXG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5jcmVhdGVNZXRlb3JpdGVzID0gY3JlYXRlTWV0ZW9yaXRlcztcbkdhbWVvdmVyU3RhdGUucHJvdG90eXBlLmhpZGVNZXRlb3JpdGVzID0gYW5pbWF0ZU1ldGVvcml0ZXM7XG5HYW1lb3ZlclN0YXRlLnByb3RvdHlwZS5tYWtlQmFja2dyb3VuZCA9IG1ha2VCYWNrZ3JvdW5kO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTGFGdXQgb24gMTguMDUuMjAxNy5cbiAqL1xuXG52YXIgSW5pdEdhbWVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbn07XG5cblxuXG5Jbml0R2FtZVN0YXRlLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQudGlsZVNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCwgMTQwMCwgMTAxODIsICAnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5hbmNob3Iuc2V0KDAuNSwgMSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnNjYWxlLnNldCh0aGlzLmdhbWUud29ybGQud2lkdGggLyAxMTAwKTtcbiAgICB2YXIgdDEgPSB3b3Jkcy5zbGljZSgpLFxuICAgICAgICB0MiA9IGNvbmZpZy5iYXNlV29yZHMuc2xpY2UoKTtcbiAgICB2YXIgaWRzID0gJzEyMyc7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8PSA1NSA7IGkrKykge1xuICAgICAgICBpZih0MS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZHMgKz0gJywnICsgdDEucmFuZG9tRWxlbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYodDIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBpZHMgKz0gJywnICsgdDIucmFuZG9tRWxlbWVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd3b3JkcycsICcvL2RpY3Rpb25hcnkuc2t5ZW5nLnJ1L2FwaS9wdWJsaWMvdjEvbWVhbmluZ3M/aWRzPScgKyBpZHMpO1xufTtcblxuSW5pdEdhbWVTdGF0ZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncGxheScpO1xufTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IExhRnV0IG9uIDE3LjA1LjIwMTcuXG4gKi9cblxudmFyIExvYWRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFzc2V0cyA9IHtcbiAgICAgICAgJ2VhcnRoJzogJ2Fzc2V0cy9pbWcvZWFydGgucG5nJyxcbiAgICAgICAgJ2Nhbm9uJzogJ2Fzc2V0cy9pbWcvY2Fubm9uLnBuZycsXG4gICAgICAgICdwbGF0Zm9ybSc6ICdhc3NldHMvaW1nL2Nhbm5vbl9kb3duLnBuZycsXG4gICAgICAgICdtZXRlb3JfbGlnaHQnOiAnYXNzZXRzL2ltZy9tZXRlb3JfbGlnaHRfYmFjay5wbmcnLFxuICAgICAgICAnbWV0ZW9yMSc6ICdhc3NldHMvaW1nL21ldGVvcl8xLnBuZycsXG4gICAgICAgICdtZXRlb3IyJzogJ2Fzc2V0cy9pbWcvbWV0ZW9yXzIucG5nJyxcbiAgICAgICAgJ21ldGVvcjMnOiAnYXNzZXRzL2ltZy9tZXRlb3JfMy5wbmcnLFxuICAgICAgICAnbWV0ZW9yNCc6ICdhc3NldHMvaW1nL21ldGVvcl80LnBuZycsXG4gICAgICAgICdtbWV0ZW9yMSc6ICdhc3NldHMvaW1nL21ldF9tZW51MS5wbmcnLFxuICAgICAgICAnbW1ldGVvcjInOiAnYXNzZXRzL2ltZy9tZXRfbWVudTIucG5nJyxcbiAgICAgICAgJ21tZXRlb3IzJzogJ2Fzc2V0cy9pbWcvbWV0X21lbnUzLnBuZycsXG4gICAgICAgICdtbWV0ZW9yNCc6ICdhc3NldHMvaW1nL21ldF9tZW51NC5wbmcnLFxuICAgICAgICAnbW1ldGVvcjUnOiAnYXNzZXRzL2ltZy9tZXRfbWVudTUucG5nJyxcbiAgICAgICAgJ21tZXRlb3I2JzogJ2Fzc2V0cy9pbWcvbWV0X21lbnU2LnBuZycsXG4gICAgICAgICdtbWV0ZW9yNyc6ICdhc3NldHMvaW1nL21ldF9tZW51Ny5wbmcnLFxuICAgICAgICAnbW1ldGVvcjgnOiAnYXNzZXRzL2ltZy9tZXRfbWVudTgucG5nJyxcbiAgICAgICAgJ2JlYW0nOiAnYXNzZXRzL2ltZy9zaG9vdF9saWdodC5wbmcnLFxuICAgICAgICAnYmVhbV9saWdodCc6ICdhc3NldHMvaW1nL3Nob290X2xpZ2h0XzEucG5nJyxcbiAgICAgICAgJ2J1dHRvbic6ICdhc3NldHMvaW1nL2JfcGxheS5wbmcnLFxuICAgICAgICAnbW9yZSc6ICdhc3NldHMvaW1nL2JfbW9yZS5wbmcnLFxuICAgICAgICAnbGlzdGVuJzogJ2Fzc2V0cy9pbWcvYl9saXN0ZW4ucG5nJyxcbiAgICAgICAgJ3N0YXIxJzogJ2Fzc2V0cy9pbWcvc3Rhcl9saWdodC5wbmcnLFxuICAgICAgICAnc3RhcjInOiAnYXNzZXRzL2ltZy9zdGFyX2RhcmsucG5nJyxcbiAgICAgICAgJ3N0YXIzJzogJ2Fzc2V0cy9pbWcvc3Rhcl9jaXJjbGUucG5nJyxcbiAgICAgICAgJ2NvbnRyb2wxJzogJ2Fzc2V0cy9pbWcvc3RhcnRfdHh0X2NvbnRyb2xzMS5wbmcnLFxuICAgICAgICAnY29udHJvbDInOiAnYXNzZXRzL2ltZy9zdGFydF90eHRfY29udHJvbHMyLnBuZycsXG4gICAgICAgICd6b25kJzogJ2Fzc2V0cy9pbWcvbWV0ZW96b25kLnBuZycsXG4gICAgICAgICdwbGFpbic6ICdhc3NldHMvaW1nL2FpcnBsYW5lLnBuZycsXG4gICAgICAgICdmYWxsJzogJ2Fzc2V0cy9pbWcvbWV0ZW9yaXRlLnBuZycsXG4gICAgICAgICdtb29uJzogJ2Fzc2V0cy9pbWcvbW9vbi5wbmcnLFxuICAgICAgICAndmVudXMnOiAnYXNzZXRzL2ltZy92ZW51cy5wbmcnLFxuICAgICAgICAnbWFycyc6ICdhc3NldHMvaW1nL21hcnMucG5nJyxcbiAgICAgICAgJ3BsYW5ldDknOiAnYXNzZXRzL2ltZy9wbGFuZXQtc21hbGxfOS5wbmcnLFxuICAgICAgICAnaGVhcnRfcmVkJzogJ2Fzc2V0cy9pbWcvaGVhcnRfcmVkLnBuZycsXG4gICAgICAgICdoZWFydF9ibGFjayc6ICdhc3NldHMvaW1nL2hlYXJ0X2JsYWNrLnBuZycsXG4gICAgICAgICdjb21ldCc6ICdhc3NldHMvaW1nL2NvbWV0LnBuZycsXG4gICAgICAgICdzYXR1cm4nOiAnYXNzZXRzL2ltZy9zYXR1cm4ucG5nJyxcbiAgICAgICAgJ2JhY2snOiAnYXNzZXRzL2ltZy9iX2Nsb3NlLnBuZydcbiAgICB9O1xufTtcblxuXG5Mb2FkU3RhdGUucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC50aWxlU3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0LCAxNDAwLCAxMDE4MiwgICdiYWNrZ3JvdW5kJyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmFuY2hvci5zZXQoMC41LCAxKTtcbiAgICB0aGlzLmJhY2tncm91bmQuc2NhbGUuc2V0KHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIDExMDApO1xuXG4gICAgdmFyIGxvYWRpbmdMYWJlbCA9IHRoaXMuZ2FtZS5hZGQudGV4dChnYW1lLndvcmxkLmNlbnRlclgsIDM1MCwgJ9CX0LDQs9GA0YPQt9C60LAuLi4nLCB7XG4gICAgICAgIGZvbnQ6ICczMHB4IE9wZW4gU2FucycsXG4gICAgICAgIGZpbGw6ICcjZmZmZmZmJ1xuICAgIH0pO1xuICAgIGxvYWRpbmdMYWJlbC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXG4gICAgZm9yKGtleSBpbiB0aGlzLmFzc2V0cykge1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXksIHRoaXMuYXNzZXRzW2tleV0pO1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdleHBsb2RlJywgJ2Fzc2V0cy9pbWcvbWV0ZW9yX2V4cGxvc2lvbi5wbmcnLCA0MzMsIDQzMywgOSk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2hvbG9ncmFtJywgJ2Fzc2V0cy9pbWcvbWV0ZW9yX2hvbG9ncmFtLnBuZycsIDQzMywgNDMzLCAxMCk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3RleHRfYmxvY2tzJywgJ2Fzc2V0cy9pbWcvY2Fubm9uX2Rvd25fdHh0X2NvbnRhaW5lci5wbmcnLCAyMywgNDksIDMpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdzY3JvbGwnLCAnYXNzZXRzL2ltZy9iX3Njcm9sbC5wbmcnLCA1NSwgNTUsIDIpO1xuXG59O1xuXG5Mb2FkU3RhdGUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTGFGdXQgb24gMTcuMDUuMjAxNy5cbiAqL1xuXG52YXIgTWVudVN0YXRlID0gZnVuY3Rpb24gKCkge1xufTtcblxuTWVudVN0YXRlLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKCkge1xuXG59O1xuXG5NZW51U3RhdGUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1ldGVvcml0ZXMgPSBbXTtcblxuICAgIHRoaXMubWFrZUJhY2tncm91bmQoY29uZmlnLm1lbnUpO1xuXG4gICAgdGhpcy5wb3B1cCA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3ModGhpcy5nYW1lLndvcmxkLmNlbnRlclggLSBjb25maWcubWVudS5wb3B1cFdpZHRoIC8yLCBjb25maWcubWVudS5wb3B1cFRvcCk7XG4gICAgdGhpcy5wb3B1cC5hbmNob3Iuc2V0KDAuNSk7XG4gICAgdGhpcy5wb3B1cC5iZWdpbkZpbGwoMHhGRkZGRkYpO1xuICAgIHRoaXMucG9wdXAubGluZVN0eWxlKDQsIDB4ZGRkZGRkLCAwLjgpO1xuXG4gICAgdGhpcy5wb3B1cC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgY29uZmlnLm1lbnUucG9wdXBXaWR0aCwgY29uZmlnLm1lbnUucG9wdXBIZWlnaHQsIDgpO1xuXG4gICAgdGhpcy5idXR0b24gPSB0aGlzLmdhbWUuYWRkLmJ1dHRvbih0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgY29uZmlnLm1lbnUucG9wdXBCb3R0b20gKyAxMjAsICdidXR0b24nLCB0aGlzLmFjdGlvbk9uQ2xpY2ssIHRoaXMsIDEpO1xuICAgIHRoaXMuYnV0dG9uLmFuY2hvci5zZXQoMC41LCAwLjUpO1xuXG5cbiAgICB0aGlzLmNyZWF0ZU1ldGVvcml0ZXMoY29uZmlnLm1lbnUpO1xuICAgIHRoaXMuY3JlYXRlTGFiZWxzKCk7XG5cblxuICAgIHRoaXMuYnV0dG9uLm9uSW5wdXRPdmVyLmFkZCh0aGlzLm92ZXJQbGF5QnV0dG9uLCB0aGlzKTtcbiAgICB0aGlzLmJ1dHRvbi5vbklucHV0T3V0LmFkZCh0aGlzLm91dFBsYXlCdXR0b24sIHRoaXMpO1xuICAgIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXlDYXB0dXJlKFtcbiAgICAgICAgUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSICAgIC8vL2h0dHBzOi8vY29kZXBlbi5pby9hbm9uL3Blbi9aS1ZFTnBcbiAgICBdKTtcblxufTtcblxuXG5NZW51U3RhdGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuU1BBQ0VCQVIpKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uT25DbGljaygpO1xuICAgIH1cbn07XG5cbk1lbnVTdGF0ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdpbml0Z2FtZScpO1xufTtcblxuTWVudVN0YXRlLnByb3RvdHlwZS5hY3Rpb25PbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5uYW1lTGFiZWwpLnRvKHthbHBoYTogMH0sIDI1MCxQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgLy8gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnJ1bGVzTGFiZWwpLnRvKHthbHBoYTogMH0sIDI1MCxQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnJlc3VsdDFMYWJlbCkudG8oe2FscGhhOiAwfSwgMjUwLFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheUxhYmVsKS50byh7YWxwaGE6IDB9LCAyNTAsUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5idXR0b24pLnRvKHthbHBoYTogMH0sIDI1MCxQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmNvbnRyb2xMYWJlbCkudG8oe2FscGhhOiAwfSwgMjUwLFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuY29udHJvbExhYmVsMikudG8oe2FscGhhOiAwfSwgMjUwLFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuY29udHJvbExhYmVsMykudG8oe2FscGhhOiAwfSwgMjUwLFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuY29udHJvbExhYmVsNCkudG8oe2FscGhhOiAwfSwgMjUwLFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuY29udHJvbExhYmVsNSkudG8oe2FscGhhOiAwfSwgMjUwLFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcblxuICAgIHRoaXMuaGlkZU1ldGVvcml0ZXMoKTtcblxuICAgIHZhciBwID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnBvcHVwKS50byh7eDogdGhpcy5nYW1lLndvcmxkLmNlbnRlclggLSAxMCwgeTogMjAwLCB3aWR0aDogMjAsIGhlaWdodDogNH0sIDgwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuTm9uZSwgZmFsc2UsIDUwLCAwLCBmYWxzZSk7XG4gICAgcC5vbkNvbXBsZXRlLmFkZCh0aGlzLnN0YXJ0R2FtZSwgdGhpcyk7XG4gICAgcC5zdGFydCgpO1xufTtcblxuXG5NZW51U3RhdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbn07XG5cbk1lbnVTdGF0ZS5wcm90b3R5cGUuc3RhcnRHYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnaW5pdGdhbWUnKTtcbn07XG5cbk1lbnVTdGF0ZS5wcm90b3R5cGUub3ZlclBsYXlCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmJ1dHRvbi5zY2FsZSkudG8oe3g6IDEuMSwgeTogMS4xfSwgMjAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5Ob25lLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG59O1xuXG5NZW51U3RhdGUucHJvdG90eXBlLm91dFBsYXlCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmJ1dHRvbi5zY2FsZSkudG8oe3g6IDEsIHk6IDF9LCAyMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLk5vbmUsIHRydWUsIDAsIDAsIGZhbHNlKTtcbn07XG5cbk1lbnVTdGF0ZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKHBvcHVwV2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLnBvcHVwV2lkdGggPSBwb3B1cFdpZHRoO1xufTtcblxuTWVudVN0YXRlLnByb3RvdHlwZS5jcmVhdGVMYWJlbHMgPSBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubmFtZUxhYmVsID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCBjb25maWcubWVudS5wb3B1cFRvcCArIDUwLCAn0JzQtdGC0LXQvtGA0LjRgtC90YvQuSDQtNC+0LbQtNGMJywge1xuICAgICAgICBmb250OiAnMzhweCAnICsgY29uZmlnLmZvbnRzLnRpdGxlLFxuICAgICAgICBmaWxsOiAnIzAwNDQ4OCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgIH0pO1xuICAgIHRoaXMubmFtZUxhYmVsLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5uYW1lTGFiZWwuc2V0U2hhZG93KDMsIDIsICcjMDBhYWFhJywgMyk7XG5cblxuICAgLyogdGhpcy5ydWxlc0xhYmVsID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCBjb25maWcubWVudS5wb3B1cFRvcCArIDEyMCwgJ9Cf0YDQsNCy0LjQu9CwJywge1xuICAgICAgICBmb250OiAnMjVweCAnICsgY29uZmlnLmZvbnRzLm1haW4sXG4gICAgICAgIGZpbGw6ICcjMDA0NDg4JyxcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnXG4gICAgfSk7XG4gICAgdGhpcy5ydWxlc0xhYmVsLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7Ki9cblxuICAgIHRoaXMucmVzdWx0MUxhYmVsID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCBjb25maWcubWVudS5wb3B1cFRvcCArIDE1MCwgJ9Cf0LXRgNC10LzQtdGJ0LDQudGC0LUg0L/Rg9GI0LrRgywg0YPQvdC40YfRgtC+0LbQsNC50YLQtVxcbtC80LXRgtC10L7RgNC40YLRiyDRgSDQv9GA0LDQstC40LvRjNC90YvQvCDQv9C10YDQtdCy0L7QtNC+0Lwg0LhcXG7Qv9C+0LvRg9GH0LDQudGC0LUg0LHQsNC70LvRiycsIHtcbiAgICAgICAgZm9udDogJzI0cHggJyArIGNvbmZpZy5mb250cy5tYWluLFxuICAgICAgICBmaWxsOiAnIzAwNDQ4OCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgIH0pO1xuICAgIHRoaXMucmVzdWx0MUxhYmVsLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG5cbiAgICB0aGlzLnBsYXlMYWJlbCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgNDIwLCAn0JjQs9GA0LDRgtGMJywge1xuICAgICAgICBmb250OiAnMjBweCAnICsgY29uZmlnLmZvbnRzLm1haW4sXG4gICAgICAgIGZpbGw6ICcjMzMzJ1xuICAgIH0pO1xuICAgIHRoaXMucGxheUxhYmVsLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5wbGF5TGFiZWwuYWxpZ25Ubyh0aGlzLmJ1dHRvbiwgUGhhc2VyLkJPVFRPTV9DRU5URVIsIDAsIDUpO1xuXG4gICAgdGhpcy5jb250cm9sTGFiZWwgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSAzMDAsICfQo9C/0YDQsNCy0LvQtdC90LjQtScsIHtcbiAgICAgICAgZm9udDogJzIwcHggJyArIGNvbmZpZy5mb250cy5tYWluLFxuICAgICAgICBmaWxsOiAnIzMzMydcbiAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2xMYWJlbC5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuXG4gICAgdGhpcy5jb250cm9sTGFiZWwyID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYIC0gMTUwLCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gMjEwLCAn0J/QtdGA0LXQtNCy0LjQttC10L3QuNC1INC/0YPRiNC60Lgg4oCTXFxuINGB0YLRgNC10LvQutC4INCy0L/RgNCw0LLQvi3QstC70LXQstC+Jywge1xuICAgICAgICBmb250OiAnMTVweCAnICsgY29uZmlnLmZvbnRzLm1haW4sXG4gICAgICAgIGZpbGw6ICcjZmZmZmZmJ1xuICAgIH0pO1xuICAgIHRoaXMuY29udHJvbExhYmVsMi5hbmNob3Iuc2V0VG8oMC41LCAwKTtcblxuICAgIHRoaXMuY29udHJvbExhYmVsMyA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCArIDE1MCwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIDIxMCwgJ9CS0YvRgdGC0YDQtdC7INC/0YDQvtCx0LXQuycsIHtcbiAgICAgICAgZm9udDogJzE1cHggJyArIGNvbmZpZy5mb250cy5tYWluLFxuICAgICAgICBmaWxsOiAnI2ZmZmZmZidcbiAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2xMYWJlbDMuYW5jaG9yLnNldFRvKDAuNSwgMCk7XG4gICAgdGhpcy5jb250cm9sTGFiZWw0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclggLSAxNTAsIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSAyMjAsICdjb250cm9sMScpO1xuICAgIHRoaXMuY29udHJvbExhYmVsNC5hbmNob3Iuc2V0VG8oMC41LCAxKTtcbiAgICB0aGlzLmNvbnRyb2xMYWJlbDUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCArIDE1MCwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIDIyMCwgJ2NvbnRyb2wyJyk7XG4gICAgdGhpcy5jb250cm9sTGFiZWw1LmFuY2hvci5zZXRUbygwLjUsIDEpO1xufTtcblxuTWVudVN0YXRlLnByb3RvdHlwZS5jcmVhdGVNZXRlb3JpdGVzID0gY3JlYXRlTWV0ZW9yaXRlcztcbk1lbnVTdGF0ZS5wcm90b3R5cGUuaGlkZU1ldGVvcml0ZXMgPSBhbmltYXRlTWV0ZW9yaXRlcztcbk1lbnVTdGF0ZS5wcm90b3R5cGUubWFrZUJhY2tncm91bmQgPSBtYWtlQmFja2dyb3VuZDtcblxuIiwiLyoqXG4vKipcbiAqIENyZWF0ZWQgYnkgTGFGdXQgb24gMTcuMDUuMjAxNy5cbiAqL1xuXG52YXIgUGxheVN0YXRlID0gZnVuY3Rpb24oZ2FtZSkge1xuXG59O1xuXG5QbGF5U3RhdGUucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbigpIHtcblxuXG59O1xuXG5QbGF5U3RhdGUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmdhbWUuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XG5cbiAgICB0aGlzLm1ha2VCYWNrZ3JvdW5kID0gbWFrZUJhY2tncm91bmQ7XG5cbiAgICB0aGlzLnN0ZXAgPSB0aGlzLmdhbWUud2lkdGgvNTtcbiAgICB0aGlzLm1ldGVvclNwcml0ZXMgPSBbXTtcbiAgICB0aGlzLmZsYXJlU3ByaXRlcyA9IFtdO1xuICAgIHRoaXMud29yZExhYmVscyA9IFtdO1xuICAgIHRoaXMuaGVhcnRzID0gW107XG4gICAgdGhpcy5jcmVhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgZ2xvYmFsLmNvcnJlY3RXb3Jkcy5sZW5ndGggPSAwO1xuICAgIGdsb2JhbC5pbmNvcnJlY3RXb3Jkcy5sZW5ndGggPSAwO1xuXG4gICAgLy/QvdGD0LbQvdC+INGA0LDQt9C00LLQuNC90YPRgtGMINC80LjRgCDQtNC70Y8g0YLQvtCz0L4g0YfRgtC+0LHRiyDRgtGA0Y/RgdGC0Lgg0LXQs9C+XG4gICAgdmFyIG1hcmdpbiA9IDE1O1xuICAgIHZhciB4ID0gLW1hcmdpbjtcbiAgICB2YXIgeSA9IC1tYXJnaW47XG4gICAgdmFyIHcgPSB0aGlzLmdhbWUud29ybGQud2lkdGggKyBtYXJnaW4gKiAyO1xuICAgIHZhciBoID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCArIG1hcmdpbiAqIDI7XG4gICAgdGhpcy5nYW1lLndvcmxkLnNldEJvdW5kcyh4LCB5LCB3LCBoKTtcbiAgICB0aGlzLmdhbWUud29ybGQuY2FtZXJhLnBvc2l0aW9uLnNldCgwKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gMjtcbiAgICB0aGlzLmd1bnBvc3RpdGlvbiA9IDI7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5saWZlcyA9IDU7XG4gICAgdGhpcy53b3JkID0gMDtcbiAgICB0aGlzLnNwZWVGYWN0b3IgPSAxO1xuICAgIHRoaXMuY2hhbmdlUG9zaXRpb24gPSBmYWxzZTtcblxuICAgIHRoaXMubWFrZUJhY2tncm91bmQoY29uZmlnLnBsYXkpO1xuXG4gICAgdGhpcy5tZXRlb3JzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuXG4gICAgdGhpcy5wbGF0Zm9ybSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLmdhbWUuaGVpZ2h0LCAncGxhdGZvcm0nKTtcbiAgICB0aGlzLnBsYXRmb3JtLmFuY2hvci5zZXQoMC41LCAxKTtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5wbGF0Zm9ybS53aWR0aDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLndpZHRoIC8gNTtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWCAtIHRoaXMud2lkdGggLyAyO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZSh0aGlzLnBsYXRmb3JtLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIHRoaXMucGxhdGZvcm0uaW1tb3ZhYmxlID0gdHJ1ZTtcblxuICAgIHRoaXMuYmVhbSA9IGdhbWUuYWRkLndlYXBvbigxLCAnYmVhbScpO1xuICAgIHRoaXMuYmVhbS5idWxsZXRLaWxsVHlwZSA9IFBoYXNlci5XZWFwb24uS0lMTF9DQU1FUkFfQk9VTkRTO1xuICAgIHRoaXMuYmVhbS5idWxsZXRBbmdsZU9mZnNldCA9IDkwO1xuICAgIHRoaXMuYmVhbS5idWxsZXRTcGVlZCA9IGNvbmZpZy5wbGF5LmJlYW1TcGVlZDtcblxuICAgIHRoaXMuY2Fub24gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSggdGhpcy5sZWZ0ICsgdGhpcy5zdGVwICogdGhpcy5wb3NpdGlvbiwgdGhpcy5nYW1lLmhlaWdodCAtIHRoaXMucGxhdGZvcm0uaGVpZ2h0ICsgMjUsICdjYW5vbicpO1xuICAgIHRoaXMuY2Fub24uYW5jaG9yLnNldFRvKDAuNSwgMSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKHRoaXMuY2Fub24sIFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgdGhpcy5iZWFtLnRyYWNrU3ByaXRlKHRoaXMuY2Fub24sIDAsIC0xNDApO1xuXG4gICAgdGhpcy5jcmVhdGVUZXh0QmxvY2tzKCk7XG4gICAgdGhpcy5jcmVhdGVIZWFydHMoKTtcbiAgICB0aGlzLmNyZWF0ZU1ldGVvcml0ZXMoKTtcblxuICAgIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXlDYXB0dXJlKFtcbiAgICAgICAgUGhhc2VyLktleWJvYXJkLkxFRlQsXG4gICAgICAgIFBoYXNlci5LZXlib2FyZC5SSUdIVCxcbiAgICAgICAgUGhhc2VyLktleWJvYXJkLlNQQUNFQkFSICAgIC8vL2h0dHBzOi8vY29kZXBlbi5pby9hbm9uL3Blbi9aS1ZFTnBcbiAgICBdKTtcblxuICAgIHRoaXMuZ2FtZS5sb2FkLnN0YXJ0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy50aW1lciA9IHRoaXMudGltZS50b3RhbEVsYXBzZWRTZWNvbmRzKCk7XG59O1xuXG5cblBsYXlTdGF0ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICBpZighdGhpcy5pbml0aWFsaXplZClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5iZWFtLmJ1bGxldHMsIHRoaXMubWV0ZW9ycywgdGhpcy5iZWFtTWV0ZW9ySGl0LCBudWxsLCB0aGlzKTtcblxuICAgIHRoaXMudXBkYXRlU3BlZWQoKTtcblxuICAgIHRoaXMuc2NvcmVMYWJlbC50ZXh0ICA9IHRoaXMuc2NvcmU7XG4gICAgLy90aGlzLmxpZmVzTGFiZWwudGV4dCAgPSAn0JbQuNC30L3QuDogJyArIHRoaXMubGlmZXM7XG5cbiAgICBpZih0aGlzLmNyZWF0ZWQpIHtcbiAgICAgICAgaWYodGhpcy5tZXRlb3JTcHJpdGVzWzFdLnkgPiB0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gNDYwKSB7XG4gICAgICAgICAgICB0aGlzLmRvd25NZXRlb3JpdGVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IodmFyIGk9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5tZXRlb3JTcHJpdGVzW2ldO1xuICAgICAgICAgICAgdmFyIGRlbHRhID0gKHRoaXMudGltZS50b3RhbEVsYXBzZWRTZWNvbmRzKCkgLSBtLmFjY3VtKSAqIHRoaXMuc3BlZUZhY3RvciAqIGNvbmZpZy5wbGF5LmdyYXZpdHk7XG4gICAgICAgICAgICBtLnkgKz0gZGVsdGE7XG4gICAgICAgICAgICBtLndvcmRMYWJlbC55ICs9IGRlbHRhO1xuICAgICAgICAgICAgbS5mbGFyZS55ICs9IGRlbHRhO1xuICAgICAgICAgICAgbS5hY2N1bSA9IHRoaXMudGltZS50b3RhbEVsYXBzZWRTZWNvbmRzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIG5lZWRQb3NpdGlvbiwgbW92ZTtcbiAgICBpZighdGhpcy5jaGFuZ2VQb3NpdGlvbikge1xuXG4gICAgICAgIGlmICh0aGlzLmlucHV0LmtleWJvYXJkLmlzRG93bihQaGFzZXIuS2V5Ym9hcmQuTEVGVCkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucG9zaXRpb24gPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQb3NpdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi0tO1xuICAgICAgICAgICAgICAgIG5lZWRQb3NpdGlvbiA9IHRoaXMubGVmdCArIHRoaXMuc3RlcCAqIHRoaXMucG9zaXRpb247XG4gICAgICAgICAgICAgICAgbW92ZSA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5jYW5vbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKHt4OiBuZWVkUG9zaXRpb259LCBjb25maWcucGxheS5tb3ZlVGltZSwgUGhhc2VyLkVhc2luZy5MaW5lYXIuSW4sIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YodGhpcy5jYW5vbmltYWdlbWFzaykgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmNhbm9uaW1hZ2VtYXNrKS50byh7eDogbmVlZFBvc2l0aW9ufSwgY29uZmlnLnBsYXkubW92ZVRpbWUsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vdmUub25Db21wbGV0ZS5hZGQodGhpcy5zdG9wQ2Fub24sIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dC5rZXlib2FyZC5pc0Rvd24oUGhhc2VyLktleWJvYXJkLlJJR0hUKSkge1xuICAgICAgICAgICAgaWYodGhpcy5wb3NpdGlvbiA8IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gTWF0aC5taW4oNCwgKyt0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBuZWVkUG9zaXRpb24gPSB0aGlzLmxlZnQgKyB0aGlzLnN0ZXAgKiB0aGlzLnBvc2l0aW9uO1xuXG4gICAgICAgICAgICAgICAgbW92ZSA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5jYW5vbilcbiAgICAgICAgICAgICAgICAgICAgLnRvKHt4OiBuZWVkUG9zaXRpb259LCBjb25maWcucGxheS5tb3ZlVGltZSwgUGhhc2VyLkVhc2luZy5MaW5lYXIuSW4sIHRydWUsIDAsIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YodGhpcy5jYW5vbmltYWdlbWFzaykgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmNhbm9uaW1hZ2VtYXNrKS50byh7eDogbmVlZFBvc2l0aW9ufSwgY29uZmlnLnBsYXkubW92ZVRpbWUsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vdmUub25Db21wbGV0ZS5hZGQodGhpcy5zdG9wQ2Fub24sIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXQua2V5Ym9hcmQuaXNEb3duKFBoYXNlci5LZXlib2FyZC5TUEFDRUJBUikgJiYgdGhpcy5jcmVhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVCZWFtKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0eXBlb2YodGhpcy5jYW5vbmltYWdlbWFzaykgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jYW5vbmltYWdlbWFzay5hbGlnbkluKHRoaXMuY2Fub24sIFBoYXNlci5UT1BfQ0VOVEVSLCAzLCAtNDgpO1xuICAgIH1cblxuXG4gICAgdGhpcy51cGRhdGVCYWNrKCk7XG4gICAgdGhpcy50aW1lciA9IHRoaXMudGltZS50b3RhbEVsYXBzZWRTZWNvbmRzKCk7XG59O1xuXG5QbGF5U3RhdGUucHJvdG90eXBlLnN0b3BDYW5vbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2hhbmdlUG9zaXRpb24gPSBmYWxzZTtcbn07XG5cblxuUGxheVN0YXRlLnByb3RvdHlwZS5maXJlQmVhbSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmKCF0aGlzLmZpcmVkKSB7XG4gICAgICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJlYW0uZmlyZSgpO1xuXG4gICAgICAgIHZhciBiZWFtID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5jYW5vbi54LCB0aGlzLmNhbm9uLnkgLSAxOTUsICdiZWFtX2xpZ2h0Jyk7XG4gICAgICAgIGJlYW0uYW5jaG9yLnNldCgwLjUsIDEpO1xuICAgICAgICB2YXIgZGlzdCA9ICh0aGlzLnBvc2l0aW9uID09PSB0aGlzLmNvcnJlY3RXb3JkKT8gICh0aGlzLmNhbm9uLnkgLSAyMDAgLSB0aGlzLm1ldGVvclNwcml0ZXNbMF0ueSAtIHRoaXMubWV0ZW9yU3ByaXRlc1swXS5oZWlnaHQgLyAyKTogdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcbiAgICAgICAgdmFyIHNjYWxlID0gZGlzdCAvIGJlYW0uaGVpZ2h0O1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKGJlYW0uc2NhbGUpLnRvKHt5OiBzY2FsZX0sIDIwMCwgUGhhc2VyLkVhc2luZy5DdWJpYy5JbiwgdHJ1ZSwgMCwgMCk7XG4gICAgICAgIHZhciBtb3ZlMiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4oYmVhbSkudG8oe3k6ICctNSd9LCAyMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwKTtcblxuICAgICAgICBtb3ZlMi5vbkNvbXBsZXRlLmFkZCh0aGlzLmNvbGxhcHNlQmVhbSwgdGhpcyk7XG4gICAgfVxufTtcblxuUGxheVN0YXRlLnByb3RvdHlwZS5jb2xsYXBzZUJlYW0gPSBmdW5jdGlvbihzcHJpdGUpIHtcbiAgICBzcHJpdGUuYW5jaG9yLnNldCgwLjUsIDApO1xuICAgIHNwcml0ZS55ID0gc3ByaXRlLnkgLSBzcHJpdGUuaGVpZ2h0O1xuXG4gICAgdGhpcy5nYW1lLmFkZC50d2VlbihzcHJpdGUuc2NhbGUpLnRvKHt5OiAwLjYgfSwgMTAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMCwgMCk7XG4gICAgdmFyIG1vdmUgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHNwcml0ZSkudG8oe3k6ICctNSd9LCAxMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwKTtcbiAgICBtb3ZlLm9uQ29tcGxldGUuYWRkKGZ1bmN0aW9uKHNwcml0ZSkge3Nwcml0ZS5raWxsKCl9LCB0aGlzKTtcbn07XG5cblBsYXlTdGF0ZS5wcm90b3R5cGUudXBkYXRlQmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZih0aGlzLnN0YXJmYWxsMS54IDwgMCApIHtcbiAgICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZC5ib2R5LnkgPiB0aGlzLnN0YXJmYWxsMS5kYXRhLmhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zdGFyZmFsbDEueCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDUwO1xuICAgICAgICAgICAgdGhpcy5zdGFyZmFsbDEueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gNDAwO1xuICAgICAgICAgICAgdGhpcy5zdGFyZmFsbDEuZGF0YS5oZWlnaHQgPSB0aGlzLnN0YXJmYWxsMS5kYXRhLmhlaWdodCAgKyAzMDAwO1xuICAgICAgICAgICAgdGhpcy5zdGFyZmFsbDIueCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDIwO1xuICAgICAgICAgICAgdGhpcy5zdGFyZmFsbDIueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gNDYwO1xuICAgICAgICAgICAgdGhpcy5zdGFyZmFsbDMueCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDIwO1xuICAgICAgICAgICAgdGhpcy5zdGFyZmFsbDMueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gNTIwO1xuXG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuc3RhcmZhbGwxKS50byh7eDogJy01MDAwJywgeTogJys4MDAwJ30sIDY1MDAgKyBSYW5kb21JbnQoMTUwMCksIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuc3RhcmZhbGwyKS50byh7eDogJy01MDAwJywgeTogJys4MDAwJ30sIDY1MDAgKyBSYW5kb21JbnQoMTUwMCksIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuc3RhcmZhbGwzKS50byh7eDogJy01MDAwJywgeTogJys4MDAwJ30sIDY1MDAgKyBSYW5kb21JbnQoMTUwMCksIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZih0aGlzLmNvbWV0LnggPCAwICkge1xuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdW5kLmJvZHkueSA+IHRoaXMuY29tZXQuZGF0YS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29tZXQueCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCArIDUwO1xuICAgICAgICAgICAgdGhpcy5jb21ldC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSA0MDA7XG4gICAgICAgICAgICB0aGlzLmNvbWV0LmRhdGEuaGVpZ2h0ID0gdGhpcy5jb21ldC5kYXRhLmhlaWdodCAgKyAzMDAwICsgUmFuZG9tSW50KDYwMCk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuY29tZXQpLnRvKHt4OiAnLTMwMDAnLCB5OiAnKzI4MCd9LCA2MDAwICsgUmFuZG9tSW50KDUwMCksIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblBsYXlTdGF0ZS5wcm90b3R5cGUubWFrZUVhcnRocXVha2UgPSBmdW5jdGlvbihzcHJpdGUpIHtcbiAgICBpZiAodHlwZW9mKHNwcml0ZSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgc3ByaXRlLmxvYWRUZXh0dXJlKCdleHBsb2RlJyk7XG4gICAgICAgIHNwcml0ZS5hbmltYXRpb25zLmFkZCgnZXhwbG9kZScsWzEsMiwzLCAzLDQsNF0pO1xuICAgICAgICBzcHJpdGUuYW5pbWF0aW9ucy5wbGF5KCdleHBsb2RlJywgMzAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgZGVsYXkgPSAxMDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVsYXkgPSBzcHJpdGU7XG4gICAgfVxuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5nYW1lLmNhbWVyYSlcbiAgICAgICAgLnRvKHt4OiB0aGlzLmdhbWUuY2FtZXJhLnggLTEwfSwgMTAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5Jbk91dCwgdHJ1ZSwgZGVsYXksIDQsIHRydWUpO1xufTtcblxuUGxheVN0YXRlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZihjb25maWcuZGVidWcpIHtcbiAgICAgICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoXCJTcGVlZDogXCIgKyB0aGlzLnNwZWVGYWN0b3IsIDEwLCA1MDAgKTtcbiAgICAgICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoXCJDb3JyZWN0OiBcIiArIHRoaXMuY29ycmVjdFdvcmQsIDEwLCA1MjAgKTtcbiAgICAgICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoXCJCYWNrcG9zaXRpb246IFwiICsgdGhpcy5iYWNrZ3JvdW5kLmJvZHkueSArICcvJyArIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsIDEwLCA1NDAgKTtcbiAgICB9XG5cbn07XG5cblBsYXlTdGF0ZS5wcm90b3R5cGUuc2V0R2FtZW92ZXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2hhbmdlUG9zaXRpb24gPSB0cnVlO1xuICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLnJlbW92ZSh0aGlzLmxvYWRlZENhbm9uSW1hZ2UsIHRoaXMpO1xuICAgIGdsb2JhbC5zY29yZSA9IHRoaXMuc2NvcmU7XG4gICAgZ2xvYmFsLmJhY2tQb3NpdGlvbiA9IHRoaXMuYmFja2dyb3VuZC55O1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5wbGF0Zm9ybSkudG8oe3k6ICcrMzAwJ30sIDEwMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnRleHRibG9jaykudG8oe3k6ICcrMzAwJ30sIDEwMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnRleHRibG9ja2xlZnQpLnRvKHt5OiAnKzMwMCd9LCAxMDAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMCwgMCwgZmFsc2UpO1xuICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy50ZXh0YmxvY2tyaWdodCkudG8oe3k6ICcrMzAwJ30sIDEwMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG5cbiAgICB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMudHJhbnNsYXRpb25MYWJlbCkudG8oe3k6ICcrMzAwJ30sIDEwMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG5cbiAgICB2YXIgbW92ZSA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5jYW5vbikudG8oe3k6ICcrMzAwJ30sIDEwMDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAwLCBmYWxzZSk7XG4gICAgbW92ZS5vbkNvbXBsZXRlLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZW92ZXInKTtcbiAgICB9LCB0aGlzKTtcblxufTtcblxuUGxheVN0YXRlLnByb3RvdHlwZS5yZXNldE1ldGVvcnMgPSBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLmxpZmVzID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0R2FtZW92ZXJTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3JlYXRlTWV0ZW9yaXRlcygpO1xuICAgIH1cbn07XG5cblBsYXlTdGF0ZS5wcm90b3R5cGUudXBkYXRlU3BlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3dpdGNoKHRoaXMuc2NvcmUpIHtcbiAgICAgICAgY2FzZSAzOlx0dGhpcy5zcGVlRmFjdG9yID0gNjAwIC8gY29uZmlnLnBsYXkuZ3Jhdml0eSAgLyA5OyBicmVhaztcbiAgICAgICAgY2FzZSA2Olx0dGhpcy5zcGVlRmFjdG9yID0gNjAwIC8gY29uZmlnLnBsYXkuZ3Jhdml0eSAgLyA4OyBicmVhaztcbiAgICAgICAgY2FzZSAxMjogdGhpcy5zcGVlRmFjdG9yID0gNjAwIC8gY29uZmlnLnBsYXkuZ3Jhdml0eSAgLyA3OyBicmVhaztcbiAgICAgICAgY2FzZSAyMDogdGhpcy5zcGVlRmFjdG9yID0gNjAwIC8gY29uZmlnLnBsYXkuZ3Jhdml0eSAgLyA2OyBicmVhaztcbiAgICAgICAgY2FzZSAzMDogdGhpcy5zcGVlRmFjdG9yID0gNjAwIC8gY29uZmlnLnBsYXkuZ3Jhdml0eSAgLyA1OyBicmVhaztcbiAgICB9XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmJvZHkudmVsb2NpdHkueSA9IGNvbmZpZy5wbGF5LmJhY2tTcGVlZCAqIHRoaXMuc3BlZUZhY3Rvcjtcbn07XG5cblBsYXlTdGF0ZS5wcm90b3R5cGUuYmVhbU1ldGVvckhpdCA9IGZ1bmN0aW9uKGJlYW0sIG1ldGVvcml0ZSkge1xuICAgIGlmKHRoaXMuY3JlYXRlZCkge1xuICAgICAgICB2YXIgZGVsYXkgPSAxOTAwO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5tZXRlb3JTcHJpdGVzW2ldO1xuICAgICAgICAgICAgdGhpcy5mbGFyZVNwcml0ZXNbaV0ua2lsbCgpO1xuICAgICAgICAgICAgaWYgKG0uZGF0YS5jb3JyZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYobS5uYW1lID09PSBtZXRlb3JpdGUubmFtZSkgeyAgLy/QtdGB0LvQuCDQv9C+0L/QsNC70Lgg0LIg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0LzQtdGC0LXQvtGA0LjRglxuICAgICAgICAgICAgICAgICAgICBiZWFtLmtpbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlU3BlZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5zY29yZSA9PT0gTWF0aC5taW4od29yZHMubGVuZ3RoLCA1MCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZW92ZXJTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG0ubG9hZFRleHR1cmUoJ2V4cGxvZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4ID0gbS5hbmltYXRpb25zLmFkZCgnZXhwbG9kZScsWzEsMiwzLCA0LDUsNiw3LDgsOSwxMF0pO1xuICAgICAgICAgICAgICAgICAgICBleC5vbkNvbXBsZXRlLmFkZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5raWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndvcmRMYWJlbC5raWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBtLmFuaW1hdGlvbnMucGxheSgnZXhwbG9kZScsIDMwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSA0MDApIC8gbS55O1xuICAgICAgICAgICAgICAgICAgICBkZWxheSA9IG0ueSA+IDIwMD8gIDIwMCAqIGs6IDE4MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vINGB0YLRgNC10LvRj9C70Lgg0LIg0L3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvcnJlY3QobSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGF5ID0gMzgwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgeyAgIC8v0L/QvtC/0LDQu9C4INCyINCz0L7Qu9C+0LPRgNCw0LzQvNGDXG4gICAgICAgICAgICAgICAgdGhpcy53b3JkTGFiZWxzW2ldLmtpbGwoKTtcbiAgICAgICAgICAgICAgICBpZihtLm5hbWUgPT09IG1ldGVvcml0ZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jb3JyZWN0QW5zd2VyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG0ubG9hZFRleHR1cmUoJ2hvbG9ncmFtJyk7XG5cbiAgICAgICAgICAgICAgICBtLmFuaW1hdGlvbnMuYWRkKCdleHBsb2RlJywgWzEsIDIsIDIsIDMsIDQsIDUsIDYsIDYsIDcsIDgsIDgsIDldKTtcbiAgICAgICAgICAgICAgICBtLmFuaW1hdGlvbnMucGxheSgnZXhwbG9kZScsIDMwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29uZmlnLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0JlYW0gaW50bzogJyArIG1ldGVvcml0ZS5uYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnU2NvcmU6ICcgKyB0aGlzLnNjb3JlICsgJyBsaWZlczogJyArIHRoaXMubGlmZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKGRlbGF5LCB0aGlzLnJlc2V0TWV0ZW9ycywgdGhpcyk7XG4gICAgfVxuXG59O1xuXG5QbGF5U3RhdGUucHJvdG90eXBlLmRvd25NZXRlb3JpdGVzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKHRoaXMuY3JlYXRlZCkge1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmNvcnJlY3RBbnN3ZXIoKTtcbiAgICAgICAgaWYoY29uZmlnLmRlYnVnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ0Ryb3AgbWV0ZW9yaXRlcywgU2NvcmU6ICcgKyB0aGlzLnNjb3JlICsgJyBsaWZlczogJyArIHRoaXMubGlmZXMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBpZihpICE9IHRoaXMuY29ycmVjdFdvcmQgLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JkTGFiZWxzW2ldLmtpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5mbGFyZVNwcml0ZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgaXRlbS5raWxsKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5tZXRlb3JTcHJpdGVzW2ldO1xuICAgICAgICAgICAgaWYobS5kYXRhLmNvcnJlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb3JyZWN0KG0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtLmxvYWRUZXh0dXJlKCdob2xvZ3JhbScpO1xuICAgICAgICAgICAgICAgIG0uYW5pbWF0aW9ucy5hZGQoJ2V4cGxvZGUnLCBbMSwgMiwgMiwgMywgNCwgNSwgNiwgNiwgNywgOCwgOCwgOV0pO1xuICAgICAgICAgICAgICAgIG0uYW5pbWF0aW9ucy5wbGF5KCdleHBsb2RlJywgMzAsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZCgzODAwLCB0aGlzLnJlc2V0TWV0ZW9ycywgdGhpcyk7XG4gICAgfVxufTtcblxuUGxheVN0YXRlLnByb3RvdHlwZS5zaG93Q29ycmVjdCA9IGZ1bmN0aW9uKG1ldGVvcml0ZSkge1xuICAgIG1ldGVvcml0ZS5ib2R5LnZlbG9jaXR5LnkgPSAwO1xuICAgIG1ldGVvcml0ZS53b3JkTGFiZWwuYm9keS52ZWxvY2l0eS55ID0gMDtcbiAgICB2YXIgc2NhbGUgPSBtZXRlb3JpdGUuc2NhbGU7XG4gICAgc2NhbGUuc3ByaXRlID0gbWV0ZW9yaXRlO1xuICAgIHZhciBzaG93ID0gdGhpcy5nYW1lLmFkZC50d2VlbihzY2FsZSkudG8oe3g6IDEuMSwgeTogMS4xfSwgMzAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMCwgMiwgdHJ1ZSk7XG4gICAgc2hvdy5vbkNvbXBsZXRlLmFkZChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpdGVtLnNwcml0ZS53b3JkTGFiZWwua2lsbCgpO1xuICAgIH0sIHRoaXMpO1xuICAgIHZhciBkaXN0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIG1ldGVvcml0ZS55IC0gbWV0ZW9yaXRlLmhlaWdodDtcbiAgICB2YXIgbW92ZSA9IHRoaXMuZ2FtZS5hZGQudHdlZW4obWV0ZW9yaXRlKVxuICAgICAgICAudG8oe3k6ICAnKycgKyBkaXN0fSwgNjAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgZmFsc2UsIDAsIDAsIGZhbHNlKTtcblxuICAgIG1vdmUub25Db21wbGV0ZS5hZGQodGhpcy5tYWtlRWFydGhxdWFrZSwgdGhpcyk7XG4gICAgdmFyIG1vdmUyID0gdGhpcy5nYW1lLmFkZC50d2VlbihtZXRlb3JpdGUpXG4gICAgICAgIC50byh7eTogJyszMDAnfSwgNDAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgZmFsc2UsIDAsIDAsIGZhbHNlKTtcblxuICAgIHNob3cuY2hhaW4obW92ZSk7XG4gICAgbW92ZS5jaGFpbihtb3ZlMik7XG59O1xuXG5cblBsYXlTdGF0ZS5wcm90b3R5cGUubG9hZGVkQ2Fub25JbWFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZih0eXBlb2YodGhpcy5jYW5vbmltYWdlbWFzaykgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jYW5vbmltYWdlbWFzay5raWxsKCk7XG4gICAgfVxuICAgIHRoaXMuY2Fub25pbWFnZW1hc2sgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAwLCAnaW1hZ2VfJyArIHRoaXMud29yZCk7XG4gICAgdGhpcy5jYW5vbmltYWdlbWFzay5hbmNob3Iuc2V0KDAuNSwgMC41KTtcbiAgICB0aGlzLmNhbm9uaW1hZ2VtYXNrLmFsaWduSW4odGhpcy5jYW5vbiwgUGhhc2VyLlRPUF9DRU5URVIsIDMsIC00OCk7XG4gICAgdmFyIHNjYWxlID0gTWF0aC5tYXgoMTY0L3RoaXMuY2Fub25pbWFnZW1hc2sud2lkdGgsIDEyNCAvIHRoaXMuY2Fub25pbWFnZW1hc2suaGVpZ2h0KTtcbiAgICB0aGlzLmNhbm9uaW1hZ2VtYXNrLnNjYWxlLnNldChzY2FsZSwgc2NhbGUpO1xufTtcblxuUGxheVN0YXRlLnByb3RvdHlwZS5jcmVhdGVNZXRlb3JpdGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhbHRlcm5hdGl2ZXMgPSBbXTtcbiAgICB2YXIgdHJhbnNsYXRpb247XG4gICAgdmFyIGltYWdlcztcbiAgICB0aGlzLmNvcnJlY3RXb3JkID0gIFJhbmRvbUludCg0KTtcbiAgICB2YXIgd29yZEpTT04gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTignd29yZHMnKTtcbiAgICB3aGlsZShhbHRlcm5hdGl2ZXMubGVuZ3RoIDwgMyAmJiB0aGlzLndvcmQgPCA1NSkge1xuICAgICAgICB0aGlzLndvcmQrKztcblxuICAgICAgICB3b3JkSlNPTiA9IHdvcmRKU09OW3RoaXMud29yZF07XG4gICAgICAgIHRoaXMudGV4dCA9IHdvcmRKU09OWyd0cmFuc2xhdGlvbiddLnRleHQ7XG4gICAgICAgIHRyYW5zbGF0aW9uID0gd29yZEpTT05bJ3RleHQnXTtcbiAgICAgICAgYWx0ZXJuYXRpdmVzID0gd29yZEpTT05bJ2FsdGVybmF0aXZlVHJhbnNsYXRpb25zJ107XG4gICAgICAgIGltYWdlcyA9IHdvcmRKU09OWydpbWFnZXMnXTtcbiAgICAgICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdNZWFuaW5naWQ6ICcgKyB3b3JkSlNPTi5pZCArICcg0KHQu9C+0LLQvjogJyArIHRoaXMudGV4dCArICcsINC+0YLQstC10YI6ICcgKyB0cmFuc2xhdGlvbiArICcgLSAnICsgdGhpcy5jb3JyZWN0V29yZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFsdGVybmF0aXZlcy5sZW5ndGggPCAzICYmIHRoaXMud29yZCA9PSA1NSkge1xuICAgICAgICB0aGlzLnNldEdhbWVvdmVyU3RhdGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZihpbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZih0eXBlb2YodGhpcy5jYW5vbmltYWdlbWFzaykgIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB0aGlzLmNhbm9uaW1hZ2VtYXNrLmtpbGwoKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2ltYWdlXycgKyB0aGlzLndvcmQsIGltYWdlc1swXS51cmwpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGQodGhpcy5sb2FkZWRDYW5vbkltYWdlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuY3Jvc3NvcmlnaW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5jcm9zc09yaWdpbiA9IFwiQW5vbnltb3VzXCI7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgdmFyIHdvcmRzID0gW107XG4gICAgZm9yKGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgICBpZihpID09PSB0aGlzLmNvcnJlY3RXb3JkKSB7XG4gICAgICAgICAgICB3b3Jkc1tpIC0gMV0gPSB0cmFuc2xhdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgd29yZHNbaSAtIDFdID0gYWx0ZXJuYXRpdmVzLnJhbmRvbUVsZW1lbnQoKVsndGV4dCddO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMudHJhbnNsYXRpb25MYWJlbC50ZXh0ID0gdGhpcy50ZXh0O1xuXG4gICAgZm9yKHZhciBpPSAxOyBpIDw9IDQ7IGkrKykge1xuXG4gICAgICAgIHZhciBmbGFyZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMubGVmdCArIHRoaXMuc3RlcCAqIGksIC05MCwgJ21ldGVvcl9saWdodCcpO1xuICAgICAgICBmbGFyZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUgKTtcbiAgICAgICAgZmxhcmUubmFtZSA9ICdmbGFyZScgKyBpO1xuICAgICAgICBmbGFyZS5jaGVja1dvcmxkQm91bmRzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKGZsYXJlLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICB0aGlzLmZsYXJlU3ByaXRlc1tpIC0gMV0gPSBmbGFyZTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50d2VlbihmbGFyZSkudG8oe3g6ICcrMid9LCAyNTAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAwLCAtMSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4oZmxhcmUpLnRvKHthbHBoYTogMC42fSwgMTAwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuSW4sIHRydWUsIDAsIC0xLCB0cnVlKTtcbiAgICAgICAgdGhpcy5tZXRlb3JzLmFkZChmbGFyZSk7XG4gICAgfVxuXG4gICAgZm9yKHZhciBpPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgICB2YXIgbiA9IFJhbmRvbUludCg0KTtcblxuICAgICAgICB2YXIgbWV0ZW9yID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5sZWZ0ICsgdGhpcy5zdGVwICogaSwgLTQwLCAnbWV0ZW9yJytuKTtcbiAgICAgICAgbWV0ZW9yLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIG1ldGVvci5uYW1lID0gJ21ldGVvcml0ZScgKyBpO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUobWV0ZW9yLCBQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgICAgICBtZXRlb3IuYWNjdW0gPSB0aGlzLnRpbWUudG90YWxFbGFwc2VkU2Vjb25kcygpO1xuICAgICAgICB0aGlzLm1ldGVvclNwcml0ZXNbaSAtIDFdID0gbWV0ZW9yO1xuICAgICAgICBtZXRlb3IuZGF0YS5jb3JyZWN0ID0gIChpID09PSB0aGlzLmNvcnJlY3RXb3JkKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50d2VlbihtZXRlb3IpLnRvKHthbmdsZTogJysyJ30sIDUwMCArIFJhbmRvbUludCgzMDApLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgUmFuZG9tSW50KDM1MCksIC0xLCB0cnVlKTtcblxuICAgICAgICB0aGlzLm1ldGVvcnMuYWRkKG1ldGVvcik7XG5cbiAgICAgICAgdmFyIHN0eWxlID0geyBmb250OiBcIjI0cHggT3BlbiBTYW5zXCIsIGZpbGw6IFwiIzAwMDAwMFwiLCB3b3JkV3JhcDogdHJ1ZSwgd29yZFdyYXBXaWR0aDogbWV0ZW9yLndpZHRoIC0gMjAsIGFsaWduOiBcImNlbnRlclwiIH07XG4gICAgICAgIHZhciB3ID0gdGhpcy5nYW1lLmFkZC50ZXh0KDAsMCwgd29yZHNbaS0xXSwgc3R5bGUpO1xuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh3KTtcbiAgICAgICAgdy5hbmNob3Iuc2V0KDAuNSwgMC41KTtcbiAgICAgICAgdy5hbGlnblRvKCBtZXRlb3IsIFBoYXNlci5UT1BfQ0VOVEVSLCAwLCAtIDEyNSAtIHcuaGVpZ2h0IC8gMik7XG4gICAgICAgIHRoaXMud29yZExhYmVsc1tpLTFdID0gdztcbiAgICAgICAgbWV0ZW9yLndvcmRMYWJlbCA9IHc7XG4gICAgICAgIG1ldGVvci5mbGFyZSA9IHRoaXMuZmxhcmVTcHJpdGVzW2kgLSAxXTtcbiAgICB9XG4gICAgdGhpcy5jcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmZpcmVkID0gZmFsc2U7XG59O1xuXG5QbGF5U3RhdGUucHJvdG90eXBlLmNyZWF0ZVRleHRCbG9ja3MgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRibG9jayA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwgJ3RleHRfYmxvY2tzJywgMSk7XG4gICAgdGhpcy50ZXh0YmxvY2suYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLnRleHRibG9jay5hbGlnblRvKHRoaXMucGxhdGZvcm0sIFBoYXNlci5CT1RUT01fQ0VOVEVSLCAwLCAtNDkpO1xuICAgIHRoaXMudGV4dGJsb2NrLnNjYWxlLnNldFRvKDMyLCAxKTtcblxuICAgIHRoaXMudGV4dGJsb2NrbGVmdCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwgJ3RleHRfYmxvY2tzJywgMCk7XG4gICAgdGhpcy50ZXh0YmxvY2tsZWZ0LmFuY2hvci5zZXRUbygwLCAwLjUpO1xuICAgIHRoaXMudGV4dGJsb2NrbGVmdC5hbGlnblRvKHRoaXMudGV4dGJsb2NrLCBQaGFzZXIuTEVGVF9DRU5URVIsIC0xOSwgMCk7XG5cbiAgICB0aGlzLnRleHRibG9ja3JpZ2h0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCAndGV4dF9ibG9ja3MnLCAyKTtcbiAgICB0aGlzLnRleHRibG9ja3JpZ2h0LmFuY2hvci5zZXRUbygwLCAwLjUpO1xuICAgIHRoaXMudGV4dGJsb2NrcmlnaHQuYWxpZ25Ubyh0aGlzLnRleHRibG9jaywgUGhhc2VyLlJJR0hUX0NFTlRFUiwgMCwgMCk7XG5cbiAgICB0aGlzLnRyYW5zbGF0aW9uTGFiZWwgPSB0aGlzLmdhbWUuYWRkLnRleHQoMCwwLCAnJywge1xuICAgICAgICBmb250OiAnMjVweCBPcGVuIFNhbnMnLFxuICAgICAgICBmaWxsOiAnIzAwMDAwMCdcbiAgICB9KTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uTGFiZWwuYW5jaG9yLnNldCgwLjUsIDApO1xuICAgIHRoaXMudHJhbnNsYXRpb25MYWJlbC5hbGlnblRvKHRoaXMucGxhdGZvcm0sIFBoYXNlci5CT1RUT01fQ0VOVEVSLCAwLCAtNDApO1xuXG4gICAgdGhpcy5zY29yZUxhYmVsID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMubGVmdCwgMTAsIHRoaXMuc2NvcmUsIHtcbiAgICAgICAgZm9udDogJzQwcHggT3BlbiBTYW5zJyxcbiAgICAgICAgZmlsbDogJyNmZmZmZmYnXG4gICAgfSk7XG4gICAgdGhpcy5zY29yZUxhYmVsLmFuY2hvci5zZXRUbygwKTtcbn07XG5cblBsYXlTdGF0ZS5wcm90b3R5cGUuY29ycmVjdEFuc3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNjb3JlKys7XG4gICAgZ2xvYmFsLmNvcnJlY3RXb3Jkcy5wdXNoKHRoaXMud29yZCk7XG59O1xuXG5QbGF5U3RhdGUucHJvdG90eXBlLmluY29ycmVjdEFuc3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmhlYXJ0c1t0aGlzLmxpZmVzIC0gMV0ubG9hZFRleHR1cmUoJ2hlYXJ0X2JsYWNrJyk7XG4gICAgdGhpcy5saWZlcy0tO1xuICAgIGdsb2JhbC5pbmNvcnJlY3RXb3Jkcy5wdXNoKHRoaXMud29yZCk7XG59O1xuXG5QbGF5U3RhdGUucHJvdG90eXBlLmNyZWF0ZUhlYXJ0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgNTsgaSArKyApIHtcbiAgICAgICAgdmFyIGhlYXJ0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5sZWZ0ICsgMTAgKyBpICogMjUsIDY1LCAnaGVhcnRfcmVkJyk7XG4gICAgICAgIGhlYXJ0LmFuY2hvci5zZXQoMC41LCAwLjUpO1xuICAgICAgICB0aGlzLmhlYXJ0cy5wdXNoKGhlYXJ0KTtcbiAgICB9XG59O1xuXG5cblxuIl19

//# sourceMappingURL=main.js.map
