import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Context'
import '../App.css'
import { Question } from '../helpers/Questions'

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setGameState('quiz')
  }

  const mainMenu = () => {
    setScore(0)
    setGameState('menu')
  }
  return (
    <div className="EndScreen">
      <h1>You have finished the quiz!</h1>
      <h3>
        Your score is: {score}/{Question.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
      <button onClick={mainMenu}>Back to main menu</button>
    </div>
  )
}

export default EndScreen
