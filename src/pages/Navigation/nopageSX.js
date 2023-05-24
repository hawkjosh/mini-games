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

const nopageContainerSX = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	height: '50vh',
}

const alertMsgSX = {
	width: {
		mobile: '85%',
		tablet: '75%',
		laptop: '50%',
	},
	fontSize: {
		mobile: '1.5rem',
		tablet: '1.625rem',
		laptop: '1.75rem',
	},
}

const alertTitleSX = {
	fontSize: {
		mobile: '2rem',
		tablet: '2.5rem',
		laptop: '3rem',
	},
	textAlign: 'center',
}

const returnLinkSX = {
	color: 'red',
	fontWeight: 'bold',
}

export { theme, nopageContainerSX, alertTitleSX, alertMsgSX, returnLinkSX }
