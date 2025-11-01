
MAX_COLOR_DISPLAYS = 5;
displays = {};
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
        newDisplay.style.backgroundColor = getRandomColor();

        // add
        var colorCode = document.createElement('p');
        colorCode.className = 'color-code';
        colorDisplays.appendChild(newDisplay);
        displays[displayId] = newDisplay;
    } else {
        alertMessage.innerHTML = "color display limit reached!";
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
    }

}

function generateColorPalette() {
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
