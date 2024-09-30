import React from 'react'
import ReactDOM from 'react-dom/client'

import { GameProvider } from '../providers/GameProvider';

import { AppRoutes } from '../routes';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameProvider>
      <AppRoutes />
    </GameProvider>
  </React.StrictMode>,
)
