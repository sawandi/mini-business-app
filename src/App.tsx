
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState(
    'Welcome! Your journey starts here.',
  )

  function handleWelcome() {
    if (name.trim() === '') {
      setMessage('Please enter your name first.')
      return
    }

    setMessage(`Welcome, ${name.trim()}! Glad to have you here.`)
  }

  function handleClear() {
    setName('')
    setMessage('Welcome! Your journey starts here.')
  }

  return (
    <div className='welcome-card'>
      <h1>My First Business App</h1>

      <p>{message}</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleWelcome()
          }
        }}
      />

      <button onClick={handleWelcome}>Welcome Me</button>

      <button className="clear-button" onClick={handleClear}>
        Clear
      </button>

    </div>
  )
}

export default App
