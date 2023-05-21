import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import { createTheme, ThemeProvider, Typography } from '@mui/material'

const theme = createTheme({
	breakpoints: {
		values: {
			// Breakpoints below use vertical layout
			mobile: 428,
			tabletSmall: 768,
			tabletLarge: 820,
			// Breakpoints below change to horizontal layout
			laptopSmall: 1263,
			laptopLarge: 1519,
		},
	},
})

const Laptop = ({ children }) => {
	const isLaptop = useMediaQuery({ minWidth: 1000 })
	return isLaptop ? children : null
}

const Tablet = ({ children }) => {
	const isTablet = useMediaQuery({ minWidth: 551, maxWidth: 999 })
	return isTablet ? children : null
}

const Mobile = ({ children }) => {
	const isMobile = useMediaQuery({ maxWidth: 550 })
	return isMobile ? children : null
}

export default function MemoryMatch() {
	return (
		<ThemeProvider theme={theme}>
			{/* for laptop/desktop displays (horizontal layout) */}

			<Laptop>
				<Typography>Memory Match (Laptop Layout)</Typography>
			</Laptop>

			{/* for tablet displays (vertical layout) */}

			<Tablet>
				<Typography>Memory Match (Tablet Layout)</Typography>
			</Tablet>

			{/* for mobile displays (vertical layout) */}

			<Mobile>
				<Typography>Memory Match (Mobile Layout)</Typography>
			</Mobile>
		</ThemeProvider>
	)
}
