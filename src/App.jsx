import * as React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar } from './pages/Navigation/components/Navbar.jsx'
import { Home } from './pages/Navigation/Home.jsx'
import { Tictactoe } from './pages/Tictactoe/Tictactoe.jsx'
import { Hangman } from './pages/Hangman/Hangman.jsx'
import { Memorymatch } from './pages/Memorymatch/Memorymatch.jsx'
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
						path='/tic-tac-toe'
						element={<Tictactoe />}
					/>
					<Route
						path='/hangman'
						element={<Hangman />}
					/>
					<Route
						path='/memory-match'
						element={<Memorymatch />}
					/>
				</Route>
				<Route
					path='/test'
					element={<TestPage />}
				/>
			</Routes>
		</Router>
	)
}
