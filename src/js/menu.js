export function displayMenu() {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.textContent = "Menu";
  content.appendChild(menu);
}
