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

const alphaBtnSX = {
  margin: '0.5rem',
  cursor: 'pointer',
  border: '2px solid #1976d2',
  borderRadius: '3px',
  color: 'blue',
  fontSize: '3rem',
  aspectRatio: '1/1',
  width: '4rem'
}

export default function Hangman() {
  
  const word = 'hangman'.toUpperCase()
  // const getRandomWord = (arr) => {
  //   const randomWord = Math.floor(Math.random() * arr.length)
  //   const selection = arr[randomWord]
  //   return selection
  // }
  
  // const wordOptions = ['hangman'.toUpperCase(), 'javascript'.toUpperCase(), 'mini-games'.toUpperCase(), 'laptop'.toUpperCase(), 'programmer'.toUpperCase()]

  // const word = getRandomWord(wordOptions)

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const images = [Hangman1, Hangman2, Hangman3, Hangman4, Hangman5, Hangman6, Hangman7, Hangman8, Hangman9]

  const finishMessageArea = document.getElementById('finishMessageArea')
  const playArea = document.getElementById('playArea')
  const finishMessageText1 = document.querySelector('[data-finish-message-text1]')
  const finishMessageText2 = document.querySelector('[data-finish-message-text2]')

  const [correctGuessesList, setCorrectGuessesList] = React.useState([])

  const [wrongGuessesList, setWrongGuessesList] = React.useState([])
  
  const [hangmanImg, setHangmanImg] = React.useState(images[0])

  const maskedWord = word.split('').map(letter => correctGuessesList.includes(letter) ? letter : '_').join(' ')
  
  const handleWrongClick = () => {
    let currCount = wrongGuessesList.length
    setHangmanImg([images[currCount += 1]])
  }

  const checkWinner = () => {
    if (!maskedWord.includes('_')) {
      finishMessageText1.innerText = 'Congrats, you win!'
      playArea.classList.add('hide')
      finishMessageArea.classList.add('win')
    } else if (maskedWord.includes('_') && wrongGuessesList.length >= 7) {
      finishMessageText1.innerText = 'Sorry, you lose!'
      finishMessageText2.innerText = `The correct word was ${word}`
      playArea.classList.add('hide')
      finishMessageArea.classList.add('lose')
    }
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

  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h3' sx={{textAlign: 'center'}}>
        Hangman
      </Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem'}} gap={15}>
          <Box component='img' src={hangmanImg} sx={{width: '20%'}} />
          <Box id='playArea' sx={{textAlign: 'center'}}>
            <Typography sx={{letterSpacing: '1.25rem', fontSize:'2.25rem', marginBottom: '2rem'}}>
              {maskedWord}
            </Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '1rem'}} gap={5}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: '1rem', border: '2px solid green', aspectRatio: '2/1', width: '300px'}}>
              <Typography sx={{fontWeight: 'bold', color: 'green'}}>Correct</Typography>
              <Box sx={{alignSelf: 'flex-start', marginTop: '1rem', fontSize: '1.25rem'}}>{correctGuessesList.join(', ')}</Box>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: '1rem', border: '2px solid red', aspectRatio: '2/1', width: '300px'}}>
              <Typography sx={{fontWeight: 'bold', color: 'red'}}>Wrong</Typography>
              <Box sx={{alignSelf: 'flex-start', marginTop: '1rem', fontSize: '1.25rem'}}>{wrongGuessesList.join(', ')}</Box>
            </Box>
          </Box>
          <Typography sx={{textAlign: 'center', marginTop: '1.5rem'}}>{8 - wrongGuessesList.length} wrong guesses left</Typography>
          </Box>
          <Box className='finish-message' id='finishMessageArea'>
            <Box className='finish-message-text1' data-finish-message-text1></Box>
            <Box className='finish-message-text2' data-finish-message-text2></Box>
            <Button onClick={resetGame}>
              Play Again
            </Button>
          </Box>
        </Box>
        <Box sx={{width: '70%'}}>
          {alphabet.map((alphabet, index) =>
            <Box component='button' sx={alphaBtnSX} key={index} onClick={() => {
              checkWinner()
              if (word.includes(alphabet)) {
                setCorrectGuessesList([...correctGuessesList, alphabet])
              } else {
                setWrongGuessesList([...wrongGuessesList, alphabet])
                handleWrongClick()
              }
            }}>
              {alphabet}
            </Box>
          )}
        </Box>
        {/* {gameOver ? <Box sx={{fontSize: '3rem', marginTop: '2rem', color: 'red', fontWeight: 'bold'}}>Sorry, you lose! The correct word was {word}</Box> : !maskedWord.includes('_') && <Box sx={{fontSize: '3rem', marginTop: '2rem', color: 'green', fontWeight: 'bold'}}>Congrats, you win!</Box>} */}
      </Box>
    </ThemeProvider>
  )
}