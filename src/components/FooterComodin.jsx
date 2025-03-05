import { Shuffle, Repeat2, View } from "lucide-react"
import { useState } from "react"
import ComodinPopUp from "@/pages/PopUp/Comodin"

function FooterComodin({ 
    currentQuestion, 
    comodinUsado,
    comodinCambioUsado,
    comodinRespuestaUsado,
    handleShuffle,
    handleViewAnswer,
    handleChangeQuestion,
}) {
    const [showPopup, setShowPopup] = useState(false)

    // Función para mostrar el PopUp y ver la respuesta
    const onViewAnswer = () => {
        handleViewAnswer()
        setShowPopup(true)
    }

    // Función para obtener las clases de los botones
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
                        onClick={onViewAnswer}
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
                <div className="fixed inset-0 bg-opacity-80 backdrop-blur-lg flex items-center justify-center z-50">
                    <ComodinPopUp 
                        respuesta={currentQuestion.correcta} 
                        onClose={() => {
                            setShowPopup(false)
                            handleViewAnswer()
                        }} 
                    />
                </div>
            )}
        </>
    )
}

export default FooterComodin