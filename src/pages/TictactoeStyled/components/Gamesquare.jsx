import { StyledSquare } from './styles/Gamesquare.styled.js'

export const Gamesquare = ({ value, onClick }) => {
	return (
			<StyledSquare
				style={{ color: value === 'X' ? 'hsl(9, 100%, 57%)' : 'hsl(214, 100%, 59%)' }}
				onClick={onClick}>
				{value}
			</StyledSquare>
	)
}
