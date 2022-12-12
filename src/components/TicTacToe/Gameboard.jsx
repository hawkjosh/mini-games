import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import {
  Box,
  createTheme,
  ThemeProvider
} from '@mui/material'

import Square from '../TicTacToe/Square.jsx'

import '../../assets/styles/TicTacToe/Gameboard.css'

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

export default function Gameboard({ board, onClick }) {

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
        <Box className='board-background'>
          <Box className='board'>
            {board.map((value, index) => {
              return <Square key={index} value={value} onClick={() => value === null && onClick(index)} />
            })}
          </Box>
        </Box>
      }
      
      {/* for vertical layouts */}
      
      {verticalView &&
        <Box className='board-background'>
          <Box className='board'>
            {board.map((value, index) => {
              return <Square key={index} value={value} onClick={() => value === null && onClick(index)} />
            })}
          </Box>
        </Box>
      }
      
    </ThemeProvider>
  )
}