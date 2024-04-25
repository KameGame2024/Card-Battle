import { GameProvider } from '../providers/GameProvider';
import { GameManager } from '../components';

function App() {

  return (
    <>
    <GameProvider>
      <GameManager />
    </GameProvider>
    </>
  )
}

export default App
