import * as React from 'react'

import { Link } from 'react-router-dom'

import {
	Box,
	Button,
	ButtonGroup,
	ThemeProvider,
	Typography,
} from '@mui/material'

import { theme, sx } from './levelSelectSX.js'

import { levelOptions } from './levelSelectUtils.js'

export const LevelSelect = ({ onSelectOption }) => {
	const handleLevelSelect = (e) => {
		onSelectOption(e.target.value)
	}

	return (
		<ThemeProvider theme={theme}>
			<Box sx={sx.menu}>
				<Typography sx={sx.menu.title}>Select Difficulty Level:</Typography>
				<ButtonGroup
					sx={sx.menu.menuItems}
					variant='text'
					orientation='vertical'>
					{levelOptions.map((option, index) => (
						<Button
							key={index}
							sx={sx.menu.menuItems.item}
							value={option.value}
							color={option.color}
							onClick={handleLevelSelect}>
							{option.value}
						</Button>
					))}
				</ButtonGroup>
				<Box sx={sx.menu.bonus}>
					<Link to='/memory-match-mlb'>
						<Button sx={sx.menu.bonus.link}>⚾ MLB Version</Button>
					</Link>
					<Link to='/memory-match-nfl'>
						<Button sx={sx.menu.bonus.link}>🏈 NFL Version</Button>
					</Link>
				</Box>
			</Box>
		</ThemeProvider>
	)
}
