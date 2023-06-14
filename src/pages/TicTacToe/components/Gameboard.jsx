import { Gamesquare } from './Gamesquare.jsx'

import {
	StyledContainer,
	StyledWrapper,
} from './styles/Gameboard.styled.js'

export const Gameboard = ({ board, onClick }) => {
	return (
		<StyledContainer>
			<StyledWrapper>
				{board.map((value, index) => {
					return (
						<Gamesquare
							key={index}
							value={value}
							onClick={() => value === null && onClick(index)}
						/>
					)
				})}
			</StyledWrapper>
		</StyledContainer>
	)
}
