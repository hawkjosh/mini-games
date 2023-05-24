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

const gameboardContainerSX = {
	width: {
		mobile: '100%',
		tablet: '92.5%',
		laptop: '85%',
	},
	aspectRatio: '1/1',
	border: 'solid darkgray',
	borderRadius: '1rem',
	padding: {
		mobile: '1rem',
		tablet: '1.25rem',
		laptop: '1.5rem',
	},
}

const gameboardWrapperSX = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	placeContent: 'center',
	gap: {
		mobile: '1rem',
		tablet: '1.25rem',
		laptop: '1.5rem',
	},
}

export { theme, gameboardContainerSX, gameboardWrapperSX }
