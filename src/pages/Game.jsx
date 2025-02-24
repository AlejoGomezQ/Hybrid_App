import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Timer from "../components/Timer";
import questionData from "../db/question.json";
import LosePopUp from "./PopUp/LoseGame";
import FoooterComodin from "../components/FooterComodin";
import HeaderGame from "../components/HeaderGame";

const GamePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const {category} = useParams();
  const [showLosePopUp, setShowLosePopUp] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  const loadRandomQuestion = () => {
    const categoryData = questionData.categorias.find(
      (cat) => cat.nombre.toLowerCase() === category
    );
    if (categoryData) {
      const randomIndex = Math.floor(
        Math.random() * categoryData.preguntas.length
      );
      setCurrentQuestion(categoryData.preguntas[randomIndex]);
      setSelectedAnswer(null);
      setShowResult(false);
      setResetTimer((prev) => !prev);
      setShowLosePopUp(false);
    }
  };

  useEffect(() => {
    loadRandomQuestion();
  }, [category]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === currentQuestion.correcta) {
      setScore((prevScore) => prevScore + 10);
      setTimeout(() => {
        handleNextQuestion();
      }, 1000);
    } else {
      setTimeout(() => {
        setShowLosePopUp(true);
      }, 2000);
    }
  };

  const handleNextQuestion = () => {
    loadRandomQuestion();
  };

  const handleLose = () => {
    setShowLosePopUp(true);
  };

  return (
    <div
      className={`relative max-w-md mx-auto min-h-screen p-4 transition-all ${
        showLosePopUp
          ? "bg-gray-900 bg-opacity-70 backdrop-blur-md"
          : "bg-gray-100"
      }`}
    >
      <HeaderGame score={score} />
      <div className="relative mb-8">
        <Timer onLose={handleLose} reset={resetTimer} />
      </div>
      <div
        className={`${
          showLosePopUp ? "opacity-20 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="bg-gray-300 p-6 rounded-lg mb-6 min-h-[120px] flex items-center justify-center">
          {currentQuestion ? (
            <span className="text-lg font-bold text-center">
              {currentQuestion.pregunta}
            </span>
          ) : (
            <span className="text-lg text-gray-600">Cargando pregunta...</span>
          )}
        </div>
        <div className="space-y-3 mb-8">
          {currentQuestion?.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(opcion)}
              disabled={showResult}
              className={`w-full p-4 rounded-lg text-left transition-colors
                ${
                  showResult
                    ? opcion === currentQuestion.correcta
                      ? "bg-green-200"
                      : opcion === selectedAnswer
                      ? "bg-red-200"
                      : "bg-gray-300"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-6 left-0 right-0 max-w-md mx-auto px-10">
        <FoooterComodin
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          loadRandomQuestion={loadRandomQuestion}
        />
      </div>
      {showLosePopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
          <LosePopUp onClose={loadRandomQuestion} />
        </div>
      )}
    </div>
  );
};

export default GamePage;
