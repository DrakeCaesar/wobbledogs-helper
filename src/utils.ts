export function createElementWithClass(
  elementType: string,
  className: string,
  textContent = "",
) {
  const element = document.createElement(elementType);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}
export function createImage(src: string) {
  const img = createElementWithClass("img", "") as HTMLImageElement;
  img.src = src;
  return img;
}
export function createIconSpan(icon: string) {
  const iconSpan = createElementWithClass("span", "icon");
  iconSpan.innerHTML = icon + " ";
  return iconSpan;
}
export function getRarityIcon(rarity: number) {
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
      return "?";
  }
}
export function appendChildren(parent: HTMLElement, children: any[]) {
  children.forEach((child: any) => parent.appendChild(child));
}
