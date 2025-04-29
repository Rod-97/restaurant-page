import jackSparrow from "../images/jack-sparrow.jpg";
import elizabethSwann from "../images/elizabeth-swann.jpg";
import tiaDalma from "../images/tia-dalma.png";
import hectorBarbossa from "../images/hector-barbossa.jpeg";
import willTurner from "../images/will-turner.jpg";
import carinaSmyth from "../images/carina-smyth.jpg";

function getChefs() {
  return [
    {
      name: "Jack Sparrow",
      imgSrc: jackSparrow,
      number: "+123456",
    },
    {
      name: "Elizabeth Swann",
      imgSrc: elizabethSwann,
      number: "+234567",
    },
    { name: "Tia Dalma", imgSrc: tiaDalma, number: "+345678" },
    {
      name: "Hector Barbossa",
      imgSrc: hectorBarbossa,
      number: "+456789",
    },
    { name: "Will Turner", imgSrc: willTurner, number: "+567890" },
    { name: "Carina Smyth", imgSrc: carinaSmyth, number: "+678901" },
  ];
}

export function displayAbout() {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  about.id = "about";

  const data = getChefs();

  data.forEach((chef) => {
    const card = document.createElement("div");
    const name = document.createElement("h1");
    const img = document.createElement("img");
    const number = document.createElement("div");

    card.classList.add("card");
    number.classList.add("price");

    name.textContent = chef.name;
    img.src = chef.imgSrc;
    number.textContent = chef.number;

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(number);
    about.appendChild(card);
  });

  content.appendChild(about);
}
