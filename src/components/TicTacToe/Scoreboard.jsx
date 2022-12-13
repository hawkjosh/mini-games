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

const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1000 })
  return isLaptop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 551, maxWidth: 999 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 550 })
  return isMobile ? children : null
}

const buttonSX = {
  padding: '5px 10px',
  bgcolor: 'gray',
  '&:hover': {bgcolor: 'green'}
}

export default function Scoreboard({ score, xPlaying, resetGame }) {

  const {xScore, oScore} = score;

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop displays (horizontal layout) */}
        
      <Laptop>
        <Box
          gap={'1rem'}
          className='scoreboard-horizontal'
          >
          <Box
            className={`score x-score ${!xPlaying && 'inactive'}`}
            sx={{letterSpacing: '0.25rem'}}
            >
            X's ▸ {xScore}
          </Box>
          <Box
            gap={'3rem'}
            className='scoreboard-horizontal'
            >
            <ArrowCircleUpIcon
              className={`x-arrow ${!xPlaying && 'hide'}`}
              sx={{fontSize: '3rem'}}
            />
            <Button
              variant='contained'
              onClick={() => resetGame()}
              sx={buttonSX}
              >
              Start Over
            </Button>
            <ArrowCircleDownIcon
              className={`o-arrow ${xPlaying && 'hide'}`}
              sx={{fontSize: '3rem'}}
            />
          </Box>
          <Box
            className={`score o-score ${xPlaying && 'inactive'}`}
            sx={{letterSpacing: '0.25rem'}}
            >
            O's ▸ {oScore}
          </Box>
        </Box>
      </Laptop>

      {/* for tablet displays (vertical layout) */}
        
      <Tablet>
        <Box
          gap={'1rem'}
          className='scoreboard-vertical'
          >
          <Box
            className={`score x-score ${!xPlaying && 'inactive'}`}
            sx={{letterSpacing: '0.15rem'}}
            >
            X's ▸ {xScore}
          </Box>
          <Box
            gap={'3rem'}
            className='scoreboard-vertical'
            >
            <ArrowCircleLeftIcon
              className={`x-arrow ${!xPlaying && 'hide'}`}
              sx={{fontSize: '2.5rem'}}
            />
            <Button
              variant='contained'
              onClick={() => resetGame()}
              sx={buttonSX}
              >
              Start Over
            </Button>
            <ArrowCircleRightIcon
              className={`o-arrow ${xPlaying && 'hide'}`}
              sx={{fontSize: '2.5rem'}}
            />
          </Box>
          <Box
            className={`score o-score ${xPlaying && 'inactive'}`}
            sx={{letterSpacing: '0.15rem'}}
            >
            O's ▸ {oScore}
          </Box>
        </Box>
      </Tablet>

      {/* for mobile displays (vertical layout) */}
        
      <Mobile>
        <Box
          gap={'2rem'}
          className='scoreboard-vertical'
          >
          <Box
            className={`score-mobile x-score ${!xPlaying && 'inactive'}`}
            sx={{letterSpacing: '0.15rem'}}
            >
            X's ▸ {xScore}
          </Box>
          <Box
            gap={'3rem'}
            className='scoreboard-vertical'
            >
            {/* <ArrowCircleLeftIcon
              className={`x-arrow ${!xPlaying && 'hide'}`}
              sx={{fontSize: '2.5rem'}}
            /> */}
            <Button
              variant='contained'
              onClick={() => resetGame()}
              sx={buttonSX}
              >
              Start Over
            </Button>
            {/* <ArrowCircleRightIcon
              className={`o-arrow ${xPlaying && 'hide'}`}
              sx={{fontSize: '2.5rem'}}
            /> */}
          </Box>
          <Box
            className={`score-mobile o-score ${xPlaying && 'inactive'}`}
            sx={{letterSpacing: '0.15rem'}}
            >
            O's ▸ {oScore}
          </Box>
        </Box>
      </Mobile>

    </ThemeProvider>
  )
}