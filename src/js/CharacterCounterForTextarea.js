document.getElementById('additionalInformation').onkeyup = function () {
    document.getElementById('count').innerHTML = "Tähemärke jäänud: " + (1000 - this.value.length) + "/1000";
};
