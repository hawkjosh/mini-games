import * as React from 'react'

import { Box, Button, ThemeProvider } from '@mui/material'

import { DifficultySelection } from './components/DifficultySelection.jsx'
import { SingleCard } from './components/SingleCard.jsx'

import { theme } from '../theme.js'

import {
	easy,
	medium,
	hard,
	memorymatchContainerSX,
	gameControlsSX,
	newGameBtnSX,
	turnsTrackerSX,
	cardsContainerSX,
} from './memorymatchSX.js'

export const MemoryMatch = () => {
	const [cards, setCards] = React.useState([])
	const [turns, setTurns] = React.useState(0)
	const [choiceOne, setChoiceOne] = React.useState(null)
	const [choiceTwo, setChoiceTwo] = React.useState(null)
	const [disabled, setDisabled] = React.useState(false)

	const handleOptionSelect = (option) => {
		shuffleCards(option)
	}

	const shuffleCards = (difficulty) => {
		const cardsContainer = document.querySelector('#cards-container')

		if (difficulty === 'Easy') {
			cardsContainer.style.cssText =
				'grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr)); gap: 1rem'

			const shuffledCards = [...easy, ...easy]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Medium') {
			cardsContainer.style.cssText =
				'grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr)); gap: 0.75rem'

			const shuffledCards = [...medium, ...medium]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Hard') {
			cardsContainer.style.cssText =
				'grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr)); gap: 0.5rem'

			const shuffledCards = [...hard, ...hard]
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

		setCards([])
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(0)
		cardsContainer.style.removeProperty('grid-template-columns')
		cardsContainer.style.removeProperty('gap')
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
					sx={cardsContainerSX}
					id='cards-container'>
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
