import { Card, cardElement } from '../types/cardType';


// La idea es aquí consumir una API que nos devuelva las cartas de los jugadores o en su defecto el jugador ya que solo es uno.
// El otro es un bot. por tanto se deja un arreglo predefinido de cartas para el bot y las del jugador tal vez vengan de fuera, 
// O si esto se integra al E-commerce, vendrá de la base de datos. 

export const cardsPlayer2: Card[] = [
  {name: "3-Hump Lacooda", img: "https://images.ygoprodeck.com/images/cards/86988864.jpg", attack: 500, defense: 1500, element: cardElement.EARTH},
  {name: "30,000-Year White Turtle", img: "https://images.ygoprodeck.com/images/cards/11714098.jpg", attack: 1250, defense: 2100, element: cardElement.WATER},
  {name: "4-Starred Ladybug of Doom", img: "https://images.ygoprodeck.com/images/cards/83994646.jpg", attack: 800, defense: 1200, element: cardElement.WIND},
  {name: "8-Claws Scorpion", img: "https://images.ygoprodeck.com/images/cards/14261867.jpg", attack: 300, defense: 200, element: cardElement.DARK},
  {name: "A Man with Wdjat", img: "https://images.ygoprodeck.com/images/cards/51351302.jpg", attack: 1600, defense: 1600, element: cardElement.DARK},
  {name: "A-Assault Core", img: "https://images.ygoprodeck.com/images/cards/30012506.jpg", attack: 1900, defense: 200, element: cardElement.LIGHT},
  {name: "A-to-Z-Dragon Buster Cannon", img: "https://images.ygoprodeck.com/images/cards/65172015.jpg", attack: 4000, defense: 4000, element: cardElement.LIGHT},
  {name: "ABC-Dragon Buster", img: "", attack: 3000, defense: 2800, element: cardElement.LIGHT},
  {name: "Abaki", img: "https://images.ygoprodeck.com/images/cards/12694768.jpg", attack: 1700, defense: 1100, element: cardElement.FIRE},
  {name: "Abare Ushioni", img: "https://images.ygoprodeck.com/images/cards/89718302.jpg", attack: 1200, defense: 1200, element: cardElement.EARTH},
  {name: "Abominable Unchained Soul", img: "https://images.ygoprodeck.com/images/cards/1966438.jpg", attack: 3000, defense: 1500, element: cardElement.DARK},
  {name: "Absolute Crusader", img: "https://images.ygoprodeck.com/images/cards/70832512.jpg", attack: 1800, defense: 1200, element: cardElement.EARTH},
  {name: "Absolute King - Megaplunder", img: "https://images.ygoprodeck.com/images/cards/27553701.jpg", attack: 2000, defense: 1500, element: cardElement.EARTH},
  {name: "Absorbing Kid from the Sky", img: "https://images.ygoprodeck.com/images/cards/49771608.jpg", attack: 1300, defense: 1000, element: cardElement.LIGHT},
  {name: "Absorouter Dragon", img: "https://images.ygoprodeck.com/images/cards/67748760.jpg", attack: 1200, defense: 2800, element: cardElement.DARK},
  {name: "Abyss Actor - Comic Relief", img: "https://images.ygoprodeck.com/images/cards/15308295.jpg", attack: 1000, defense: 2000, element: cardElement.DARK},
  {name: "Abyss Actor - Curtain Raiser", img: "https://images.ygoprodeck.com/images/cards/44179224.jpg", attack: 1100, defense: 1000, element: cardElement.DARK},
  {name: "Abyss Actor - Evil Heel", img: "https://images.ygoprodeck.com/images/cards/52240819.jpg", attack: 3000, defense: 2000, element: cardElement.DARK},
];

export const cardsPlayer1: Card[] = [
  {name: "Arcana Force EX - The Dark Ruler", img: "https://images.ygoprodeck.com/images/cards/69831560.jpg", attack: 4000, defense: 4000, element: cardElement.LIGHT},
  {name: "Archfiend Black Skull Dragon", img: "https://images.ygoprodeck.com/images/cards/45349196.jpg", attack: 3200, defense: 2500, element: cardElement.DARK},
  {name: "Aria the Melodious Diva", img: "https://images.ygoprodeck.com/images/cards/40502912.jpg", attack: 1600, defense: 1200, element: cardElement.LIGHT},
  {name: "Arkbrave Dragon", img: "https://images.ygoprodeck.com/images/cards/33282498.jpg", attack: 2400, defense: 2000, element: cardElement.LIGHT},
  {name: "Armed Dragon Catapult Cannon", img: "https://images.ygoprodeck.com/images/cards/75906310.jpg", attack: 3500, defense: 3000, element: cardElement.LIGHT},
  {name: "Armed Dragon LV10", img: "https://images.ygoprodeck.com/images/cards/59464593.jpg", attack: 3000, defense: 2000, element: cardElement.WIND},
  {name: "Armed Dragon LV10 White", img: "https://images.ygoprodeck.com/images/cards/84425220.jpg", attack: 3000, defense: 2000, element: cardElement.LIGHT},
  {name: "Armed Dragon LV3", img: "https://images.ygoprodeck.com/images/cards/980973.jpg", attack: 1200, defense: 900, element: cardElement.WIND},
  {name: "Armed Dragon LV5", img: "https://images.ygoprodeck.com/images/cards/46384672.jpg", attack: 2400, defense: 1700, element: cardElement.WIND},
  {name: "Armed Dragon LV7", img: "https://images.ygoprodeck.com/images/cards/73879377.jpg", attack: 2800, defense: 1000, element: cardElement.WIND},
  {name: "Atomic Scrap Dragon", img: "https://images.ygoprodeck.com/images/cards/92361635.jpg", attack: 3200, defense: 2400, element: cardElement.EARTH},
  {name: "Aurkus, Lightsworn Druid", img: "https://images.ygoprodeck.com/images/cards/7183277.jpg", attack: 1200, defense: 1800, element: cardElement.LIGHT},
  {name: "Autorokket Dragon", img: "https://images.ygoprodeck.com/images/cards/80250185.jpg", attack: 1600, defense: 1000, element: cardElement.DARK},
  {name: "Axe Dragonute", img: "https://images.ygoprodeck.com/images/cards/84914462.jpg", attack: 2000, defense: 1200, element: cardElement.DARK},
  {name: "Azure-Eyes Silver Dragon", img: "https://images.ygoprodeck.com/images/cards/40908371.jpg", attack: 2500, defense: 3000, element: cardElement.LIGHT},
  {name: "Beast-Eyes Pendulum Dragon", img: "https://images.ygoprodeck.com/images/cards/72378329.jpg", attack: 3000, defense: 2000, element: cardElement.EARTH},
  {name: "Beelze of the Diabolic Dragons", img: "https://images.ygoprodeck.com/images/cards/34408491.jpg", attack: 3000, defense: 3000, element: cardElement.DARK},
  {name: "Beelzeus of the Diabolic Dragons", img: "https://images.ygoprodeck.com/images/cards/8763963.jpg", attack: 4000, defense: 4000, element: cardElement.DARK},
];