import { useState, useEffect } from "react";

const Timer = ({ onLose, reset }) => {
// recuperar el tiempo guardado; si no hay, se usa 30
    const [seconds, setSeconds] = useState(() => {
    const saved = localStorage.getItem("timerSeconds");
    return saved ? parseInt(saved, 10) : 30;
});

// resetea el tiempo cuando se hace un reinicio de juego
useEffect(() => {
    if (reset) {
    setSeconds(30);
    }
}, [reset]);

useEffect(() => {
    if (seconds === 0) {
        onLose();
        return;
    }
    const timerId = setTimeout(() => {
    setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
}, [seconds, onLose]);


useEffect(() => {
    localStorage.setItem("timerSeconds", seconds);
}, [seconds]);

const getTimerColor = () => {
    if (seconds <= 5) {
    return "text-red-500";
    }
    return "text-white";
};

return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-white/20 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
    <div
        className={`font-bold text-2xl ${getTimerColor()} transition-colors duration-300`}
    >
        {seconds}
    </div>
    </div>
);
};

export default Timer;
