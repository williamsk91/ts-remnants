"use strict";
function isChicken(pet) {
    return pet.walkDirection !== undefined;
}
function getAnimal() {
    return Math.random() > 0.5
        ? { walkDirection: Direction.Up }
        : { swimDirection: Direction.Up };
}
let pet = getAnimal();
if (isChicken(pet)) {
    pet.walkDirection;
}
else {
    pet.swimDirection;
}
function hasAtLeastOneElement(arr) {
    return arr.length >= 1;
}
