import { originalCardType } from '../types/cardType';


// La idea es aquí consumir una API que nos devuelva las cartas de los jugadores o en su defecto el jugador ya que solo es uno.
// El otro es un bot. por tanto se deja un arreglo predefinido de cartas para el bot y las del jugador tal vez vengan de fuera, 
// O si esto se integra al E-commerce, vendrá de la base de datos. 

export const defaultCardsPlayer2: originalCardType[] = [
  {
    id: "1",
    imagen: "https://images.ygoprodeck.com/images/cards/86988864.jpg",
    nombre: "3-Hump Lacooda",
    descripcion: "Un monstruo con 500 de ataque y 1500 de defensa. Elemento: Tierra.",
    ataque: 500,
    defensa: 1500,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "EARTH" // Elemento transformado a atributo
  },
  {
    id: "2",
    imagen: "https://images.ygoprodeck.com/images/cards/11714098.jpg",
    nombre: "30,000-Year White Turtle",
    descripcion: "Un monstruo con 1250 de ataque y 2100 de defensa. Elemento: Agua.",
    ataque: 1250,
    defensa: 2100,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "WATER" // Elemento transformado a atributo
  },
  {
    id: "3",
    imagen: "https://images.ygoprodeck.com/images/cards/83994646.jpg",
    nombre: "4-Starred Ladybug of Doom",
    descripcion: "Un monstruo con 800 de ataque y 1200 de defensa. Elemento: Viento.",
    ataque: 800,
    defensa: 1200,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "WIND" // Elemento transformado a atributo
  },
  {
    id: "4",
    imagen: "https://images.ygoprodeck.com/images/cards/14261867.jpg",
    nombre: "8-Claws Scorpion",
    descripcion: "Un monstruo con 300 de ataque y 200 de defensa. Elemento: Oscuridad.",
    ataque: 300,
    defensa: 200,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "5",
    imagen: "https://images.ygoprodeck.com/images/cards/51351302.jpg",
    nombre: "A Man with Wdjat",
    descripcion: "Un monstruo con 1600 de ataque y 1600 de defensa. Elemento: Oscuridad.",
    ataque: 1600,
    defensa: 1600,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "6",
    imagen: "https://images.ygoprodeck.com/images/cards/30012506.jpg",
    nombre: "A-Assault Core",
    descripcion: "Un monstruo con 1900 de ataque y 200 de defensa. Elemento: Luz.",
    ataque: 1900,
    defensa: 200,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "7",
    imagen: "https://images.ygoprodeck.com/images/cards/65172015.jpg",
    nombre: "A-to-Z-Dragon Buster Cannon",
    descripcion: "Un monstruo con 4000 de ataque y 4000 de defensa. Elemento: Luz.",
    ataque: 4000,
    defensa: 4000,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "8",
    imagen: "https://images.ygoprodeck.com/images/cards/1561110.jpg",
    nombre: "ABC-Dragon Buster",
    descripcion: "Un monstruo con 3000 de ataque y 2800 de defensa. Elemento: Luz.",
    ataque: 3000,
    defensa: 2800,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "9",
    imagen: "https://images.ygoprodeck.com/images/cards/12694768.jpg",
    nombre: "Abaki",
    descripcion: "Un monstruo con 1700 de ataque y 1100 de defensa. Elemento: Fuego.",
    ataque: 1700,
    defensa: 1100,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "FIRE" // Elemento transformado a atributo
  },
  {
    id: "10",
    imagen: "https://images.ygoprodeck.com/images/cards/89718302.jpg",
    nombre: "Abare Ushioni",
    descripcion: "Un monstruo con 1200 de ataque y 1200 de defensa. Elemento: Tierra.",
    ataque: 1200,
    defensa: 1200,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "EARTH" // Elemento transformado a atributo
  },
  {
    id: "11",
    imagen: "https://images.ygoprodeck.com/images/cards/1966438.jpg",
    nombre: "Abominable Unchained Soul",
    descripcion: "Un monstruo con 3000 de ataque y 1500 de defensa. Elemento: Oscuridad.",
    ataque: 3000,
    defensa: 1500,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "12",
    imagen: "https://images.ygoprodeck.com/images/cards/70832512.jpg",
    nombre: "Absolute Crusader",
    descripcion: "Un monstruo con 1800 de ataque y 1200 de defensa. Elemento: Tierra.",
    ataque: 1800,
    defensa: 1200,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "EARTH" // Elemento transformado a atributo
  },
  {
    id: "13",
    imagen: "https://images.ygoprodeck.com/images/cards/27553701.jpg",
    nombre: "Absolute King - Megaplunder",
    descripcion: "Un monstruo con 2000 de ataque y 1500 de defensa. Elemento: Tierra.",
    ataque: 2000,
    defensa: 1500,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "EARTH" // Elemento transformado a atributo
  },
  {
    id: "14",
    imagen: "https://images.ygoprodeck.com/images/cards/49771608.jpg",
    nombre: "Absorbing Kid from the Sky",
    descripcion: "Un monstruo con 1300 de ataque y 1000 de defensa. Elemento: Luz.",
    ataque: 1300,
    defensa: 1000,
    precio: 100, // Precio predeterminado
    tipo: "Normal Monster", // Tipo detallado
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "15",
    imagen: "https://images.ygoprodeck.com/images/cards/67748760.jpg",
    nombre: "Absorouter Dragon",
    descripcion: "Un monstruo con 1200 de ataque y 2800 de defensa. Elemento: Oscuridad.",
    ataque: 1200,
    defensa: 2800,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "16",
    imagen: "https://images.ygoprodeck.com/images/cards/15308295.jpg",
    nombre: "Abyss Actor - Comic Relief",
    descripcion: "Un monstruo con 1000 de ataque y 2000 de defensa. Elemento: Oscuridad.",
    ataque: 1000,
    defensa: 2000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "17",
    imagen: "https://images.ygoprodeck.com/images/cards/44179224.jpg",
    nombre: "Abyss Actor - Curtain Raiser",
    descripcion: "Un monstruo con 1100 de ataque y 1000 de defensa. Elemento: Oscuridad.",
    ataque: 1100,
    defensa: 1000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "18",
    imagen: "https://images.ygoprodeck.com/images/cards/52240819.jpg",
    nombre: "Abyss Actor - Evil Heel",
    descripcion: "Un monstruo con 3000 de ataque y 2000 de defensa. Elemento: Oscuridad.",
    ataque: 3000,
    defensa: 2000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  }
];

