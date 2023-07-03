interface Chicken {
  walkDirection: Direction;
}

interface Fish {
  swimDirection: Direction;
}

function isChicken(pet: Chicken | Fish): pet is Chicken {
  return (pet as Chicken).walkDirection !== undefined;
}

function getAnimal(): Chicken | Fish {
  return Math.random() > 0.5
    ? { walkDirection: Direction.Up }
    : { swimDirection: Direction.Up };
}
let pet = getAnimal();

if (isChicken(pet)) {
  pet.walkDirection;
} else {
  pet.swimDirection;
}

function hasAtLeastOneElement<T>(arr: T[]): arr is [T, ...T[]] {
  return arr.length >= 1;
}
