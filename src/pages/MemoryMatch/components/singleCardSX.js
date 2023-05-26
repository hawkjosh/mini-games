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
	card: {
		position: 'relative',
		borderRadius: '1rem',
		cursor: 'grab',
		bgcolor: 'transparent',
		zIndex: '0',

		front: {
			width: '100%',
			aspectRatio: '1/1',
			bgcolor: 'white',
			borderRadius: '1rem',
			position: 'absolute',
			display: 'flex',
			placeContent: 'center',
			transition: 'all 0.25s ease-out',
		},

		back: {
			width: '100%',
			aspectRatio: '1/1',
			backgroundImage:
				'linear-gradient(to bottom right, #003d80, #007bff,  #0056b3)',
			backgroundSize: '100%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			bgcolor: 'lightgray',
			borderRadius: '1rem',
			transition: 'all 0.25s ease-out',
		},
	},
}

export { theme, sx }
