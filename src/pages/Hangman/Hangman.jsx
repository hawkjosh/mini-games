import * as React from 'react'

import { Box, ThemeProvider, Typography } from '@mui/material'

import { theme } from '../theme.js'

import {
	hangmanContainerSX,
	hangmanImgSX,
	alphaBtnsAreaSX,
	alphaBtnSX,
	playAreaSX,
	hiddenWordSX,
	finishMessageSX,
	finishMessageTxt1SX,
	finishMessageTxt2SX,
	resetBtnSX,
	alphabet,
	wordOptions,
	images,
} from './hangmanSX.js'

import './styles/Hangman.css'

export const Hangman = () => {
	const getRandomWord = (arr) => {
		const randomWord = Math.floor(Math.random() * arr.length)
		const selection = arr[randomWord]
		return selection
	}

	const [word, setWord] = React.useState(
		getRandomWord(wordOptions).toUpperCase()
	)

	const letterCount = [...new Set(word)].length

	const [image, setImage] = React.useState(images[0])

	const [correctGuesses, setCorrectGuesses] = React.useState([])

	const [wrongGuesses, setWrongGuesses] = React.useState([])

	const alphaBtnsArea = document.querySelector('[data-alpha-btns-area]')
	const alphaBtns = document.querySelectorAll('[data-alpha-btns]')
	const finishMessage = document.querySelector('[data-finish-message]')
	const finishMessageTxt1 = document.querySelector(
		'[data-finish-message-txt-1]'
	)
	const finishMessageTxt2 = document.querySelector(
		'[data-finish-message-txt-2]'
	)

	const hiddenWord = word
		.split('')
		.map((letter) => (correctGuesses.includes(letter) ? letter : '●'))
		.join(' ')

	const winMessage = () => {
		alphaBtnsArea.style.setProperty('opacity', '0.5')
		alphaBtnsArea.style.setProperty('pointer-events', 'none')
		finishMessage.style.setProperty('display', 'flex')
		finishMessage.style.setProperty('background-color', 'green')
		finishMessageTxt1.innerText = 'Congrats, you won!'
		finishMessageTxt2.innerText = `( total guesses: ${
			correctGuesses.length + wrongGuesses.length + 1
		} )`
	}

	const loseMessage = () => {
		alphaBtnsArea.style.setProperty('opacity', '0.5')
		alphaBtnsArea.style.setProperty('pointer-events', 'none')
		finishMessage.style.setProperty('display', 'flex')
		finishMessage.style.setProperty('background-color', 'red')
		finishMessageTxt1.innerText = 'Sorry, you lost!'
		finishMessageTxt2.innerText = `( answer: ${word} )`
	}

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
		e.target.classList.add('disabled')
		const guess = e.target.innerHTML
		let correctLetters = correctGuesses.length + 1
		let wrongLetters = wrongGuesses.length + 1
		let addImg = wrongGuesses.length
		checkGuess(guess)
		if (checkGuess(guess) === 'Wrong' && wrongLetters <= 8) {
			setImage(images[(addImg += 1)])
			e.target.style.setProperty('color', 'red')
			e.target.style.setProperty('border-color', 'red')
		}
		if (checkGuess(guess) === 'Wrong' && wrongLetters === 8) {
			loseMessage()
		}
		if (checkGuess(guess) === 'Correct' && correctLetters < letterCount) {
			e.target.style.setProperty('color', 'green')
			e.target.style.setProperty('border-color', 'green')
		}
		if (checkGuess(guess) === 'Correct' && correctLetters === letterCount) {
			winMessage()
		}
	}

	const resetGame = () => {
		setImage(images[0])
		setCorrectGuesses([])
		setWrongGuesses([])
		alphaBtnsArea.style.setProperty('opacity', '1')
		alphaBtnsArea.style.setProperty('pointer-events', 'auto')
		for (let i = 0; i < alphaBtns.length; i++) {
			alphaBtns[i].classList.remove('disabled')
			alphaBtns[i].style.setProperty('color', '#1976d2')
			alphaBtns[i].style.setProperty('border-color', 'rgb(44, 135, 255)')
		}
		finishMessage.style.setProperty('display', 'none')
		finishMessage.style.setProperty('background-color', 'none')
		finishMessageTxt1.innerText = ''
		finishMessageTxt2.innerText = ''
		setWord(getRandomWord(wordOptions).toUpperCase())
	}

	const HiddenWord = () => {
		return <Typography sx={hiddenWordSX}>{hiddenWord}</Typography>
	}

	return (
		<ThemeProvider theme={theme}>
			<Box
				className='hangman-container'
				sx={hangmanContainerSX}>
				<Box
					className='hangman-img'
					sx={hangmanImgSX}
					component='img'
					src={image}
				/>

				<Box
					className='alpha-btns-area'
					sx={alphaBtnsAreaSX}
					data-alpha-btns-area>
					{alphabet.map((guess, index) => (
						<Box
							className='alpha-btns'
							sx={alphaBtnSX}
							data-alpha-btns
							key={index}
							onClick={handleChoice}>
							{guess}
						</Box>
					))}
				</Box>

				<Box
					className='play-area'
					sx={playAreaSX}>
					<HiddenWord />
				</Box>

				<Box
					className='finish-message'
					sx={finishMessageSX}
					data-finish-message>
					<Box
						className='finish-message-txt-1'
						sx={finishMessageTxt1SX}
						data-finish-message-txt-1
					/>
					<Box
						className='finish-message-txt-2'
						sx={finishMessageTxt2SX}
						data-finish-message-txt-2
					/>
					<Box
						className='reset-btn'
						sx={resetBtnSX}
						onClick={resetGame}>
						Play Again
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	)
}
