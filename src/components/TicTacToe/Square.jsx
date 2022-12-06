import * as React from 'react'

import {
  Box,
  createTheme,
  ThemeProvider
} from '@mui/material'

import '../../assets/styles/TicTacToe/Square.css'

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

export default function Square({ value, onClick }) {

  const style = value === 'X' ? 'square x' : 'square o'

  return (
    <ThemeProvider theme={theme}>
      <Box component='button' className={style} onClick={onClick}>
        {value}
      </Box>
    </ThemeProvider>
  )
}