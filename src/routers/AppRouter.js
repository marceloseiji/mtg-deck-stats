import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from 'pages/Home'
import Decks from 'pages/Decks'
import Sidebar from 'components/Sidebar'
import 'styles/GlobalStyle.css'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Sidebar content={<Home />} />} />
      <Route path="decks" element={<Sidebar content={<Decks />} />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
