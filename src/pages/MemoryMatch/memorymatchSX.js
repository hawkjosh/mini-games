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

const memorymatchContainerSX = {
	width: {
		mobile: '97.5%',
		tablet: '95%',
		laptop: '92.5%',
	},
	maxWidth: '90rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '2rem',
	margin: '0 auto',
	padding: '1rem',
}

const gameControlsSX = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '2rem',
}

const newGameBtnSX = {
	display: 'inline-block',
	padding: '0.75rem 1.25rem',
	fontSize: '1rem',
	fontWeight: 'bold',
	textAlign: 'center',
	textDecoration: 'none',
	borderRadius: '0.5rem',
	bgcolor: '#007bff',
	color: '#fff',
	border: 'none',
	cursor: 'pointer',
	transition: 'background-color 0.375s ease',
	'&:hover': {
		bgcolor: '#0056b3',
	},
	'&:active': {
		bgcolor: '#003d80',
	},
}

const turnsTrackerSX = {
	display: 'inline-block',
	padding: '0.75rem',
	borderRadius: '1.25rem',
	bgcolor: '#ff9800',
	color: '#fff',
	fontSize: '1rem',
	fontWeight: 'bold',
	textAlign: 'center',
	textTransform: 'uppercase',
}

const cardsContainerSX = {
	display: 'grid',
	placeContent: 'center',
	'&[data-grid="Easy"]': {
		gridTemplateColumns: {
			mobile: 'repeat(4, 1fr)',
			tablet: 'repeat(4, 1fr)',
			laptop: 'repeat(8, 1fr)',
		},
		gap: {
			mobile: '1rem',
			tablet: '1rem',
			laptop: '0.75rem',
		},
	},
	'&[data-grid="Medium"]': {
		gridTemplateColumns: {
			mobile: 'repeat(3, 1fr)',
			tablet: 'repeat(6, 1fr)',
			laptop: 'repeat(6, 1fr)',
		},
		gap: {
			mobile: '1rem',
			tablet: '1rem',
			laptop: '1.25rem',
		},
	},
	'&[data-grid="Hard"]': {
		gridTemplateColumns: {
			mobile: 'repeat(4, 1fr)',
			tablet: 'repeat(8, 1fr)',
			laptop: 'repeat(8, 1fr)',
		},
		gap: {
			mobile: '0.75rem',
			tablet: '0.75rem',
			laptop: '1rem',
		},
	},
	'&[data-grid="Extreme"]': {
		gridTemplateColumns: {
			mobile: 'repeat(4, 1fr)',
			tablet: 'repeat(8, 1fr)',
			laptop: 'repeat(8, 1fr)',
		},
		gap: {
			mobile: '0.75rem',
			tablet: '0.75rem',
			laptop: '0.75rem',
		},
	},
}

export {
	theme,
	memorymatchContainerSX,
	gameControlsSX,
	newGameBtnSX,
	turnsTrackerSX,
	cardsContainerSX,
}
