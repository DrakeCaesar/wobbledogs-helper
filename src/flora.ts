import * as effect from "./effect";
import * as food from "./food";
export interface Flora {
  name: string;
  image: string;
  description: string;
  foods: food.Food[];
  effects: effect.Effect[];
  rarities: number[];
}

const circle = 1;
const triangle = 2;
const diamond = 3;
const star = 4;

export const x1042: Flora = {
  name: "0x1042",
  image: "flora_0_0",
  description:
    "An artificially engineered flora that aims to encourage dog growth.",
  foods: [food.chip, food.nutritionalPellet],
  effects: [effect.longLegs, effect.longLegs],
  rarities: [circle, circle],
};

export const flora01: Flora = {
  name: "???? ???????",
  image: "flora_0_1",
  description: "No data available.",
  foods: [food.unknown, food.unknown],
  effects: [effect.unknown],
  rarities: [circle],
};

export const bacillusVitus: Flora = {
  name: "Bacillus Vitus",
  image: "flora_0_2",
  description: "A sun-faded flora that looks like it's falling apart from age.",
  foods: [],
  effects: [effect.unknown],
  rarities: [circle],
};

export const bactoBacto: Flora = {
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

export const bactocalcia: Flora = {
  name: "Bactocalcia",
  image: "flora_0_4",
  description: "Dense, dried, and fortified.",
  foods: [food.babyTooth],
  effects: [effect.glossySheen, effect.whiteTeeth, effect.big],
  rarities: [circle, circle, triangle],
};

export const canemLabo: Flora = {
  name: "Canem Labo",
  image: "flora_0_5",
  description: "A flora unique to the Wobbledog species.",
  foods: [food.dogBody, food.dogHead, food.dogLeg, food.unknown, food.unknown],
  effects: [effect.randomMutations],
  rarities: [circle],
};

export const flora06: Flora = {
  name: "???? ??????????",
  image: "flora_0_6",
  description: "No data available.",
  foods: [food.unknown, food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown],
  rarities: [circle, circle, diamond],
};

export const caseusBacto: Flora = {
  name: "Caseus Bacto",
  image: "flora_0_7",
  description: "Really wanna chomp down on this thing.",
  foods: [food.chip, food.unknown],
  effects: [effect.longSnout, effect.shortEars, effect.tinyHorns],
  rarities: [circle, circle, circle],
};

export const caudiCaudi: Flora = {
  name: "Caudi Caudi",
  image: "flora_0_8",
  description:
    "Due to its snakelike appearance, some scientists report an unnatural fear of this flora.",
  foods: [food.garlicBread, food.pancake],
  effects: [effect.bigTail],
  rarities: [circle],
};

export const flora09: Flora = {
  name: "??????????",
  image: "flora_0_9",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown],
  rarities: [circle, circle, circle],
};

export const clisotriumLatriphilius: Flora = {
  name: "Clisotrium Latriphilius",
  image: "flora_1_0",
  description:
    "A beneficial flora often used to help acclimate dogs to cold weather climates.",
  foods: [food.burrito, food.coconut, food.unknown, food.cheeseBall],
  effects: [effect.thickBody, effect.shortLegs],
  rarities: [circle, circle],
};

export const flora11: Flora = {
  name: "??????????",
  image: "flora_1_1",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown],
  rarities: [circle, circle],
};

export const contrarialius: Flora = {
  name: "Contrarialius",
  image: "flora_2_2",
  description: "Sort of hard to pronounce, but that's not really its fault.",
  foods: [food.coconut, food.unknown, food.unknown, food.unknown],
  effects: [effect.invertedSnout, effect.wideStance],
  rarities: [triangle, circle],
};

export const flora13: Flora = {
  name: "??????????",
  image: "flora_1_3",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown],
  rarities: [circle, circle],
};

export const crysalia: Flora = {
  name: "Crysalia",
  image: "flora_1_4",
  description: "A flora found in the cocoon drippings.",
  foods: [food.unknown, food.emptyCocoon],
  effects: [effect.unknown, effect.randomMutations],
  rarities: [star, circle],
};

export const candidaNeutralia: Flora = {
  name: "Candida Neutralia",
  image: "flora_1_5",
  description: "A standard flora found in nearly all dog-based lifeforms.",
  foods: [],
  effects: [effect.defaultColoration],
  rarities: [circle],
};

