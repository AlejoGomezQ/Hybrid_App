import React, { useState, useEffect } from "react";
import Button from "@/components/shared/Button";
import Avatar from "@/components/shared/Avatar";
import { useNavigate } from "react-router-dom";

const NewGamePage = () => {
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedNickname = localStorage.getItem("nickname");
        if (storedNickname) {
            setNickname(storedNickname);
        }
    }, []);

    return (
        <div className="py-7 px-7 h-screen">
            <div className="bg-gray-400 h-full rounded-md max-w-md mx-auto px-4 py-10 flex flex-col items-center justify-around space-y-4">
                <div className="text-center space-y-4">
                    <Avatar />
                    {nickname && <p className="text-white text-3xl font-semibold">{nickname}</p>}
                </div>
                <div className="space-y-6 justify-items-center">
                <h1 className="text-cyan-950 text-3xl font-semibold">¡Ops... Perdiste!</h1>
                <p className="text-cyan-950 text-lg text-center">No has podido completar el juego</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); navigate("/game-modes"); }} className="flex flex-col space-y-5">
                    <Button type="submit">Jugar de nuevo</Button>
                </form>
            </div>
        </div>
    );
};

export default NewGamePage;
