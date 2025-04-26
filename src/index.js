import "./styles.css";
import { test } from "./second.js";
import recipeImage from "./recipe.jpg";

console.log(test);

const image = document.createElement("img");
image.src = recipeImage;
document.body.appendChild(image);
