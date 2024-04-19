import { useState } from "react";

export function useGame() {


  const [inGameState, setInGameState] = useState<boolean>(false);
  const [roundState, setRoundState] = useState<number>(0);

  // Valores entre cero y uno, cero jugador 1, uno jugador 2
  const [playerTurnState, setPlayerTurnState] = useState<number>(0);

  const [winnerState, setWinnerState] = useState<number>(0);

  const startGame = () => {
    setInGameState(true);
    setRoundState(1);
    setPlayerTurnState(1);
  };

  const endGame = (winner: number) => {
    setInGameState(false);
    setWinnerState(winner);
  };

  const nextRound = () => {
    setRoundState(roundState + 1);
    setPlayerTurnState(Math.abs(playerTurnState - 1));
  };

  const resetGame = () => {
    setInGameState(false);
    setRoundState(0);
    setPlayerTurnState(0);
    setWinnerState(0);
  };

  const gameStates = {
    inGameState,
    roundState,
    playerTurnState,
    winnerState
  }

  const gameActions = {
    startGame,
    endGame,
    nextRound,
    resetGame
  }

  return { gameStates, gameActions };
}