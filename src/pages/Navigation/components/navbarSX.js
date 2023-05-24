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

const menuIconSX = {
	fontSize: {
		mobile: '2rem',
		tablet: '2.5rem',
		laptop: '3rem',
	},
	marginLeft: '0.75rem',
}

const titleSX = {
	flexGrow: 1,
	textAlign: 'center',
	fontSize: {
		mobile: '2rem',
		tablet: '3rem',
		laptop: '4rem',
	},
}

const menuSX = {
	marginLeft: '0.75rem',
}

const menuItemSX = {
	fontSize: {
		mobile: '1.125rem',
		tablet: '1.25rem',
		laptop: '1.375rem',
	},
}

const linkSX = {
	color: '#1976d2',
	textDecoration: 'none',
}

export { theme, menuIconSX, titleSX, menuSX, menuItemSX, linkSX }
