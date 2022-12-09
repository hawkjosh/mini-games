import * as React from 'react'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

import Alphabet from '../components/Hangman/Alphabet'

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

export default function Hangman() {

  // const getRandomWord = (arr) => {
  //   const randomWord = Math.floor(Math.random() * arr.length)
  //   const selection = arr[randomWord]
  //   return selection
  // }
  
  // const wordOptions = ['hangman'.toUpperCase(), 'javascript'.toUpperCase(), 'computer'.toUpperCase(), 'laptop'.toUpperCase(), 'programmer'.toUpperCase()]

  // const word = getRandomWord(wordOptions)
  
  const word = 'hangman'.toUpperCase()

  const letterCount = 5

  const images = [Hangman1, Hangman2, Hangman3, Hangman4, Hangman5, Hangman6, Hangman7, Hangman8, Hangman9]

  const finishMessageArea = document.getElementById('finishMessageArea')
  const playArea = document.getElementById('playArea')
  const finishMessageText1 = document.querySelector('[data-finish-message-text1]')
  const finishMessageText2 = document.querySelector('[data-finish-message-text2]')

  const [correctGuessesList, setCorrectGuessesList] = React.useState([])

  const [wrongGuessesList, setWrongGuessesList] = React.useState([])
  
  const [hangmanImg, setHangmanImg] = React.useState(images[0])

  const maskedWord = word.split('').map(letter => correctGuessesList.includes(letter) ? letter : '_').join(' ')

  const winMessage = () => {
    finishMessageText1.innerText = 'Congrats, you win!'
    playArea.classList.add('hide')
    finishMessageArea.classList.add('win')
  }

  const loseMessage = () => {
    finishMessageText1.innerText = 'Sorry, you lose!'
    finishMessageText2.innerText = `The correct word was ${word}`
    playArea.classList.add('hide')
    finishMessageArea.classList.add('lose')
  }

  const resetGame = () => {
    setHangmanImg(images[0])
    setCorrectGuessesList([])
    setWrongGuessesList([])
    finishMessageText1.innerText = ''
    finishMessageText2.innerText = ''
    finishMessageArea.classList.remove('win', 'lose')
    playArea.classList.remove('hide')
  }

  const MaskedWord = () => {
    return (
      <Typography sx={{letterSpacing: '1.25rem', fontSize:'2.25rem', marginBottom: '2rem'}}>
        {maskedWord}
      </Typography>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem'}} gap={15}>
          <Box component='img' src={hangmanImg} sx={{width: '25%'}} />
          <Box id='playArea' sx={{textAlign: 'center', flexGrow: '0.75'}}>
            <MaskedWord />
          </Box>
          <Box className='finish-message' id='finishMessageArea'>
            <Box className='finish-message-text1' data-finish-message-text1></Box>
            <Box className='finish-message-text2' data-finish-message-text2></Box>
            <Button onClick={resetGame}>
              Play Again
            </Button>
          </Box>
        </Box>
        <Alphabet
          word={word}
          images={images}
          wrongGuessesList={wrongGuessesList}
          correctGuessesList={correctGuessesList}
          setWrongGuessesList={setWrongGuessesList}
          setCorrectGuessesList={setCorrectGuessesList}
          loseMessage={loseMessage}
          winMessage={winMessage}
          setHangmanImg={setHangmanImg}
        />
        {/* <Alphabet /> */}
      </Box>

    </ThemeProvider>
  )
}