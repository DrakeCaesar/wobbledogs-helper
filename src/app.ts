// Import statements
import * as effectData from "./effect";
import * as flora from "./flora";
import * as foodData from "./food";

// Utility function to find flora by name
function findFloraByName(name: string): flora.Flora | undefined {
  return flora.floras.find((f) => f.name.toLowerCase() === name.toLowerCase());
}

// Utility function to find food by name
function findFoodByName(name: string): foodData.Food | undefined {
  return foodData.foods.find(
    (f) => f.name.toLowerCase() === name.toLowerCase(),
  );
}

// Utility function to find effect by name
function findEffectByName(name: string): effectData.Effect | undefined {
  return effectData.effects.find(
    (e) => e.name.toLowerCase() === name.toLowerCase(),
  );
}

// Display logic for flora
function displayFloraInfo(floraName: string) {
  const flora = findFloraByName(floraName);
  if (!flora) {
    console.log("Flora not found");
    return;
  }
  // Display flora information, foods, and effects
  console.log(`Flora: ${flora.name}`);
  console.log("Foods:");
  flora.foods.forEach((food) => console.log(`- ${food.name}`));
  console.log("Effects:");
  flora.effects.forEach((effect, index) =>
    console.log(`- ${effect.name} (Rarity: ${flora.rarities[index]})`),
  );
}

function populateFloraGrid() {
  const gridContainer = document.getElementById("floraGrid");
  const detailsContainer = document.getElementById("floraDetails"); // Get the details container
  if (!gridContainer || !detailsContainer) return;

  flora.floras.forEach((floraItem) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    const img = document.createElement("img");
    img.src = `data/flora/images/${floraItem.image}.png`;
    img.alt = floraItem.name;

    const nameOverlay = document.createElement("div");
    nameOverlay.classList.add("name");
    nameOverlay.textContent = floraItem.name; // Display name on hover

    gridItem.appendChild(img);
    gridItem.appendChild(nameOverlay);
    gridContainer.appendChild(gridItem);

    // Add click event listener to populate and show the details pane
    gridItem.addEventListener("click", () => {
      detailsContainer.innerHTML = `<h2>${floraItem.name}</h2><p>${floraItem.description}</p>`;
      // Optionally, display related foods and effects here
    });
  });
}

document.addEventListener("DOMContentLoaded", populateFloraGrid);
