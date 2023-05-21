import * as React from 'react'

import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'

import turnZeroImg from './images/turnZeroImg.svg'
import turnOneImg from './images/turnOneImg.svg'
import turnTwoImg from './images/turnTwoImg.svg'
import turnThreeImg from './images/turnThreeImg.svg'
import turnFourImg from './images/turnFourImg.svg'
import turnFiveImg from './images/turnFiveImg.svg'
import turnSixImg from './images/turnSixImg.svg'
import turnSevenImg from './images/turnSevenImg.svg'
import turnEightImg from './images/turnEightImg.svg'

import './styles/Hangman.css'

const theme = createTheme({
	breakpoints: {
		values: {
			mobile: 390,
			tablet: 768,
			laptop: 1280,
		},
	},
})

const gameContainerSX = {
	gridTemplateColumns: {
		mobile: '100%',
		tablet: '45% 55%',
		laptop: '45% 55%',
	},
}

const hangmanImgSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '1 / 2',
		laptop: '1 / 2',
	},
	gridRow: {
		mobile: '1 / 2',
		tablet: '1 / 2',
		laptop: '1 / 3',
	},
	width: {
		mobile: '70%',
		tablet: '100%',
		laptop: '100%',
	},
}

const alphaBtnsAreaSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '2 / 3',
		laptop: '2 / 3',
	},
	gridRow: {
		mobile: '2 / 3',
		tablet: '1 / 2',
		laptop: '2 / 3',
	},
	gridTemplateColumns: {
		mobile: 'repeat(auto-fit, minmax(2.5rem, 1fr))',
		tablet: 'repeat(auto-fit, minmax(3.5rem, 1fr))',
		laptop: 'repeat(auto-fit, minmax(4.5rem, 1fr))',
	},
}

const alphaBtnSX = {
	fontSize: {
		mobile: '1rem',
		tablet: '1.25rem',
		laptop: '1.75rem',
	},
}

const playAreaSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '1 / 3',
		laptop: '2 / 3',
	},
	gridRow: {
		mobile: '3 / 4',
		tablet: '2 / 3',
		laptop: '1 / 2',
	},
}

const finishMessageTxt1SX = {
	fontSize: {
		mobile: '2.375rem',
		tablet: '4rem',
		laptop: '5.5rem',
	},
}

const finishMessageTxt2SX = {
	fontSize: {
		mobile: '1.5rem',
		tablet: '2.5rem',
		laptop: '3rem',
	},
}

const resetBtnSX = {
	width: {
		mobile: '50%',
		tablet: '37.5%',
		laptop: '25%',
	},
	fontSize: {
		mobile: '1.5rem',
		tablet: '2rem',
		laptop: '2.5rem',
	},
}

export const Hangman = () => {
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]

	const wordOptions = [
		'maintenance',
		'emotion',
		'childhood',
		'dirt',
		'garbage',
		'basket',
		'player',
		'solution',
		'politics',
		'orange',
		'virus',
		'driver',
		'fishing',
		'pizza',
		'bread',
		'drawer',
		'moment',
		'paper',
		'resolution',
		'tea',
		'control',
		'potato',
		'hearing',
		'television',
		'assumption',
		'sir',
		'leadership',
		'midnight',
		'feedback',
		'technology',
		'temperature',
		'economics',
		'setting',
		'message',
		'penalty',
		'university',
		'army',
		'teacher',
		'way',
		'insect',
		'database',
		'software',
		'opinion',
		'connection',
		'historian',
		'strategy',
		'bird',
		'safety',
		'responsibility',
		'photo',
	]

	const images = [
		turnZeroImg,
		turnOneImg,
		turnTwoImg,
		turnThreeImg,
		turnFourImg,
		turnFiveImg,
		turnSixImg,
		turnSevenImg,
		turnEightImg,
	]

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
		.map((letter) => (correctGuesses.includes(letter) ? letter : '—'))
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
		return (
			<Typography
				sx={{
					textAlign: 'center',
					marginY: '2.5rem',
					fontSize: {
						mobile: '1.375rem',
						tablet: '2.375rem',
						laptop: '1.875rem',
					},
					letterSpacing: {
						mobile: '0.05rem',
						tablet: '0.35rem',
						laptop: '0.5rem',
					},
				}}>
				{hiddenWord}
			</Typography>
		)
	}

	return (
		<ThemeProvider theme={theme}>
			<Box
				className='game-container'
				sx={gameContainerSX}>
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
