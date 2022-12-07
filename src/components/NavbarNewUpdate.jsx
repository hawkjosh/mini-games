import * as React from 'react';

import { Outlet } from 'react-router-dom'

import {
  AppBar,
  Box,
  createTheme,
  IconButton,
  Link,
  ListItemButton,
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

export default function Navbar() {

  const [subtitle, setSubtitle] = React.useState('Home')

  const handleTitleChange = (e) => {
    setSubtitle(() => e.target.innerText)
  }

  const renderTitle = () => {
    let title
    if (subtitle === 'Home') {
      title = 'Home'
    } else if (subtitle === 'Tic-Tac-Toe') {
      title = 'Tic-Tac-Toe'
    } else if (subtitle === 'Hangman') {
      title = 'Hangman'
    }
    return title
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
            <Link href='/' onClick={handleTitleChange} sx={{color: 'white', marginX: '10px'}}>Home</Link>
            <Link href='/tic-tac-toe' onClick={handleTitleChange} sx={{color: 'white', marginX: '10px'}}>Tic-Tac-Toe</Link>
            <Link href='/hangman' onClick={handleTitleChange} sx={{color: 'white', marginX: '10px'}}>Hangman</Link>
            {/* <ListItemButton component={Link} href='/' value='Home' onClick={handleTitleChange}>
              Home
              <ListItemText component={Link} href='/' primary='Home' onClick={handleTitleChange} />
            </ListItemButton>
            <ListItemButton component={Link} href='/tic-tac-toe' value='Tic-Tac-Toe' onClick={handleTitleChange}>
              Tic-Tac-Toe
              <ListItemText primary='Tic-Tac-Toe' onClick={handleTitleChange} />
            </ListItemButton>
            <ListItemButton component={Link} href='/hangman' value='Hangman' onClick={handleTitleChange}>
              Hangman
              <ListItemText primary='Hangman' onClick={handleTitleChange} />
            </ListItemButton> */}
            <ListItemText
              primary='Mini-Games'
              secondary={renderTitle()}
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






{/* <ThemeProvider theme={theme}>
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
        onClick={handleOpen}
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
          onClick={handleSelect}
        >
            Home
        </MenuItem>
        <MenuItem
          component={Link}
          href='/tic-tac-toe'
          onClick={handleSelect}
        >
            Tic-Tac-Toe
        </MenuItem>
        <MenuItem
          component={Link}
          href='/hangman'
          onClick={handleSelect}
        >
            Hangman
        </MenuItem>
      </Menu>
      <ListItemText
        primary='Mini-Games'
        secondary={subtitle}
        sx={{
          flexGrow: 1,
          textAlign: 'center'
        }}
      />
    </Toolbar>
  </AppBar>
  <Outlet />
</Box>
</ThemeProvider> */}
