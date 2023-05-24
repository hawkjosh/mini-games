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

const squareSX = {
	display: 'flex',
	placeItems: 'center',
	placeContent: 'center',
	fontSize: {
		mobile: '5rem',
		tablet: '10rem',
		laptop: '11rem',
	},
	fontFamily: '"Fredoka", sans-serif',
	fontWeight: 'bold',
	lineHeight: '0',
	bgcolor: 'white',
	border: 'none',
	borderRadius: '1rem',
	boxShadow: '0 0 0.5rem #888',
	aspectRatio: '1/1',
	'&:hover': {
		cursor: 'pointer',
		boxShadow: '0 0 1rem rgb(47, 46, 46)',
	},
}

export { theme, squareSX }
