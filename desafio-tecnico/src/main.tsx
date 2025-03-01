import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { VideosProvider } from './context/providers/videosProvider'
import { GlobalStyle } from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <VideosProvider>
      <App />
    </VideosProvider>
  </React.StrictMode>,
)
