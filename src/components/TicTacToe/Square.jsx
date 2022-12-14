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

export default function Square({ value, onClick }) {

  const style = value === 'X' ? 'square x' : 'square o'
  const styleTablet = value === 'X' ? 'square-tablet x' : 'square-tablet o'
  const styleMobile = value === 'X' ? 'square-mobile x' : 'square-mobile o'

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop displays (horizontal layout) */}

      <Laptop>
        <Box
          component='button'
          className={style}
          onClick={onClick}
          >
          {value}
        </Box>
      </Laptop>
      
      {/* for tablet displays (vertical layout) */}

      <Tablet>
        <Box
          component='button'
          className={styleTablet}
          onClick={onClick}
          >
          {value}
        </Box>
      </Tablet>
      
      {/* for mobile displays (vertical layout) */}

      <Mobile>
        <Box
          component='button'
          className={styleMobile}
          onClick={onClick}
          >
          {value}
        </Box>
      </Mobile>
      
    </ThemeProvider>
  )
}