import * as React from 'react';

import { Outlet } from 'react-router-dom'

import {
  AppBar,
  Box,
  createTheme,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

const theme = createTheme({
  breakpoints: {
    values: {
      // Breakpoints below use vertical layout
      xxs: 0,
      xs: 375,
      sm: 425,
      md: 768,
      // Breakpoints below change to horizontal layout
      lg: 1024,
      xl: 1440,
      xxl: 1620
    }
  }
})

const menuInfo = ['Home', 'Tic-Tac-Toe', 'Hangman']

export default function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null)

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const open = Boolean(anchorEl)

  function handleClick(e) {
    setAnchorEl(e.currentTarget)
  }

  function handleMenuItemClick(e, index) {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1
        }}
      >
        <AppBar
          position='sticky'
        >
          <Toolbar>
            <IconButton
              id='menu-button'
              aria-controls={open ? 'games-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='games-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'menu-button',
              }}
            >
              <MenuItem
                component={Link}
                href='/'
                selected={selectedIndex === 0}
                // onClick={(event) => handleMenuItemClick(event, 0)}
                onClick={() => setSelectedIndex(0)}
              >
                  Home
              </MenuItem>
              <MenuItem
                component={Link}
                href='/tic-tac-toe'
                selected={selectedIndex === 1}
                // onClick={(event) => handleMenuItemClick(event, 1)}
                onClick={() => setSelectedIndex(1)}
              >
                  Tic-Tac-Toe
              </MenuItem>
              <MenuItem
                component={Link}
                href='/hangman'
                selected={selectedIndex === 2}
                // onClick={(event) => handleMenuItemClick(event, 2)}
                onClick={() => setSelectedIndex(2)}
              >
                  Hangman
              </MenuItem>
            </Menu>
            <ListItemText
              primary='Mini-Games'
              secondary={menuInfo[selectedIndex]}
              sx={{
                flexGrow: 1,
                textAlign: 'center'
              }}
            />
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}