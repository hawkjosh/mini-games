import * as React from 'react'

import { Link, Outlet, useLocation } from 'react-router-dom'

import {
	AppBar,
	IconButton,
	Menu,
	MenuItem,
	ThemeProvider,
	Toolbar,
	Typography,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import { theme } from '../pages/theme.js'

import {
	menuIconSX,
	titleSX,
	menuSX,
	menuItemSX,
	linkSX,
	gameOptions,
} from './navbarSX.js'

export const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const [selectedIndex, setSelectedIndex] = React.useState(0)

	const open = Boolean(anchorEl)

	const handleOpen = (e) => {
		setAnchorEl(e.currentTarget)
	}

	const handleSelect = (event, index) => {
		setSelectedIndex(index)
		setAnchorEl(null)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const RenderTitle = () => {
		const pathname = useLocation()
		if (pathname.pathname === '/') {
			return <Typography sx={titleSX}>MINI GAMES</Typography>
		} else {
			return (
				<Typography sx={titleSX}>
					{pathname.pathname.toUpperCase().slice(1)}
				</Typography>
			)
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<AppBar position='sticky'>
				<Toolbar>
					<IconButton
						id='menu-button'
						aria-controls={open ? 'games-menu' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
						onClick={handleOpen}
						edge='start'
						color='inherit'>
						<MenuIcon sx={menuIconSX} />
					</IconButton>
					<RenderTitle />
					<Menu
						sx={menuSX}
						id='games-menu'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}>
						{gameOptions.map((option, index) => (
							<MenuItem
								sx={menuItemSX}
								key={option.name}
								selected={index === selectedIndex}
								onClick={(event) => handleSelect(event, index)}>
								<Link
									to={option.link}
									style={linkSX}>
									{option.name}
								</Link>
							</MenuItem>
						))}
					</Menu>
				</Toolbar>
			</AppBar>
			<Outlet />
		</ThemeProvider>
	)
}
