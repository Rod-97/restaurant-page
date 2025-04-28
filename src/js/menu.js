import couCou from "../images/cou-cou.jpeg";
import cubanCrunchwrap from "../images/cuban-crunchwrap.jpg";
import jamaicanBeefPatties from "../images/jamaican-beef-patties.jpg";
import laBanderaDominicana from "../images/la-bandera-dominicana.jpg";
import chorreadas from "../images/chorreadas.jpg";
import tembleque from "../images/tembleque.jpeg";
import mudslide from "../images/mudslide.jpeg";
import skyJuice from "../images/sky-juice.jpeg";
import miamiVice from "../images/miami-vice.jpg";

function countryCodeToFlagEmoji(countryCode) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

function getMenu() {
  return [
    {
      name: "Cou Cou",
      imgSrc: couCou,
      flag: countryCodeToFlagEmoji("bb"),
      price: "$13",
    },
    {
      name: "Cuban Crunchwrap",
      imgSrc: cubanCrunchwrap,
      flag: countryCodeToFlagEmoji("cu"),
      price: "$15",
    },
    {
      name: "Jamaican Beef Patties",
      imgSrc: jamaicanBeefPatties,
      flag: countryCodeToFlagEmoji("jm"),
      price: "$8",
    },
    {
      name: "La Bandera Dominicana",
      imgSrc: laBanderaDominicana,
      flag: countryCodeToFlagEmoji("do"),
      price: "$16",
    },
    {
      name: "Chorreadas",
      imgSrc: chorreadas,
      flag: countryCodeToFlagEmoji("cr"),
      price: "$10",
    },
    {
      name: "Tembleque",
      imgSrc: tembleque,
      flag: countryCodeToFlagEmoji("pr"),
      price: "$9",
    },
    {
      name: "Mudslide",
      imgSrc: mudslide,
      flag: countryCodeToFlagEmoji("ky"),
      price: "$12",
    },
    {
      name: "Sky Juice",
      imgSrc: skyJuice,
      flag: countryCodeToFlagEmoji("bs"),
      price: "$10",
    },
    {
      name: "Miami Vice",
      imgSrc: miamiVice,
      flag: countryCodeToFlagEmoji("us"),
      price: "$15",
    },
  ];
}

export function displayMenu() {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.id = "menu";

  const data = getMenu();

  data.forEach((el) => {
    const card = document.createElement("div");
    const name = document.createElement("h1");
    const flag = document.createElement("span");
    const img = document.createElement("img");
    const price = document.createElement("div");

    card.classList.add("card");
    price.classList.add("price");

    name.textContent = el.name;
    img.src = el.imgSrc;
    flag.textContent = el.flag;
    price.textContent = el.price;

    card.appendChild(name);
    card.appendChild(flag);
    card.appendChild(img);
    card.appendChild(price);
    menu.appendChild(card);
  });

  content.appendChild(menu);
}
