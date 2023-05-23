import * as React from 'react'

import {
	Box,
	Button,
	ButtonGroup,
	ThemeProvider,
	Typography,
} from '@mui/material'

import { theme } from '../../theme.js'

import {
	difficultyOptions,
	difficultyMenuSX,
	difficultyMenuTitleSX,
	difficultyMenuItemSX,
} from './difficultySelectionSX.js'

export const DifficultySelection = ({ onSelectOption }) => {
	const handleDifficultySelect = (e) => {
		onSelectOption(e.target.value)
	}

	return (
		<ThemeProvider theme={theme}>
			<Box sx={difficultyMenuSX}>
				<Typography sx={difficultyMenuTitleSX}>
					Select Difficulty Level:
				</Typography>
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
			</Box>
		</ThemeProvider>
	)
}
