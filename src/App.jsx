import * as React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './assets/styles/App.css'

import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'
import TicTacToe from './pages/TicTacToe.jsx'
import NoPage from './pages/NoPage.jsx'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}