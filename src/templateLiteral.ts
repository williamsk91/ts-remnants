type PetName = "Tori" | "Saka";
type Breed = "Chicken" | "Fish";
type ID = `${PetName}_${Breed}_${number}`;

const petName: PetName = "Tori";
const breed: Breed = "Chicken";
const id: ID = `${petName}_${breed}_${Math.random()}`; // e.g. Tori_chicken_0.872834635985821
