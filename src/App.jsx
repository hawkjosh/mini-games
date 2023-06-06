import * as React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './pages/Navigation/components/Navbar.jsx'
import { Home } from './pages/Navigation/Home.jsx'
import { TicTacToe } from './pages/TicTacToe/TicTacToe.jsx'
import { TictactoeStyled } from './pages/TictactoeStyled/TictactoeStyled.jsx'
import { Hangman } from './pages/Hangman/Hangman.jsx'
import { HangmanStyled } from './pages/HangmanStyled/HangmanStyled.jsx'
import { MemoryMatch } from './pages/MemoryMatch/MemoryMatch.jsx'
import { MemorymatchStyled } from './pages/MemorymatchStyled/MemorymatchStyled.jsx'
import { NoPage } from './pages/Navigation/NoPage.jsx'

import { TestPage } from './pages/TestPage/TestPage.jsx'

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
						path='/tic-tac-toe-original'
						element={<TicTacToe />}
					/>
					<Route
						path='/tic-tac-toe'
						element={<TictactoeStyled />}
					/>
					<Route
						path='/hangman-original'
						element={<Hangman />}
					/>
					<Route
						path='/hangman'
						element={<HangmanStyled />}
					/>
					<Route
						path='/memory-match-original'
						element={<MemoryMatch />}
					/>
					<Route
						path='/memory-match'
						element={<MemorymatchStyled />}
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
