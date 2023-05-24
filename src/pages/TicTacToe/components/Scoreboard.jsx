import * as React from 'react'

import { Box, Button, ThemeProvider } from '@mui/material'

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'

import {
	theme,
	scoreContainerSX,
	scoreWrapperSX,
	scoreTxtSX,
	xScoreSX,
	oScoreSX,
	xArrowIconSX,
	oArrowIconSX,
	resetBtnSX,
} from './scoreboardSX.js'

export const Scoreboard = ({ score, xPlaying, resetGame }) => {
	const { xScore, oScore } = score
	const [xScoreInactive, setXScoreInactive] = React.useState(false)
	const [oScoreInactive, setOScoreInactive] = React.useState(false)

	React.useEffect(() => {
		if (!xPlaying) {
			setXScoreInactive(true)
			setOScoreInactive(false)
		} else {
			setXScoreInactive(false)
			setOScoreInactive(true)
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<Box sx={scoreContainerSX}>
				<Box sx={scoreWrapperSX}>
					<Box
						sx={{
							...xScoreSX,
							color: xScoreInactive ? '#888' : 'rgb(255, 70, 37)',
							opacity: xScoreInactive ? 0.75 : 1,
							borderColor: xScoreInactive ? 'transparent' : 'rgb(255, 70, 37)',
						}}>
						<Box sx={scoreTxtSX}>X's</Box>
						<Box sx={scoreTxtSX}>‣</Box>
						<Box sx={scoreTxtSX}>{xScore}</Box>
					</Box>
					<ArrowCircleUpIcon
						sx={{
							...xArrowIconSX,
							color: xScoreInactive ? '#888' : 'rgb(255, 70, 37)',
							opacity: xScoreInactive ? 0.5 : 1,
						}}
					/>
				</Box>
				<Button
					variant='contained'
					onClick={() => resetGame()}
					sx={resetBtnSX}>
					Reset
				</Button>
				<Box sx={scoreWrapperSX}>
					<ArrowCircleDownIcon
						sx={{
							...oArrowIconSX,
							color: oScoreInactive ? '#888' : 'rgb(44, 135, 255)',
							opacity: oScoreInactive ? 0.5 : 1,
						}}
					/>
					<Box
						sx={{
							...oScoreSX,
							color: oScoreInactive ? '#888' : 'rgb(44, 135, 255)',
							opacity: oScoreInactive ? 0.75 : 1,
							borderColor: oScoreInactive ? 'transparent' : 'rgb(44, 135, 255)',
						}}>
						<Box sx={scoreTxtSX}>O's</Box>
						<Box sx={scoreTxtSX}>‣</Box>
						<Box sx={scoreTxtSX}>{oScore}</Box>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	)
}
