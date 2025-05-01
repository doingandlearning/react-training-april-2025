import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LibraryProvider } from './contexts/LibraryContext.tsx'
import { LikeProvider } from './contexts/LikeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LikeProvider>

      <LibraryProvider>
        <App />
      </LibraryProvider>
    </LikeProvider>
  </React.StrictMode>,
)
