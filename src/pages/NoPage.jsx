import * as React from 'react'

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

export default function App() {

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}