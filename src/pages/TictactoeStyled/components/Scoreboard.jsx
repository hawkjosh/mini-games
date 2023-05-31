import { useEffect, useState } from 'react'

import { ArrowIconX } from './ArrowIconX.jsx'
import { ArrowIconO } from './ArrowIconO.jsx'

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
						color: xScoreInactive ? '#888' : 'rgb(255, 70, 37)',
						opacity: xScoreInactive ? 0.75 : 1,
						borderColor: xScoreInactive ? 'transparent' : 'rgb(255, 70, 37)',
					}}>
					<StyledText>X's</StyledText>
					<StyledText>‣</StyledText>
					<StyledText>{xScore}</StyledText>
				</StyledScore>
				<ArrowIconX
					style={{
						fill: xScoreInactive ? '#888' : 'rgb(255, 70, 37)',
						opacity: xScoreInactive ? 0.5 : 1,
					}}
				/>
			</StyledWrapper>
			<StyledButton onClick={() => resetGame()}>Reset</StyledButton>
			<StyledWrapper>
				<ArrowIconO
					style={{
						fill: oScoreInactive ? '#888' : 'rgb(44, 135, 255)',
						opacity: oScoreInactive ? 0.5 : 1,
					}}
				/>
				<StyledScore
					style={{
						color: oScoreInactive ? '#888' : 'rgb(44, 135, 255)',
						opacity: oScoreInactive ? 0.75 : 1,
						borderColor: oScoreInactive ? 'transparent' : 'rgb(44, 135, 255)',
					}}>
					<StyledText>O's</StyledText>
					<StyledText>‣</StyledText>
					<StyledText>{oScore}</StyledText>
				</StyledScore>
			</StyledWrapper>
		</StyledContainer>
	)
}
