import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import ProgressPoints from "../components/ProgressPoints";
import React, { useState, useEffect } from "react";

const PointPage = () => {
    const navigate = useNavigate()
    const [score, setScore] = useState(0); // Estado para el puntaje

    // Leer el puntaje desde localStorage
    useEffect(() => {
        const storedScore = localStorage.getItem("puntaje");
        if (storedScore) {
            setScore(parseInt(storedScore, 10));
        }
    }, []);

    const handleClick = () => {
        navigate("/game/frontend")
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
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-3xl font-bold text-white">PUNTOS</h1>
                    <div className="w-10"></div> 
                </div>

                {/* Implementación del componente*/}
                <div>
                    {/* Renderizar ProgressPoints 15 veces */}
                    {progressPointsList.map((index) => {
                        const isActive = score >= index * 100; // Verifica si este punto debe estar activo
                        return(
                            <ProgressPoints
                                key={index}
                                progress={100} // Puedes ajustar este valor según sea necesario
                                startNumber={index} // Calcula el número inicial (1, 101, 201, etc.)
                                endNumber={index * 100} // Calcula el número final (100, 200, 300, etc.)
                                isActive={isActive} // Pasar si debe estar pintado de verde
                            />
                        );
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default PointPage