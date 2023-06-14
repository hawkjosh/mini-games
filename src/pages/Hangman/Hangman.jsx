import { useEffect, useState } from 'react'

import {
	StyledContainer,
	StyledAreaOne,
	StyledAreaOneContent,
	StyledAreaTwo,
	StyledAreaTwoContent,
	StyledEndMessage,
	StyledTextOne,
	StyledTextTwo,
	StyledButton,
} from './components/styles/Hangman.styled.js'

import { HangmanImage } from './components/HangmanImage.jsx'

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

export const Hangman = () => {
	const getRandomWord = (arr) => {
		const randomWord = Math.floor(Math.random() * arr.length)
		const selection = arr[randomWord]
		return selection
	}

	const [word, setWord] = useState(getRandomWord(wordOptions).toUpperCase())
	const [count, setCount] = useState(0)
	const [correctGuesses, setCorrectGuesses] = useState([])
	const [wrongGuesses, setWrongGuesses] = useState([])
	const [gameOver, setGameOver] = useState(false)
	const [endMsgTxt1, setEndMsgTxt1] = useState('')
	const [endMsgTxt2, setEndMsgTxt2] = useState('')
	const [endMsgColor, setEndMsgColor] = useState('')

	const letterCount = [...new Set(word)].length

	const [buttonStyles, setButtonStyles] = useState(
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
		checkGuess(guess)
		if (checkGuess(guess) === 'Wrong' && wrongLetters <= 8) {
			setCount((prev) => (prev += 1))
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
			setCount((prev) => (prev += 1))
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
		setCount(0)
		setEndMsgTxt1('')
		setEndMsgTxt2('')
		setCorrectGuesses([])
		setWrongGuesses([])
		setWord(getRandomWord(wordOptions).toUpperCase())
	}

	useEffect(() => {
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
		<StyledContainer>
			<HangmanImage count={count} />
			<StyledAreaOne>
				{alphabet.map((guess, index) => (
					<StyledAreaOneContent
						style={{
							color: buttonStyles[index].color,
							borderColor: buttonStyles[index].borderColor,
							opacity: buttonStyles[index].opacity,
							pointerEvents: buttonStyles[index].pointerEvents,
						}}
						key={index}
						onClick={handleChoice}>
						{guess}
					</StyledAreaOneContent>
				))}
			</StyledAreaOne>
			<StyledAreaTwo>
				<StyledAreaTwoContent>{hiddenWord}</StyledAreaTwoContent>
			</StyledAreaTwo>
			{gameOver && (
				<StyledEndMessage>
					<StyledTextOne style={{ color: endMsgColor }}>
						{endMsgTxt1}
					</StyledTextOne>
					<StyledTextTwo>{endMsgTxt2}</StyledTextTwo>
					<StyledButton onClick={resetGame}>Play Again</StyledButton>
				</StyledEndMessage>
			)}
		</StyledContainer>
	)
}
