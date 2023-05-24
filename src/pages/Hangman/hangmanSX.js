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

const hangmanContainerSX = {
	maxWidth: '90rem',
	position: 'relative',
	display: 'grid',
	gridTemplateColumns: {
		mobile: '100%',
		tablet: '50% 50%',
		laptop: '40% 60%',
	},
	placeItems: 'center',
	placeContent: 'center',
	columnGap: '1rem',
	rowGap: {
		mobile: '1rem',
		tablet: '1.5rem',
		laptop: '1rem',
	},
	margin: '1rem auto',
	paddingX: {
		mobile: '1rem',
		tablet: '1.5rem',
		laptop: '2rem',
	},
}

const hangmanImgSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '1 / 2',
		laptop: '1 / 2',
	},
	gridRow: {
		mobile: '1 / 2',
		tablet: '1 / 2',
		laptop: '1 / 3',
	},
	width: {
		mobile: '70%',
		tablet: '100%',
		laptop: '100%',
	},
	maxWidth: {
		mobile: '25rem',
		tablet: '30rem',
		laptop: '35rem',
	},
}

const alphaBtnsAreaSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '2 / 3',
		laptop: '2 / 3',
	},
	gridRow: {
		mobile: '2 / 3',
		tablet: '1 / 2',
		laptop: '2 / 3',
	},
	width: '100%',
	display: 'grid',
	gridTemplateColumns: {
		mobile: 'repeat(auto-fit, minmax(2.5rem, 1fr))',
		tablet: 'repeat(auto-fit, minmax(3.5rem, 1fr))',
		laptop: 'repeat(auto-fit, minmax(4.5rem, 1fr))',
	},
	gap: '1rem',
}

const alphaBtnSX = {
	width: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: {
		mobile: '1rem',
		tablet: '1.25rem',
		laptop: '1.75rem',
	},
	fontWeight: 'bold',
	color: '#1976d2',
	aspectRatio: '1/1',
	cursor: 'pointer',
	border: '0.15rem solid rgb(44, 135, 255)',
	borderRadius: '0.5rem',
	'&:hover': {
		boxShadow: '-0.25rem 0.25rem 0.5rem #888',
	},
}

const playAreaSX = {
	gridColumn: {
		mobile: '1 / 1',
		tablet: '1 / 3',
		laptop: '2 / 3',
	},
	gridRow: {
		mobile: '3 / 4',
		tablet: '2 / 3',
		laptop: '1 / 2',
	},
	width: '100%',
	bgcolor: 'lightgray',
	borderRadius: '0.5rem',
	boxShadow: '0 0 0.75rem slategray',
}

const hiddenWordSX = {
	fontFamily: '"Open Sans", sans-serif',
	fontSize: {
		mobile: '1.5rem',
		tablet: '2.5rem',
		laptop: '2.625rem',
	},
	fontWeight: '500',
	letterSpacing: {
		mobile: '0.125',
		tablet: '0.25rem',
		laptop: '0.375rem',
	},
	textAlign: 'center',
	verticalAlign: 'middle',
	marginY: {
		mobile: '2rem',
		tablet: '2.25rem',
		laptop: '2.5rem',
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

const endMsgTxt1SX = {
	fontSize: {
		mobile: '2.125rem',
		tablet: '4rem',
		laptop: '5.5rem',
	},
	fontWeight: 'bold',
}

const endMsgTxt2SX = {
	fontSize: {
		mobile: '1.5rem',
		tablet: '2.5rem',
		laptop: '3rem',
	},
	color: 'white',
	marginTop: '1rem',
}

const resetBtnSX = {
	fontSize: {
		mobile: '1.5rem',
		tablet: '2rem',
		laptop: '2.5rem',
	},
	fontFamily: '"Open Sans", sans-serif',
	border: '0.25rem solid',
	borderRadius: '0.75rem',
	marginTop: '2.5rem',
	padding: '0.25rem 1rem',
	'&:hover': {
		color: 'white',
		borderColor: 'white',
	},
}

export {
	theme,
	hangmanContainerSX,
	hangmanImgSX,
	alphaBtnsAreaSX,
	alphaBtnSX,
	playAreaSX,
	hiddenWordSX,
	endMsgContainerSX,
	endMsgTxt1SX,
	endMsgTxt2SX,
	resetBtnSX,
}
