import * as React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './pages/Navigation/components/Navbar.jsx'
import { Home } from './pages/Navigation/Home.jsx'
import { TicTacToe } from './pages/TicTacToe/TicTacToe.jsx'
import { Hangman } from './pages/Hangman/Hangman.jsx'
import { MemoryMatch } from './pages/MemoryMatch/MemoryMatch.jsx'
import { MemoryMatchMLB } from './pages/MemoryMatchMLB/MemoryMatchMLB.jsx'
import { MemoryMatchNFL } from './pages/MemoryMatchNFL/MemoryMatchNFL.jsx'
import { NoPage } from './pages/Navigation/NoPage.jsx'

import { TestPage } from './pages/TestPage/TestPage.jsx'

import './App.css'

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Navbar />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='/tic-tac-toe'
						element={<TicTacToe />}
					/>
					<Route
						path='/hangman'
						element={<Hangman />}
					/>
					<Route
						path='/memory-match'
						element={<MemoryMatch />}
					/>
					<Route
						path='/memory-match-mlb'
						element={<MemoryMatchMLB />}
					/>
					<Route
						path='/memory-match-nfl'
						element={<MemoryMatchNFL />}
					/>
				</Route>
				<Route
					path='*'
					element={<NoPage />}
				/>
				<Route
					path='/test'
					element={<TestPage />}
				/>
			</Routes>
		</Router>
	)
}
