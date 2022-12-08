import * as React from 'react'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material'

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';


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

const buttonSX = {
  padding: '5px 10px',
  bgcolor: 'darkgray',
  '&:hover': {bgcolor: 'gray'}
}

export default function Scoreboard({ score, xPlaying, resetGame }) {

  const {xScore, oScore} = score;

  return (
    <ThemeProvider theme={theme}>

      <Box className='scoreboard-heading'>
        <Box className='scoreboard'>
          <Box className={`score x-score ${!xPlaying && 'inactive'}`} sx={{letterSpacing: '0.25rem'}}>
            X's ▸ {xScore}
          </Box>
          <Box className='scoreboard-middle'>
            <ArrowCircleLeftIcon className={`x-arrow ${!xPlaying && 'hide'}`} sx={{fontSize: 50}} />
            <Button variant='contained' sx={buttonSX} onClick={() => resetGame()}>Start Over</Button>
            <ArrowCircleRightIcon className={`o-arrow ${xPlaying && 'hide'}`} sx={{fontSize: 50}} />
          </Box>
          <Box className={`score o-score ${xPlaying && 'inactive'}`} sx={{letterSpacing: '0.25rem'}}>
            O's ▸ {oScore}
          </Box>
        </Box>
      </Box>

    </ThemeProvider>
  )
}