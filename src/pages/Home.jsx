import * as React from 'react'

import {
  Box,
  createTheme,
  ThemeProvider
} from '@mui/material'

import SportsEsportsIcon from '@mui/icons-material/SportsEsports'

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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
        <SportsEsportsIcon sx={{ color: '#1976d2', fontSize: '20rem', border: '10px solid', borderRadius: '25px' }} />
      </Box>
    </ThemeProvider>
  )
}