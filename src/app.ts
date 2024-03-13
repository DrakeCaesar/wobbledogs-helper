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

function displayRelatedFoods(floraItem, container) {
  if (floraItem.foods && floraItem.foods.length > 0) {
    const foodsTitle = createElementWithClass("h3", "", "Related Foods:");
    const foodsList = createElementWithClass("ul", "foods-list");
    floraItem.foods.forEach((food) => {
      const foodItem = createElementWithClass("li", "");
      const iconSpan = createIconSpan("●");
      appendChildren(foodItem, [iconSpan, document.createTextNode(food.name)]);
      foodsList.appendChild(foodItem);
    });
    appendChildren(container, [foodsTitle, foodsList]);
  }
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

  // Create and append the 'Flora' heading
  const floraHeading = document.createElement("h2");
  floraHeading.textContent = "Flora";
  effectDetails.appendChild(floraHeading);

  // Find and display flora that promote the selected effect
  flora.floras.forEach((floraItem) => {
    if (floraItem.effects.some((effect) => effect.name === effectName)) {
      const floraDiv = document.createElement("div");
      floraDiv.classList.add("grid-item");

      const img = document.createElement("img");
      img.src = `data/flora/images/${floraItem.image}.png`;
      img.alt = floraItem.name;
      floraDiv.appendChild(img);

      const nameOverlay = document.createElement("div");
      nameOverlay.classList.add("name");
      nameOverlay.textContent = floraItem.name;
      floraDiv.appendChild(nameOverlay);

      effectDetails.appendChild(floraDiv);

      // Display effects, highlighting the searched effect
      floraItem.effects.forEach((effect) => {
        const effectText = document.createElement("p");
        effectText.textContent = effect.name;
        if (effect.name === effectName) {
          effectText.style.backgroundColor = "yellow";
        }
        floraDiv.appendChild(effectText);
      });
    }
  });

  // Create and append the 'Foods' heading
  const foodsHeading = document.createElement("h2");
  foodsHeading.textContent = "Foods";
  effectDetails.appendChild(foodsHeading);

  // Find and display foods related to the flora that promote the selected effect
  const relatedFoods = [];
  flora.floras.forEach((floraItem) => {
    if (floraItem.effects.some((effect) => effect.name === effectName)) {
      floraItem.foods.forEach((food) => {
        if (!relatedFoods.some((f) => f.name === food.name)) {
          relatedFoods.push(food);
        }
      });
    }
  });

  relatedFoods.forEach((food) => {
    const foodDiv = document.createElement("div");
    foodDiv.classList.add("grid-item");

    const img = document.createElement("img");
    img.src = `data/food/images/${food.image}.png`;
    img.alt = food.name;
    foodDiv.appendChild(img);

    const nameOverlay = document.createElement("div");
    nameOverlay.classList.add("name");
    nameOverlay.textContent = food.name;
    foodDiv.appendChild(nameOverlay);

    effectDetails.appendChild(foodDiv);
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

setTimeout(() => {
  (
    document.querySelector("#effectList > li:nth-child(8)") as HTMLElement
  ).click();
}, 100);
