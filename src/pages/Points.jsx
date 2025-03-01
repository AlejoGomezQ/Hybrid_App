import { useNavigate } from "react-router-dom"
import { ArrowLeft, Shuffle, Repeat2, View } from "lucide-react"

const PointPage = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/game/frontend")
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
                    <h1 className="text-3xl font-bold text-white">PUNTOS</h1>
                    <div className="w-10"></div> {/* Spacer for alignment */}
                </div>
            </div>
        </div>
    )
}

export default PointPage