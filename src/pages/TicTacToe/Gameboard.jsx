import * as React from 'react'

import { useMediaQuery } from 'react-responsive'

import { Box, createTheme, ThemeProvider } from '@mui/material'

import Square from './Square.jsx'

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

export default function Gameboard({ board, onClick }) {
	return (
		<ThemeProvider theme={theme}>
			{/* for laptop displays (horizontal layout) */}

			<Laptop>
				<Box
					sx={{
						border: 'solid darkgray',
						borderRadius: '1rem',
						padding: '0.75rem',
					}}>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 1fr)',
							placeItems: 'center',
						}}>
						{board.map((value, index) => {
							return (
								<Square
									key={index}
									value={value}
									onClick={() => value === null && onClick(index)}
								/>
							)
						})}
					</Box>
				</Box>
			</Laptop>

			{/* for tablet displays (vertical layout) */}

			<Tablet>
				<Box
					sx={{
						border: 'solid darkgray',
						borderRadius: '1rem',
						padding: '0.5rem',
					}}>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 1fr)',
							placeItems: 'center',
						}}>
						{board.map((value, index) => {
							return (
								<Square
									key={index}
									value={value}
									onClick={() => value === null && onClick(index)}
								/>
							)
						})}
					</Box>
				</Box>
			</Tablet>

			{/* for mobile displays (vertical layout) */}

			<Mobile>
				<Box
					sx={{
						border: 'solid darkgray',
						borderRadius: '1rem',
						padding: '0.25rem',
					}}>
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 1fr)',
							placeItems: 'center',
						}}>
						{board.map((value, index) => {
							return (
								<Square
									key={index}
									value={value}
									onClick={() => value === null && onClick(index)}
								/>
							)
						})}
					</Box>
				</Box>
			</Mobile>
		</ThemeProvider>
	)
}
