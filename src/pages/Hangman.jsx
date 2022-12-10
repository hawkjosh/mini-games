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

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

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

      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: '2rem'}} gap={5}>
        <Box component='img' src={image} sx={{width: '25%'}} />
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} gap={10}>
          <Box id='playArea' sx={{textAlign: 'center'}}>
            <HiddenWord />
          </Box>
          <Box id='finishMessageArea' className='finish-message'>
            <Box className='finish-message-text1' data-finish-message-text1></Box>
            <Box className='finish-message-text2' data-finish-message-text2></Box>
            <Button onClick={resetGame}>
              Play Again
            </Button>
          </Box>

          <Box id='alpha-btns-area' sx={{display: 'flex', flexWrap: 'wrap'}}>
            {alphabet.map((choice, index) => (
              <Button
                className='data-btn'
                sx={buttonSX}
                key={index}
                onClick={(e) => {
                  e.target.classList.add('disabled')
                  checkChoice(choice)
                  let correctLetters = correctGuesses.length + 1
                  let wrongLetters = wrongGuesses.length + 1
                  let addImg = wrongGuesses.length
                  if (checkChoice(choice) === 'Wrong' && wrongLetters <= 8) {
                    setImage(images[addImg += 1])
                  }
                  if (checkChoice(choice) === 'Wrong' && wrongLetters === 8) {
                    loseMessage()
                  }
                  if (checkChoice(choice) === 'Correct' && correctLetters === letterCount) {
                    winMessage()
                  }
                }}
          >
                {choice}
              </Button>
            ))}
          </Box>
        </Box>
      </Box >

    </ThemeProvider >
  )
}