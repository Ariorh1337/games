var textElm = "";

const createGradient = (textElm, color1, color2) => {
    const gradient = textElm.context.createLinearGradient(0, 5, 0, textElm.height);
    gradient.addColorStop(0, color1);  
    gradient.addColorStop(0.3, color1);
    gradient.addColorStop(0.8, color2);
    gradient.addColorStop(1, color2);
    return gradient;
}

textElm.setFill(createGradient(textElm, '#ffffff', '#80acfc'));