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

const tictactoeContainerSX = {
	maxWidth: '90rem',
	display: 'grid',
	gridTemplateColumns: {
		mobile: '1fr',
		tablet: '1fr',
		laptop: '40% 60%',
	},
	placeItems: 'center',
	placeContent: 'center',
	gap: {
		mobile: '2.5rem',
		tablet: '1.5rem',
		laptop: '0.75rem',
	},
	margin: '1rem auto',
	paddingX: {
		mobile: '1rem',
		tablet: '1.5rem',
		laptop: '2rem',
	},
}

const endMsgContainerSX = {
	position: 'fixed',
	top: '0',
	left: '0',
	right: '0',
	bottom: '0',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	bgcolor: 'rgba(0, 0, 0, 0.75)',
}

const endMsgTxtSX = {
	fontSize: {
		mobile: '4rem',
		tablet: '6rem',
		laptop: '8rem',
	},
	fontFamily: '"Fredoka", sans-serif',
	fontWeight: '600',
	letterSpacing: '1rem',
}

const resetBtnSX = {
	fontSize: {
		mobile: '1.5rem',
		tablet: '2rem',
		laptop: '2.5rem',
	},
	fontFamily: '"Fredoka", sans-serif',
	color: 'white',
	bgcolor: 'green',
	border: '0.25rem solid white',
	borderRadius: '0.75rem',
	marginTop: '2.5rem',
	padding: '0.25rem 1rem',
	'&:hover': {
		color: 'green',
		bgcolor: 'white',
		borderColor: 'green'
	},
}

export {
	theme,
	tictactoeContainerSX,
	endMsgContainerSX,
	endMsgTxtSX,
	resetBtnSX,
}
