import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material'

import Gameboard from '../components/TicTacToe/Gameboard.jsx'
import Scoreboard from '../components/TicTacToe/Scoreboard.jsx'

import '../assets/styles/TicTacToe/TicTacToe.css'

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

export default function TicTacToe() {

  const WIN_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const winningMessage = document.getElementById('winningMessage')
  const winningMessageText = document.querySelector('[data-winning-message-text]')
  
  const [board, setBoard] = React.useState(Array(9).fill(null))
  const [xPlaying, setXPlaying] = React.useState(true)
  const [score, setScore] = React.useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = React.useState(false)

  const handleBoxClick = (squareIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === squareIndex) {
        return xPlaying === true ? 'X' : 'O'
      } else {
        return value
      }
    })

    const notNull = (space) => space !== null
    const winner = checkWinner(updatedBoard)

    if (winner) {
      if (winner === 'X') {
        let {xScore} = score
        xScore += 1
        setScore({ ...score, xScore })
        winningMessageText.innerText = `X's Win!`
        winningMessageText.classList.add('x-win')
        winningMessage.classList.add('x')
      } else if (winner === 'O') {
        let {oScore} = score
        oScore += 1
        setScore({ ...score, oScore })
        winningMessageText.innerText = `O's Win!`
        winningMessageText.classList.add('o-win')
        winningMessage.classList.add('o')
      }
    }
    if (!winner && updatedBoard.every(notNull)) {
      winningMessageText.innerText = 'Draw!'
      winningMessage.classList.add('draw')
    }

    setBoard(updatedBoard)

    setXPlaying(!xPlaying)
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_COMBOS.length; i++) {
      const [x, y, z] = WIN_COMBOS[i]
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
    winningMessageText.classList.remove('x-win', 'o-win')
    winningMessage.classList.remove('draw', 'x', 'o')
  }

  const resetGame = () => {
    setGameOver(false)
    setBoard(Array(9).fill(null))
    setScore({xScore: 0, oScore: 0})
    setXPlaying(true)
    winningMessageText.classList.remove('x-win', 'o-win')
    winningMessage.classList.remove('draw', 'x', 'o')
  }

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}

      <Laptop>
        <Box
          gap={'5rem'}
          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}
          >
          <Scoreboard
            score={score}
            xPlaying={xPlaying}
            resetGame={resetGame}
          />
          <Gameboard
            board={board}
            onClick={gameOver ? resetBoard : handleBoxClick}
          />
        </Box>

        <Box
          id='winningMessage'
          className='winning-message'
          >
          <Box
            data-winning-message-text
            sx={{letterSpacing: '1rem'}}
          />
          <Button
            onClick={resetBoard}
            >
            Play Again
          </Button>
        </Box>
      </Laptop>
      
      {/* for tablet displays (vertical layout) */}

      <Tablet>
        <Box
          gap={'5rem'}
          sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}
          >
          <Scoreboard
            score={score}
            xPlaying={xPlaying}
            resetGame={resetGame}
          />
          <Gameboard
            board={board}
            onClick={gameOver ? resetBoard : handleBoxClick}
          />
        </Box>

        <Box
          id='winningMessage'
          className='winning-message'
          >
          <Box
            data-winning-message-text
            sx={{letterSpacing: '1rem'}}
          />
          <Button
            onClick={resetBoard}
            >
            Play Again
          </Button>
        </Box>
      </Tablet>

      {/* for mobile displays (vertical layout) */}

      <Mobile>
        <Box
          gap={'3rem'}
          sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}
          >
          <Scoreboard
            score={score}
            xPlaying={xPlaying}
            resetGame={resetGame}
          />
          <Gameboard
            board={board}
            onClick={gameOver ? resetBoard : handleBoxClick}
          />
        </Box>

        <Box
          id='winningMessage'
          className='winning-message'
          >
          <Box
            data-winning-message-text
            sx={{letterSpacing: '1rem'}}
          />
          <Button
            onClick={resetBoard}
            >
            Play Again
          </Button>
        </Box>
      </Mobile>

    </ThemeProvider>
  )
}