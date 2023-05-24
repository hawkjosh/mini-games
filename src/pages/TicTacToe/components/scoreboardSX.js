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

const scoreContainerSX = {
	display: 'flex',
	flexDirection: {
		mobile: 'row',
		tablet: 'row',
		laptop: 'column',
	},
	justifyContent: 'center',
	alignItems: 'center',
	gap: {
		mobile: '2rem',
		tablet: '3rem',
		laptop: '4rem',
	},
}

const scoreWrapperSX = {
	display: 'flex',
	flexDirection: {
		tablet: 'row',
		laptop: 'column',
	},
	justifyContent: 'center',
	alignItems: 'center',
	gap: {
		tablet: '1.25rem',
		laptop: '1.75rem',
	},
}

const scoreTxtSX = {
	fontFamily: '"Fredoka", sans-serif',
	fontWeight: 'bold',
}

const xScoreSX = {
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: {
		mobile: '0.5rem',
		tablet: '0.75rem',
		laptop: '1rem',
	},
	fontSize: {
		mobile: '1.25rem',
		tablet: '1.75rem',
		laptop: '2.5rem',
	},
	letterSpacing: {
		mobile: '0.125rem',
		tablet: '0.25rem',
		laptop: '0.625rem',
	},
	bgcolor: 'white',
	border: '0.25rem solid',
	borderRadius: '0.5rem',
	boxShadow: '0 0 0.5rem #888',
	padding: {
		mobile: '0.5rem',
		tablet: '0.75rem',
		laptop: '1rem',
	},
}

const oScoreSX = {
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: {
		mobile: '0.5rem',
		tablet: '0.75rem',
		laptop: '1rem',
	},
	fontSize: {
		mobile: '1.25rem',
		tablet: '1.75rem',
		laptop: '2.5rem',
	},
	letterSpacing: {
		mobile: '0.125rem',
		tablet: '0.25rem',
		laptop: '0.625rem',
	},
	bgcolor: 'white',
	border: '0.25rem solid',
	borderRadius: '0.5rem',
	boxShadow: '0 0 0.5rem #888',
	padding: {
		mobile: '0.5rem',
		tablet: '0.75rem',
		laptop: '1rem',
	},
}

const xArrowIconSX = {
	display: {
		mobile: 'none',
		tablet: 'block',
		laptop: 'block',
	},
	fontSize: {
		tablet: '2.5rem',
		laptop: '3rem',
	},
	transform: {
		tablet: 'rotate(-90deg)',
		laptop: 'rotate(0deg)',
	},
}

const oArrowIconSX = {
	display: {
		mobile: 'none',
		tablet: 'block',
		laptop: 'block',
	},
	fontSize: {
		tablet: '2.5rem',
		laptop: '3rem',
	},
	transform: {
		tablet: 'rotate(-90deg)',
		laptop: 'rotate(0deg)',
	},
}

const resetBtnSX = {
	fontSize: {
		mobile: '1rem',
		tablet: '1.125rem',
		laptop: '1.25rem',
	},
	bgcolor: 'gray',
	padding: {
		mobile: '0.125rem 0.25rem',
		tablet: '0.25rem 0.375rem',
		laptop: '0.375rem 0.5rem',
	},
	'&:hover': { bgcolor: 'green' },
}

export {
	theme,
	scoreContainerSX,
	scoreWrapperSX,
	scoreTxtSX,
	xScoreSX,
	oScoreSX,
	xArrowIconSX,
	oArrowIconSX,
	resetBtnSX,
}
