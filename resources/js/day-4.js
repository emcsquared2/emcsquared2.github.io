// DOM elements
const rotateLeftButton = document.getElementById("rotate-left-button");
const rotateRightButton = document.getElementById("rotate-right-button");

// global variables
let rotation = 0;

function rotatePlanetEarth(event) {
    const planetEarth = document.getElementById("small-earth");
    rotate(planetEarth, event);
}

// given a DOM element and a direction, rotate the element that direction
function rotate(element, event) {
    if (event.target.id === "rotate-left-button") {
        rotation = rotation - 15;
    } else {
        rotation = rotation + 15;
    }
    element.style.transform = 'rotate(' + rotation + 'deg)';
} 

// add event handlers when mouse events are triggered
rotateLeftButton.onclick = rotatePlanetEarth;
rotateRightButton.onclick = rotatePlanetEarth;