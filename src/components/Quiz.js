import React, { useState, useContext } from 'react'
import { Question } from '../helpers/Questions'
import { QuizContext } from '../helpers/Context'

function Quiz() {
  /*used to get the array of a given 
    element from question object */
  const { score, setScore, setGameState } = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [chosenOption, setChosenOption] = useState('')

  const nextQuestion = () => {
    if (Question[currentQuestion].answer === chosenOption) {
      setScore(score + 1)
    }
    console.log(score)
    setCurrentQuestion(currentQuestion + 1)
  }

  const finshQuiz = () => {
    /*repeated logic to check if final answer is correct */
    if (Question[currentQuestion].answer === chosenOption) {
      setScore(score + 1)
    }
    setGameState('endScreen')
  }

  return (
    <div className="Quiz">
      <h1>{Question[currentQuestion].prompt} </h1>
      <div className="options">
        <button
          onClick={() => {
            setChosenOption('A')
          }}
        >
          {Question[currentQuestion].optionA}
        </button>

        <button
          onClick={() => {
            setChosenOption('B')
          }}
        >
          {Question[currentQuestion].optionB}
        </button>

        <button
          onClick={() => {
            setChosenOption('C')
          }}
        >
          {Question[currentQuestion].optionC}
        </button>

        <button
          onClick={() => {
            setChosenOption('D')
          }}
        >
          {Question[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Question.length - 1 ? (
        <button onClick={finshQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  )
}

export default Quiz
