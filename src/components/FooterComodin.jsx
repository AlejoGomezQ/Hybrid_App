/* eslint-disable react/prop-types */
import { Shuffle, Repeat2, View } from "lucide-react"
import { useState } from "react"
import ComodinPopUp from "@/pages/PopUp/Comodin"

function FooterComodin({ currentQuestion, setCurrentQuestion, loadRandomQuestion }) {
  const [comodinUsado, setComodinUsado] = useState(false)
  const [comodinCambioUsado, setComodinCambioUsado] = useState(false)
  const [comodinRespuestaUsado, setComodinRespuestaUsado] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleShuffle = () => {
    if (comodinUsado || !currentQuestion) return

    const incorrectas = currentQuestion.opciones.filter((r) => r !== currentQuestion.correcta)

    if (incorrectas.length > 1) {
      const incorrectasAEliminar = incorrectas.sort(() => Math.random() - 0.5).slice(0, 2)
      const nuevasOpciones = currentQuestion.opciones.filter((r) => !incorrectasAEliminar.includes(r))

      setCurrentQuestion((prev) => ({
        ...prev,
        opciones: nuevasOpciones,
      }))

      setComodinUsado(true)
    }
  }

  const handleViewAnswer = () => {
    if (comodinRespuestaUsado) return
    setShowPopup(true)
    setComodinRespuestaUsado(true)
  }

  const handleChangeQuestion = () => {
    if (comodinCambioUsado) return
    loadRandomQuestion()
    setComodinCambioUsado(true)
  }

  const getButtonClasses = (isUsed) => `
    p-4 bg-white/20 rounded-full shadow-md cursor-pointer transition-all duration-300
    ${isUsed ? "opacity-50 cursor-not-allowed filter blur-[1px]" : "hover:bg-white/30 active:bg-white/40"}
  `

  return (
    <>
      <footer className="footer p-4">
        <div className="flex justify-between items-center">
          <button
            className={getButtonClasses(comodinUsado)}
            onClick={handleShuffle}
            disabled={comodinUsado}
            aria-label="50/50"
          >
            <Shuffle className="w-6 h-6 text-white" />
          </button>

          <button
            className={getButtonClasses(comodinRespuestaUsado)}
            onClick={handleViewAnswer}
            disabled={comodinRespuestaUsado}
            aria-label="Ver Respuesta"
          >
            <View className="w-6 h-6 text-white" />
          </button>

          <button
            className={getButtonClasses(comodinCambioUsado)}
            onClick={handleChangeQuestion}
            disabled={comodinCambioUsado}
            aria-label="Cambiar Pregunta"
          >
            <Repeat2 className="w-6 h-6 text-white" />
          </button>
        </div>
      </footer>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <ComodinPopUp respuesta={currentQuestion.correcta} onClose={() => setShowPopup(false)} />
        </div>
      )}
    </>
  )
}

export default FooterComodin

