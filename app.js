let isOn = false;
function toggleLight() {
    const bulb = document.getElementById('bulb');
    if (isOn) {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        isOn = false;
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        isOn = true;
    }
}