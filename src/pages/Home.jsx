import * as React from 'react'

import {
  Box,
  createTheme,
  Divider,
  ThemeProvider,
  Typography
} from '@mui/material'

const theme = createTheme({
  breakpoints: {
    values: {
      // Breakpoints below use vertical layout
      xxs: 0,
      xs: 375,
      sm: 425,
      md: 768,
      md1: 832,
      md2: 896,
      md3: 960,
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
      <Box style={{ textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: {
              xxs: '2.25rem',
              xs: '2.75rem',
              sm: '3.25rem',
              md: '4.25rem',
              lg: '5.5rem',
              xl: '6rem'
            },
            fontWeight: 'bold',
            textTransform: 'uppercase',
            marginTop: {
              xxs: '1.5rem',
              sm: '0.75rem',
              lg: '1.5rem',
              xl: '0rem'
            }
          }}
        >
          Mini Games
        </Typography>
  
        <Divider
          sx={{
            background: 'white',
            borderBottomWidth: 2,
            marginX: {
              xxs: '9%',
              sm: '8%',
              md: '10%',
              lg: '5%'
            },
            marginTop: {
              xxs: '1.75rem',
              sm: '1.25rem',
              md: '1rem',
              lg: '1.5rem',
              xl: '1rem',
              xxl: '3rem'
            },
            marginBottom: {
              xxs: '2.5rem',
              sm: '2.25rem',
              md: '0.5rem',
              lg: '3rem',
              xl: '2.5rem',
              xxl: '4rem'
            }
          }}
        />
      </Box>
    </ThemeProvider>
  )
}