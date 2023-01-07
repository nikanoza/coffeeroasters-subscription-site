import { Danche, GranEspresso, Piccollo, Planalto } from "../../assets";
import { CardType, Coffee } from "../../types";
import { CoffeeIcon, Gift, Truck } from "../../svg";

export const coffees: Coffee[] = [
  {
    image: GranEspresso,
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    image: Planalto,
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    image: Piccollo,
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
  },
  {
    image: Danche,
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

export const CardItems: CardType[] = [
  {
    image: CoffeeIcon,
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: Gift,
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: Truck,
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];
