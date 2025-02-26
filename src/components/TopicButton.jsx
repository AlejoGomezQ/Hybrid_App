/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { ChevronRight } from "lucide-react"

const TopicButton = ({ icon, name }) => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(`/game/${name.toLowerCase()}`)}
            className="w-full flex items-center justify-between px-4 py-4 mb-5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`Seleccionar tema ${name}`}
        >
            <div className="flex items-center">
                <span className="w-12 h-12 flex items-center justify-center rounded-full mr-4">{icon}</span>
                <span className="text-white font-medium">{name}</span>
            </div>
            <ChevronRight className="w-6 h-6 text-white" />
        </button>
    )
}

export default TopicButton

