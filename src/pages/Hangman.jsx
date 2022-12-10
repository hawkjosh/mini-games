import * as React from 'react'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

import '../assets/styles/Hangman/Hangman.css'

import Hangman1 from '../assets/images/Hangman/hangman1.png'
import Hangman2 from '../assets/images/Hangman/hangman2.png'
import Hangman3 from '../assets/images/Hangman/hangman3.png'
import Hangman4 from '../assets/images/Hangman/hangman4.png'
import Hangman5 from '../assets/images/Hangman/hangman5.png'
import Hangman6 from '../assets/images/Hangman/hangman6.png'
import Hangman7 from '../assets/images/Hangman/hangman7.png'
import Hangman8 from '../assets/images/Hangman/hangman8.png'
import Hangman9 from '../assets/images/Hangman/hangman9.png'

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

const buttonSX = {
  cursor: 'pointer',
  fontSize: '1.5rem',
  color: '#1976d2',
  margin: '0.25rem 0.5rem',
  border: '0.15rem solid rgb(44, 135, 255)',
  borderRadius: '0.5rem',
  '&:hover': {
    boxShadow: '-0.25rem 0.25rem 0.5rem #888'
  },
  '&.disabled': {
    pointerEvents: 'none',
    color: 'darkgray',
    borderColor: 'gray',
    opacity: '0.5',
    '&:hover': {
      boxShadow: 'none'
    }
  }
}
  
export default function Hangman() {

  const wordOptions = ['hangman', 'agile', 'algorithm', 'api', 'application', 'bootstrap', 'backend', 'browser', 'bug', 'cache', 'code', 'css', 'data', 'debugging', 'deployment', 'documentation', 'domain', 'frameworks', 'frontend', 'git', 'github', 'html', 'http', 'java', 'javascript', 'jquery', 'languages', 'libraries', 'minification', 'mvp', 'mysql', 'nodejs', 'npm', 'php', 'plugin', 'python', 'resolution', 'responsive', 'sitemap', 'software', 'ssl', 'wireframe']
    
  const getRandomWord = (arr) => {
    const randomWord = Math.floor(Math.random() * arr.length)
    const selection = arr[randomWord]
    return selection
  }

  const images = [Hangman1, Hangman2, Hangman3, Hangman4, Hangman5, Hangman6, Hangman7, Hangman8, Hangman9]
  
  const [image, setImage] = React.useState(images[0])
  
  const [word, setWord] = React.useState(getRandomWord(wordOptions).toUpperCase())
  
  const letterCount = [... new Set(word)].length

  const [correctGuesses, setCorrectGuesses] = React.useState([])

  const [wrongGuesses, setWrongGuesses] = React.useState([])

  const finishMessageArea = document.getElementById('finishMessageArea')
  const playArea = document.getElementById('playArea')
  const finishMessageText1 = document.querySelector('[data-finish-message-text1]')
  const finishMessageText2 = document.querySelector('[data-finish-message-text2]')
  const alphaBtnsArea = document.getElementById('alpha-btns-area')
  const alphaBtns = document.querySelectorAll('.data-btn')

  const hiddenWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : '_').join(' ')

  const winMessage = () => {
    alphaBtnsArea.classList.add('locked')
    finishMessageText1.innerText = 'Congrats, you win!'
    playArea.classList.add('hide')
    finishMessageArea.classList.add('win')
  }

  const loseMessage = () => {
    alphaBtnsArea.classList.add('locked')
    finishMessageText1.innerText = 'Sorry, you lose!'
    finishMessageText2.innerText = `The correct word was ${word}`
    playArea.classList.add('hide')
    finishMessageArea.classList.add('lose')
  }

  const checkChoice = (choice) => {
    let outcome
    if (word.includes(choice)) {
      setCorrectGuesses([...correctGuesses, choice])
      outcome = 'Correct'
    }
    else if (!word.includes(choice)) {
      setWrongGuesses([...wrongGuesses, choice])
      outcome = 'Wrong'
    }
    return outcome
  }

  const resetGame = () => {
    setImage(images[0])
    setCorrectGuesses([])
    setWrongGuesses([])
    alphaBtnsArea.classList.remove('locked')
    finishMessageText1.innerText = ''
    finishMessageText2.innerText = ''
    finishMessageArea.classList.remove('win', 'lose')
    playArea.classList.remove('hide')
    for (let i = 0; i < alphaBtns.length; i++) {
      alphaBtns[i].classList.remove('disabled')
    }
    setWord(getRandomWord(wordOptions).toUpperCase())
  }

  const HiddenWord = () => {

    return (
      <Typography sx={{letterSpacing: '1.25rem', fontSize:'2.25rem', marginBottom: '2rem'}}>
        {hiddenWord}
      </Typography>
    )
  }

  return (
    <ThemeProvider theme={theme}>

      <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', marginTop: '2rem'}} gap={5}>
        <Box component='img' src={image} sx={{width: '25%'}} />
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} gap={15}>
          <Box id='playArea' sx={{textAlign: 'center'}}>
            <HiddenWord />
          </Box>
          <Box className='finish-message' id='finishMessageArea'>
            <Box className='finish-message-text1' data-finish-message-text1></Box>
            <Box className='finish-message-text2' data-finish-message-text2></Box>
            <Button onClick={resetGame}>
              Play Again
            </Button>
          </Box>
          <Box id='alpha-btns-area' sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('A')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('A') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('A') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('A') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              A
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('B')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('B') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('B') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('B') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              B
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('C')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('C') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('C') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('C') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              C
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('D')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('D') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('D') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('D') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              D
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('E')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('E') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('E') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('E') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              E
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('F')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('F') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('F') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('F') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              F
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('G')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('G') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('G') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('G') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              G
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('H')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('H') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('H') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('H') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              H
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('I')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('I') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('I') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('I') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              I
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('J')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('J') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('J') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('J') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              J
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('K')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('K') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('K') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('K') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              K
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('L')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('L') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('L') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('L') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              L
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('M')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('M') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('M') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('M') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              M
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('N')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('N') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('N') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('N') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              N
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('O')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('O') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('O') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('O') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              O
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('P')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('P') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('P') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('P') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              P
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('Q')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('Q') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('Q') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('Q') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              Q
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('R')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('R') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('R') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('R') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              R
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('S')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('S') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('S') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('S') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              S
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('T')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('T') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('T') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('T') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              T
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('U')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('U') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('U') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('U') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              U
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('V')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('V') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('V') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('V') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              V
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('W')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('W') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('W') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('W') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              W
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('X')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('X') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('X') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('X') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              X
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('Y')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('Y') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('Y') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('Y') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              Y
            </Button>
            <Button
              className='data-btn'
              sx={buttonSX}
              onClick={(e) => {
                e.target.classList.add('disabled')
                checkChoice('Z')
                let correctLetters = correctGuesses.length + 1
                let wrongLetters = wrongGuesses.length + 1
                let addImg = wrongGuesses.length
                if (checkChoice('Z') === 'Wrong' && wrongLetters <= 8) {
                  setImage(images[addImg += 1])
                }
                if (checkChoice('Z') === 'Wrong' && wrongLetters === 8) {
                  loseMessage()
                }
                if (checkChoice('Z') === 'Correct' && correctLetters === letterCount) {
                  winMessage()
                }
              }}
            >
              Z
            </Button>
          </Box>
        </Box>
      </Box >

    </ThemeProvider >
  )
}