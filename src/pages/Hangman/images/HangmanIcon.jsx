export const HangmanIcon = ({ ...props }) => {
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
				Hangman
			</text>
			<path
				fill='none'
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='4'
				d='M35 295h80'
			/>
			<path
				fill='none'
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='4'
				d='M75 295v-220h125v50'
			/>
			<path
				fill='none'
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='4'
				d='M75 105l30 -30'
			/>
			<circle
				cx='200'
				cy='145'
				r='20'
				fill='none'
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='4'
			/>
			<path
				fill='none'
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='4'
				d='M200 165v75'
			/>
			<path
				fill='none'
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='4'
				d='M170 270l30 -30l30 30'
			/>
			<path
				fill='none'
				stroke='hsl(210, 79%, 46%)'
				strokeWidth='4'
				d='M170 215l30 -30l30 30'
			/>
		</svg>
	)
}
