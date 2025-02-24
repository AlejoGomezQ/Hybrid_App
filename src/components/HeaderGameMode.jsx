import React from 'react';
import { ArrowLeft, ShieldQuestion } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const HeaderGameMode = () => {
    const nick = localStorage.getItem("nickname");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    const handleClick2 = () => {
        navigate("/help");
    };

    return (
        <header className="flex justify-between items-center mb-6">
            <button onClick={handleClick} className="p-2 bg-gray-300 rounded-full cursor-pointer">
                <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="font-bold text-lg bg-gray-300 rounded-full py-2 px-10">{nick}</div>
            <button onClick={handleClick2} className="p-2 font-bold bg-gray-300 rounded-full cursor-pointer">
                <ShieldQuestion className="w-6 h-6" />
            </button>
        </header>
    );
}

export default HeaderGameMode