var rect = this.add.rectangle(100, 100, 200, 200, 0x838383);

var tween = scene.tweens.add({
    targets: rect,
    // alpha: 1,
    // alpha: '+=1',
    alpha: { from: 1, to: 0 },
    // alpha: { start: 0, to: 1 },
    // alpha: { start: value0, from: value1, to: value2 },
    // alpha: function(target, key, value, targetIndex, totalTargets, tween)  { return newValue; },
    // alpha: {
    //      getActive: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
    //      getStart: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; },
    //      getEnd: function (target, key, value, targetIndex, totalTargets, tween) { return newValue; }
    // },
    ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
    duration: 200,
    repeat: 5,            // -1: infinity, 0: no repeat
    yoyo: false
});