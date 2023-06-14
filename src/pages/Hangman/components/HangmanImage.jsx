import { StyledImage } from './styles/HangmanImage.styled.js'

export const HangmanImage = ({ count, ...props }) => {
	return (
		<StyledImage
			viewBox='0 0 198 223'
			{...props}>
			<path
				fill='hsl(0, 0%, 45%)'
				stroke='hsl(0, 0%, 45%)'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M1 221H40V1H167V51H165V3H42V221H82V223H1V221ZM42 40L79 3H82L42 43V40Z'
			/>
			<g
				fill='none'
				stroke='hsl(0, 0%, 0%)'
				strokeWidth='1.75'
				strokeLinecap='round'
				strokeLinejoin='round'>
				{count >= 1 && (
					<path d='M166 51.5A1 1 0 0 1 166 91.5A1 1 0 0 1 166 51.5Z' />
				)}
				{count >= 2 && count < 8 && (
					<path d='M158.5 65.25A1 1 0 0 1 158.5 67.15A1 1 0 0 1 158.5 65.25ZM173.5 65.25A1 1 0 0 1 173.5 67.15A1 1 0 0 1 173.5 65.25ZM156 79H176Z' />
				)}
				{count >= 8 && (
					<path d='M160 65L164 63.6ZM161.3 62.3L162.7 66.3ZM173.6 71.4L177.6 69.9ZM174.9 68.6L176.3 72.6ZM154.5 74.6L172.6 83ZM163.5 78.8A1 1.8 25 0 0 168.1 80.9Z' />
				)}
				{count >= 3 && <path d='M166 91.5V166.5Z' />}
				{count >= 4 && <path d='M136 201.5L166 166.5Z' />}
				{count >= 5 && <path d='M166 166.5L196 201.5Z' />}
				{count >= 6 && <path d='M141 136.5L166 111.5Z' />}
				{count >= 7 && <path d='M166 111.5L191 136.5Z' />}
			</g>
		</StyledImage>
	)
}
