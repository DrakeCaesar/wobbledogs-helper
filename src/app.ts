interface Food {
  name: string;
  image: string;
  source: string;
  gutFlora: string[];
}

interface GutFlora {
  name: string;
  image: string;
  shinyImage?: string;
  foods: string[];
  traits: string[];
}

interface Trait {
  name: string;
  gutFlora: string[];
  foods: string[];
}

interface Catalog {
  foods: Food[];
  gutFlora: GutFlora[];
  traits: Trait[];
}

// Fetching and rendering logic goes here
document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data: Catalog) => {
      console.log(data); // Implement rendering logic based on your app's design
    });
});
