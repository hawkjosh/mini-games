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

const homeContainerSX = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	marginTop: {
		mobile: '2.5rem',
		tablet: '3.5rem',
		laptop: '4.5rem',
	},
	paddingBottom: '2.5rem',
	rowGap: {
		mobile: '1.5rem',
		tablet: '2.5rem',
		laptop: '3.5rem',
	},
}

const gameIconWrapperSX = {
	border: '0.25rem solid #1976d2',
	borderRadius: '0.75rem',
	boxShadow: '0 0 0.5rem #1976d2',
	padding: '2rem',
	'&:hover': {
		boxShadow: '0 0 1rem #1976d2',
	},
}

const gameIconLinkSX = {
	textDecoration: 'none',
}

const gameIconSX = {
	width: {
		mobile: '12.5rem',
		tablet: '14rem',
		laptop: '15.5rem',
		transition: 'transform 0.5s ease',
	},
	'&:hover': {
		transform: 'scale(1.125)',
	},
}

export { theme, homeContainerSX, gameIconWrapperSX, gameIconLinkSX, gameIconSX }
