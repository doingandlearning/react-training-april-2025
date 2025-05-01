import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LibraryProvider } from './contexts/LibraryContext.tsx'
import { LikeProvider } from './contexts/LikeContext.tsx'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LikeProvider>

        <LibraryProvider>
          <App />
        </LibraryProvider>
      </LikeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
