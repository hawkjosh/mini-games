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

export { theme, difficultyMenuSX, difficultyMenuTitleSX, difficultyMenuItemSX }
