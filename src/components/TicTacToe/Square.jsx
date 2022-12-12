import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

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
      mobile: 428,
      tabletSmall: 768,
      tabletLarge: 820,
      // Breakpoints below change to horizontal layout
      laptopSmall: 1263,
      laptopLarge: 1519,
    }
  }
})

export default function Square({ value, onClick }) {

  const horizontalView = useMediaQuery({
    query: '(min-width: 821px)'
  })

  const verticalView = useMediaQuery({
    query: '(max-width: 820px)'
  })

  const style = value === 'X' ? 'square x' : 'square o'

  return (
    <ThemeProvider theme={theme}>

      {/* for horizontal layouts */}

      {horizontalView &&
        <Box component='button' className={style} onClick={onClick}>
          {value}
        </Box>
      }
      
      {/* for vertical layouts */}

      {verticalView &&
        <Box component='button' className={style} onClick={onClick}>
          {value}
        </Box>
      }
      
    </ThemeProvider>
  )
}