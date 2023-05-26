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
	endMsgContainerSX,
	endMsgTxtSX,
	resetBtnSX,
} from './memoryMatchMLBSX.js'

import { cardImages } from './memoryMatchMLBUtils.js'

export const MemoryMatchMLB = () => {
	const [cards, setCards] = React.useState([])
	const [turns, setTurns] = React.useState(0)
	const [choiceOne, setChoiceOne] = React.useState(null)
	const [choiceTwo, setChoiceTwo] = React.useState(null)
	const [disabled, setDisabled] = React.useState(false)
	const [gameOver, setGameOver] = React.useState(false)
	const [endMsgTxt, setEndMsgTxt] = React.useState('')
	const [matchCount, setMatchCount] = React.useState(0)
	const [gridStyle, setGridStyle] = React.useState({})

	const handleOptionSelect = (option) => {
		shuffleCards(option)
	}

	const shuffleCards = (difficulty) => {
		if (difficulty === 'Easy') {
			setGridStyle({
				gridTemplateColumns: {
					mobile: 'repeat(4, 1fr)',
					tablet: 'repeat(4, 1fr)',
					laptop: 'repeat(5, 1fr)',
				},
				gap: {
					mobile: '1rem',
					tablet: '1rem',
					laptop: '0.75rem',
				},
			})

			const trimDeck = [...cardImages].sort(() => Math.random() - 0.5).slice(20)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Medium') {
			setGridStyle({
				gridTemplateColumns: {
					mobile: 'repeat(5, 1fr)',
					tablet: 'repeat(5, 1fr)',
					laptop: 'repeat(6, 1fr)',
				},
				gap: {
					mobile: '1rem',
					tablet: '1rem',
					laptop: '1.25rem',
				},
			})

			const trimDeck = [...cardImages].sort(() => Math.random() - 0.5).slice(15)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Hard') {
			setGridStyle({
				gridTemplateColumns: {
					mobile: 'repeat(5, 1fr)',
					tablet: 'repeat(8, 1fr)',
					laptop: 'repeat(8, 1fr)',
				},
				gap: {
					mobile: '0.75rem',
					tablet: '0.75rem',
					laptop: '1rem',
				},
			})

			const trimDeck = [...cardImages].sort(() => Math.random() - 0.5).slice(10)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Extreme') {
			setGridStyle({
				gridTemplateColumns: {
					mobile: 'repeat(5, 1fr)',
					tablet: 'repeat(6, 1fr)',
					laptop: 'repeat(10, 1fr)',
				},
				gap: {
					mobile: '0.75rem',
					tablet: '0.75rem',
					laptop: '0.75rem',
				},
			})

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
		if (card === choiceOne || card === choiceTwo) {
			return
		}
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
	}

	const checkCards = () => {
		if (cards.length > 0 && matchCount === cards.length / 2) {
			setGameOver(true)
			setEndMsgTxt(`Congrats, you finished in ${turns} turns!`)
		}
	}

	const resetTurn = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns((prevTurns) => prevTurns + 1)
		setDisabled(false)
	}

	const newGame = () => {
		setGameOver(false)
		setMatchCount(0)
		setCards([])
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(0)
		setGridStyle({})
	}

	const resetGame = () => {
		setGameOver(false)
		setEndMsgTxt('')
		setMatchCount(0)
		setCards([])
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(0)
		setGridStyle({})
	}

	React.useEffect(() => {
		checkCards()

		if (choiceOne && choiceTwo) {
			setDisabled(true)
			if (choiceOne.name === choiceTwo.name) {
				setMatchCount((prevCount) => (prevCount += 1))
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
				<Box sx={{ ...cardsContainerSX, ...gridStyle }}>
					{cards.map((card, index) => (
						<SingleCard
							key={index}
							card={card}
							handleChoice={handleChoice}
							flipped={card === choiceOne || card === choiceTwo || card.matched}
							disabled={disabled}
						/>
					))}
					{gameOver && (
						<Box sx={endMsgContainerSX}>
							<Box sx={endMsgTxtSX}>{endMsgTxt}</Box>
							<Button
								sx={resetBtnSX}
								onClick={resetGame}>
								Play Again
							</Button>
						</Box>
					)}
				</Box>
			</Box>
		</ThemeProvider>
	)
}
