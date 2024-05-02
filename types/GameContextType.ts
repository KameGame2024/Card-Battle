import { Player } from "./playersType"

export type GameContextType = {
  inGameState: string,
  roundState: number,
  playerTurnState: number,
  winnerState: number,
  currentElement: string,
  startGame: () => void,
  endGame: (winner: number) => void,
  nextRound: () => void,
  resetGame: () => void,
  player1: Player,
  player2: Player,
  selectCardToCombat: (player: number, cardIndex: number) => void
  startCombat: () => void,
  inCombat: boolean,
  playButtonSound: () => void
}