export function displayHome() {
  const content = document.querySelector("#content");
  const textContainer = document.createElement("div");
  const title = document.createElement("h1");
  const paragraph = document.createElement("p");
  textContainer.classList.add("text-container");
  title.textContent = "Welcome to Seaboard Paradise!";
  paragraph.textContent =
    "  In this restaurant, we believe in providing the best possible experience to our clients. Savour our delicious Carribbean food and sip on the tastiest cocktails as you glance at the beautiful sea!";
  textContainer.appendChild(title);
  textContainer.appendChild(paragraph);
  content.appendChild(textContainer);
}
