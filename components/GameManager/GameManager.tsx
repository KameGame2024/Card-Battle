import { useContext, useEffect } from 'react';
import { Arena } from '../../components';
import { PlayersContainer } from '../../components';
import { GameContext } from '../../providers/GameProvider';
import { GameContextType } from '../../types/GameContextType';


export function GameManager() {
  const { 
    startGame
  } = useContext<GameContextType>(GameContext);

  useEffect(() => {
    startGame();
  },[])

  return (
    <>
      <Arena />
      <PlayersContainer />
    </>
  )
}
