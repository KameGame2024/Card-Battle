import { createContext, useState } from "react";
// import { usePlayer } from '../hooks/usePlayers';
import React from 'react';
import { GameContextType } from "../types/GameContextType";
// import { cardElement } from "../types/cardType";
import { Player } from "../types/playersType";
import { gameStates } from "../types/GameState";
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
    healthPoints: 20000,
    image: "",
    cardsInDeck: [...cardsPlayer1],
    cardsInField: [],
    cardInCombat: []
  });

  const [player2, setPlayer2] = useState<Player>({
    name: "Player 2",
    healthPoints: 20000,
    image: "",
    cardsInDeck: [...cardsPlayer2],
    cardsInField: [],
    cardInCombat: []
  });

  const [inGameState, setInGameState] = useState<string>(gameStates.INSTRUCTIONS);
  const [roundState, setRoundState] = useState<number>(0);

  // Valores entre cero y uno, cero jugador 1, uno jugador 2 o enemigo
  const [playerTurnState, setPlayerTurnState] = useState<number>(0);

  const [winnerState, setWinnerState] = useState<number>(0);

  const startGame = () => {
    setInGameState(gameStates.IN_GAME);
    setRoundState(1);
    setPlayerTurnState(0);

    for (let i = 0; i < 9; i++) {
      setTimeout(() => {
        playersDrawCard();
      }, 250 * (i+1));
    }
  };

  const endGame = (winner: number) => {
    setInGameState(gameStates.END_GAME);
    setWinnerState(winner);
  };

  const nextRound = () => {
    setRoundState(roundState + 1);
    setPlayerTurnState(Math.abs(playerTurnState - 1));
    playersDrawCard();
  };

  const resetGame = () => {
    setInGameState(gameStates.INSTRUCTIONS);
    setRoundState(0);
    setPlayerTurnState(0);
    setWinnerState(0);
    resetPlayers();
  };

  const startCombat = () => {

    if (playerTurnState === 0){

      // El enemigo (jugador 2) selecciona su carta, si es en turno de jugador 1 la de mayor defensa
      // buscar el indice de la carta con mayor defensa
      const maxDefense = Math.max(...player2.cardsInField.map(card => card.defense));
      const index = player2.cardsInField.findIndex(card => card.defense === maxDefense);
      selectCardToCombatPromise(2, index).then(() => {
        if (player1.cardInCombat.length > 0 && player2.cardInCombat.length > 0){
          const damage = Math.max(player1.cardInCombat[0].attack - player2.cardInCombat[0].defense, 0);
          playerTookDamagePromise(2, damage).then(()=> resetCombatZonePromise()).then(() => nextRound());
        }
      });
    } else {
      // El enemigo (jugador 2) selecciona su carta, si es en su turno la de mayor ataque
      // buscar el indice de la carta con mayor ataque
      const maxAttack = Math.max(...player2.cardsInField.map(card => card.attack));
      const index = player2.cardsInField.findIndex(card => card.attack === maxAttack);
      selectCardToCombatPromise(2, index).then(() => {
        if (player1.cardInCombat.length > 0 && player2.cardInCombat.length > 0){
          const damage = Math.max(player2.cardInCombat[0].attack - player1.cardInCombat[0].defense, 0);
          playerTookDamagePromise(1, damage).then(()=> resetCombatZonePromise()).then(() => nextRound());
        }
      });
    }

    // Comprobar si hay un ganador
    if (player1.healthPoints <= 0){
      endGame(2);
    } else if (player2.healthPoints <= 0){
      endGame(1);
    }

    // Comprobar si no hay mas cartas en la mano, gana el jugador con mas vida
    if (player1.cardsInField.length === 0){
      if (player1.healthPoints > player2.healthPoints){
        endGame(1);
      } else {
        endGame(2);
      }
    } else if (player2.cardsInField.length === 0){
      if (player2.healthPoints > player1.healthPoints){
        endGame(2);
      } else {
        endGame(1);
      }
    }
  };

  // Crear una promesa para ejecutar la seleccion de carta del enemigo
  const selectCardToCombatPromise = (player: number, cardIndex: number) => {
    return new Promise<void>((resolve) => {
      selectCardToCombat(player, cardIndex);
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  // crear una promesa para que se ejecute el reset de la zona de combate despues de que el jugador haya tomado daño
  const playerTookDamagePromise = (player: number, damage: number) => {
    return new Promise<void>((resolve) => {

      playerTookDamage(player, damage);
  
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  // Crear una promesa para que se ejecute el reset de la zona de combate despues de que el jugador haya tomado daño
  const resetCombatZonePromise = () => {
    return new Promise<void>((resolve) => {
      resetCombatZone();
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  const playerTookDamage = (player: number, damage: number) => {
    if (player === 1) {
      const newHealthPoints = player1.healthPoints - damage;
      player1.healthPoints = newHealthPoints;
      setPlayer1({ ...player1});
    } else {
      const newHealthPoints = player2.healthPoints - damage;
      player2.healthPoints = newHealthPoints;
      setPlayer2({ ...player2 });
    }
  }

  const playersDrawCard = () => {
    const card1 = player1.cardsInDeck.pop();
    const card2 = player2.cardsInDeck.pop();
    if (card1 && card2) {
      if (player1.cardsInField.length < 9){
        player1.cardsInField.push(card1);
        setPlayer1({ ...player1});
      }
      if (player2.cardsInField.length < 9){
        player2.cardsInField.push(card2);
        setPlayer2({ ...player2});
      }
    }
  }

  const selectCardToCombat = (player: number, cardIndex: number = 0) => {
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
        player1.cardInCombat[0] = card;
        setPlayer1({ ...player1, cardsInField: player1.cardsInField, cardInCombat: player1.cardInCombat});
      }
    } else {
      const card = player2.cardsInField[cardIndex];
      if (card && player2.cardInCombat.length === 0) {
        player2.cardsInField.splice(cardIndex, 1);
        player2.cardInCombat.push(card);
        setPlayer2({ ...player2, cardsInField: player2.cardsInField, cardInCombat: player2.cardInCombat});
      }
    }
  }

  const resetPlayers = () => {
    setPlayer1({
      name: "Player 1",
      healthPoints: 20000,
      image: "",
      cardsInDeck: [...cardsPlayer1],
      cardsInField: [],
      cardInCombat: []
    });

    setPlayer2({
      name: "Player 2",
      healthPoints: 20000,
      image: "",
      cardsInDeck: [...cardsPlayer2],
      cardsInField: [],
      cardInCombat: []
    });
  }

  const resetCombatZone = () => {
    player1.cardInCombat = [];
    player2.cardInCombat = [];
    setPlayer1({ ...player1, cardInCombat: player1.cardInCombat});
    setPlayer2({ ...player2, cardInCombat: player2.cardInCombat});    
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
      startCombat
    }}>
      {children}
    </GameContext.Provider>
  );
}