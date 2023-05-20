import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import {
	Alert,
	AlertTitle,
	Box,
	createTheme,
	ThemeProvider,
} from '@mui/material'

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

export default function NoPage() {
	return (
		<ThemeProvider theme={theme}>
			{/* for laptop displays (horizontal layout) */}

			<Laptop>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '50vh',
					}}>
					<Alert
						variant='outlined'
						severity='error'
						sx={{
							width: '50%',
							fontSize: '1.5rem',
						}}>
						<AlertTitle
							sx={{
								fontSize: '2.5rem',
								textAlign: 'center',
							}}>
							404 Error
						</AlertTitle>
						Something seems to have gone wrong, sorry about that! Please click{' '}
						<a
							href='/'
							style={{ color: 'red' }}>
							HERE
						</a>{' '}
						to return to the Mini Games home page.
					</Alert>
				</Box>
			</Laptop>

			{/* for tablet displays (vertical layout) */}

			<Tablet>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '50vh',
					}}>
					<Alert
						variant='outlined'
						severity='error'
						sx={{
							width: '50%',
							fontSize: '1.5rem',
						}}>
						<AlertTitle
							sx={{
								fontSize: '2.5rem',
								textAlign: 'center',
							}}>
							404 Error
						</AlertTitle>
						Something seems to have gone wrong, sorry about that! Please click{' '}
						<a
							href='/'
							style={{ color: 'red' }}>
							HERE
						</a>{' '}
						to return to the Mini Games home page.
					</Alert>
				</Box>
			</Tablet>

			{/* for mobile displays (vertical layout) */}

			<Mobile>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '50vh',
					}}>
					<Alert
						variant='outlined'
						severity='error'
						sx={{
							width: '50%',
							fontSize: '1.5rem',
						}}>
						<AlertTitle
							sx={{
								fontSize: '2.5rem',
								textAlign: 'center',
							}}>
							404 Error
						</AlertTitle>
						Something seems to have gone wrong, sorry about that! Please click{' '}
						<a
							href='/'
							style={{ color: 'red' }}>
							HERE
						</a>{' '}
						to return to the Mini Games home page.
					</Alert>
				</Box>
			</Mobile>
		</ThemeProvider>
	)
}
