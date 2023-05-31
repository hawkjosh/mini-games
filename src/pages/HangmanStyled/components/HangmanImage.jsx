export const HangmanImage = ({ ...props }) => {
	return (
		<svg
			viewBox='0 0 198 223'
			{...props}>
			<path
				fill='darkgray'
				stroke='darkgray'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M1 221H40V1H167V51H165V3H42V221H82V223H1V221ZM42 40L79 3H82L42 43V40Z'
			/>
			<g
				fill='none'
				stroke='black'
				strokeWidth='1.75'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<path d='M 166 51.5 A 1 1 0 0 1 166 91.5 A 1 1 0 0 1 166 51.5 Z' />
				{/* <path d='M 158.5 65.25 A 1 1 0 0 1 158.5 67.15 A 1 1 0 0 1 158.5 65.25 Z M 173.5 65.25 A 1 1 0 0 1 173.5 67.15 A 1 1 0 0 1 173.5 65.25 Z M 156 79 H 176' /> */}
				<path d='M 160 65 L 164 63.6 M 161.3 62.3 L 162.7 66.3 M 173.6 71.4 L 177.6 69.9 M 174.9 68.6 L 176.3 72.6 M 154.5 74.6 L 172.6 83 M 163.5 78.8 A 1 1.8 25 0 0 168.1 80.9' />
				<path d='M 166 91.5V166.5' />
				<path d='M 136 201.5 L 166 166.5' />
				<path d='M 166 166.5 L 196 201.5' />
				<path d='M 141 136.5 L 166 111.5' />
				<path d='M 166 111.5 L 191 136.5' />
			</g>
		</svg>
	)
}
