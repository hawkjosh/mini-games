import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

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

const buttonSX = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  aspectRatio: '1/1',
  width: {
    mobile: '10%',
    tabletSmall: '19.5%',
    tabletLarge: '19%',
    laptopSmall: '5.5%',
    laptopLarge: '6%'
  },
  cursor: 'pointer',
  fontSize: {
    mobile: '1rem',
    tabletSmall: '1.25rem',
    tabletLarge: '1.5rem',
    laptopSmall: '1.75rem',
    laptopLarge: '2rem'
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

  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const wordOptions = ['hangman', 'agile', 'algorithm', 'api', 'application', 'bootstrap', 'backend', 'browser', 'bug', 'cache', 'code', 'css', 'data', 'debugging', 'deployment', 'documentation', 'domain', 'frameworks', 'frontend', 'git', 'github', 'html', 'http', 'java', 'javascript', 'jquery', 'languages', 'libraries', 'minification', 'mvp', 'mysql', 'nodejs', 'npm', 'php', 'plugin', 'python', 'resolution', 'responsive', 'sitemap', 'software', 'ssl', 'wireframe']

  const getRandomWord = (arr) => {
    const randomWord = Math.floor(Math.random() * arr.length)
    const selection = arr[randomWord]
    return selection
  }

  const images = [Hangman1, Hangman2, Hangman3, Hangman4, Hangman5, Hangman6, Hangman7, Hangman8, Hangman9]
  
  const [word, setWord] = React.useState(getRandomWord(wordOptions).toUpperCase())
  
  const letterCount = [... new Set(word)].length

  const [image, setImage] = React.useState(images[0])
  
  const [correctGuesses, setCorrectGuesses] = React.useState([])

  const [wrongGuesses, setWrongGuesses] = React.useState([])

  const alphaBtnsArea = document.querySelector('[data-alpha-btns-area]')
  const alphaBtns = document.querySelectorAll('[data-alpha-btns]')
  const playArea = document.querySelector('[data-play-area]')
  const finishMessage = document.querySelector('[data-finish-message]')
  const finishText1 = document.querySelector('[data-finish-text-1]')
  const finishText2 = document.querySelector('[data-finish-text-2]')

  const hiddenWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : '—').join(' ')

  const winMessage = () => {
    alphaBtnsArea.style.setProperty('opacity', '0.5')
    alphaBtnsArea.style.setProperty('pointer-events', 'none')
    playArea.style.setProperty('display', 'none')
    finishMessage.style.setProperty('display', 'flex')
    finishMessage.style.setProperty('background-color', 'green')
    finishText1.innerText = 'Congrats, you won!'
    finishText2.innerText = `( total guesses: ${correctGuesses.length + wrongGuesses.length + 1} )`
  }

  const loseMessage = () => {
    alphaBtnsArea.style.setProperty('opacity', '0.5')
    alphaBtnsArea.style.setProperty('pointer-events', 'none')
    playArea.style.setProperty('display', 'none')
    finishMessage.style.setProperty('display', 'flex')
    finishMessage.style.setProperty('background-color', 'red')
    finishText1.innerText = 'Sorry, you lost!'
    finishText2.innerText = `( correct answer: ${word} )`
  }

  const checkGuess = (guess) => {
    let outcome
    if (word.includes(guess)) {
      setCorrectGuesses([...correctGuesses, guess])
      outcome = 'Correct'
    }
    else if (!word.includes(guess)) {
      setWrongGuesses([...wrongGuesses, guess])
      outcome = 'Wrong'
    }
    return outcome
  }

  const resetGame = () => {
    setImage(images[0])
    setCorrectGuesses([])
    setWrongGuesses([])
    alphaBtnsArea.style.setProperty('opacity', '1')
    alphaBtnsArea.style.setProperty('pointer-events', 'auto')
    for (let i = 0; i < alphaBtns.length; i++) {
      alphaBtns[i].classList.remove('disabled')
    }
    playArea.style.setProperty('display', 'block')
    finishMessage.style.setProperty('display', 'none')
    finishMessage.style.setProperty('background-color', 'none')
    finishText1.innerText = ''
    finishText2.innerText = ''
    setWord(getRandomWord(wordOptions).toUpperCase())
  }

  const HiddenWord = () => {

    return (
      <Typography
        sx={{textAlign: 'center', fontSize: {mobile: '1.15rem', tabletSmall: '1.75rem', laptopSmall: '2rem', laptopLarge: '2.5rem'}, letterSpacing: {mobile: '0.05rem', tabletSmall: '0.35rem', laptopSmall: '0.5rem'}, marginY: {mobile: '1.75rem', tabletSmall: '2.5rem', tabletLarge: '3.5rem', laptopSmall: '5rem'}}}
        >
        {hiddenWord}
      </Typography>
    )
  }

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}

      <Laptop>
        <Box
          gap={'1rem'}
          sx={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}
          >
          <Box
            component='img'
            src={image}
            sx={{width: '30%', marginLeft: '1rem'}}
          />
  
          <Box
            sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}
            >
            <Box
              data-play-area
              sx={{width: '95%', borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 0 0.75rem slategray', background: 'lightgray'}}
              >
              <HiddenWord />
            </Box>
  
            <Box
              data-finish-message
              sx={{display: 'none', width: '95%', position: 'relative', paddingY: '0.5rem', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', borderRadius: '3.25rem'}}
              >
              <Box
                data-finish-text-1
                sx={{fontSize: '2.5rem'}}
              />
              <Box
                data-finish-text-2
                sx={{fontSize: '1.5rem', marginTop: '0.5rem', fontStyle: 'italic'}}
              />
              <Button
                onClick={resetGame}
                sx={{marginTop: '1.5rem', padding: '0.3rem 0.6rem', color: 'black', bgcolor: 'white', border: '0.1rem solid black', '&:hover': {color: 'white', bgcolor: 'black', borderColor: 'white'}}}
                >
                Play Again
              </Button>
            </Box>
  
            <Box
              data-alpha-btns-area
              gap={2}
              sx={{width: '95%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', padding: '0.5rem'}}
              >
              {alphabet.map((guess, index) => (
                <Box
                  data-alpha-btns
                  key={index}
                  onClick={(e) => {
                    e.target.classList.add('disabled')
                    checkGuess(guess)
                    let correctLetters = correctGuesses.length + 1
                    let wrongLetters = wrongGuesses.length + 1
                    let addImg = wrongGuesses.length
                      if (checkGuess(guess) === 'Wrong' && wrongLetters <= 8) {
                        setImage(images[addImg += 1])
                      }
                      if (checkGuess(guess) === 'Wrong' && wrongLetters === 8) {
                        loseMessage()
                      }
                      if (checkGuess(guess) === 'Correct' && correctLetters === letterCount) {
                        winMessage()
                      }
                    }
                  }
                  sx={buttonSX}
                  >
                  {guess}
                </Box>
              ))}
            </Box>
          </Box>
        </Box >
      </Laptop>

      {/* for tablet displays (vertical layout) */}

      <Tablet>
        <Box
          sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
          >
          <Box
            gap={'0.25rem'}
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '1rem 0.25rem'}}
            >
            <Box
              component='img'
              src={image}
              sx={{padding: '1rem', width: '100%'}}
            />
    
            <Box
              data-alpha-btns-area
              gap={'0.5rem'}
              sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '0.5rem'}}
              >
              {alphabet.map((guess, index) => (
                <Box
                  data-alpha-btns
                  key={index}
                  onClick={(e) => {
                    e.target.classList.add('disabled')
                    checkGuess(guess)
                    let correctLetters = correctGuesses.length + 1
                    let wrongLetters = wrongGuesses.length + 1
                    let addImg = wrongGuesses.length
                      if (checkGuess(guess) === 'Wrong' && wrongLetters <= 8) {
                        setImage(images[addImg += 1])
                      }
                      if (checkGuess(guess) === 'Wrong' && wrongLetters === 8) {
                        loseMessage()
                      }
                      if (checkGuess(guess) === 'Correct' && correctLetters === letterCount) {
                        winMessage()
                      }
                    }
                  }
                  sx={buttonSX}
                  >
                  {guess}
                </Box>
              ))}
            </Box>
          </Box>
  
          <Box
            data-play-area
            sx={{width: '90%', marginY: {tabletSmall: '1.5rem', tabletLarge: '5rem'}, borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 0 0.75rem slategray', background: 'lightgray'}}
            >
            <HiddenWord />
          </Box>
  
          <Box
            data-finish-message
            sx={{display: 'none', width: '95%', position: 'relative', paddingY: '0.5rem', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', borderRadius: '3.25rem', marginY: {tabletSmall: '1.5rem', tabletLarge: '5rem'}}}
            >
            <Box
              data-finish-text-1
              sx={{fontSize: '3.5rem'}}
            />
            <Box
              data-finish-text-2
              sx={{fontSize: '2rem', marginTop: '0.75rem', fontStyle: 'italic', color: 'lightgray'}}
            />
            <Button
              onClick={resetGame}
              sx={{fontSize: '1.5rem', width: '25%', marginY: '1.5rem', padding: '0.3rem 0.6rem', color: 'black', bgcolor: 'white', border: '0.1rem solid black'}}
              >
              Play Again
            </Button>
          </Box>
        </Box>
      </Tablet>

      {/* for mobile displays (vertical layout) */}

      <Mobile>
        <Box
          sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
          >
          <Box
            component='img'
            src={image}
            sx={{padding: '1rem', width: '50%'}}
          />
  
          <Box
            data-alpha-btns-area
            gap={'0.75rem'}
            sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '0.25rem'}}
            >
            {alphabet.map((guess, index) => (
              <Box
                data-alpha-btns
                key={index}
                onClick={(e) => {
                  e.target.classList.add('disabled')
                  checkGuess(guess)
                  let correctLetters = correctGuesses.length + 1
                  let wrongLetters = wrongGuesses.length + 1
                  let addImg = wrongGuesses.length
                    if (checkGuess(guess) === 'Wrong' && wrongLetters <= 8) {
                      setImage(images[addImg += 1])
                    }
                    if (checkGuess(guess) === 'Wrong' && wrongLetters === 8) {
                      loseMessage()
                    }
                    if (checkGuess(guess) === 'Correct' && correctLetters === letterCount) {
                      winMessage()
                    }
                  }
                }
                sx={buttonSX}
                >
                {guess}
              </Box>
            ))}
          </Box>
  
          <Box
            data-play-area
            sx={{width: '90%', marginY: '1rem', borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 0 0.75rem slategray', background: 'lightgray'}}
            >
            <HiddenWord />
          </Box>
  
          <Box
            data-finish-message
            sx={{display: 'none', width: '95%', position: 'relative', paddingY: '0.5rem', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', borderRadius: '3.25rem', marginY: '1.25rem'}}
            >
            <Box
              data-finish-text-1
              sx={{fontSize: '2.5rem'}}
            />
            <Box
              data-finish-text-2
              sx={{fontSize: '1.25rem', marginTop: '0.5rem', fontStyle: 'italic', color: 'lightgray'}}
            />
            <Button
              onClick={resetGame}
              sx={{marginTop: '1rem', marginBottom: '0.25rem', padding: '0.3rem 0.6rem', color: 'black', bgcolor: 'white', border: '0.1rem solid black'}}
              >
              Play Again
            </Button>
          </Box>
        </Box>
      </Mobile>

    </ThemeProvider >
  )
}