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
      // Clear previous details
      detailsContainer.innerHTML = "";

      // Flora name and description
      const nameElement = document.createElement("h2");
      nameElement.textContent = floraItem.name;
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = floraItem.description;
      detailsContainer.appendChild(nameElement);
      detailsContainer.appendChild(descriptionElement);

      // Related Foods
      if (floraItem.foods && floraItem.foods.length > 0) {
        const foodsTitle = document.createElement("h3");
        foodsTitle.textContent = "Related Foods:";
        detailsContainer.appendChild(foodsTitle);
        const foodsList = document.createElement("ul");
        foodsList.classList.add("foods-list");
        floraItem.foods.forEach((food) => {
          const foodItem = document.createElement("li");

          // Use a span for the circle icon
          const iconSpan = document.createElement("span");
          iconSpan.classList.add("icon");
          iconSpan.innerHTML = "● ";
          foodItem.appendChild(iconSpan);

          const textNode = document.createTextNode(food.name);
          foodItem.appendChild(textNode);

          foodsList.appendChild(foodItem);
        });
        detailsContainer.appendChild(foodsList);
      }

      // Effects (Traits)
      if (floraItem.effects && floraItem.effects.length > 0) {
        const effectsTitle = document.createElement("h3");
        effectsTitle.textContent = "Promoted Effects:";
        detailsContainer.appendChild(effectsTitle);
        const effectsList = document.createElement("ul");
        effectsList.classList.add("effects-list");
        floraItem.effects.forEach((effect, index) => {
          const effectItem = document.createElement("li");

          // Determine the icon based on rarity
          let icon;
          switch (floraItem.rarities[index]) {
            case 1:
              icon = "●"; // Circle
              break;
            case 2:
              icon = "▲"; // Triangle
              break;
            case 3:
              icon = "♦"; // Diamond
              break;
            case 4:
              icon = "★"; // Star
              break;
            default:
              icon = "?"; // Fallback icon
          }

          // Use a span for the icon to style it separately if needed
          const iconSpan = document.createElement("span");
          iconSpan.classList.add("icon");
          iconSpan.innerHTML = icon + " "; // Add the icon and a space
          effectItem.appendChild(iconSpan);

          const textNode = document.createTextNode(effect.name);
          effectItem.appendChild(textNode);

          effectsList.appendChild(effectItem);
        });
        detailsContainer.appendChild(effectsList);
      }
    });
  });
}

// Function to populate the list of effects
function populateEffectList() {
  effectData.effects.forEach((effect) => {
    const listItem = document.createElement("li");
    listItem.textContent = effect.name;
    listItem.onclick = () => displayEffectDetails(effect.name);
    effectList.appendChild(listItem);
  });
}

// Function to filter the list of effects based on search input
function filterEffectList() {
  const searchValue = effectSearchInput.value.toLowerCase();
  const filteredEffects = effectData.effects.filter((effect) =>
    effect.name.toLowerCase().includes(searchValue),
  );

  effectList.innerHTML = ""; // Clear current list
  filteredEffects.forEach((effect) => {
    const listItem = document.createElement("li");
    listItem.textContent = effect.name;
    listItem.onclick = () => displayEffectDetails(effect.name);
    effectList.appendChild(listItem);
  });
}

function displayEffectDetails(effectName: string) {
  const effectDetails = document.getElementById("effectDetails");
  effectDetails.innerHTML = ""; // Clear previous details

  // Find flora that promote the selected effect
  const relatedFlora = flora.floras.filter((floraItem) =>
    floraItem.effects.some((effect) => effect.name === effectName),
  );

  relatedFlora.forEach((floraItem) => {
    // Create a container for each flora item
    const floraDiv = document.createElement("div");
    floraDiv.innerHTML = `<img src="data/flora/images/${floraItem.image}.png" alt="${floraItem.name}" title="${floraItem.name}">`;

    effectDetails.appendChild(floraDiv);

    // Add foods associated with this flora
    floraItem.foods.forEach((food) => {
      if (food !== foodData.unknown) {
        const foodDiv = document.createElement("div");
        foodDiv.innerHTML = `<img src="data/food/images/${food.image}.png" alt="${food.name}" title="${food.name}">`;
        effectDetails.appendChild(foodDiv);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", populateFloraGrid);

const effectSearchInput = document.getElementById(
  "effectSearchInput",
) as HTMLInputElement;
const effectList = document.getElementById("effectList");
effectSearchInput.addEventListener("input", filterEffectList);

document.addEventListener("DOMContentLoaded", () => {
  populateEffectList();
  filterEffectList(); // To initially populate the list
});
