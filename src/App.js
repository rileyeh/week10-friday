import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/list'>List</Link>
      </nav>
      {routes}
    </div>
  )
}

export default App