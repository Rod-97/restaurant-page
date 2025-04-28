export function displayAbout() {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  about.id = "about";
  about.textContent = "About";
  content.appendChild(about);
}
