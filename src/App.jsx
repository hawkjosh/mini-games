import * as React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './assets/styles/App.css'

// import Navbar from './components/Navbar.jsx'
import NavbarNewUpdate from './components/NavbarNewUpdate.jsx'
import Home from './pages/Home.jsx'
import TicTacToe from './pages/TicTacToe.jsx'
import Hangman from './pages/Hangman.jsx'
import NoPage from './pages/NoPage.jsx'

export default function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Navbar />}> */}
        <Route path='/' element={<NavbarNewUpdate />}>
          <Route index element={<Home />} />
          <Route path='/tic-tac-toe' element={<TicTacToe />} />
          <Route path='/hangman' element={<Hangman />} />
        </Route>
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  )
}