import { useState } from "react";
import { Player } from "../types/playersType";
import { cardsPlayer1, cardsPlayer2 } from "../store/cardsStore";

export function usePlayer() {
  const [player1, setPlayer1] = useState<Player>({
    name: "Player 1",
    healthPoints: 100,
    image: "",
    cardsInDeck: cardsPlayer1,
    cardsInField: [],
    cardInCombat: []
  });

  const [player2, setPlayer2] = useState<Player>({
    name: "Player 2",
    healthPoints: 100,
    image: "",
    cardsInDeck: cardsPlayer2,
    cardsInField: [],
    cardInCombat: []
  });

  const playerTookDamage = (player: number, damage: number) => {
    if (player === 1) {
      setPlayer1({ ...player1, healthPoints: player1.healthPoints - damage });

      // Timer para el daño antes de esto
      setPlayer1({ ...player1, cardInCombat: [] })
      setPlayer2({ ...player2, cardInCombat: [] })
    } else {
      setPlayer2({ ...player2, healthPoints: player2.healthPoints - damage });
      // Timer para el daño antes de esto
      setPlayer1({ ...player1, cardInCombat: [] })
      setPlayer2({ ...player2, cardInCombat: [] })
    }
  }

  const playersDrawCard = () => {
    const card1 = player1.cardsInDeck.pop();
    const card2 = player2.cardsInDeck.pop();
    if (card1 && card2) {
      player1.cardsInField.push(card1);
      player2.cardsInField.push(card2);
      setPlayer1({ ...player1, cardsInField: player1.cardsInField });
      setPlayer2({ ...player2, cardsInField: player2.cardsInField });
    }
  }

  const selectCardToCombat = (player: number, cardIndex: number) => {
    if (player === 1) {
      const card = player1.cardsInField[cardIndex];
      if (card) {
        player1.cardsInField.splice(cardIndex, 1);
        player1.cardInCombat.push(card);
        setPlayer1({ ...player1, cardsInField: player1.cardsInField, cardInCombat: player1.cardInCombat });
      }
    } else {
      const card = player2.cardsInField[cardIndex];
      if (card) {
        player2.cardsInField.splice(cardIndex, 1);
        player2.cardInCombat.push(card);
        setPlayer2({ ...player2, cardsInField: player2.cardsInField, cardInCombat: player2.cardInCombat });
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
    playersDrawCard,
    selectCardToCombat,
    resetPlayers
  }

  return { playersState, playersActions };
}