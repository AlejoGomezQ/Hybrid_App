import React, { useState, useEffect } from "react";
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
import Avatar from "@/components/shared/Avatar";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedNickname = window.localStorage.getItem("nickname");
        if (storedNickname) {
            setNickname(storedNickname);
        }
    }, []);

    useEffect(() => {
        if (nickname) {
            window.localStorage.setItem("nickname", nickname);
        }
    }, [nickname]);

    const handleChange = (e) => {
        setNickname(e.target.value);
    };

    const validacion = (e) => {
        e.preventDefault();
        if (!nickname.trim()) {
            alert("El campo NickName no puede estar vacío");
            return;
        }
        localStorage.setItem("nickname", nickname);
        navigate("/game-modes");
    };

    return (
        <div className="py-7 px-7 h-screen">
            <div className="bg-gray-400 h-full rounded-md max-w-md mx-auto px-4 py-10 flex flex-col items-center justify-around space-y-4">
                <div className="text-center space-y-4">
                    <Avatar />
                    {nickname && <p className="text-white text-3xl font-semibold">{nickname}</p>}
                </div>
                <form onSubmit={validacion} className="flex flex-col space-y-5">
                    <Input
                        type="text"
                        placeholder="NickName"
                        value={nickname}
                        onChange={handleChange}
                        minLength={3}
                        maxLength={13}
                    />
                    <Button type="submit">Ingresar</Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
