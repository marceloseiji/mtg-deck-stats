import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from 'components/Home'
import Decks from 'components/Decks'
import 'normalize.css'
import 'styles/GlobalStyle.css'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="decks" element={<Decks />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
