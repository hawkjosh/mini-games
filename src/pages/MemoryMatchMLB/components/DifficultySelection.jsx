import * as React from 'react'

import { Link } from 'react-router-dom'

import {
	Box,
	Button,
	ButtonGroup,
	ThemeProvider,
	Typography,
} from '@mui/material'

import {
	theme,
	difficultyMenuSX,
	difficultyMenuTitleSX,
	difficultyMenuItemSX,
	difficultyMenuBonusSX,
	difficultyMenuBonusLinkSX,
} from './difficultySelectionSX.js'

import { difficultyOptions } from './difficultySelectionUtils.js'

export const DifficultySelection = ({ onSelectOption }) => {
	const handleDifficultySelect = (e) => {
		onSelectOption(e.target.value)
	}

	return (
		<ThemeProvider theme={theme}>
			<Box sx={difficultyMenuSX}>
				<Typography sx={difficultyMenuTitleSX}>⚾ MLB Version ⚾</Typography>
				<ButtonGroup
					variant='text'
					orientation='vertical'>
					{difficultyOptions.map((option, index) => (
						<Button
							key={index}
							sx={difficultyMenuItemSX}
							value={option.value}
							color={option.color}
							onClick={handleDifficultySelect}>
							{option.value}
						</Button>
					))}
				</ButtonGroup>
				<Box sx={difficultyMenuBonusSX}>
					<Link to='/memory-match'>
						<Button sx={difficultyMenuBonusLinkSX}>Normal Version</Button>
					</Link>
				</Box>
			</Box>
		</ThemeProvider>
	)
}
