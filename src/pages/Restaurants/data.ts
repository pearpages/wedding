import fondaCobadana from "./images/fonda-cobadana.jpg";
import das1219 from "./images/das1219.jpg";
import laTasca from "./images/la-tasca-de-bellver.jpg";
import laCaleche from "./images/la-caleche.jpg";
import calCofa from "./images/Restaurant-Cal-Cofa-114066.jpg";
import laFormatgeria from "./images/la-formatgeria-de-llivia.jpg";
import pizzeriaSantRoc from "./images/pizzeria-sant-roc.jpg";
import pizzaStick from "./images/pizza-stick.jpg";
import caLaNuria from "./images/restaurant-ca-la-nuria.jpg";
import syrah from "./images/syrah.jpg";
import barBodeguin from "./images/bar-bodeguin.jpg";
import xocolata from "./images/xocolata-pirineus-puigcerda-cerdanya-1-copyright-amigastronomicas.jpg";

export interface Restaurant {
  name: string;
  image: string;
  price: number;
  cousine: string;
  address: string;
}

export const data: Restaurant[] = [
  {
    name: "Fonda Cobadana Restaurant",
    image: fondaCobadana,
    price: 2,
    cousine: "Cocina Catalana",
    address: "Camino Rota, 11, 17538 Urús, Girona"
  },
  {
    name: "Das1219",
    image: das1219,
    price: 3,
    cousine: "Cocina Catalana",
    address: "Plaça Major, 1, 17538 Das, Girona"
  },
  {
    name: "Pizza Stick Cerdanya",
    image: pizzaStick,
    price: 1,
    cousine: "Pizzería",
    address:
      "Carrer de la Rufaca, 6, 17538 Escadarcs, Girona<br/>Rbla. Josep M. Martí, 1, 17520 Puigcerdà, Girona<br/>C/ Francesc Macià, 20, 25720 Bellver de Cerdanya"
  },
  {
    name: "Restaurant La Calèche",
    image: laCaleche,
    price: 3,
    cousine: "Cocina mediterránea",
    address: "Travessera dels Forns, 7, 17527 Llívia, Girona"
  },
  {
    name: "Restaurant Cal Cofa",
    image: calCofa,
    price: 2,
    cousine: "Cocina mediterránea",
    address: "Carrer Frederic Bernades, 1, 17527 Llívia, Girona"
  },
  {
    name: "La Formatgeria de Llivia",
    image: laFormatgeria,
    price: 2,
    cousine: "Fondues, raclettes y cocina de montaña",
    address: "Pla de Ro, s/n, 17527 Llívia, Girona"
  },
  {
    name: "Pizzeria Sant Roc",
    image: pizzeriaSantRoc,
    price: 1,
    cousine: "Pizzería",
    address: "Plaça de Sant Roc, 4, 5, 25720 Bellver de Cerdanya, Lleida"
  },
  {
    name: "Restaurant Ca la Núria",
    image: caLaNuria,
    price: 2,
    cousine: "Menú de cocina mediterránea",
    address: "Batllia, 61-63, 25720 Bellver de Cerdanya, Lleida"
  },

  {
    name: "Syrah",
    image: syrah,
    price: 2,
    cousine: "Tapas y platillos para compartir",
    address: "Carrer Escoles, 3, 25720 Bellver de Cerdanya, Lleida"
  },
  {
    name: "Xocolata Pirineus",
    image: xocolata,
    price: 1,
    cousine: "Caferería",
    address:
      "Avinguda de Catalunya, 49, 17520 Puigcerdà, Girona<br/>Plaça de Barcelona, S/N, 17520 Puigcerdà, Girona"
  },
  {
    name: "La Tasca de Bellver",
    image: laTasca,
    price: 1,
    cousine: "Bocadillos y parrillada",
    address: "Plaza del árbol 1, 25720 Bellver de Cerdanya, Lleida"
  },
  {
    name: "Bodeguin",
    image: barBodeguin,
    price: 1,
    cousine: "Vermut",
    address: "Plaza del Casino, 6, 17538 Alp, Girona"
  }
];
