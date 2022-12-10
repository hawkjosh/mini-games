import * as React from 'react'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography
} from '@mui/material'

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
  fontSize: '2rem',
  color: 'blue',
  margin: '0.25rem 0.5rem',
  border: '0.15rem solid #1976d2',
  borderRadius: '0.5rem',
  '&:hover': {
    boxShadow: '-0.25rem 0.25rem 0.5rem #888'
  },
  '&.disabled': {
    cursor: 'default',
    color: 'gray',
    borderColor: 'gray',
    opacity: '0.5',
    '&:hover': {
      boxShadow: 'none'
    }
  }
}

export default function Alphabet() {

  const word = 'hangman'.toUpperCase()

  const images = [Hangman1, Hangman2, Hangman3, Hangman4, Hangman5, Hangman6, Hangman7, Hangman8, Hangman9]

  const finishMessageArea = document.getElementById('finishMessageArea')
  const playArea = document.getElementById('playArea')
  const finishMessageText1 = document.querySelector('[data-finish-message-text1]')
  const finishMessageText2 = document.querySelector('[data-finish-message-text2]')
  const alphaBtn = document.querySelectorAll('[data-btn]')
  const btnAlpha = document.querySelectorAll('.data-btn')

  const [image, setImage] = React.useState(images[0])

  const [wrongCount, setWrongCount] = React.useState(0)

  const [correctCount, setCorrectCount] = React.useState(0)

  const [correctGuesses, setCorrectGuesses] = React.useState([])

  const hiddenWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : '_').join(' ')

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

  const checkChoice = (choice) => {
    let outcome
    if (word.includes(choice)) {
      outcome = 'Correct'
    }
    else if (!word.includes(choice)) {
    outcome = 'Wrong'
    }
    return outcome
  }

  const resetGame = () => {
    setImage(images[0])
    setWrongCount(0)
    setCorrectCount(0)
    setCorrectGuesses([])
    finishMessageText1.innerText = ''
    finishMessageText2.innerText = ''
    finishMessageArea.classList.remove('win', 'lose')
    playArea.classList.remove('hide')
    alphaBtn.classList.remove('disabled')
    btnAlpha.classList.remove('disabled')
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

      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem'}}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem'}} gap={15}>
          <Box component='img' src={image} sx={{width: '25%'}} />
          <Box id='playArea' sx={{textAlign: 'center', flexGrow: '0.75'}}>
            <HiddenWord />
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
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('A') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('A') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'A'])
                setCorrectCount(count => { return count += 1 })
                console.log(correctCount)
              }
            }}
          >
            A
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('B') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('B') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'B'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            B
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('C') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('C') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'C'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            C
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('D') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('D') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'D'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            D
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('E') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('E') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'E'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            E
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('F') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('F') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'F'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            F
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('G') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('G') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'G'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            G
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('H') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('H') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'H'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            H
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('I') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('I') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'I'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            I
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('J') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('J') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'J'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            J
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('K') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('K') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'K'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            K
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('L') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('L') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'L'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            L
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('M') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('M') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'M'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            M
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('N') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('N') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'N'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            N
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('O') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('O') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'O'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            O
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('P') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('P') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'P'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            P
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('Q') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('Q') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'Q'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            Q
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('R') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('R') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'R'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            R
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('S') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('S') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'S'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            S
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('T') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('T') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'T'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            T
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('U') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('U') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'U'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            U
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('V') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('V') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'V'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            V
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('W') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('W') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'W'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            W
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('X') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('X') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'X'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            X
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('Y') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('Y') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'Y'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            Y
          </Button>
          <Button
            data-btn
            className='data-btn'
            sx={buttonSX}
            onClick={(e) => {
              e.target.classList.add('disabled')
              if (checkChoice('Z') === 'Wrong') {
                setWrongCount(count => { return count += 1 })
                setImage(images[wrongCount + 1])
              }
              if (checkChoice('Z') === 'Correct') {
                setCorrectGuesses([...correctGuesses, 'Z'])
                setCorrectCount(count => { return count += 1 })
              }
            }}
          >
            Z
          </Button>
        </Box>
      </Box >

    </ThemeProvider >
  )
}