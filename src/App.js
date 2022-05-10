import React from 'react'
import AppRouter from 'routers/AppRouter'
import { GlobalProvider } from './contexts/GlobalContext'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1f2936',
      paper: '#334050'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <AppRouter />
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default App
