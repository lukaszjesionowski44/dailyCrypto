import React from 'react'
import './App.css'


import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainPage from './pages/MainPage'
import Cryptocurrencies from './pages/Cryptocurrencies'
import { Navbar } from './components'
import News from './pages/News'
import CryptoDetail from './pages/CryptoDetail'
import Exchanges from './pages/Exchanges'
import { useMediaQuery } from '@mui/material'



const App = () => {
  const smLg = useMediaQuery('(max-width:1250px)')

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/news" element={<News />} />
          <Route path='/cryptocurrency/:id' element={<CryptoDetail />} />
          <Route path='/exchanges' element={<Exchanges />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App