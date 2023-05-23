import * as React from 'react'

import { ThemeProvider, Typography } from '@mui/material'

import { theme } from '../theme.js'

import './styles/MemoryMatch.css'

export const MemoryMatch = () => {
	return (
		<ThemeProvider theme={theme}>
			<Typography>Memory Match</Typography>
		</ThemeProvider>
	)
}