export const defaultCardsPlayer1: originalCardType[] = [
  {
    id: "1",
    imagen: "https://images.ygoprodeck.com/images/cards/69831560.jpg",
    nombre: "Arcana Force EX - The Dark Ruler",
    descripcion: "Un monstruo con 4000 de ataque y 4000 de defensa. Elemento: Luz.",
    ataque: 4000,
    defensa: 4000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "2",
    imagen: "https://images.ygoprodeck.com/images/cards/45349196.jpg",
    nombre: "Archfiend Black Skull Dragon",
    descripcion: "Un monstruo con 3200 de ataque y 2500 de defensa. Elemento: Oscuridad.",
    ataque: 3200,
    defensa: 2500,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "3",
    imagen: "https://images.ygoprodeck.com/images/cards/40502912.jpg",
    nombre: "Aria the Melodious Diva",
    descripcion: "Un monstruo con 1600 de ataque y 1200 de defensa. Elemento: Luz.",
    ataque: 1600,
    defensa: 1200,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "4",
    imagen: "https://images.ygoprodeck.com/images/cards/33282498.jpg",
    nombre: "Arkbrave Dragon",
    descripcion: "Un monstruo con 2400 de ataque y 2000 de defensa. Elemento: Luz.",
    ataque: 2400,
    defensa: 2000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "5",
    imagen: "https://images.ygoprodeck.com/images/cards/75906310.jpg",
    nombre: "Armed Dragon Catapult Cannon",
    descripcion: "Un monstruo con 3500 de ataque y 3000 de defensa. Elemento: Luz.",
    ataque: 3500,
    defensa: 3000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "6",
    imagen: "https://images.ygoprodeck.com/images/cards/59464593.jpg",
    nombre: "Armed Dragon LV10",
    descripcion: "Un monstruo con 3000 de ataque y 2000 de defensa. Elemento: Viento.",
    ataque: 3000,
    defensa: 2000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "WIND" // Elemento transformado a atributo
  },
  {
    id: "7",
    imagen: "https://images.ygoprodeck.com/images/cards/84425220.jpg",
    nombre: "Armed Dragon LV10 White",
    descripcion: "Un monstruo con 3000 de ataque y 2000 de defensa. Elemento: Luz.",
    ataque: 3000,
    defensa: 2000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "8",
    imagen: "https://images.ygoprodeck.com/images/cards/980973.jpg",
    nombre: "Armed Dragon LV3",
    descripcion: "Un monstruo con 1200 de ataque y 900 de defensa. Elemento: Viento.",
    ataque: 1200,
    defensa: 900,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "WIND" // Elemento transformado a atributo
  },
  {
    id: "9",
    imagen: "https://images.ygoprodeck.com/images/cards/46384672.jpg",
    nombre: "Armed Dragon LV5",
    descripcion: "Un monstruo con 2400 de ataque y 1700 de defensa. Elemento: Viento.",
    ataque: 2400,
    defensa: 1700,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "WIND" // Elemento transformado a atributo
  },
  {
    id: "10",
    imagen: "https://images.ygoprodeck.com/images/cards/73879377.jpg",
    nombre: "Armed Dragon LV7",
    descripcion: "Un monstruo con 2800 de ataque y 1000 de defensa. Elemento: Viento.",
    ataque: 2800,
    defensa: 1000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "WIND" // Elemento transformado a atributo
  },
  {
    id: "11",
    imagen: "https://images.ygoprodeck.com/images/cards/92361635.jpg",
    nombre: "Atomic Scrap Dragon",
    descripcion: "Un monstruo con 3200 de ataque y 2400 de defensa. Elemento: Tierra.",
    ataque: 3200,
    defensa: 2400,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "EARTH" // Elemento transformado a atributo
  },
  {
    id: "12",
    imagen: "https://images.ygoprodeck.com/images/cards/7183277.jpg",
    nombre: "Aurkus, Lightsworn Druid",
    descripcion: "Un monstruo con 1200 de ataque y 1800 de defensa. Elemento: Luz.",
    ataque: 1200,
    defensa: 1800,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "13",
    imagen: "https://images.ygoprodeck.com/images/cards/80250185.jpg",
    nombre: "Autorokket Dragon",
    descripcion: "Un monstruo con 1600 de ataque y 1000 de defensa. Elemento: Oscuridad.",
    ataque: 1600,
    defensa: 1000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "14",
    imagen: "https://images.ygoprodeck.com/images/cards/84914462.jpg",
    nombre: "Axe Dragonute",
    descripcion: "Un monstruo con 2000 de ataque y 1200 de defensa. Elemento: Oscuridad.",
    ataque: 2000,
    defensa: 1200,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "15",
    imagen: "https://images.ygoprodeck.com/images/cards/40908371.jpg",
    nombre: "Azure-Eyes Silver Dragon",
    descripcion: "Un monstruo con 2500 de ataque y 3000 de defensa. Elemento: Luz.",
    ataque: 2500,
    defensa: 3000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "LIGHT" // Elemento transformado a atributo
  },
  {
    id: "16",
    imagen: "https://images.ygoprodeck.com/images/cards/72378329.jpg",
    nombre: "Beast-Eyes Pendulum Dragon",
    descripcion: "Un monstruo con 3000 de ataque y 2000 de defensa. Elemento: Tierra.",
    ataque: 3000,
    defensa: 2000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "EARTH" // Elemento transformado a atributo
  },
  {
    id: "17",
    imagen: "https://images.ygoprodeck.com/images/cards/34408491.jpg",
    nombre: "Beelze of the Diabolic Dragons",
    descripcion: "Un monstruo con 3000 de ataque y 3000 de defensa. Elemento: Oscuridad.",
    ataque: 3000,
    defensa: 3000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  },
  {
    id: "18",
    imagen: "https://images.ygoprodeck.com/images/cards/8763963.jpg",
    nombre: "Beelzeus of the Diabolic Dragons",
    descripcion: "Un monstruo con 4000 de ataque y 4000 de defensa. Elemento: Oscuridad.",
    ataque: 4000,
    defensa: 4000,
    precio: 100, // Precio predeterminado
    tipo: "Effect Monster", // Tipo detallado (basado en nombre)
    atributo: "DARK" // Elemento transformado a atributo
  }
];