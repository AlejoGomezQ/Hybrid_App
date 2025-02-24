import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wildcard50} from "../components/Wildcards"

const HelpPage = () => {
    return (
        <div className="max-w-md mx-auto px-4 py-6 h-screen bg-gray-300">
            <h1 className="mb-6 text-xl font-bold text-center font-inter text-[30px]">¿CÓMO JUGAR?</h1>
            
            <div className="h-full rounded-xl bg-white p-6 flex flex-col justify-between">
                <div>
                    <p className="text-gray-700 text-base mb-4">
                    Bienvenido a nuestro juego innovador de preguntas y respuestas 
                    con enfoque en la tecnología.<br /><br />
                    Aquí podrás poner a prueba tus conocimientos en áreas como Frontend, Backend y 
                    Base de Datos.
                    </p>

                    <h1 className="mb-6 text-xl font-bold text-center">Instrucciones</h1>

                    <ol className="list-decimal list-inside space-y-2 text-gray-700 text-base">
                        <li>Selecciona una categoría en la pantalla principal.</li>
                        <li>Responde cada pregunta antes de que el tiempo termine.</li>
                    </ol>

                    <h2 className="mt-4 mb-2 text-lg font-bold">Comodines</h2>
                    <p className="text-gray-700 text-base mb-4">
                        Durante el juego tendras disponible:
                    </p>

                    <div>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                            <li className="flex items-center space-x-16">
                                <Wildcard50 />
                                <span>Descarta dos opciones.</span>
                            </li>
                            <li className="flex items-center space-x-16">
                                <Wildcard50 />
                                <span>Responder la pregunta actual.</span>
                            </li>
                            <li className="flex items-center space-x-16">
                                <Wildcard50 />
                                <span>Cambiar la pregunta actual.</span>
                            </li>
                        </ul>
                    </div>

                    <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-700 text-base" start="3">
                        <li>Obtén puntos por pregunta acertada y visualiza tu récord de puntos acumulados.</li>
                        <li>Si fallas, podrás intentarlo en la siguiente ronda.</li>
                    </ol>

                    <h3 className="mt-6 text-xl font-bold text-center">
                        <b>¡Diviértete y aprende mientras juegas!</b>
                    </h3>
                    
                </div>
{/* 
                <div className="mt-6 text-center">
                    <Link to="/" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                        Volver al inicio
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default HelpPage;