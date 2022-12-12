import * as React from 'react';

import { useMediaQuery } from 'react-responsive'

import {
  Link,
  Outlet,
  useLocation
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
      mobile: 428,
      tabletSmall: 768,
      tabletLarge: 820,
      // Breakpoints below change to horizontal layout
      laptopSmall: 1263,
      laptopLarge: 1519,
    }
  }
})

const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1000 })
  return isLaptop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 551, maxWidth: 999 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 550 })
  return isMobile ? children : null
}

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

  const RenderTitle = () => {
    const pathname = useLocation()
    if (pathname.pathname === '/') {
      return (<Typography sx={{flexGrow: 1, textAlign: 'center', fontSize: {mobile: '2rem', tabletSmall: '3rem'}}}>MINI GAMES</Typography>)
    } else {
      return (<Typography sx={{flexGrow: 1, textAlign: 'center', fontSize: {mobile: '2rem', tabletSmall: '3rem'}}}>{pathname.pathname.toUpperCase().slice(1)}</Typography>)
    }
  }

  return (
    <ThemeProvider theme={theme}>

      {/* for laptop/desktop displays (horizontal layout) */}

      <Laptop>
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
  
            <RenderTitle />
  
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
          </Toolbar>
        </AppBar>
      </Laptop>

      {/* for tablet displays (vertical layout) */}

      <Tablet>
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
  
            <RenderTitle />
  
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
          </Toolbar>
        </AppBar>
      </Tablet>

      {/* for mobile displays (vertical layout) */}

      <Mobile>
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
  
            <RenderTitle />
  
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
          </Toolbar>
        </AppBar>
      </Mobile>

      <Outlet />

    </ThemeProvider>
  )
}