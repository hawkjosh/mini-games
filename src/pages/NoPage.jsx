import * as React from 'react'

import { Alert, AlertTitle, Box, ThemeProvider } from '@mui/material'

import { theme } from './theme.js'

import {
	nopageContainerSX,
	alertSX,
	alertTitleSX,
	nopageLinkSX,
} from './nopageSX.js'

export const NoPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={nopageContainerSX}>
				<Alert
					variant='outlined'
					severity='error'
					sx={alertSX}>
					<AlertTitle sx={alertTitleSX}>404 Error</AlertTitle>
					Something seems to have gone wrong, sorry about that! Please click{' '}
					<a
						href='/'
						style={nopageLinkSX}>
						HERE
					</a>{' '}
					to return to the Mini Games home page.
				</Alert>
			</Box>
		</ThemeProvider>
	)
}
