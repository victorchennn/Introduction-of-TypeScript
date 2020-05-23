const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ["brown", true, 40]; // tuple
const sprite: Drink = ["clear", true, 40]; // tuple
const tea: Drink = ["brown", false, 0]; // tuple

const carSpecs1: [number, number] = [400, 3354]; // what's the meaning?
const carSpecs2 = {
  // why not using object
  horsepower: 400,
  weight: 3354,
};
