import { useState } from 'react'

import {
	StyledContainer,
	StyledCard,
	StyledHeader,
	StyledTitle,
	StyledCardBody,
	StyledCountBtn,
	StyledCountBtnText,
	StyledCountBadge,
	StyledCountBadgeText,
	StyledFooter,
	StyledResetBtn,
	StyledResetBtnText,
} from './components/styles/TestPage.styled.js'

export const TestPage = () => {
	const [count, setCount] = useState(0)

	const handleInc = () => {
		setCount((prevCount) => (prevCount += 1))
	}

	const handleDec = () => {
		setCount((prevCount) => (prevCount -= 1))
	}

	const handleReset = () => {
		setCount(0)
	}

	return (
		<StyledContainer>
			<StyledCard>
				<StyledHeader>
					<StyledTitle>Button Counter</StyledTitle>
				</StyledHeader>
				<StyledCardBody>
					<StyledCountBtn onClick={handleInc}>
						<StyledCountBtnText>➕</StyledCountBtnText>
					</StyledCountBtn>
					<StyledCountBtn onClick={handleDec}>
						<StyledCountBtnText>➖</StyledCountBtnText>
					</StyledCountBtn>
					<StyledCountBadge>
						<StyledCountBadgeText>Count = {count}</StyledCountBadgeText>
					</StyledCountBadge>
				</StyledCardBody>
				<StyledFooter>
					<StyledResetBtn onClick={handleReset}>
						<StyledResetBtnText>Reset</StyledResetBtnText>
					</StyledResetBtn>
				</StyledFooter>
			</StyledCard>
		</StyledContainer>
	)
}
