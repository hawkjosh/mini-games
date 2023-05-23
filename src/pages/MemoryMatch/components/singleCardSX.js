const cardWrapperSX = {
	position: 'relative',
	borderRadius: '1rem',
	cursor: 'grab',
	bgcolor: 'transparent',
}

const cardFrontSX = {
	width: '100%',
	aspectRatio: '1/1',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	bgcolor: 'white',
	borderRadius: '1rem',
	transform: 'rotateY(90deg)',
	position: 'absolute',
	transition: 'all ease-in 0.25s',
	'&.flipped': {
		transform: 'rotateY(0deg)',
		transitionDelay: '0.25s',
	},
}

const cardBackSX = {
	width: '100%',
	aspectRatio: '1/1',
	backgroundImage:
		'url(https://www.mlbstatic.com/team-logos/league-on-dark/1.svg)',
	backgroundSize: '85%',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	bgcolor: 'hsl(215, 89%, 14%)',
	border: '0.125rem solid red',
	borderRadius: '1rem',
	transition: 'all ease-in 0.25s',
	transitionDelay: '0.25s',
	'&.flipped': {
		transform: 'rotateY(90deg)',
		transitionDelay: '0s',
	},
}

export { cardWrapperSX, cardFrontSX, cardBackSX }
