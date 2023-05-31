import * as React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './GlobalStyle.js'
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<GlobalStyle />
		<App />
	</>
)
