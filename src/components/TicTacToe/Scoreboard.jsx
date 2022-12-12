import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material'

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

import '../../assets/styles/TicTacToe/Scoreboard.css'

const theme = createTheme({
  breakpoints: {
    values: {
      // Breakpoints below use vertical layout
      mobile: 428,
      tabletSmall: 768,
      tabletLarge: 820,
      // Breakpoints below change to horizontal layout
      laptopSmall: 1263,
      laptopLarge: 1519,
    }
  }
})

const buttonSX = {
  padding: '5px 10px',
  bgcolor: 'gray',
  '&:hover': {bgcolor: 'green'}
}

export default function Scoreboard({ score, xPlaying, resetGame }) {

  const horizontalView = useMediaQuery({
    query: '(min-width: 821px)'
  })

  const verticalView = useMediaQuery({
    query: '(max-width: 820px)'
  })

  const {xScore, oScore} = score;

  return (
    <ThemeProvider theme={theme}>

      {/* for horizontal layouts */}
        
      {horizontalView &&
        <Box className='scoreboard' gap={'1rem'}>
          <Box className={`score x-score ${!xPlaying && 'inactive'}`} sx={{letterSpacing: '0.25rem'}}>
            X's ▸ {xScore}
          </Box>
          <Box className='scoreboard' gap={'3rem'}>
            <ArrowCircleUpIcon className={`x-arrow ${!xPlaying && 'hide'}`} sx={{fontSize: '3rem'}} />
            <Button variant='contained' sx={buttonSX} onClick={() => resetGame()}>Start Over</Button>
            <ArrowCircleDownIcon className={`o-arrow ${xPlaying && 'hide'}`} sx={{fontSize: '3rem'}} />
          </Box>
          <Box className={`score o-score ${xPlaying && 'inactive'}`} sx={{letterSpacing: '0.25rem'}}>
            O's ▸ {oScore}
          </Box>
        </Box>
      }

      {/* for vertical layouts */}
        
      {verticalView &&
        <Box className='scoreboard' gap={'1rem'}>
          <Box className={`score x-score ${!xPlaying && 'inactive'}`} sx={{letterSpacing: '0.25rem'}}>
            X's ▸ {xScore}
          </Box>
          <Box className='scoreboard' gap={'3rem'}>
            <ArrowCircleLeftIcon className={`x-arrow ${!xPlaying && 'hide'}`} sx={{fontSize: '3rem'}} />
            <Button variant='contained' sx={buttonSX} onClick={() => resetGame()}>Start Over</Button>
            <ArrowCircleRightIcon className={`o-arrow ${xPlaying && 'hide'}`} sx={{fontSize: '3rem'}} />
          </Box>
          <Box className={`score o-score ${xPlaying && 'inactive'}`} sx={{letterSpacing: '0.25rem'}}>
            O's ▸ {oScore}
          </Box>
        </Box>
      }

    </ThemeProvider>
  )
}