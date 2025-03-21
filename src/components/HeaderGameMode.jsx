import { ArrowLeft, ShieldQuestion } from "lucide-react"
import { useNavigate } from "react-router-dom"

const HeaderGameMode = () => {
    const nick = localStorage.getItem("nickname")
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    const handleClick2 = () => {
        navigate("/help")
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
                <ShieldQuestion className="w-6 h-6 text-white" />
            </button>
        </header>
    )
}

export default HeaderGameMode

