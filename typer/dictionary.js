function voiceAct(word) {
    new Audio(`https://d2fmfepycn0xw0.cloudfront.net/?gender=male&accent=british&text=${word}&transcription=0`).play()
}

const dictionary = {
    voiceAct: voiceAct
};

export default dictionary;