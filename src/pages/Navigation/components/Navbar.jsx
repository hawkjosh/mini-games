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

import {
	theme,
	menuIconSX,
	titleSX,
	menuSX,
	menuItemSX,
	linkSX,
} from './navbarSX.js'

import { navbarOptions } from './navbarUtils.js'

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
						{navbarOptions.map((option, index) => (
							<Link
								style={linkSX}
								key={index}
								to={option.link}>
								<MenuItem
									sx={menuItemSX}
									selected={index === selectedIndex}
									onClick={(event) => handleSelect(event, index)}>
									{option.name}
								</MenuItem>
							</Link>
						))}
					</Menu>
				</Toolbar>
			</AppBar>
			<Outlet />
		</ThemeProvider>
	)
}
