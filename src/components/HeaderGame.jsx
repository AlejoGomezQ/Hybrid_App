import { ArrowLeft, Crown } from "lucide-react"
import { useNavigate } from "react-router-dom"

const HeaderGame = () => {
    const nick = localStorage.getItem("nickname")
    const navigate = useNavigate()

    const handleClick = () => {
        localStorage.removeItem("timerSeconds")
        localStorage.removeItem("puntaje")
        localStorage.removeItem("comodinUsado")
        localStorage.removeItem("comodinCambioUsado")
        localStorage.removeItem("comodinRespuestaUsado")
        localStorage.removeItem("currentQuestion")
        navigate("/game-modes")
    }

    const handleClick2 = () => {
        navigate("/game-puntos")
    }

    return (
        <header className="flex justify-between items-center mb-6">
            <button
                onClick={handleClick}
                className="p-2 bg-white/30 hover:bg-white/40 rounded-full cursor-pointer transition-colors duration-300"
            >
                <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <div className="font-bold text-lg bg-white/30 text-white rounded-full py-2 px-10">{nick}</div>
            <button
                onClick={handleClick2}
                className="p-2 bg-white/30 hover:bg-white/40 rounded-full cursor-pointer transition-colors duration-300"
            >
                <Crown className="w-6 h-6 text-white" />
            </button>
        </header>
    )
}

export default HeaderGame

