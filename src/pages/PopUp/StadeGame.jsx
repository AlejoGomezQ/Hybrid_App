import { useState, useEffect} from "react";
import Button from "@/components/shared/Button";
import Avatar from "@/components/shared/Avatar";
import { useNavigate } from "react-router-dom";

const StadePopUp = () => {
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();
    const [puntaje, setpuntaje] = useState(0);

    useEffect(() => {
        const storedPuntaje = localStorage.getItem("puntaje");
        if (storedPuntaje){
            setpuntaje(parseInt(storedPuntaje,10));
        }
    }
    , []);


    useEffect(() => {
        const storedNickname = localStorage.getItem("nickname");
        if (storedNickname) {
            setNickname(storedNickname);
        }
    }, []);


    const ChangeStade = (points) => {
        if (points === 1500) {
            return (
                <>
                    <h1 className="text-white text-3xl font-bold">¡Wow... Ganaste!</h1>
                    <p className="text-yellow-300 text-xl">Felicitaciones, has podido completar el juego</p>
                </>
            );
        }
        return (
            <>
                <h1 className="text-white text-3xl font-bold">¡Ops... Perdiste!</h1>
                <p className="text-yellow-300 text-xl">No has podido completar el juego</p>
            </>
        );
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-white/20 backdrop-blur-lg">
            <div className="bg-gradient-to-br from-purple-600/90 to-blue-500/90 rounded-xl max-w-md w-full mx-auto p-8 shadow-2xl">
                <div className="flex flex-col items-center space-y-6">
                    <Avatar className="w-24 h-24 border-4 border-white/50" />
                    {nickname && <p className="text-white text-2xl font-semibold">{nickname}</p>}

                    <div className="space-y-4 text-center">
                        {ChangeStade(puntaje)}
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); navigate("/game-modes"); }} className="w-full mt-6">
                        <Button
                            type="submit"
                            className="w-full bg-white/20 hover:bg-white/30 text-white"
                        >
                            Jugar de nuevo
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StadePopUp;
