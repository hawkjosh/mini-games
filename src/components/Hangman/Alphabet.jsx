import * as React from 'react'

import {
  Box,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material'

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

export default function Alphabet({ images, wrongGuessesList, correctGuessesList, setWrongGuessesList, setCorrectGuessesList, loseMessage, winMessage, setHangmanImg }) {

  const word = 'hangman'.toUpperCase()

  const [wrongCount, setWrongCount] = React.useState(0)

  const [correctCount, setCorrectCount] = React.useState(0)

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

  return (
    <ThemeProvider theme={theme}>

      <Box sx={{width: '70%'}}>
        <Button
          data-a-btn
          sx={buttonSX}
          onClick={() => {
            document.querySelector('[data-a-btn]').classList.add('disabled')
            if (checkChoice('A') === 'Wrong') {
              setWrongCount(() => wrongCount += 1)
              console.log(wrongCount)
              setHangmanImg(images[wrongCount + 1])
            }
            if (checkChoice('A') === 'Correct') {
              setCorrectCount(() => correctCount += 1)
              console.log(correctCount)
            }
          }}
        >
          A
        </Button>
        <Button
          data-b-btn
          sx={buttonSX}
          onClick={() => {
            document.querySelector('[data-b-btn]').classList.add('disabled')
            if (checkChoice('B') === 'Wrong') {
              setWrongCount(() => wrongCount += 1)
              console.log(wrongCount)
              setHangmanImg(images[wrongCount + 1])
            }
            if (checkChoice('B') === 'Correct') {
              setCorrectCount(() => correctCount += 1)
              console.log(correctCount)
            }
          }}
        >
          B
        </Button>
      </Box>

    </ThemeProvider >
  )
}