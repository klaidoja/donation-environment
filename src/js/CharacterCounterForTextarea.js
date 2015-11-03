document.getElementById('additionalInformation').onkeyup = function () {
    document.getElementById('count').innerHTML = "Tähemärke jäänud: " + (255 - this.value.length) + "/255";
};
