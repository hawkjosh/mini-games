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
	container: {
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

		header: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '2rem',

			btn: {
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
			},

			badge: {
				display: 'inline-block',
				padding: '0.75rem',
				borderRadius: '1.25rem',
				bgcolor: '#ff9800',
				color: '#fff',
				fontSize: '1rem',
				fontWeight: 'bold',
				textAlign: 'center',
				textTransform: 'uppercase',
			},
		},

		body: {
			display: 'grid',
			placeContent: 'center',

			endMsg: {
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

				txt: {
					fontSize: {
						mobile: '1.5rem',
						tablet: '2.5rem',
						laptop: '3.5rem',
					},
					fontWeight: 'bold',
					color: 'white',
				},

				btn: {
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
						borderColor: 'green',
					},
				},
			},
		},
	},
}

export { theme, sx }
