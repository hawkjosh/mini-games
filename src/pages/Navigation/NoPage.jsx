import * as React from 'react'

import {
	Alert,
	AlertTitle,
	Box,
	Link,
	ThemeProvider,
} from '@mui/material'

import {
	theme,
	nopageContainerSX,
	alertMsgSX,
	alertTitleSX,
	returnLinkSX,
} from './nopageSX.js'

export const NoPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={nopageContainerSX}>
				<Alert
					variant='outlined'
					severity='error'
					sx={alertMsgSX}>
					<AlertTitle sx={alertTitleSX}>404 Error</AlertTitle>
					Something seems to have gone wrong, sorry about that! Please click <Link sx={returnLinkSX} href='/' underline='none'>HERE</Link> to return to the Mini Games home page.
				</Alert>
			</Box>
		</ThemeProvider>
	)
}
