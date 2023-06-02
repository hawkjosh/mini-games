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

const sx = {
	menu: {
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

		title: {
			fontSize: {
				mobile: '1.5rem',
				tablet: '2rem',
				laptop: '2.5rem',
			},
			fontWeight: '500',
			color: 'hsl(210, 79%, 46%)',
		},

		menuItems: {
			item: {
				fontSize: '2rem',
			},
		},

		bonus: {
			display: 'flex',
			justifyContent: 'space-evenly',
			alignItems: 'center',
			width: {
				mobile: '95%',
				tablet: '80%',
				laptop: '65%',
			},

			link: {
				display: 'flex',
				backgroundColor: 'hsl(211, 100%, 50%)',
				border: 'none',
				borderRadius: '50%',
				padding: '0.75rem',

				linkImg: {
					aspectRatio: '1/1',
					width: '3.5rem',
				},
			},
		},
	},
}

const styledLink = {
	display: 'flex',
	backgroundColor: 'hsl(211, 100%, 50%)',
	border: 'none',
	borderRadius: '50%',
	padding: '0.75rem',
}

const styledLinkImg = {
	aspectRatio: '1/1',
	width: '3.5rem',
}

export { theme, sx }
