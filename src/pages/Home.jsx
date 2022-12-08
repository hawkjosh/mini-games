import * as React from 'react'

import {
  Box,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

import tictactoe from '../assets/images/TicTacToe/tic-tac-toe.png'
import hangman from '../assets/images/Hangman/hangman.png'

const theme = createTheme({
  breakpoints: {
    values: {
      // Breakpoints below use vertical layout
      xxs: 0,
      xs: 375,
      sm: 425,
      md: 768,
      // Breakpoints below change to horizontal layout
      lg: 1024,
      xl: 1440,
      xxl: 1620
    }
  }
})

export default function Home() {

  return (
    <ThemeProvider theme={theme}>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          marginTop: '10rem'
        }}
      >
        <Box>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold',
              color: '#1976d2',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}
          >
              Tic-Tac-Toe
          </Typography>
          <Box
            component='img'
            src={tictactoe}
            sx={{
              width: '250px'
            }}
          />
        </Box>
        <Box>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold',
              color: '#1976d2',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}
          >
              Hangman
          </Typography>
          <Box
            component='img'
            src={hangman}
            sx={{
              width: '250px'
            }}
          />
        </Box>
      </Box>

    </ThemeProvider>
  )
}