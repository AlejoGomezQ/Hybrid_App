import React, { useState, useEffect } from "react";
import Button from "@/components/shared/Button";
import Avatar from "@/components/shared/Avatar";
import { useNavigate } from "react-router-dom";

const ComodinPopUp = () => {
    const [nickname, setNickname] = useState("");
    const [respuesta, getRespuesta] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedNickname = localStorage.getItem("nickname");
        if (storedNickname) {
            setNickname(storedNickname);
        }
    }, []);

    useEffect(() => {
        function TomarRespuesta() {
            try {
                const response = fetch("/Hybrid-App/src/db/question.json");
                const data = response.json();
                const categoria = data.categorias.find(cat => ["Frontend", "Backend", "Base de datos"].includes(cat.nombre));
                const pregunta = categoria.preguntas.find(preg => preg.id >= 1 && preg.id <= 15);
                getRespuesta(pregunta.correcta);
                console.log(pregunta.correcta);
            } catch (error) {
                console.error("Error tomando la respuesta:", error);
            }
        }
        TomarRespuesta();
    }, []);

    return (
        <div className="py-7 px-7 h-screen">
            <div className="bg-gray-400 h-full rounded-md max-w-md mx-auto px-4 py-10 flex flex-col items-center justify-around space-y-4">
                <div className="text-center space-y-4">
                    <Avatar />
                    {nickname && <p className="text-white text-3xl font-semibold">{nickname}</p>}
                </div>
                <div className="space-y-6 justify-items-center">
                    <h1 className="text-cyan-950 text-3xl font-semibold">¡Responder!</h1>
                    <p className="text-white text-2xl font-semibold">{respuesta}</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); navigate(-1); }} className="flex flex-col space-y-5">
                    <Button type="submit">OK</Button>
                </form>
            </div>
        </div>
    );
};

export default ComodinPopUp;