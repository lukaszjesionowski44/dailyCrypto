import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { FetchCryptosProvider } from './context/CryptoContext'

createRoot(document.getElementById('root')).render(
  <FetchCryptosProvider>
    <App />
  </FetchCryptosProvider>

)