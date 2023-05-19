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
import memorymatch from '../assets/images/memory-match.svg'


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

export default function Home() {

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}

      <Laptop>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginY: '5rem'
          }}
          gap={'4rem'}
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
          {/* Temporary placeholder below... */}
          <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', opacity: '0.5'}}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}
            >
                Coming Soon...
            </Typography>
            <Box
              component='div'
              src={hangman}
              sx={{
                aspectRatio: '1/1',
                width: '250px',
                bgcolor: '#1976d2',
                borderRadius: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                color: 'white',
                fontSize: '3rem',
                fontFamily: 'sans-serif'
              }}
              >
              TBD
            </Box>
          </Box>
        </Box>
      </Laptop>

      {/* for tablet displays (vertical layout) */}

      <Tablet>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginY: '2.5rem'
          }}
          gap={'2rem'}
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
          {/* Temporary placeholder below... */}
          <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', opacity: '0.5'}}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}
            >
                Coming Soon...
            </Typography>
            <Box
              component='div'
              src={hangman}
              sx={{
                aspectRatio: '1/1',
                width: '250px',
                bgcolor: '#1976d2',
                borderRadius: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                color: 'white',
                fontSize: '3rem',
                fontFamily: 'sans-serif'
              }}
              >
              TBD
            </Box>
          </Box>
          {/* Temporary placeholder... */}
          <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', opacity: '0.5'}}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}
            >
                Coming Soon...
            </Typography>
            <Box
              component='div'
              src={hangman}
              sx={{
                aspectRatio: '1/1',
                width: '250px',
                bgcolor: '#1976d2',
                borderRadius: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                color: 'white',
                fontSize: '3rem',
                fontFamily: 'sans-serif'
              }}
              >
              TBD
            </Box>
          </Box>
        </Box>
      </Tablet>

      {/* for mobile displays (vertical layout) */}

      <Mobile>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginY: '2.5rem'
          }}
          gap={'1.5rem'}
        >
          <Link to='/tic-tac-toe' style={{textDecoration: 'none'}}>
            <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography
                variant='h5'
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
                  width: '150px'
                }}
              />
            </Box>
          </Link>
          <Link to='/hangman' style={{textDecoration: 'none'}}>
            <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography
                variant='h5'
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
                  width: '150px'
                }}
              />
            </Box>
          </Link>
          {/* Temporary placeholder below... */}
          <Box sx={{border: '3px solid #1976d2', borderRadius: '10px', padding: '2rem', boxShadow: '0px 0px 8px #1976d2', opacity: '0.5', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
                color: '#1976d2',
                textAlign: 'center',
                marginBottom: '0.5rem'
              }}
            >
                Coming Soon...
            </Typography>
            <Box
              component='div'
              src={hangman}
              sx={{
                aspectRatio: '1/1',
                width: '150px',
                bgcolor: '#1976d2',
                borderRadius: '10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                color: 'white',
                fontSize: '3rem',
                fontFamily: 'sans-serif'
              }}
              >
              TBD
            </Box>
          </Box>
        </Box>
      </Mobile>

    </ThemeProvider>
  )
}