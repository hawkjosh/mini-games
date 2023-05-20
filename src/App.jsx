import * as React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import TicTacToe from './pages/TicTacToe.jsx'
import Hangman from './pages/Hangman.jsx'
import MemoryMatch from './pages/MemoryMatch.jsx'
import NoPage from './pages/NoPage.jsx'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/tic-tac-toe' element={<TicTacToe />} />
          <Route path='/hangman' element={<Hangman />} />
          <Route path='/memory-match' element={<MemoryMatch />} />
        </Route>
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  )
}