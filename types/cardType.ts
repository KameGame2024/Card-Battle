// Definición de ejemplo para cardElement, ajusta esto según tus necesidades
export const cardElement = {
  EARTH: 'Tierra',
  WATER: 'Agua',
  FIRE: 'Fuego',
  WIND: 'Viento',
  LIGHT: 'Luz',
  DARK: 'Oscuridad',
  DIVINE: 'Divino'
};

export const cardCategory = {
  MONSTER: 'Monstruo',
  SPELL: 'Hechizo',
  TRAP: 'Trampa'
};

export type Card = {
  name: string,
  img: string,
  attack: number,
  defense: number,
  element: string,
  category: string
}

export type originalCardType = {
  id:          string;
  imagen:      string;
  nombre:      string;
  descripcion: string;
  ataque:      number;
  defensa:     number;
  precio:      number;
  tipo:        string;
  atributo:    string;
}

export type cardFetchResponseType = {
  id:          string;
  imagen:      string;
  nombre:      string;
  descripcion: string;
  ataque:      number;
  defensa:     number;
  precio:      number;
  tipo:        string;
  atributo:    string;
  cantidad:    number;
  cantidadBaraja:    number;
}