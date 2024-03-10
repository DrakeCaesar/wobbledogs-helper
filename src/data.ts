interface Food {
  name: string;
  image: string;
  source: string;
  gutFlora: string[];
}

interface Trait {
  name: string;
}

interface GutFlora {
  name: string;
  image: string;
  shinyImage: string;
  foods: string[];
  traits: Trait[];
}

interface TraitDetail {
  name: string;
  gutFlora: string[];
  foods: string[];
}

const foods: Food[] = [
  {
    name: "FoodName1",
    image: "path/to/image1.png",
    source: "FoodSource1",
    gutFlora: ["GutFloraName1", "GutFloraName2"],
  },
];

const gutFlora: GutFlora[] = [
  {
    name: "0x1042",
    image: "flora_0_0",
    shinyImage: "path/to/shinyImage2.png",
    foods: ["Chip", "Nutritional Pellet"],
    traits: [
      {
        name: "Long Legs",
      },
      {
        name: "Orange Coloration",
      },
    ],
  },
];

const traits: TraitDetail[] = [
  {
    name: "TraitName1",
    gutFlora: ["GutFloraName1", "GutFloraName3"],
    foods: ["FoodName1", "FoodName2"],
  },
];

export { foods, gutFlora, traits };
