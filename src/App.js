import './App.css'
import React, { useState } from 'react'

function App() {
  /*  used to determine the section 
  of the quiz app users will be in
  i.e. main menu, end of quiz, etc.*/
  const [gameState, setGameState] = useState('menu')

  return (
    <div className="App">
      <h1>Quiz App</h1>
    </div>
  )
}

export default App
