interface Food {
  name: string;
  image: string;
  source?: string;
}

interface Trait {
  name: string;
}

interface GutFlora {
  name: string;
  image: string;
  foods: string[];
  traits: Trait[];
  rarities: number[];
}

interface TraitDetail {
  name: string;
}
const foodUnknown: Food = {
  name: "Unknown",
  image: "unknown",
};
const foodAlienFruit: Food = {
  name: "Alien Fruit",
  image: "alien_fruit",
};
const foods: Food[] = [foodUnknown, foodAlienFruit];

const traitUnknown: Trait = { name: "Unknown" };
const traitLongLegs: Trait = { name: "Long Legs" };
const traitOrangeColoration: Trait = { name: "Orange Coloration" };

const traits: TraitDetail[] = [traitLongLegs, traitOrangeColoration];

const gutFlora: GutFlora[] = [
  {
    name: "0x1042",
    image: "flora_0_0",
    foods: ["Chip", "Nutritional Pellet"],
    traits: [traitLongLegs, traitOrangeColoration], // Directly reference the trait objects
    rarities: [1, 1],
  },
  {
    name: "???? ???????",
    image: "flora_0_1",
    foods: [],
    traits: [],
    rarities: [],
  },
  {
    name: "Bacillus Vitus",
    image: "flora_0_2",
    foods: [],
    traits: [],
    rarities: [],
  },
  {
    name: "Bacto Bacto",
    image: "flora_0_3",
    foods: [],
    traits: [],
    rarities: [],
  },
];

export { foods, gutFlora, traits };
