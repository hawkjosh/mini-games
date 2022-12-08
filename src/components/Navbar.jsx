import * as React from 'react';

import {
  Link,
  Outlet
} from 'react-router-dom'

import {
  AppBar,
  createTheme,
  IconButton,
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

const linkSX = {
  color: '#1976d2',
  textDecoration: 'none'
}

const options = [
  {name: 'Home', link: '/', title: 'Mini Games'},
  {name: 'Tic-Tac-Toe', link: '/tic-tac-toe', title: 'Tic-Tac-Toe'},
  {name: 'Hangman', link: '/hangman', title: 'Hangman'},
  {name: 'More Coming Soon!', link: null, title: null}
]

export default function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null)

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const open = Boolean(anchorEl)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSelect = (event, index) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={theme}>

      <AppBar
        position='sticky'
      >
        <Toolbar>
          <IconButton
            id='menu-button'
            aria-controls={open ? 'games-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleOpen}
            edge='start'
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='games-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option.name}
                disabled={index === 3}
                selected={index === selectedIndex}
                onClick={(event) => handleSelect(event, index)}
              >
                <Link
                  to={option.link}
                  style={linkSX}
                >
                  {option.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              fontSize: '3rem'
            }}
          >
            {options[selectedIndex].title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Outlet />

    </ThemeProvider>
  )
}