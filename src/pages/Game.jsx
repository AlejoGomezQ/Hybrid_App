import { useState, useEffect, useCallback } from "react"
import { useParams } from "react-router-dom"
import Timer from "../components/Timer"
import questionData from "../db/question.json"
import LosePopUp from "./PopUp/LoseGame"
import FoooterComodin from "../components/FooterComodin"
import HeaderGame from "../components/HeaderGame"

const GamePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const { category } = useParams()
  const [showLosePopUp, setShowLosePopUp] = useState(false)
  const [resetTimer, setResetTimer] = useState(false)

  const loadRandomQuestion = useCallback(() => {
    const categoryData = questionData.categorias.find((cat) => cat.nombre.toLowerCase() === category)
    if (categoryData) {
      const randomIndex = Math.floor(Math.random() * categoryData.preguntas.length)
      setCurrentQuestion(categoryData.preguntas[randomIndex])
      setSelectedAnswer(null)
      setShowResult(false)
      setResetTimer((prev) => !prev)
      setShowLosePopUp(false)
    }
  }, [category])

  useEffect(() => {
    loadRandomQuestion()
  }, [loadRandomQuestion])

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
    setShowResult(true)
    if (answer === currentQuestion.correcta) {
      setScore((prevScore) => prevScore + 10)
      setTimeout(() => {
        handleNextQuestion()
      }, 1000)
    } else {
      setTimeout(() => {
        setShowLosePopUp(true)
      }, 2000)
    }
  }

  const handleNextQuestion = () => {
    loadRandomQuestion()
  }

  const handleLose = () => {
    setShowLosePopUp(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4 font-sans">
      <div
        className={`relative max-w-md mx-auto transition-all ${showLosePopUp ? "opacity-20 pointer-events-none" : "opacity-100"
          }`}
      >
        <div className="mb-15">
          <HeaderGame score={score} />
        </div>
        <div className="relative mb-1 z-50">
          <Timer onLose={handleLose} reset={resetTimer} />
        </div>
        <div className="bg-white/20 backdrop-blur-md p-6 mt-24 rounded-lg mb-6 min-h-[120px] flex items-center justify-center">
          {currentQuestion ? (
            <span className="text-lg font-bold text-center text-white">{currentQuestion.pregunta}</span>
          ) : (
            <span className="text-lg text-white/70">Cargando pregunta...</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {currentQuestion?.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(opcion)}
              disabled={showResult}
              className={`w-full p-4 rounded-lg text-left transition-colors
                ${showResult
                  ? opcion === currentQuestion.correcta
                    ? "bg-green-500 text-white"
                    : opcion === selectedAnswer
                      ? "bg-red-500 text-white"
                      : "bg-white/30 text-white"
                  : "bg-white/30 hover:bg-white/40 text-white"
                }`}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-6 left-0 right-0 max-w-md mx-auto">
        <FoooterComodin
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          loadRandomQuestion={loadRandomQuestion}
        />
      </div>
      {showLosePopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <LosePopUp onClose={loadRandomQuestion} />
        </div>
      )}
    </div>
  )
}

export default GamePage

