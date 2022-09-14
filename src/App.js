import './App.css'
import React, { useState, useContext } from 'react'
import MainMenu from './components/MainMenu'
import Quiz from './components/Quiz'
import EndScreen from './components/EndScreen'
import { QuizContext } from './helpers/Context'

function App() {
  /*  used to determine the section 
  of the quiz app users will be in
  i.e. main menu, end of quiz, etc.*/
  const [gameState, setGameState] = useState('menu')
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
