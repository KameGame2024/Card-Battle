import { Card } from "./cardType";

export type Player = {
  name: string,
  healthPoints: number,
  image: string,
  cardsInDeck: Card[],
  cardsInField: Card[],
  cardInCombat: Card[]
}