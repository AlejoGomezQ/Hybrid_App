import { useNavigate } from "react-router-dom"
import { X } from "lucide-react"
import ProgressPoints from "../components/ProgressPoints";
import React, { useState, useEffect } from "react";

const PointPage = () => {
    const navigate = useNavigate()
    const [score, setScore] = useState(0);

    // Leer el puntaje desde localStorage
    useEffect(() => {
        const storedScore = localStorage.getItem("puntaje");
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);

    const handleClick = () => {
        navigate(-1);
    }

    // Array de 15 elementos para repetir el componente
    const progressPointsList = Array.from({ length: 15 }, (_, index) => index + 1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4 font-sans">
            <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={handleClick}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full cursor-pointer transition-colors duration-300"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-3xl font-bold text-white">PUNTOS</h1>
                    <div className="w-10"></div> 
                </div>

                <div>
                    {progressPointsList.map((index) => {
                        const isActive = score >= index * 100;
                        return(
                            <ProgressPoints
                                key={index}
                                progress={100} 
                                startNumber={index} 
                                endNumber={index * 100} 
                                isActive={isActive}
                            />
                        );
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default PointPage