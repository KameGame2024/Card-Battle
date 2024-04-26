import { createContext, useState } from "react";
// import { usePlayer } from '../hooks/usePlayers';
import React from 'react';
import { GameContextType } from "../types/GameContextType";
// import { cardElement } from "../types/cardType";
import { Player } from "../types/playersType";
import { cardsPlayer1, cardsPlayer2 } from "../store/cardsStore";

export const GameContext = createContext<GameContextType>({} as GameContextType);

export function GameProvider({ children }: { children: React.ReactNode }) {

  // const {
  //   playerTookDamage,
  //   playerDrawCard,
  //   selectCardToCombat,
  //   resetPlayers
  // } = usePlayer().playersActions;

  // const {
  //   player1,
  //   player2
  // } = usePlayer().playersState;

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


  const [inGameState, setInGameState] = useState<boolean>(false);
  const [roundState, setRoundState] = useState<number>(0);

  // Valores entre cero y uno, cero jugador 1, uno jugador 2 o enemigo
  const [playerTurnState, setPlayerTurnState] = useState<number>(0);

  const [winnerState, setWinnerState] = useState<number>(0);

  const startGame = () => {
    setInGameState(true);
    setRoundState(1);
    setPlayerTurnState(0);

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        playersDrawCard();
      }, 500 * (i+1));
    }
  };

  const endGame = (winner: number) => {
    setInGameState(false);
    setWinnerState(winner);
  };

  const nextRound = () => {
    setRoundState(roundState + 1);
    setPlayerTurnState(Math.abs(playerTurnState - 1));
    playersDrawCard();
  };

  const resetGame = () => {
    setInGameState(false);
    setRoundState(0);
    setPlayerTurnState(0);
    setWinnerState(0);
    resetPlayers();
  };

  const inCombat = () => {
    if (playerTurnState === 0){
      if (player1.cardInCombat.length > 0 && player2.cardInCombat.length > 0){
        const damage = Math.max(player1.cardInCombat[0].attack - player2.cardInCombat[0].defense, 0);
        playerTookDamage(2, damage);
        player1.cardInCombat = [];
        player2.cardInCombat = [];
      }
    } else {
      if (player1.cardInCombat.length > 0 && player2.cardInCombat.length > 0){
        const damage = Math.max(player2.cardInCombat[0].attack - player1.cardInCombat[0].defense, 0);
        playerTookDamage(1, damage);
        player1.cardInCombat = [];
        player2.cardInCombat = [];
      }
    }
  };

  const playerTookDamage = (player: number, damage: number) => {
    if (player === 1) {
      setPlayer1({ ...player1, healthPoints: player1.healthPoints - damage });
    } else {
      setPlayer2({ ...player2, healthPoints: player2.healthPoints - damage });
    }
  }

  const playersDrawCard = () => {
    const card1 = player1.cardsInDeck.pop();
    const card2 = player2.cardsInDeck.pop();
    if (card1 && card2) {
      if (player1.cardsInField.length < 9){
        player1.cardsInField.push(card1);
        setPlayer1({ ...player1, cardsInField: player1.cardsInField});
      }
      if (player2.cardsInField.length < 9){
        player2.cardsInField.push(card2);
        setPlayer2({ ...player2, cardsInField: player2.cardsInField});
      }
    }
  }

  const selectCardToCombat = (player: number, cardIndex: number) => {
    if (player === 1) {
      const card = player1.cardsInField[cardIndex];
      if (card && player1.cardInCombat.length === 0) {
        player1.cardsInField.splice(cardIndex, 1);
        player1.cardInCombat.push(card);
        setPlayer1({ ...player1, cardsInField: player1.cardsInField, cardInCombat: player1.cardInCombat});
      } else {
        // Change the card in combat for a new one
        player1.cardsInField.splice(cardIndex, 1);
        player1.cardsInField.push(player1.cardInCombat[0]);
        player1.cardInCombat.push(card);
        setPlayer1({ ...player1, cardsInField: player1.cardsInField, cardInCombat: player1.cardInCombat});
      }
    } else {
      // const card = player2.cardsInField[cardIndex];
      // if (card && player2.cardInCombat.length === 0) {
      //   player2.cardsInField.splice(cardIndex, 1);
      //   player2.cardInCombat.push(card);
      //   setPlayer2({ ...player2, cardsInField: player2.cardsInField, cardInCombat: player2.cardInCombat});
      // }
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

  return (

    <GameContext.Provider value={{ 
      inGameState,
      roundState,
      playerTurnState,
      winnerState,
      startGame,
      endGame,
      nextRound,
      resetGame,
      player1,
      player2,
      selectCardToCombat,
      inCombat
    }}>
      {children}
    </GameContext.Provider>
  );
}