import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'normalize.css'
import 'styles/GlobalStyle.css'
import Home from 'pages/Home'
import Decks from 'pages/Decks'
import Drawer from 'components/Drawer'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Drawer component={<Home />} title="Home" />} />
      <Route
        path="newdeck"
        element={<Drawer component={<Decks />} title="New deck" />}
      />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
