import { useEffect, useState } from 'react'

import { ArrowIconUp } from './ArrowIconUp.jsx'
import { ArrowIconDown } from './ArrowIconDown.jsx'

import {
	StyledContainer,
	StyledWrapper,
	StyledText,
	StyledScore,
	StyledButton,
} from './styles/Scoreboard.styled.js'

export const Scoreboard = ({ score, xPlaying, resetGame }) => {
	const { xScore, oScore } = score
	const [xScoreInactive, setXScoreInactive] = useState(false)
	const [oScoreInactive, setOScoreInactive] = useState(false)

	useEffect(() => {
		if (!xPlaying) {
			setXScoreInactive(true)
			setOScoreInactive(false)
		} else {
			setXScoreInactive(false)
			setOScoreInactive(true)
		}
	})

	return (
		<StyledContainer>
			<StyledWrapper>
				<StyledScore
					style={{
						color: xScoreInactive
							? 'hsla(0, 0%, 53%, 0.75)'
							: 'hsla(9, 100%, 57%, 1)',
						borderColor: xScoreInactive ? 'transparent' : 'hsl(9, 100%, 57%)',
					}}>
					<StyledText>X's</StyledText>
					<StyledText>‣</StyledText>
					<StyledText>{xScore}</StyledText>
				</StyledScore>
				<ArrowIconUp
					style={{
						fill: xScoreInactive
							? 'hsla(0, 0%, 53%, 0.5)'
							: 'hsla(9, 100%, 57%, 1)',
					}}
				/>
			</StyledWrapper>
			<StyledButton onClick={() => resetGame()}>Reset</StyledButton>
			<StyledWrapper>
				<ArrowIconDown
					style={{
						fill: oScoreInactive
							? 'hsla(0, 0%, 53%, 0.5)'
							: 'hsla(214, 100%, 59%, 1)',
					}}
				/>
				<StyledScore
					style={{
						color: oScoreInactive
							? 'hsla(0, 0%, 53%, 0.75)'
							: 'hsla(214, 100%, 59%, 1)',
						borderColor: oScoreInactive ? 'transparent' : 'hsl(214, 100%, 59%)',
					}}>
					<StyledText>O's</StyledText>
					<StyledText>‣</StyledText>
					<StyledText>{oScore}</StyledText>
				</StyledScore>
			</StyledWrapper>
		</StyledContainer>
	)
}
