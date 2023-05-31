import { StyledSquare } from './styles/Gamesquare.styled.js'

export const Gamesquare = ({ value, onClick }) => {
	return (
			<StyledSquare
				style={{ color: value === 'X' ? 'rgb(255, 70, 37)' : 'rgb(44, 135, 255)' }}
				onClick={onClick}>
				{value}
			</StyledSquare>
	)
}
