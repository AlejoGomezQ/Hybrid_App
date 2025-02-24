import React from 'react';
import { ArrowLeft, Crown} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const HeaderGame = () => {
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
            <div className="font-bold text-lg bg-gray-300 rounded-full py-2 px-10">{nick}</div>
            <button onClick={handleClick2} className="p-2 font-bold bg-gray-300 rounded-full cursor-pointer">
                <Crown className="w-6 h-6" />
            </button>
        </header>
    );
}
export default HeaderGame