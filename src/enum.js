"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const directions = [
    Direction.Up,
    Direction.Down,
    Direction.Left,
    Direction.Right,
];
// Aside 1: Enum as argument
function f(obj) {
    return obj.Up;
}
f(Direction);
// Aside 2: reverse mapping
const up = Direction.Up;
const nameOfUp = Direction[up];
console.log("nameOfUp: ", nameOfUp);
