import * as React from 'react'

import { Box, Button, ThemeProvider, Typography } from '@mui/material'

import {
	theme,
	hangmanContainerSX,
	hangmanImgSX,
	alphaBtnsAreaSX,
	alphaBtnSX,
	playAreaSX,
	hiddenWordSX,
	endMsgContainerSX,
	endMsgTxt1SX,
	endMsgTxt2SX,
	resetBtnSX,
} from './hangmanSX.js'

import { alphabet, wordOptions, images } from './hangmanUtils.js'

export const Hangman = () => {
	const getRandomWord = (arr) => {
		const randomWord = Math.floor(Math.random() * arr.length)
		const selection = arr[randomWord]
		return selection
	}

	const [word, setWord] = React.useState(
		getRandomWord(wordOptions).toUpperCase()
	)
	const [image, setImage] = React.useState(images[0])
	const [correctGuesses, setCorrectGuesses] = React.useState([])
	const [wrongGuesses, setWrongGuesses] = React.useState([])
	const [gameOver, setGameOver] = React.useState(false)
	const [endMsgTxt1, setEndMsgTxt1] = React.useState('')
	const [endMsgTxt2, setEndMsgTxt2] = React.useState('')
	const [endMsgColor, setEndMsgColor] = React.useState('')

	const letterCount = [...new Set(word)].length

	const [buttonStyles, setButtonStyles] = React.useState(
		Array(26).fill({
			color: '#1976d2',
			borderColor: 'rgb(44, 135, 255)',
			opacity: '1',
			pointerEvents: 'auto',
		})
	)

	const hiddenWord = word
		.split('')
		.map((letter) => (correctGuesses.includes(letter) ? letter : '●'))
		.join(' ')

	const checkGuess = (guess) => {
		let outcome
		if (word.includes(guess)) {
			setCorrectGuesses([...correctGuesses, guess])
			outcome = 'Correct'
		} else if (!word.includes(guess)) {
			setWrongGuesses([...wrongGuesses, guess])
			outcome = 'Wrong'
		}
		return outcome
	}

	const handleChoice = (e) => {
		const button = e.target
		const guess = button.innerHTML
		const index = Array.from(button.parentNode.children).indexOf(button)
		let correctLetters = correctGuesses.length + 1
		let wrongLetters = wrongGuesses.length + 1
		let addImg = wrongGuesses.length
		checkGuess(guess)
		if (checkGuess(guess) === 'Wrong' && wrongLetters <= 8) {
			setImage(images[(addImg += 1)])
			setButtonStyles((prevStyles) => {
				const newStyles = [...prevStyles]
				newStyles[index] = {
					color: 'red',
					borderColor: 'red',
					opacity: '0.5',
					pointerEvents: 'none',
				}
				return newStyles
			})
		}
		if (checkGuess(guess) === 'Wrong' && wrongLetters === 8) {
			setGameOver(true)
			setEndMsgTxt1('Sorry, you lost!')
			setEndMsgColor('hsl(0, 75%, 50%)')
			setEndMsgTxt2(`( answer: ${word} )`)
		}
		if (checkGuess(guess) === 'Correct' && correctLetters < letterCount) {
			setButtonStyles((prevStyles) => {
				const newStyles = [...prevStyles]
				newStyles[index] = {
					color: 'green',
					borderColor: 'green',
					opacity: '0.5',
					pointerEvents: 'none',
				}
				return newStyles
			})
		}
		if (checkGuess(guess) === 'Correct' && correctLetters === letterCount) {
			setGameOver(true)
			setEndMsgTxt1('Congrats, you won!')
			setEndMsgColor('hsl(100, 75%, 40%)')
			setEndMsgTxt2(
				`( total guesses: ${correctGuesses.length + wrongGuesses.length + 1} )`
			)
		}
	}

	const resetGame = () => {
		setGameOver(false)
		setEndMsgTxt1('')
		setEndMsgTxt2('')
		setImage(images[0])
		setCorrectGuesses([])
		setWrongGuesses([])
		setWord(getRandomWord(wordOptions).toUpperCase())
	}

	React.useEffect(() => {
		if (gameOver) {
			setButtonStyles(
				Array(26).fill({
					color: '#1976d2',
					borderColor: 'rgb(44, 135, 255)',
					opacity: '1',
				})
			)
		}
	}, [gameOver])

	return (
		<ThemeProvider theme={theme}>
			<Box sx={hangmanContainerSX}>
				<Box
					sx={hangmanImgSX}
					component='img'
					src={image}
				/>
				<Box sx={alphaBtnsAreaSX}>
					{alphabet.map((guess, index) => (
						<Box
							sx={{
								...alphaBtnSX,
								color: buttonStyles[index].color,
								borderColor: buttonStyles[index].borderColor,
								opacity: buttonStyles[index].opacity,
								pointerEvents: buttonStyles[index].pointerEvents,
							}}
							key={index}
							onClick={handleChoice}>
							{guess}
						</Box>
					))}
				</Box>
				<Box sx={playAreaSX}>
					<Typography sx={hiddenWordSX}>{hiddenWord}</Typography>
				</Box>
				{gameOver && (
					<Box sx={endMsgContainerSX}>
						<Box
							sx={{
								...endMsgTxt1SX,
								color: endMsgColor,
							}}>
							{endMsgTxt1}
						</Box>
						<Box sx={endMsgTxt2SX}>{endMsgTxt2}</Box>
						<Button
							sx={{
								...resetBtnSX,
								color: endMsgColor,
								borderColor: endMsgColor,
							}}
							onClick={resetGame}>
							Play Again
						</Button>
					</Box>
				)}
			</Box>
		</ThemeProvider>
	)
}
