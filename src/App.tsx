import { GameProvider } from '../providers/GameProvider';

import { AppRoutes } from '../routes';

function App() {

  return (
    <>
    <GameProvider>
      <AppRoutes />
    </GameProvider>
    </>
  )
}

export default App
