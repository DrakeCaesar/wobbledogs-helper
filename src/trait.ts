export interface Trait {
  name: string;
}

export const unknown: Trait = { name: "Unknown" };
export const longLegs: Trait = { name: "Long Legs" };
export const orangeColoration: Trait = { name: "Orange Coloration" };

export const traits: Trait[] = [unknown, longLegs, orangeColoration];
