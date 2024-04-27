export const cardElement = {
  FIRE: 'FIRE',
  WATER: 'WATER',
  EARTH: 'EARTH',
  WIND: 'WIND',
  DARK: 'DARK',
  LIGHT: 'LIGHT',
  DIVINE: 'DIVINE'
}

export type Card = {
  name: string,
  img: string,
  attack: number,
  defense: number,
  element: string
}