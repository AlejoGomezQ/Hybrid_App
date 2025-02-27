/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const Timer = ({ onLose, reset }) => {
    const [seconds, setSeconds] = useState(30)

    useEffect(() => {
        setSeconds(30)
    }, [reset])

    useEffect(() => {
        if (seconds === 0) {
            onLose()
            return
        }

        const timerId = setTimeout(() => {
            setSeconds((prev) => prev - 1)
        }, 1000)

        return () => clearTimeout(timerId)
    }, [seconds, onLose])

    const getTimerColor = () => {
        if (seconds <= 5) {
            return "text-red-500"
        }
        return "text-white"
    }

    return (
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-white/20 backdrop-blur-md rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <div className={`font-bold text-2xl ${getTimerColor()} transition-colors duration-300`}>{seconds}</div>
        </div>
    )
}

export default Timer

