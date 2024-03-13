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

function createElementWithClass(elementType, className, textContent = "") {
  const element = document.createElement(elementType);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

function createImage(src, alt) {
  const img = createElementWithClass("img", "");
  img.src = src;
  img.alt = alt;
  return img;
}

function createIconSpan(icon) {
  const iconSpan = createElementWithClass("span", "icon");
  iconSpan.innerHTML = icon + " ";
  return iconSpan;
}

function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}

function populateFloraGrid() {
  const gridContainer = document.getElementById("floraGrid");
  const detailsContainer = document.getElementById("floraDetails");
  if (!gridContainer || !detailsContainer) return;

  flora.floras.forEach((floraItem) => {
    const gridItem = createElementWithClass("div", "grid-item");
    const img = createImage(
      `data/flora/images/${floraItem.image}.png`,
      floraItem.name,
    );
    const nameOverlay = createElementWithClass("div", "name", floraItem.name);

    appendChildren(gridItem, [img, nameOverlay]);
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener("click", () =>
      displayFloraDetails(floraItem, detailsContainer),
    );
  });
}

function displayFloraDetails(floraItem, container) {
  container.innerHTML = ""; // Clear previous details

  const nameElement = createElementWithClass("h2", "", floraItem.name);
  const descriptionElement = createElementWithClass(
    "p",
    "",
    floraItem.description,
  );
  appendChildren(container, [nameElement, descriptionElement]);

  displayRelatedFoods(floraItem, container);
  displayEffects(floraItem, container);
}

function displayRelatedFoods(effectName, container) {
  // Initialize a Set to keep track of processed foods to avoid duplicates
  const processedFoods = new Set();

  // Iterate over all flora to find those with the selected effect
  flora.floras.forEach((floraItem) => {
    floraItem.effects.forEach((effect) => {
      if (effect.name === effectName && effect !== effectData.unknown) {
        // For each flora with the selected effect, process its foods
        floraItem.foods.forEach((food) => {
          if (!processedFoods.has(food.name) && food !== foodData.unknown) {
            processedFoods.add(food.name);
            const foodDiv = createElementWithClass("div", "grid-item");
            const img = createImage(
              `data/food/images/${food.image}.png`,
              food.name,
            );
            const nameOverlay = createElementWithClass(
              "div",
              "name",
              food.name,
            );
            foodDiv.appendChild(img);
            foodDiv.appendChild(nameOverlay);

            // Find all flora associated with this food
            const associatedFlora = flora.floras.filter((flora) =>
              flora.foods.some((f) => f.name === food.name),
            );

            // Create a list of associated flora
            const floraList = createElementWithClass("ul", "flora-list");
            const effectsSet = new Set(); // To track unique effects

            associatedFlora.forEach((assocFlora) => {
              const floraItemLi = createElementWithClass(
                "li",
                "",
                assocFlora.name,
              );
              floraList.appendChild(floraItemLi);

              // Aggregate effects from associated flora
              assocFlora.effects.forEach((effect) => {
                effectsSet.add(
                  effect.name +
                    getRarityIcon(
                      assocFlora.rarities[assocFlora.effects.indexOf(effect)],
                    ),
                );
              });
            });

            foodDiv.appendChild(floraList);

            // Create a list of unique effects for this food
            const effectsList = createElementWithClass("ul", "effects-list");
            effectsSet.forEach((effect) => {
              const effectLi = createElementWithClass("li", "", effect);
              effectsList.appendChild(effectLi);
            });

            foodDiv.appendChild(effectsList);
            container.appendChild(foodDiv);
          }
        });
      }
    });
  });
}

function displayEffects(floraItem, container) {
  if (floraItem.effects && floraItem.effects.length > 0) {
    const effectsTitle = createElementWithClass("h3", "", "Promoted Effects:");
    const effectsList = createElementWithClass("ul", "effects-list");
    floraItem.effects.forEach((effect, index) => {
      const effectItem = createElementWithClass("li", "");
      const icon = getRarityIcon(floraItem.rarities[index]);
      const iconSpan = createIconSpan(icon);
      appendChildren(effectItem, [
        iconSpan,
        document.createTextNode(effect.name),
      ]);
      effectsList.appendChild(effectItem);
    });
    appendChildren(container, [effectsTitle, effectsList]);
  }
}

function getRarityIcon(rarity) {
  switch (rarity) {
    case 1:
      return "●"; // Circle
    case 2:
      return "▲"; // Triangle
    case 3:
      return "♦"; // Diamond
    case 4:
      return "★"; // Star
    default:
      return "?"; // Fallback icon
  }
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
  const filteredEffects = effectData.effects.filter(
    (effect) =>
      effect.name.toLowerCase().includes(searchValue) &&
      effect != effectData.unknown,
  );

  effectList.innerHTML = ""; // Clear current list
  filteredEffects.forEach((effect) => {
    const listItem = document.createElement("li");
    listItem.textContent = effect.name;
    listItem.onclick = () => displayEffectDetails(effect.name);
    effectList.appendChild(listItem);
  });
}

function displayEffectDetails(effectName) {
  const effectDetails = document.getElementById("effectDetails");
  effectDetails.innerHTML = ""; // Clear previous details

  // Heading for Flora
  const floraHeading = createElementWithClass("h2", "", "Flora");
  effectDetails.appendChild(floraHeading);

  // Display related flora by calling displayFloraItem
  flora.floras.forEach((floraItem) => {
    if (
      floraItem.effects.some(
        (effect) => effect.name === effectName && effect.name !== "Unknown",
      )
    ) {
      displayFloraItem(floraItem, effectDetails, effectName);
    }
  });

  // Heading for Foods
  const foodsHeading = createElementWithClass("h2", "", "Foods");
  effectDetails.appendChild(foodsHeading);

  // Display related foods
  displayRelatedFoods(effectName, effectDetails);
}
function displayFloraItem(floraItem, container, highlightEffectName) {
  const floraDiv = createElementWithClass("div", "grid-item");
  const img = createImage(
    `data/flora/images/${floraItem.image}.png`,
    floraItem.name,
  );
  const nameOverlay = createElementWithClass("div", "name", floraItem.name);
  appendChildren(floraDiv, [img, nameOverlay]);

  // Create a list for effects under each flora item
  const effectsList = createElementWithClass("ul", "effects-list");
  effectsList.style.listStyleType = "none"; // Remove default list styling
  effectsList.style.paddingLeft = "0"; // Left align the list

  floraItem.effects.forEach((effect) => {
    const effectItem = createElementWithClass("li", "");
    const iconSpan = createIconSpan(
      getRarityIcon(floraItem.rarities[floraItem.effects.indexOf(effect)]),
    );
    effectItem.appendChild(iconSpan);

    const effectText = document.createTextNode(effect.name);
    effectItem.appendChild(effectText);

    // Highlight the searched effect
    if (effect.name === highlightEffectName) {
      effectItem.style.color = "yellow";
    }

    effectsList.appendChild(effectItem);
  });

  floraDiv.appendChild(effectsList);
  container.appendChild(floraDiv);
}

// function displayRelatedFoods(effectName, container) {
//   // Logic to find and display foods related to the effect
//   // Similar to the flora display logic, but for foods
// }
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

setTimeout(() => {
  (
    document.querySelector("#effectList > li:nth-child(8)") as HTMLElement
  ).click();
}, 100);
