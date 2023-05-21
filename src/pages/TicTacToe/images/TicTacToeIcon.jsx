export const TicTacToeIcon = ({ ...props }) => {
	return (
		<svg
			viewBox='0 0 290 330'
			{...props}>
			<text
				fontSize='30pt'
				fontFamily="'Fredoka', sans-serif"
				fontWeight='bold'
				fill='hsl(210, 79%, 46%)'
				textAnchor='middle'
				x='50%'
				y='9%'>
				Tic-Tac-Toe
			</text>
			<path
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='5'
				d='M101.6666667 55v260'
			/>
			<path
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='5'
				d='M188.3333333 55v260'
			/>
			<path
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='5'
				d='M15 141.6666667h260'
			/>
			<path
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='5'
				d='M15 228.3333333h260'
			/>
			<g
				fontSize='64pt'
				fontWeight='900'
				fontFamily="'Fredoka', sans-serif"
				fill='hsl(210, 79%, 46%)'>
				<text
					x='11%'
					y='37%'>
					X
				</text>
				<text
					x='42%'
					y='37%'>
					X
				</text>
				<text
					x='71%'
					y='37%'>
					O
				</text>
				<text
					x='11%'
					y='64%'>
					X
				</text>
				<text
					x='40%'
					y='64%'>
					O
				</text>
				<text
					x='73%'
					y='64%'>
					X
				</text>
				<text
					x='9%'
					y='91%'>
					O
				</text>
				<text
					x='40%'
					y='91%'>
					O
				</text>
				<text
					x='73%'
					y='91%'>
					X
				</text>
			</g>
			<path
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='3.5'
				d='M25 305l240 -240'
			/>
		</svg>
	)
}
