import { createContext, useState } from "react";
// import { usePlayer } from '../hooks/usePlayers';
import React from 'react';
import { GameContextType } from "../types/GameContextType";
import { cardCategory, cardElement, Card } from '../types/cardType';
import { Player } from "../types/playersType";
import { gameStates } from "../types/GameState";
import { FetchCards } from "../utils/fetchCards";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useSound } from 'use-sound';
import CardSFX from '/audio/card.mp3';
import ElementSFX from '/audio/element.mp3';
import CombatSFX from '/audio/combat.mp3';
import WinSFX from '/audio/win.mp3';
import LoseSFX from '/audio/lose.mp3';
import Track from '/audio/soundtrack.mp3';
import ButtonPress from '/audio/button.mp3';

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

  const elements: string[] = [
    cardElement.FIRE,
    cardElement.WATER,
    cardElement.EARTH,
    cardElement.WIND,
    cardElement.LIGHT,
    cardElement.DARK,
    cardElement.DIVINE
  ]

  const [player1, setPlayer1] = useState<Player>({
    name: "Player 1",
    healthPoints: 10000,
    image: "",
    cardsInDeck: [],
    cardsInField: [],
    cardInCombat: []
  });

  const [player2, setPlayer2] = useState<Player>({
    name: "Player 2",
    healthPoints: 10000,
    image: "",
    cardsInDeck: [],
    cardsInField: [],
    cardInCombat: []
  });

  const [cardsPlayer1, setCardsPlayer1] = useState<Card[]>([]);
  const [cardsPlayer2, setCardsPlayer2] = useState<Card[]>([]);

  const [inGameState, setInGameState] = useState<string>(gameStates.INSTRUCTIONS);
  const [roundState, setRoundState] = useState<number>(0);

  // Valores entre cero y uno, cero jugador 1, uno jugador 2 o enemigo
  const [playerTurnState, setPlayerTurnState] = useState<number>(0);

  const [winnerState, setWinnerState] = useState<number>(0);

  const [currentElement, setCurrentElement] = useState<string>("");

  const [inCombat, setInCombat] = useState<boolean>(false);

  // SFX y soundtrack para el juego
  const [playCardSound] = useSound(CardSFX, { volume: 0.75 });

  const [playElementSound] = useSound(ElementSFX, { volume: 0.1 });

  const [playTrack, { stop }] = useSound(Track, { volume: 0.12, loop: true });

  const [playButtonSound] = useSound(ButtonPress, { volume: 0.2 });

  const [playCombatSound] = useSound(CombatSFX, { volume: 0.25 });

  const [playWinSound] = useSound(WinSFX, { volume: 0.25 });

  const [playLoseSound] = useSound(LoseSFX, { volume: 0.25 });

  const startGame = async () => {
    // Usar el hook useFetchCards para obtener las cartas de la API si no se ha hecho
    if (cardsPlayer1.length === 0 || cardsPlayer2.length === 0){
      FetchCards().then(({ cards1, cards2 }) => {
        
        setCardsPlayer1([...cards1]);
        setCardsPlayer2([...cards2]);

        player1.cardsInDeck = [...cards1];

        player2.cardsInDeck = [...cards2];
    
        setPlayer1({ ...player1 });
        setPlayer2({ ...player2 });

        // Luego de obtener los datos de la API, inicia el juego
        setInGameState(gameStates.IN_GAME);
        setRoundState(1);
        setPlayerTurnState(0);
        shuffleDecks();
        playTrack();

        for (let i = 0; i < 9; i++) {
          setTimeout(() => {
            playersDrawCard();
          }, 250 * (i+1));
        }

        selectNewElement();
      });
    } else{

      player1.cardsInDeck = [...cardsPlayer1];

      console.log(cardsPlayer1);

      player2.cardsInDeck = [...cardsPlayer2];
  
      setPlayer1({ ...player1 });
      setPlayer2({ ...player2 });

      // Luego de obtener los datos de la API, inicia el juego
      setInGameState(gameStates.IN_GAME);
      setRoundState(1);
      setPlayerTurnState(0);
      shuffleDecks();
      playTrack();

      for (let i = 0; i < 9; i++) {
        setTimeout(() => {
          playersDrawCard();
        }, 250 * (i+1));
      }

      selectNewElement();
    }
  };

  const endGame = (winner: number) => {
    //Stop the soundtrack
    stop();

    setInGameState(gameStates.END_GAME);
    setWinnerState(winner);

    if (winner === 1){
      playWinSound();
    } else {
      playLoseSound();
    }
  };

  const nextRound = () => {

    // Comprobar si hay un ganador
    if (player1.healthPoints <= 0){
      endGame(2);
      return;
    } else if (player2.healthPoints <= 0){
      endGame(1);
      return;
    }

    // Comprobar si no hay mas cartas en la mano, gana el jugador con mas vida
    if (player1.cardsInField.length === 0){
      if (player1.healthPoints > player2.healthPoints){
        endGame(1);
        return;
      } else {
        endGame(2);
        return;
      }
    } else if (player2.cardsInField.length === 0){
      if (player2.healthPoints > player1.healthPoints){
        endGame(2);
        return;
      } else {
        endGame(1);
        return;
      }
    }

    setRoundState(roundState + 1);
    setPlayerTurnState(Math.abs(playerTurnState - 1));
    selectNewElement();
    playersDrawCard();
  };

  const resetGame = () => {
    setInGameState(gameStates.INSTRUCTIONS);
    setRoundState(0);
    setPlayerTurnState(0);
    setWinnerState(0);
    resetPlayers();
  };

  const shuffleDecks = () => {
    // Shuffle the decks
    for (let i = player1.cardsInDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [player1.cardsInDeck[i], player1.cardsInDeck[j]] = [player1.cardsInDeck[j], player1.cardsInDeck[i]];
    }

    for (let i = player2.cardsInDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [player2.cardsInDeck[i], player2.cardsInDeck[j]] = [player2.cardsInDeck[j], player2.cardsInDeck[i]];
    }
  }

  const selectNewElement = () => {
    playElementSound();

    // Crear un array con los elementos del juego y seleccionar un elemento aleatorio
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        setCurrentElement(elements[Math.floor(Math.random() * elements.length)]);
      }, 100 * i);
    }
    
  }

  const startCombat = () => {

    if (playerTurnState === 0){

      // El enemigo (jugador 2) selecciona su carta, si es en turno de jugador 1 la de mayor defensa
      // buscar el indice de la carta con mayor defensa
      const maxDefense = Math.max(...player2.cardsInField.map(card => card.defense));
      const index = player2.cardsInField.findIndex(card => card.defense === maxDefense);
      selectCardToCombatPromise(2, index).then(() => {
        if (player1.cardInCombat.length > 0 && player2.cardInCombat.length > 0){
          let damage;
          if (player1.cardInCombat[0].element === currentElement){
            damage = Math.max((player1.cardInCombat[0].attack * 2)- player2.cardInCombat[0].defense, 0);
          } else {
            damage = Math.max(player1.cardInCombat[0].attack - player2.cardInCombat[0].defense, 0);
          }
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
          let damage;
          if (player2.cardInCombat[0].element === currentElement){
            damage = Math.max((player2.cardInCombat[0].attack * 2)- player1.cardInCombat[0].defense, 0);
          } else {
            damage = Math.max(player2.cardInCombat[0].attack - player1.cardInCombat[0].defense, 0);
          }

          // Si la carta del jugador 1 no tiene defensa, es porque es hechizo o trampa y bloquea el daño
          if (player1.cardInCombat[0].category !== cardCategory.MONSTER){
            damage = 0;
          }
          playerTookDamagePromise(1, damage).then(()=> resetCombatZonePromise()).then(() => nextRound());
        }
      });
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

  // crear una promesa para que se ejecute el tomar daño del jugador despues de que el enemigo haya seleccionado su carta
  const playerTookDamagePromise = (player: number, damage: number) => {
    return new Promise<void>((resolve) => {

      setInCombat(true);
      playCombatSound();
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
      setInCombat(false);
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
    if (player1.cardsInDeck.length === 0 || player2.cardsInDeck.length === 0){
      return;
    }
    const card1 = player1.cardsInDeck.pop();
    const card2 = player2.cardsInDeck.pop();
    if (card1 && card2) {
      if (player1.cardsInField.length < 9){
        player1.cardsInField.push(card1);
        setPlayer1({ ...player1});
        playCardSound();
      }
      if (player2.cardsInField.length < 9){
        player2.cardsInField.push(card2);
        setPlayer2({ ...player2});
        playCardSound();
      }
    }
  }

  const selectCardToCombat = (player: number, cardIndex: number = 0) => {

    playCardSound();

    if (player === 1) {
      const card = player1.cardsInField[cardIndex];
      if (card && player1.cardInCombat.length === 0) {
        player1.cardsInField.splice(cardIndex, 1);
        player1.cardInCombat.push(card);
        setPlayer1({ ...player1 });
      } else {
        // Change the card in combat for a new one
        player1.cardsInField.splice(cardIndex, 1);
        player1.cardsInField.push(player1.cardInCombat[0]);
        player1.cardInCombat[0] = card;
        setPlayer1({ ...player1 });
      }
    } else {
      const card = player2.cardsInField[cardIndex];
      if (card && player2.cardInCombat.length === 0) {
        player2.cardsInField.splice(cardIndex, 1);
        player2.cardInCombat.push(card);
        setPlayer2({ ...player2 });
      }
    }
  }

  const resetPlayers = () => {
    setPlayer1({
      name: "Player 1",
      healthPoints: 10000,
      image: "",
      cardsInDeck: [],
      cardsInField: [],
      cardInCombat: []
    });

    setPlayer2({
      name: "Player 2",
      healthPoints: 10000,
      image: "",
      cardsInDeck: [],
      cardsInField: [],
      cardInCombat: []
    });
  }

  const resetCombatZone = () => {
    player1.cardInCombat = [];
    player2.cardInCombat = [];
    setPlayer1({ ...player1 });
    setPlayer2({ ...player2 });    
  }

  return (

    <GameContext.Provider value={{ 
      inGameState,
      roundState,
      playerTurnState,
      winnerState,
      currentElement,
      startGame,
      endGame,
      nextRound,
      resetGame,
      player1,
      player2,
      selectCardToCombat,
      startCombat,
      inCombat,
      playButtonSound
    }}>
      {children}
    </GameContext.Provider>
  );
}
