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

const difficultyMenuSX = {
	width: {
		mobile: '100%',
		tablet: '95%',
		laptop: '90%',
	},
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '1rem',
	border: '0.25rem solid hsl(210, 79%, 46%)',
	borderRadius: '1rem',
	padding: {
		mobile: '1rem',
		tablet: '1.25rem',
		laptop: '1.5rem',
	},
}

const difficultyMenuTitleSX = {
	fontSize: {
		mobile: '1.5rem',
		tablet: '2rem',
		laptop: '2.5rem',
	},
	fontWeight: '500',
	color: 'hsl(210, 79%, 46%)',
}

const difficultyMenuItemSX = {
	fontSize: '2rem',
}

const difficultyMenuBonusSX = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '1rem',
}

const difficultyMenuBonusLinkSX = {
	display: 'inline-block',
	padding: '0.75rem 1.25rem',
	fontSize: {
		mobile: '0.75rem',
		tablet: '1rem',
		laptop: '1.125rem',
	},
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

export {
	theme,
	difficultyMenuSX,
	difficultyMenuTitleSX,
	difficultyMenuItemSX,
	difficultyMenuBonusSX,
	difficultyMenuBonusLinkSX,
}
