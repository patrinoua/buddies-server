import logo from './logo.svg'
import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
	const [response, setResponse] = useState('')

	useEffect(() => {
		console.log('ENV', process.env.NODE_ENV)
		const url =
			process.env.NODE_ENV === 'development'
				? 'http://localhost:5000'
				: 'http://localhost:5000' // change this
	}, [])

	console.log('Hello from App')

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>{response}</p>
			</header>
		</div>
	)
}

export default App
