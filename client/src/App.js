import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [response, setResponse] = useState('')
useEffect( () => {
console.log('ENV......', process.env.NODE_ENV)
const url = process.env.NODE_ENV ==='development'?'http://localhost:5000':'http://localhost:5000' // change this
  axios.get(`${url}/api/hello`)
  .then(res => {
    console.log('res.data', res.data);
    setResponse(res.data.express)
  });
axios.get('localhost:5000/api/hello').then(res=>console.log('hi,', res))
}, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{response}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
