import * as React from 'react'

import {
  Box,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

import '../../assets/styles/TicTacToe/Scoreboard.css'

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

export default function Scoreboard({ score, xPlaying }) {

  const {xScore, oScore} = score;

  return (
    <ThemeProvider theme={theme}>
      <Box className='scoreboard-heading'>
        <Box className='scoreboard'>
          <Box className={`score x-score ${!xPlaying && 'inactive'}`}>
            X's ▸ {xScore}
          </Box>
          <Typography variant='h2' fontFamily='Fredoka'>TIC-TAC-TOE</Typography>
          <Box className={`score o-score ${xPlaying && 'inactive'}`}>
            O's ▸ {oScore}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}