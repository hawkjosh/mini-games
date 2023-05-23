import nlEast from './data/national-east-teams.json'
import nationalLeague from './data/all-national-teams.json'
import allTeams from './data/all-mlb-teams.json'

const easy = nlEast.teams
const medium = nationalLeague.teams
const hard = allTeams.teams

const memorymatchContainerSX = {
	property: {
		mobile: '',
		tablet: '',
		laptop: '',
	},
	width: {
		mobile: '95%',
		tablet: '85%',
		laptop: '75%',
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
	backgroundColor: '#007bff',
	color: '#fff',
	border: 'none',
	cursor: 'pointer',
	transition: 'background-color 0.375s ease',
	'&:hover': {
		backgroundColor: '#0056b3',
	},
	'&:active': {
		backgroundColor: '#003d80',
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
}

export {
	easy,
	medium,
	hard,
	memorymatchContainerSX,
	gameControlsSX,
	newGameBtnSX,
	turnsTrackerSX,
	cardsContainerSX,
}
