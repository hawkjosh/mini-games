import * as React from 'react'

import { Box, Button, ThemeProvider } from '@mui/material'

import { DifficultySelection } from './components/DifficultySelection.jsx'
import { SingleCard } from './components/SingleCard.jsx'

import {
	theme,
	memorymatchContainerSX,
	gameControlsSX,
	newGameBtnSX,
	turnsTrackerSX,
	cardsContainerSX,
} from './memorymatchSX.js'

import { cardImages } from './memorymatchUtils.js'

export const MemoryMatch = () => {
	const [cards, setCards] = React.useState([])
	const [turns, setTurns] = React.useState(0)
	const [choiceOne, setChoiceOne] = React.useState(null)
	const [choiceTwo, setChoiceTwo] = React.useState(null)
	const [disabled, setDisabled] = React.useState(false)
	const [gameOver, setGameOver] = React.useState(false)
	const [, setShowEndMsg] = React.useState(false)
	const [endMsgTxt1, setEndMsgTxt1] = React.useState('')
	const [endMsgTxt2, setEndMsgTxt2] = React.useState('')
	const [endMsgColor, setEndMsgColor] = React.useState('')
	const [cardCount, setCardCount] = React.useState(0)

	const handleOptionSelect = (option) => {
		shuffleCards(option)
	}

	const shuffleCards = (difficulty) => {
		const cardsContainer = document.querySelector('#cards-container')

		if (difficulty === 'Easy') {
			cardsContainer.dataset.grid = 'Easy'

			const trimDeck = [...cardImages].sort(() => Math.random() - 0.5).slice(24)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Medium') {
			cardsContainer.dataset.grid = 'Medium'

			const trimDeck = [...cardImages].sort(() => Math.random() - 0.5).slice(20)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Hard') {
			cardsContainer.dataset.grid = 'Hard'

			const trimDeck = [...cardImages].sort(() => Math.random() - 0.5).slice(16)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Extreme') {
			cardsContainer.dataset.grid = 'Extreme'

			const shuffledCards = [...cardImages, ...cardImages]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(0)
	}

	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
	}

	React.useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true)
			if (choiceOne.name === choiceTwo.name) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.name === choiceOne.name) {
							return { ...card, matched: true }
						} else {
							return card
						}
					})
				})
				resetTurn()
			} else {
				setTimeout(() => resetTurn(), 1000)
			}
		}
	}, [choiceOne, choiceTwo])

	const resetTurn = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns((prevTurns) => prevTurns + 1)
		setDisabled(false)
	}

	const newGame = () => {
		const cardsContainer = document.querySelector('#cards-container')

		setGameOver(false)
		setCards([])
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(0)
		cardsContainer.dataset.grid = ''
	}

	return (
		<ThemeProvider theme={theme}>
			<Box sx={memorymatchContainerSX}>
				<Box sx={gameControlsSX}>
					{cards.length === 0 ? (
						<React.Fragment>
							<DifficultySelection onSelectOption={handleOptionSelect} />
						</React.Fragment>
					) : (
						<React.Fragment>
							<Button
								sx={newGameBtnSX}
								onClick={newGame}>
								New Game
							</Button>
							<Box sx={turnsTrackerSX}>Turns: {turns}</Box>
						</React.Fragment>
					)}
				</Box>
				<Box
					id='cards-container'
					sx={cardsContainerSX}
					data-grid=''>
					{cards.map((card, index) => (
						<SingleCard
							key={index}
							card={card}
							handleChoice={handleChoice}
							flipped={card === choiceOne || card === choiceTwo || card.matched}
							disabled={disabled}
						/>
					))}
				</Box>
			</Box>
		</ThemeProvider>
	)
}
