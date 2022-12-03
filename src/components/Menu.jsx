import * as React from 'react';

import { Outlet } from 'react-router-dom'

import {
  AppBar,
  Box,
  createTheme,
  IconButton,
  Link,
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

export default function App() {

  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
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
              aria-controls={open ? 'game-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{
                mr: 2
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='game-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'menu-button',
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  href='/'
                  underline='none'
                  sx={{
                  color: 'inherit'
                  }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href='/tic-tac-toe'
                  underline='none'
                  sx={{
                    color: 'inherit'
                  }}
                >
                  Tic-Tac-Toe
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href='/'
                  underline='none'
                  sx={{
                    color: 'inherit'
                  }}
                >
                  Hangman
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href='/'
                  underline='none'
                  sx={{
                    color: 'inherit'
                  }}
                >
                  Word Search
                </Link>
              </MenuItem>
            </Menu>
            <Typography
              variant='h2'
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: 'center'
              }}
            >
              Mini-Games
            </Typography>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box>
    </ThemeProvider>
  )
}