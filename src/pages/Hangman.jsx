import * as React from 'react'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

import { useMediaQuery } from 'react-responsive'

import '../assets/styles/Hangman/Hangman.css'

import Hangman1 from '../assets/images/Hangman/hangmanSm1.png'
import Hangman2 from '../assets/images/Hangman/hangmanSm2.png'
import Hangman3 from '../assets/images/Hangman/hangmanSm3.png'
import Hangman4 from '../assets/images/Hangman/hangmanSm4.png'
import Hangman5 from '../assets/images/Hangman/hangmanSm5.png'
import Hangman6 from '../assets/images/Hangman/hangmanSm6.png'
import Hangman7 from '../assets/images/Hangman/hangmanSm7.png'
import Hangman8 from '../assets/images/Hangman/hangmanSm8.png'
import Hangman9 from '../assets/images/Hangman/hangmanSm9.png'

const theme = createTheme({
  breakpoints: {
    values: {
      // Breakpoints below use vertical layout
      iphone: 428,
      ipadMini: 768,
      ipadAir: 820,
      // Breakpoints below change to horizontal layout
      laptop: 1263,
      xtraDisplay: 1519,
    }
  }
})

const buttonSX = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  aspectRatio: '1/1',
  width: {
    iphone: '20%',
    ipadMini: '19.5%',
    ipadAir: '19%',
    laptop: '5.5%',
    xtraDisplay: '6%'
  },
  cursor: 'pointer',
  fontSize: {
    iphone: '1rem',
    ipadMini: '1.25rem',
    ipadAir: '1.5rem',
    laptop: '1.75rem',
    xtraDisplay: '2rem'
  },
  color: '#1976d2',
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

  const horizontalView = useMediaQuery({
    query: '(min-width: 821px)'
  })

  const verticalView = useMediaQuery({
    query: '(max-width: 820px)'
  })

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

  const hiddenWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : '—').join(' ')

  const winMessage = () => {
    alphaBtnsArea.classList.add('locked')
    playArea.classList.add('hide')
    finishMessageArea.classList.add('win')
    finishMessageText1.innerText = 'Congrats, you win!'
    finishMessageText2.innerText = `( Total tries: ${correctGuesses.length + wrongGuesses.length + 1} )`
  }

  const loseMessage = () => {
    alphaBtnsArea.classList.add('locked')
    playArea.classList.add('hide')
    finishMessageArea.classList.add('lose')
    finishMessageText1.innerText = 'Sorry, you lose!'
    finishMessageText2.innerText = `( Correct word: ${word} )`
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
      <Typography sx={{fontSize: {iphone: '1.25rem', ipadMini: '1.75rem', ipadAir: '2rem', laptop: '2.25rem', xtraDisplay: '2.5rem'}, letterSpacing: {ipadMini: '0.35rem', laptop: '0.5rem'}, marginY: {iphone: '2rem', ipadMini: '2.5rem', ipadAir: '3rem', laptop: '5rem'}}}>
        {hiddenWord}
      </Typography>
    )
  }

  return (
    <ThemeProvider theme={theme}>

      {/* for horizontal layouts */}

      {horizontalView &&

      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}} gap={'1rem'}>
        <Box component='img' src={image} sx={{width: '30%', marginLeft: '1rem'}} />
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
          <Box id='playArea' sx={{width: '95%', textAlign: 'center', borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 0 10px gray'}}>
            <HiddenWord />
          </Box>
          <Box id='finishMessageArea' className='finish-message'>
            <Box className='finish-message-text1' data-finish-message-text1></Box>
            <Box className='finish-message-text2' data-finish-message-text2></Box>
            <Button onClick={resetGame}>
              Play Again
            </Button>
          </Box>

          <Box id='alpha-btns-area' sx={{width: '95%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', padding: '0.5rem'}} gap={2}>
            {alphabet.map((choice, index) => (
              <Box
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
              </Box>
            ))}
          </Box>
        </Box>
      </Box >
      }

      {/* for vertical layouts */}

      {verticalView &&

      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '1rem 0.25rem'}} gap={'0.25rem'}>
          <Box component='img' src={image} sx={{padding: '1rem', width: '100%'}} />
  
          <Box id='alpha-btns-area' sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '0.5rem'}} gap={'0.5rem'}>
            {alphabet.map((choice, index) => (
              <Box
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
              </Box>
            ))}
          </Box>
        </Box>

        <Box id='playArea' sx={{width: '90%', textAlign: 'center', marginY: {iphone: '1rem', ipadMini: '3rem', ipadAir: '4rem', laptop: '1rem'}, borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 0 10px gray'}}>
          <HiddenWord />
        </Box>

        <Box id='finishMessageArea' className='finish-message' sx={{marginY: '2.5rem'}}>
          <Box className='finish-message-text1' data-finish-message-text1></Box>
          <Box className='finish-message-text2' data-finish-message-text2></Box>
          <Button onClick={resetGame}>
            Play Again
          </Button>
        </Box>
      
      </Box>
      }

    </ThemeProvider >
  )
}