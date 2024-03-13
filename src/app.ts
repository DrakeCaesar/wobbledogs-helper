// Import statements
import * as effectData from "./effect";
import * as flora from "./flora";
import {
  appendChildren,
  createElementWithClass,
  createIconSpan,
  createImage,
  getRarityIcon,
} from "./utils";

function populateFloraGrid() {
  const gridContainer = document.getElementById("floraGrid");
  const detailsContainer = document.getElementById("floraDetails");
  if (!gridContainer || !detailsContainer) return;

  flora.floras.forEach((floraItem) => {
    const gridItem = createElementWithClass("div", "grid-item");
    const img = createImage(`data/flora/images/${floraItem.image}.png`);
    const nameOverlay = createElementWithClass("div", "name", floraItem.name);

    appendChildren(gridItem, [nameOverlay, img]);
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener("click", () =>
      displayFloraDetails(floraItem, detailsContainer),
    );
  });
}

function displayFloraDetails(floraItem: flora.Flora, container: HTMLElement) {
  container.innerHTML = ""; // Clear previous details

  const nameElement = createElementWithClass("h2", "", floraItem.name);
  const descriptionElement = createElementWithClass(
    "p",
    "",
    floraItem.description,
  );
  appendChildren(container, [nameElement, descriptionElement]);

  displayRelatedFoodsSimple(floraItem, container);
  displayEffects(floraItem, container);
}

function displayEffects(floraItem: flora.Flora, container: HTMLElement) {
  if (floraItem.effects && floraItem.effects.length > 0) {
    const effectsTitle = createElementWithClass("h3", "", "Promoted Effects:");
    const effectsList = createElementWithClass("ul", "effects-list");
    floraItem.effects.forEach((effect: { name: string }, index: number) => {
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

function displayEffectDetails(effectName: string) {
  const effectDetails = document.getElementById("effectDetails") as HTMLElement;
  effectDetails.innerHTML = ""; // Clear previous details

  // Create separate containers for Flora and Foods
  const floraContainer = createElementWithClass("div", "flora-container");
  const foodsContainer = createElementWithClass("div", "foods-container");

  // Heading for Flora
  const floraHeading = createElementWithClass("h2", "flora-heading", "Flora");
  floraContainer.appendChild(floraHeading);
  // Heading for Foods
  const foodsHeading = createElementWithClass("h2", "foods-heading", "Foods");
  foodsContainer.appendChild(foodsHeading);

  // Display related flora by calling displayFloraItem
  flora.floras.forEach((floraItem) => {
    if (floraItem.effects.some((effect) => effect.name === effectName)) {
      displayFloraItem(floraItem, floraContainer, effectName);
    }
  });

  // Display related foods
  displayRelatedFoods(effectName, foodsContainer);

  // Append both containers to the main details container
  effectDetails.appendChild(floraContainer);
  effectDetails.appendChild(foodsContainer);
}
function displayFloraItem(
  floraItem: flora.Flora,
  container: HTMLElement,
  highlightEffectName: any,
) {
  const floraDiv = createElementWithClass("div", "grid-item");
  const img = createImage(`data/flora/images/${floraItem.image}.png`);
  const nameOverlay = createElementWithClass("div", "name", floraItem.name);
  appendChildren(floraDiv, [nameOverlay, img]);

  // Create a list for effects under each flora item
  const effectsList = createElementWithClass("ul", "effects-list");
  effectsList.style.listStyleType = "none"; // Remove default list styling
  effectsList.style.paddingLeft = "0"; // Left align the list

  floraItem.effects.forEach((effect: { name: string }) => {
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

function displayRelatedFoods(effectName: string, container: HTMLElement) {
  // Initialize a Set to keep track of processed foods to avoid duplicates
  const processedFoods = new Set();

  // Iterate over all flora to find those with the selected effect
  flora.floras.forEach((floraItem) => {
    floraItem.effects.forEach((effect) => {
      if (effect.name === effectName) {
        // For each flora with the selected effect, process its foods
        floraItem.foods.forEach((food) => {
          if (!processedFoods.has(food.name) && food.name !== "Unknown") {
            processedFoods.add(food.name);
            const foodDiv = createElementWithClass("div", "grid-item");
            const img = createImage(`data/food/images/${food.image}.png`);
            const nameOverlay = createElementWithClass(
              "div",
              "name",
              food.name,
            );
            appendChildren(foodDiv, [nameOverlay, img]);

            // Find all flora associated with this food
            const associatedFlora = flora.floras.filter((flora) =>
              flora.foods.some((f) => f.name === food.name),
            );

            // For each associated flora, list its effects
            associatedFlora.forEach((assocFlora) => {
              const floraEffectsList = createElementWithClass(
                "ul",
                "flora-effects-list",
              );
              assocFlora.effects.forEach((floraEffect) => {
                const effectLi = createElementWithClass("li", "");
                const iconSpan = createIconSpan(
                  getRarityIcon(
                    assocFlora.rarities[
                      assocFlora.effects.indexOf(floraEffect)
                    ],
                  ),
                );
                effectLi.appendChild(iconSpan);

                const effectText = document.createTextNode(floraEffect.name);
                effectLi.appendChild(effectText);

                // Highlight the searched effect
                if (floraEffect.name === effectName) {
                  effectLi.style.color = "yellow";
                }

                floraEffectsList.appendChild(effectLi);
              });

              // Append the flora name and its effects list to the food item
              const floraNameWithEffects = createElementWithClass("div", "");
              const floraName = createElementWithClass(
                "span",
                "flora-name",
                assocFlora.name + ": ",
              );
              floraNameWithEffects.appendChild(floraName);
              floraNameWithEffects.appendChild(floraEffectsList);
              foodDiv.appendChild(floraNameWithEffects);
            });

            container.appendChild(foodDiv);
          }
        });
      }
    });
  });
}

function displayRelatedFoodsSimple(
  effectName: flora.Flora,
  container: HTMLElement,
) {
  // Logic to find and display foods related to the effect
  // Similar to the flora display logic, but for foods
}
document.addEventListener("DOMContentLoaded", populateFloraGrid);

const effectSearchInput = document.getElementById(
  "effectSearchInput",
) as HTMLInputElement;
const effectList = document.getElementById("effectList") as HTMLElement;
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
