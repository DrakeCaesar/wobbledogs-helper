import * as food from "./food";
import * as trait from "./trait";
interface GutFlora {
  name: string;
  image: string;
  foods: food.Food[];
  traits: trait.Trait[];
  rarities: number[];
}

export const x1042: GutFlora = {
  name: "0x1042",
  image: "flora_0_0",
  foods: [food.chip, food.nutritionalPellet],
  traits: [trait.longLegs, trait.longLegs], // Directly reference the trait objects
  rarities: [1, 1],
};

const gutFlora: GutFlora[] = [
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
