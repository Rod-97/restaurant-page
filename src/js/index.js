import "../css/global.css";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";

displayHome();

function clearContent() {
  const content = document.querySelector("#content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach((navBtn) => {
  navBtn.addEventListener("click", () => clearContent());
});

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => displayHome());
menuBtn.addEventListener("click", () => displayMenu());
aboutBtn.addEventListener("click", () => displayAbout());
