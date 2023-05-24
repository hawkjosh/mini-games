const cardWrapperSX = {
	position: 'relative',
	borderRadius: '1rem',
	cursor: 'grab',
	bgcolor: 'transparent',
}

const cardFrontSX = {
	width: '100%',
	aspectRatio: '1/1',
	backgroundSize: '90%',
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
		'url(https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg)',
	backgroundSize: '85%',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	bgcolor: 'lightgray',
	borderRadius: '1rem',
	transition: 'all ease-in 0.25s',
	transitionDelay: '0.25s',
	'&.flipped': {
		transform: 'rotateY(90deg)',
		transitionDelay: '0s',
	},
}

export { cardWrapperSX, cardFrontSX, cardBackSX }
