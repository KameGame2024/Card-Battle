export const cardElement = {
  FIRE: 'FIRE',
  WATER: 'WATER',
  EARTH: 'EARTH',
  WIND: 'WIND'
}

export type Card = {
  name: string,
  img: string,
  attack: number,
  defense: number,
  element: string
}