export const dirt: Flora = {
  name: "Dirt",
  image: "flora_1_6",
  description: "Seriously, it's just dirt.",
  foods: [food.dirtClump],
  effects: [effect.brownColoration],
  rarities: [triangle],
};

export const dropilia: Flora = {
  name: "Dropilia",
  image: "flora_1_7",
  description:
    "A cluster of goopy organisms that honestly looks kind of gross.",
  foods: [food.hamSlider, food.moonCheese],
  effects: [effect.hamLikeBody, effect.droopyFace],
  rarities: [triangle, circle],
};

export const ectobacter: Flora = {
  name: "Ectobacter",
  image: "flora_1_8",
  description: "It might hurt to step on this flora if it wasn't so small.",
  foods: [food.dehydratedTreat, food.moonCheese, food.unknown],
  effects: [effect.skinnyLegs, effect.thinBody, effect.tinyTail],
  rarities: [triangle, circle, circle],
};

export const flora19: Flora = {
  name: "????????????",
  image: "flora_1_9",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown],
  rarities: [circle, circle, diamond],
};

export const enteria: Flora = {
  name: "Enteria",
  image: "flora_2_0",
  description: "Vaguely paw-shaped. I think it's nice.",
  foods: [food.unknown, food.fruitCake],
  effects: [effect.narrowStance, effect.metallicSheen],
  rarities: [diamond, circle],
};

export const ferulia: Flora = {
  name: "Feruli",
  image: "flora_2_1",
  description: "A two-toned flora that seems inviting.",
  foods: [food.candyCane],
  effects: [
    effect.whiteBody,
    effect.whiteLegs,
    effect.redPattern,
    effect.intensePattern,
    effect.redNoseEars,
  ],
  rarities: [circle, circle, circle, circle, circle],
};

export const flora22: Flora = {
  name: "??????",
  image: "flora_2_2",
  description: "No data available.",
  foods: [food.unknown],
  effects: [
    effect.unknown,
    effect.unknown,
    effect.unknown,
    effect.unknown,
    effect.unknown,
  ],
  rarities: [circle, triangle, triangle, circle, triangle],
};

export const flora23: Flora = {
  name: "??????????",
  image: "flora_2_3",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown],
  rarities: [circle, circle, circle],
};

export const flora24: Flora = {
  name: "?????????",
  image: "flora_2_4",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown],
  rarities: [circle, circle, triangle],
};

export const luciumColi: Flora = {
  name: "Lucium Coli",
  image: "flora_2_5",
  description: "An incredible flora that spreads its charm wherever it goes.",
  foods: [food.unknown, food.alienFruit, food.unknown, food.unknown],
  effects: [effect.thickLegs, effect.glossySheen],
  rarities: [diamond, circle],
};

export const luxillium: Flora = {
  name: "Luxillium",
  image: "flora_2_6",
  description: "A contemptuous flora that can't be ignored.",
  foods: [food.fruitCake],
  effects: [effect.invertedSnout, effect.tinyWings, effect.thickBody],
  rarities: [circle, circle, triangle],
};

export const magnilium: Flora = {
  name: "Magnilium",
  image: "flora_2_7",
  description: "I sense great things from this humble flora.",
  foods: [food.lasagna, food.pizzaBagel, food.onionRing],
  effects: [effect.big],
  rarities: [circle],
};

export const flora28: Flora = {
  name: "???????????",
  image: "flora_2_8",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown],
  rarities: [circle, circle, circle],
};

export const flora29: Flora = {
  name: "???????????",
  image: "flora_2_9",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown],
  rarities: [circle, circle],
};

export const nasusEnterica: Flora = {
  name: "Nasus Enterica",
  image: "flora_3_0",
  description: "Lots of different shapes going on in here.",
  foods: [food.garlicBread, food.pizzaBagel, food.unknown, food.cheeseBall],
  effects: [effect.bigNose],
  rarities: [circle],
};

export const peptocoli: Flora = {
  name: "Peptocoli",
  image: "flora_3_1",
  description: "A sensible flora with a pleasing palette.",
  foods: [food.cutFruit, food.onionRing, food.unknown],
  effects: [effect.shortBody, effect.yellowColoration, effect.tinyWings],
  rarities: [circle, triangle, triangle],
};

export const flora31: Flora = {
  name: "????????? ????",
  image: "flora_3_2",
  description: "No data available.",
  foods: [food.unknown],
  effects: [],
  rarities: [],
};

