import * as React from 'react'

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

export default function Gameboard({ board, onClick }) {
  
  return (
    <ThemeProvider theme={theme}>
      <Box className='board-background'>
        <Box className='board'>
          {board.map((value, index) => {
            return <Square key={index} value={value} onClick={() => value === null && onClick(index)} />
          })}
        </Box>
      </Box>
    </ThemeProvider>
  )
}