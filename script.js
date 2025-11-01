
MAX_COLOR_DISPLAYS = 5;
displays = {}; // array of colors
currentDisplayCount = 1;

var colorDisplays = document.getElementById('color-displays-container');
var alertMessage = document.getElementById('alert-message');

function addColorDisplay() {
    if (currentDisplayCount < MAX_COLOR_DISPLAYS) {
        // update
        currentDisplayCount += 1;
        var displayId = 'color-display-' + currentDisplayCount;
        var newDisplay = document.createElement('div');

        // style
        newDisplay.id = displayId;
        newDisplay.className = 'color-box';
        var randomColor = getRandomColor();
        newDisplay.style.backgroundColor = randomColor;
        newDisplay.innerHTML = randomColor;

        // add
        colorDisplays.appendChild(newDisplay);
        displays[displayId] = newDisplay.style.backgroundColor;
        toggleAlert(false);
    } else {
        toggleAlert(true);
    }
}

function removeColorDisplay() {
    if (currentDisplayCount > 1) {
        // remove
        var displayId = 'color-display-' + currentDisplayCount;
        var displayToRemove = document.getElementById(displayId);
        colorDisplays.removeChild(displayToRemove);
        delete displays[currentDisplayCount]
        currentDisplayCount -= 1;
        toggleAlert(false);
    }

}
function generateColorPalette() {
    // update array
    for (var i = 0; i < currentDisplayCount; i++) {
        var newColor = getRandomColor();
        console.log(newColor)
        displays[i] = newColor;
    }
    // update visual display
    colorBoxes = document.getElementsByClassName('color-box');
    for (var j = 0; j < colorBoxes.length; j++) {
        colorBoxes[j].style.backgroundColor = displays[j];
        colorBoxes[j].innerHTML = displays[j];
    }
    toggleAlert(false);
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function toggleAlert(show) {
    if (show) {
        alertMessage.style.display = "block";
    } else {
        alertMessage.style.display = "none";
    }
}