import { useState, useEffect, useRef } from "react";

const Timer = ({ onLose, reset }) => {
  // Store the reset value to detect changes
  const previousResetRef = useRef(reset);
  
  // Recover saved time or use default 30
  const [seconds, setSeconds] = useState(() => {
    const saved = localStorage.getItem("timerSeconds");
    return saved ? parseInt(saved, 10) : 30;
  });

  // Reset timer when reset prop changes (toggle)
  useEffect(() => {
    // Only reset if the reset value has changed
    if (reset !== previousResetRef.current) {
      setSeconds(30);
      previousResetRef.current = reset;
    }
  }, [reset]);

  // Timer countdown effect
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

  // Save current time to localStorage
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
    <div className="absolute left-1/2 -translate-x-1/2 -top-6 bg-white/20 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
      <div
        className={`font-bold text-2xl ${getTimerColor()} transition-colors duration-300`}
      >
        {seconds}
      </div>
    </div>
  );
};

export default Timer;