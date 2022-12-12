import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import {
  Alert,
  AlertTitle,
  Box,
  createTheme,
  ThemeProvider
} from '@mui/material'

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

export default function NoPage() {

  const horizontalView = useMediaQuery({
    query: '(min-width: 821px)'
  })

  const verticalView = useMediaQuery({
    query: '(max-width: 820px)'
  })

  return (
    <ThemeProvider theme={theme}>

      {/* for horizontal layouts */}

      {horizontalView &&
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
          }}
        >
          <Alert
            variant='outlined'
            severity='error'
            sx={{
              width: '50%',
              fontSize: '1.5rem'
            }}
          >
            <AlertTitle
              sx={{
                fontSize: '2.5rem',
                textAlign: 'center'
              }}
            >
              404 Error
            </AlertTitle>
            Something seems to have gone wrong, sorry about that! Please click <a href='/' style={{color: 'red'}}>HERE</a> to return to the Mini Games home page.
          </Alert>
        </Box>
      }
      
      {/* for vertical layouts */}

      {verticalView &&
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh'
          }}
        >
          <Alert
            variant='outlined'
            severity='error'
            sx={{
              width: '50%',
              fontSize: '1.5rem'
            }}
          >
            <AlertTitle
              sx={{
                fontSize: '2.5rem',
                textAlign: 'center'
              }}
            >
              404 Error
            </AlertTitle>
            Something seems to have gone wrong, sorry about that! Please click <a href='/' style={{color: 'red'}}>HERE</a> to return to the Mini Games home page.
          </Alert>
        </Box>
      }
      
    </ThemeProvider>
  )
}