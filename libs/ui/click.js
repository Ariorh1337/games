function scale(item, downScale, upScale) {
    item.setScale(upScale);

    item.on("pointedown", () => {
        item.setScale(downScale);
    })
    item.on("pointerup", () => {
        item.setScale(upScale);
    })
}

function alpha(item, downAlpha, upAlpha) {
    item.setAlpha(upAlpha);

    item.on("pointedown", () => {
        item.setAlpha(downAlpha);
    })
    item.on("pointerup", () => {
        item.setAlpha(upAlpha);
    })
}

export default { scale, alpha };