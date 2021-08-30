import mainDishes from "./MainDishesData.js";
import drinks from "./DrinksData.js";
import deserts from "./DesertsData.js";

const serverData = [
    {titleText: "Primeiro, seu Prato", type: "Pratos", array: mainDishes},
    {titleText: "Agora, sua bebida", type: "Bebidas", array: drinks},
    {titleText: "Por fim, a sobremesa", type: "Sobremesas", array: deserts}
];

export default serverData;