import * as React from 'react'

import { Box, Button, ThemeProvider } from '@mui/material'

import { LevelSelect } from './components/LevelSelect.jsx'
import { SingleCard } from './components/SingleCard.jsx'

import { theme, sx } from './gameSX.js'

import { images } from './svgImages.js'

export const MemoryMatch = () => {
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
					laptop: 'repeat(8, 1fr)',
				},
				gap: {
					mobile: '1rem',
					tablet: '1rem',
					laptop: '0.75rem',
				},
			})

			const trimDeck = [...images].sort(() => Math.random() - 0.5).slice(8)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Medium') {
			setGridStyle({
				gridTemplateColumns: {
					mobile: 'repeat(4, 1fr)',
					tablet: 'repeat(6, 1fr)',
					laptop: 'repeat(6, 1fr)',
				},
				gap: {
					mobile: '1rem',
					tablet: '1rem',
					laptop: '1.25rem',
				},
			})

			const trimDeck = [...images].sort(() => Math.random() - 0.5).slice(4)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (difficulty === 'Hard') {
			setGridStyle({
				gridTemplateColumns: {
					mobile: 'repeat(4, 1fr)',
					tablet: 'repeat(8, 1fr)',
					laptop: 'repeat(8, 1fr)',
				},
				gap: {
					mobile: '0.75rem',
					tablet: '0.75rem',
					laptop: '0.75rem',
				},
			})

			const shuffledCards = [...images, ...images]
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
			<Box sx={sx.container}>
				<Box sx={sx.container.header}>
					{cards.length === 0 ? (
						<React.Fragment>
							<LevelSelect onSelectOption={handleOptionSelect} />
						</React.Fragment>
					) : (
						<React.Fragment>
							<Button
								sx={sx.container.header.btn}
								onClick={newGame}>
								New Game
							</Button>
							<Box sx={sx.container.header.badge}>Turns: {turns}</Box>
						</React.Fragment>
					)}
				</Box>
				<Box sx={{ ...sx.container.body, ...gridStyle }}>
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
						<Box sx={sx.container.body.endMsg}>
							<Box sx={sx.container.body.endMsg.txt}>{endMsgTxt}</Box>
							<Button
								sx={sx.container.body.endMsg.btn}
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