export const phenobacti: Flora = {
  name: "Phenobacti",
  image: "flora_3_3",
  description: "Crystalized flora with a mysterious past.",
  foods: [
    food.unknown,
    food.unknown,
    food.chickenNugget,
    food.unknown,
    food.unknown,
  ],
  effects: [effect.small],
  rarities: [circle],
};

export const phriole: Flora = {
  name: "Phriole",
  image: "flora_3_4",
  description:
    "A branch-like flora that incidentally mirrors the foods that contain it.",
  foods: [food.frenchFry, food.unknown],
  effects: [effect.thinBody, effect.longBody],
  rarities: [triangle, triangle],
};

export const planumMirabilis: Flora = {
  name: "Planum Mirabilis",
  image: "flora_3_5",
  description: "Looks like a bunch of worms.",
  foods: [food.pancake, food.moonCheese],
  effects: [effect.flatBody, effect.wideBody],
  rarities: [triangle, triangle],
};

const flora36: Flora = {
  name: "Poculli",
  image: "flora_3_6",
  description: "A healthy flora with much potential.",
  foods: [food.sampleCup],
  effects: [
    effect.yellowNoseEars,
    effect.shortSnout,
    effect.intensePattern,
    effect.randomMutations,
  ],
  rarities: [circle, triangle, circle, circle],
};

export const proteusIncognia: Flora = {
  name: "Proteus Incognia",
  image: "flora_3_7",
  description: "Aw, who's this lil' guy?",
  foods: [food.alienFruit],
  effects: [
    effect.longEars,
    effect.tinyNose,
    effect.greenColoration,
    effect.purpleBody,
    effect.orangeNoseEars,
  ],
  rarities: [circle, circle, triangle, triangle, triangle],
};

export const flora38: Flora = {
  name: "?????????????",
  image: "flora_3_8",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown],
  rarities: [triangle, circle, circle],
};

export const protrusia: Flora = {
  name: "Protrusia",
  image: "flora_3_9",
  description: "This flora is a healthy addition to any canine diet.",
  foods: [food.banana, food.candyCane],
  effects: [effect.longLegs, effect.longBody],
  rarities: [circle, triangle],
};

export const ratium: Flora = {
  name: "Ratium",
  image: "flora_4_0",
  description: "A tidy flora with an honest sensibility.",
  foods: [food.honeyComb],
  effects: [effect.yellowBody, effect.blackPattern],
  rarities: [circle, circle],
};

export const scaph: Flora = {
  name: "Scaph",
  image: "flora_4_1",
  description:
    "Commonly found in waste, this flora is unhelpful and potentially dangerous.",
  foods: [food.halfEatenFood, food.poop],
  effects: [effect.randomMutations],
  rarities: [triangle],
};

export const flora42: Flora = {
  name: "?????????",
  image: "flora_4_2",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown],
  rarities: [circle, circle],
};

export const snow: Flora = {
  name: "Snow",
  image: "flora_4_3",
  description: "It's just snow. Feels like this should've melted.",
  foods: [food.snowball],
  effects: [effect.whiteColoration],
  rarities: [triangle],
};

export const flora44: Flora = {
  name: "??????????",
  image: "flora_4_4",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown, effect.unknown, effect.unknown],
  rarities: [circle, circle, circle, circle],
};

export const flora45: Flora = {
  name: "????????",
  image: "flora_4_5",
  description: "No data available.",
  foods: [food.unknown],
  effects: [effect.unknown, effect.unknown],
  rarities: [circle, circle],
};

export const floras: Flora[] = [
  x1042,
  flora01,
  bacillusVitus,
  bactoBacto,
  bactocalcia,
  canemLabo,
  flora06,
  caseusBacto,
  caudiCaudi,
  flora09,
  clisotriumLatriphilius,
  flora11,
  contrarialius,
  flora13,
  crysalia,
  candidaNeutralia,
  dirt,
  dropilia,
  ectobacter,
  flora19,
  enteria,
  ferulia,
  flora22,
  flora23,
  flora24,
  luciumColi,
  luxillium,
  magnilium,
  flora28,
  flora29,
  nasusEnterica,
  peptocoli,
  flora31,
  phenobacti,
  phriole,
  planumMirabilis,
  flora36,
  proteusIncognia,
  flora38,
  protrusia,
  ratium,
  scaph,
  flora42,
  snow,
  flora44,
  flora45,
];
export default floras;
