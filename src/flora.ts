import * as effect from "./effect";
import * as food from "./food";
interface GutFlora {
  name: string;
  image: string;
  description: string;
  foods: food.Food[];
  effects: effect.Effect[];
  rarities: number[];
}

const circle = 1;
const triangle = 3;
const diamond = 4;

export const x1042: GutFlora = {
  name: "0x1042",
  image: "flora_0_0",
  description:
    "An artificially engineered flora that aims to encourage dog growth.",
  foods: [food.chip, food.nutritionalPellet],
  effects: [effect.longLegs, effect.longLegs],
  rarities: [circle, circle],
};

export const flora01: GutFlora = {
  name: "???? ???????",
  image: "flora_0_1",
  description: "No data available.",
  foods: [food.unknown, food.unknown],
  effects: [effect.unknown],
  rarities: [circle],
};

export const bacillusVitus: GutFlora = {
  name: "Bacillus Vitus",
  image: "flora_0_2",
  description: "A sun-faded flora that looks like it's falling apart from age.",
  foods: [],
  effects: [effect.unknown],
  rarities: [circle],
};

export const bactoBacto: GutFlora = {
  name: "Bacto Bacto",
  image: "flora_0_3",
  description: "Double the flora, double the fun.",
  foods: [
    food.appleSlice,
    food.unknown,
    food.cutFruit,
    food.unknown,
    food.unknown,
  ],
  effects: [effect.narrowStance, effect.intensePattern],
  rarities: [diamond, circle],
};

export const bactocalcia: GutFlora = {
  name: "Bactocalcia",
  image: "flora_0_4",
  description: "Dense, dried, and fortified.",
  foods: [food.babyTooth],
  effects: [effect.glossySheen, effect.whiteTeeth, effect.big],
  rarities: [circle, circle, triangle],
};

export const canemLabo: GutFlora = {
  name: "Canem Labo",
  image: "flora_0_5",
  description: "A flora unique to the Wobbledog species.",
  foods: [
    food.wobbledogBody,
    food.wobbledogHead,
    food.wobbledogLeg,
    food.unknown,
    food.unknown,
  ],
  effects: [effect.randomMutations],
  rarities: [circle],
};

export const flora06: GutFlora = {
  name: "???? ??????????",
  image: "flora_0_6",
  description: "No data available.",
  foods: [food.unknown, food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown],
  rarities: [circle, circle, diamond],
};

export const caseusBacto: GutFlora = {
  name: "Caseus Bacto",
  image: "flora_0_7",
  description: "Really wanna chomp down on this thing.",
  foods: [food.chip, food.unknown],
  effects: [effect.longSnout, effect.shortEars, effect.tinyHorns],
  rarities: [circle, circle, circle],
};

export const caudiCaudi: GutFlora = {
  name: "Caudi Caudi",
  image: "flora_0_8",
  description:
    "Due to its snakelike appearance, some scientists report an unnatural fear of this flora.",
  foods: [food.garlicBread, food.pancake],
  effects: [effect.bigTail],
  rarities: [circle],
};

export const flora09: GutFlora = {
  name: "??????????",
  image: "flora_0_9",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown],
  rarities: [circle, circle, circle],
};


