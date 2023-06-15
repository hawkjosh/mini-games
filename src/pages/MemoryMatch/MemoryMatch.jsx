import { useEffect, useState } from 'react'

import { Levelselection } from './components/Levelselection.jsx'
import { SingleCard } from './components/SingleCard.jsx'

import {
	StyledContainer,
	StyledHeader,
	StyledButtonOne,
	StyledBadge,
	StyledAreaEasy,
	StyledAreaMedium,
	StyledAreaHard,
	StyledEndMessage,
	StyledText,
	StyledButtonTwo,
} from './components/styles/Memorymatch.styled.js'

const images = [
	{
		id: 1,
		name: 'Square',
		svgPath: 'M10 10h80v80h-80v-80Z',
		matched: false,
	},
	{
		id: 2,
		name: 'Triangle',
		svgPath: 'M50 10l40 80l-80 0Z',
		matched: false,
	},
	{
		id: 3,
		name: 'Circle',
		svgPath: 'M50 10a1 1 0 0 1 0 80a1 1 0 0 1 0-80Z',
		matched: false,
	},
	{
		id: 4,
		name: 'Diamond',
		svgPath: 'M50 10l30 40l-30 40l-30-40Z',
		matched: false,
	},
	{
		id: 5,
		name: 'Hexagon',
		svgPath: 'M27.5 10l45 0l17.5 40l-17.5 40l-45 0l-17.5-40Z',
		matched: false,
	},
	{
		id: 6,
		name: 'Pentagon',
		svgPath: 'M50 10l40 35l-15 45l-50 0l-15-45Z',
		matched: false,
	},
	{
		id: 7,
		name: 'Octagon',
		svgPath: 'M34 10l32 0l24 24l0 32l-24 24l-32 0l-24-24l0-32Z',
		matched: false,
	},
	{
		id: 8,
		name: 'Plus',
		svgPath: 'M10 40h30v-30h20v30h30v20h-30v30h-20v-30h-30v-20Z',
		matched: false,
	},
	{
		id: 9,
		name: 'Cross',
		svgPath:
			'M29 15l21 21l21-21l14 14l-21 21l21 21l-14 14l-21-21l-21 21l-14-14l21-21l-21-21l14-14Z',
		matched: false,
	},
	{
		id: 10,
		name: 'Arrow',
		svgPath: 'M5 50l45-45l0 30l45-10l0 50l-45-10l0 30Z',
		matched: false,
	},
	{
		id: 11,
		name: 'Lightning Bolt',
		svgPath: 'M40 5h41l-28 36h14l-41 54l14-41h-14l14-49Z',
		matched: false,
	},
	{
		id: 12,
		name: 'Heart',
		svgPath: 'M50 20c-45-35-70 15 0 75c70-60 45-110 0-75Z',
		matched: false,
	},
	{
		id: 13,
		name: 'Star',
		svgPath: 'M50 5l12 34l33 0l-27 22l11 34l-29-21l-29 21l11-34l-27-22l33 0Z',
		matched: false,
	},
	{
		id: 14,
		name: 'Moon',
		svgPath: 'M82 7a50 45 0 1 0 0 87a56 51 0 0 1 0-87Z',
		matched: false,
	},
	{
		id: 15,
		name: 'Sun',
		svgPath:
			'M67.5 31a2 2 135 0 0-37 37a2 2 135 0 0 37-37zm5 42l10 10m-1-25l13 3m-13-20l13-3m-21-11l10-10m-25 1l3-13m-20 13l-3-13m-11 21l-10-10m1 25l-13-3m13 20l-13 3m21 11l-10 10m25-1l-3 13m20-13l3 13Z',
		matched: false,
	},
	{
		id: 16,
		name: 'Cloud',
		svgPath:
			'M86 77h-68a2 2 90 0 1-2-26a18 18 90 0 1 22-18a8 8 90 0 1 44 13a16 16 90 0 1 3 31Z',
		matched: false,
	},
]

export const MemoryMatch = () => {
	const [cards, setCards] = useState([])
	const [turns, setTurns] = useState(0)
	const [choiceOne, setChoiceOne] = useState(null)
	const [choiceTwo, setChoiceTwo] = useState(null)
	const [disabled, setDisabled] = useState(false)
	const [gameOver, setGameOver] = useState(false)
	const [endMsgTxt, setEndMsgTxt] = useState('')
	const [matchCount, setMatchCount] = useState(0)
	const [level, setLevel] = useState('')

	const handleOptionSelect = (option) => {
		setLevel(option)
		shuffleCards(option)
	}

	const shuffleCards = (level) => {
		if (level === 'Easy') {
			const trimDeck = [...images].sort(() => Math.random() - 0.5).slice(8)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (level === 'Medium') {
			const trimDeck = [...images].sort(() => Math.random() - 0.5).slice(4)

			const shuffledCards = [...trimDeck, ...trimDeck]
				.sort(() => Math.random() - 0.5)
				.map((card) => ({ ...card, id: Math.random() }))

			setCards(shuffledCards)
		}
		if (level === 'Hard') {
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
	}

	const resetGame = () => {
		setGameOver(false)
		setEndMsgTxt('')
		setMatchCount(0)
		setCards([])
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(0)
	}

	useEffect(() => {
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
		<StyledContainer>
			<StyledHeader>
				{cards.length === 0 ? (
					<>
						<Levelselection onSelectOption={handleOptionSelect} />
					</>
				) : (
					<>
						<StyledButtonOne onClick={newGame}>New Game</StyledButtonOne>
						<StyledBadge>Turns: {turns}</StyledBadge>
					</>
				)}
			</StyledHeader>
			{level === 'Easy' && (
				<StyledAreaEasy>
					{cards.map((card, index) => (
						<SingleCard
							key={index}
							card={card}
							handleChoice={handleChoice}
							flipped={card === choiceOne || card === choiceTwo || card.matched}
							disabled={disabled}
						/>
					))}
				</StyledAreaEasy>
			)}
			{level === 'Medium' && (
				<StyledAreaMedium>
					{cards.map((card, index) => (
						<SingleCard
							key={index}
							card={card}
							handleChoice={handleChoice}
							flipped={card === choiceOne || card === choiceTwo || card.matched}
							disabled={disabled}
						/>
					))}
				</StyledAreaMedium>
			)}
			{level === 'Hard' && (
				<StyledAreaHard>
					{cards.map((card, index) => (
						<SingleCard
							key={index}
							card={card}
							handleChoice={handleChoice}
							flipped={card === choiceOne || card === choiceTwo || card.matched}
							disabled={disabled}
						/>
					))}
				</StyledAreaHard>
			)}
			{gameOver && (
				<StyledEndMessage>
					<StyledText>{endMsgTxt}</StyledText>
					<StyledButtonTwo onClick={resetGame}>Play Again</StyledButtonTwo>
				</StyledEndMessage>
			)}
		</StyledContainer>
	)
}
