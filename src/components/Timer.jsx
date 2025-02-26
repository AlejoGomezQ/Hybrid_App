import { useState, useEffect } from "react";

const Timer = ({ onLose, reset }) => {
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        setSeconds(30); 
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

    return (
        <div className="absolute left-1/2 -translate-x-1/2 -top-11 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-md">
            <span className="font-bold">{seconds}</span>
        </div>
    );
};

export default Timer;

