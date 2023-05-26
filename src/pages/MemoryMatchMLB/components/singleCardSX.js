import { createTheme } from '@mui/material'

const theme = createTheme({
	breakpoints: {
		values: {
			mobile: 320,
			tablet: 768,
			laptop: 1280,
		},
	},
})

const cardWrapperSX = {
	position: 'relative',
	borderRadius: '1rem',
	cursor: 'grab',
	bgcolor: 'transparent',
	zIndex: '0',
}

const cardFrontSX = {
	width: '100%',
	aspectRatio: '1/1',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	bgcolor: 'white',
	borderRadius: '1rem',
	position: 'absolute',
	transition: 'all 0.25s ease-out',
}

const cardBackSX = {
	width: '100%',
	aspectRatio: '1/1',
	backgroundImage:
		'url(https://www.mlbstatic.com/team-logos/league-on-dark/1.svg)',
	backgroundSize: '85%',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	bgcolor: 'lightgray',
	borderRadius: '1rem',
	transition: 'all 0.25s ease-out',
}

export { theme, cardWrapperSX, cardFrontSX, cardBackSX }
