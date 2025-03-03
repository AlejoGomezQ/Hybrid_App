import { useNavigate } from "react-router-dom"
import { ArrowLeft, Shuffle, Repeat2, View } from "lucide-react"

const HelpPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/game-modes")
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4 font-sans">
            <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={handleClick}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full cursor-pointer transition-colors duration-300"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-3xl font-bold text-white">¿CÓMO JUGAR?</h1>
                    <div className="w-10"></div> {/* Spacer for alignment */}
                </div>

                <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 space-y-6 text-white">
                    <p>
                        Bienvenido a nuestro juego de preguntas y respuestas tecnológicas. Pon a prueba tus conocimientos en
                        Frontend, Backend y Base de Datos.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">Instrucciones</h2>
                        <ol className="list-decimal list-inside space-y-2 ml-4">
                            <li>Selecciona una categoría en la pantalla principal.</li>
                            <li>Responde cada pregunta antes de que el tiempo termine.</li>
                        </ol>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-2">Comodines</h2>
                        <p className="mb-4">Durante el juego tendrás disponible:</p>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4">
                                <Shuffle className="w-8 h-8 text-white" />
                                <span>Descarta dos opciones.</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <View className="w-8 h-8 text-white" />
                                <span>Responder la pregunta actual.</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Repeat2 className="w-8 h-8 text-white" />
                                <span>Cambiar la pregunta actual.</span>
                            </li>
                        </ul>
                    </div>

                    <ol className="list-decimal list-inside space-y-2 ml-4" start="3">
                        <li>Obtén puntos por pregunta acertada y visualiza tu récord de puntos acumulados.</li>
                        <li>Si fallas, podrás intentarlo en la siguiente ronda.</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-center text-yellow-300">¡Diviértete y aprende mientras juegas!</h3>
                </div>
            </div>
        </div>
    )
}

export default HelpPage

