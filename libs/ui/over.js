function scale(item, overScale, outScale) {
    item.setScale(outScale);

    item.on("pointerover", () => {
        item.setScale(overScale);
    })
    item.on("pointerout", () => {
        item.setScale(outScale);
    })
}

function alpha(item, overAlpha, outAlpha) {
    item.setAlpha(outAlpha);

    item.on("pointerover", () => {
        item.setAlpha(overAlpha);
    })
    item.on("pointerout", () => {
        item.setAlpha(outAlpha);
    })
}

export default { scale, alpha };