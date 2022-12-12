import * as React from 'react'

import { Link } from 'react-router-dom'

import { useMediaQuery } from 'react-responsive'

import {
  Box,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

import tictactoe from '../assets/images/tic-tac-toe.png'
import hangman from '../assets/images/hangman.png'

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

export default function Home() {

  const horizontalView = useMediaQuery({
    query: '(min-width: 821px)'
  })

  const verticalView = useMediaQuery({
    query: '(max-width: 820px)'
  })

  return (
    <ThemeProvider theme={theme}>

      {/* for horizontal layouts */}

      { horizontalView &&
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5rem'
          }}
          gap={'5rem'}
        >
          <Link to='/tic-tac-toe' style={{textDecoration: 'none'}}>
            <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', "&:hover": {boxShadow: '0px 0px 15px #1976d2'}}}>
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
          </Link>
          <Link to='/hangman' style={{textDecoration: 'none'}}>
            <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', "&:hover": {boxShadow: '0px 0px 15px #1976d2'}}}>
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
          </Link>
        </Box>
      }

      {/* for vertical layouts */}

      { verticalView &&
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2.5rem'
          }}
          gap={'1.5rem'}
        >
          <Link to='/tic-tac-toe' style={{textDecoration: 'none'}}>
            <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2'}}>
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
          </Link>
          <Link to='/hangman' style={{textDecoration: 'none'}}>
            <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', "&:hover": {boxShadow: '0px 0px 15px #1976d2'}}}>
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
          </Link>
        </Box>
      }

    </ThemeProvider>
  )
}