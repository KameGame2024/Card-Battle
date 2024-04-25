import { useState } from "react";
import { Player } from "../types/playersType";
import { cardsPlayer1, cardsPlayer2 } from "../store/cardsStore";
import { cardElement } from "../types/cardType";

export function usePlayer() {
  const [player1, setPlayer1] = useState<Player>({
    name: "Player 1",
    healthPoints: 100,
    image: "",
    cardsInDeck: [],
    cardsInField: [{name: "Card 1", img: "", attack: 10, defense: 5, element: cardElement.FIRE},
    {name: "Card 2", img: "", attack: 5, defense: 10, element: cardElement.WATER},
    {name: "Card 3", img: "", attack: 15, defense: 5, element: cardElement.EARTH},
    {name: "Card 4", img: "", attack: 5, defense: 15, element: cardElement.WIND}],
    cardInCombat: []
  });

  const [player2, setPlayer2] = useState<Player>({
    name: "Player 2",
    healthPoints: 100,
    image: "",
    cardsInDeck: [],
    cardsInField: [{name: "Card 1", img: "", attack: 10, defense: 5, element: cardElement.FIRE},
    {name: "Card 2", img: "", attack: 5, defense: 10, element: cardElement.WATER},
    {name: "Card 3", img: "", attack: 15, defense: 5, element: cardElement.EARTH},
    {name: "Card 4", img: "", attack: 5, defense: 15, element: cardElement.WIND}],
    cardInCombat: []
  });

  const playerTookDamage = (player: number, damage: number) => {
    if (player === 1) {
      setPlayer1({ ...player1, healthPoints: player1.healthPoints - damage });
    } else {
      setPlayer2({ ...player2, healthPoints: player2.healthPoints - damage });
    }
  }

  const playerDrawCard = (player: number) => {
    if (player === 1) {
      const card = player1.cardsInDeck.pop();
      if (card) {
        player1.cardsInField.push(card);
      }
    } else {
      const card = player2.cardsInDeck.pop();
      if (card) {
        player2.cardsInField.push(card);
      }
    }
  }

  const selectCardToCombat = (player: number, cardIndex: number) => {
    if (player === 1) {
      const card = player1.cardsInField[cardIndex];
      if (card) {
        player1.cardsInField.splice(cardIndex, 1);
        player1.cardInCombat.push(card);
      }
    } else {
      const card = player2.cardsInField[cardIndex];
      if (card) {
        player2.cardsInField.splice(cardIndex, 1);
        player2.cardInCombat.push(card);
      }
    }
  }

  const resetPlayers = () => {
    setPlayer1({
      name: "Player 1",
      healthPoints: 100,
      image: "",
      cardsInDeck: cardsPlayer1,
      cardsInField: [],
      cardInCombat: []
    });

    setPlayer2({
      name: "Player 2",
      healthPoints: 100,
      image: "",
      cardsInDeck: cardsPlayer2,
      cardsInField: [],
      cardInCombat: []
    });
  }

  const playersState = {
    player1,
    player2
  }

  const playersActions = {
    playerTookDamage,
    playerDrawCard,
    selectCardToCombat,
    resetPlayers
  }

  return { playersState, playersActions };
}