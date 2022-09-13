import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import '../App.css'

function MainMenu() {
  /*Used to gain access to state without having to use props */
  const { gameState, setGameState } = useContext(QuizContext)

  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState('quiz')
        }}
      >
        Start Quiz!
      </button>
    </div>
  )
}

export default MainMenu
