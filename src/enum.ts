enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
];

// Aside 1: Enum as argument
function f(obj: { Up: number }) {
  return obj.Up;
}
f(Direction);

// Aside 2: reverse mapping
const up = Direction.Up;
const nameOfUp = Direction[up];
console.log("nameOfUp: ", nameOfUp);
