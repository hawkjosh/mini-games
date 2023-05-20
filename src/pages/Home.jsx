import * as React from 'react'

import { Link } from 'react-router-dom'

import { useMediaQuery } from 'react-responsive'

import { Box, createTheme, ThemeProvider } from '@mui/material'

import { TicTacToeIcon } from '../components/TicTacToe/images/TicTacToeIcon.jsx'
import { HangmanIcon } from '../components/Hangman/images/HangmanIcon.jsx'
import { MemoryMatchIcon } from '../components/MemoryMatch/images/MemoryMatchIcon.jsx'

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

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			{/* for laptop/desktop displays (horizontal layout) */}

			<Laptop>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						marginY: '5rem',
					}}
					gap={'4rem'}>
					<Link
						to='/tic-tac-toe'
						style={{ textDecoration: 'none' }}>
						<Box
							sx={{
								border: '3px solid #1976d2',
								borderRadius: '10px',
								padding: '2rem',
								boxShadow: '0px 0px 8px #1976d2',
								'&:hover': { boxShadow: '0px 0px 15px #1976d2' },
							}}>
							<TicTacToeIcon width='250px' />
						</Box>
					</Link>

					<Link
						to='/hangman'
						style={{ textDecoration: 'none' }}>
						<Box
							sx={{
								border: '3px solid #1976d2',
								borderRadius: '10px',
								padding: '2rem',
								boxShadow: '0px 0px 8px #1976d2',
								'&:hover': { boxShadow: '0px 0px 15px #1976d2' },
							}}>
							<HangmanIcon width='250px' />
						</Box>
					</Link>

					{/* <Link
						to='/memory-match'
						style={{ textDecoration: 'none' }}> */}
					<Box
						sx={{
							border: '3px solid #1976d2',
							borderRadius: '10px',
							padding: '2rem',
							boxShadow: '0px 0px 8px #1976d2',
							// '&:hover': { boxShadow: '0px 0px 15px #1976d2' },
						}}>
						<MemoryMatchIcon
							width='250px'
							opacity='0.5'
						/>
					</Box>
					{/* </Link> */}
				</Box>
			</Laptop>

			{/* for tablet displays (vertical layout) */}

			<Tablet>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						alignItems: 'center',
						marginY: '2.5rem',
					}}
					gap={'2rem'}>
					<Link
						to='/tic-tac-toe'
						style={{ textDecoration: 'none' }}>
						<Box
							sx={{
								border: '3px solid #1976d2',
								borderRadius: '10px',
								padding: '2rem',
								boxShadow: '0px 0px 8px #1976d2',
							}}>
							<TicTacToeIcon width='250px' />
						</Box>
					</Link>

					<Link
						to='/hangman'
						style={{ textDecoration: 'none' }}>
						<Box
							sx={{
								border: '3px solid #1976d2',
								borderRadius: '10px',
								padding: '2rem',
								boxShadow: '0px 0px 8px #1976d2',
							}}>
							<HangmanIcon width='250px' />
						</Box>
					</Link>

					{/* <Link
						to='/memory-match'
						style={{ textDecoration: 'none' }}> */}
					<Box
						sx={{
							border: '3px solid #1976d2',
							borderRadius: '10px',
							padding: '2rem',
							boxShadow: '0px 0px 8px #1976d2',
						}}>
						<MemoryMatchIcon
							width='250px'
							opacity='0.5'
						/>
					</Box>
					{/* </Link> */}
				</Box>
			</Tablet>

			{/* for mobile displays (vertical layout) */}

			<Mobile>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						marginY: '2.5rem',
					}}
					gap={'1.5rem'}>
					<Link
						to='/tic-tac-toe'
						style={{ textDecoration: 'none' }}>
						<Box
							sx={{
								border: '3px solid #1976d2',
								borderRadius: '10px',
								padding: '2rem',
								boxShadow: '0px 0px 8px #1976d2',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<TicTacToeIcon width='200px' />
						</Box>
					</Link>

					<Link
						to='/hangman'
						style={{ textDecoration: 'none' }}>
						<Box
							sx={{
								border: '3px solid #1976d2',
								borderRadius: '10px',
								padding: '2rem',
								boxShadow: '0px 0px 8px #1976d2',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}>
							<HangmanIcon width='200px' />
						</Box>
					</Link>

					{/* <Link
						to='/memory-match'
						style={{ textDecoration: 'none' }}> */}
					<Box
						sx={{
							border: '3px solid #1976d2',
							borderRadius: '10px',
							padding: '2rem',
							boxShadow: '0px 0px 8px #1976d2',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}>
						<MemoryMatchIcon
							width='200px'
							opacity='0.5'
						/>
					</Box>
					{/* </Link> */}
				</Box>
			</Mobile>
		</ThemeProvider>
	)
}
