import React from 'react';
import { ArrowLeft} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const HeaderMenu = () => {
    const nick = localStorage.getItem("nickname");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/game-modes");
    };

    const handleClick2 = () => {
        navigate("/game-puntos");
    };

    return (
        <header className="flex justify-between items-center mb-6">
            <button onClick={handleClick} className="p-2 bg-gray-300 rounded-full cursor-pointer">
                <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="font-bold text-lg">{nick}</div>
            <button onClick={handleClick2} className="p-2 font-bold bg-gray-300 rounded-full cursor-pointer">PTS</button>
        </header>
    );
}
export default HeaderMenu