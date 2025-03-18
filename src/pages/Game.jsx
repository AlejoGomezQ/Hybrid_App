import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Timer from "../components/Timer";
import questionData from "../db/question.json";
import StatePopUp from "./PopUp/StateGame";
import FoooterComodin from "../components/FooterComodin";
import HeaderGame from "../components/HeaderGame";

const GamePage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const { category } = useParams();
  const [showStatePopUp, setShowPopUp] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  // Leer estado de comodines desde localStorage al cargar
  const [comodinUsado, setComodinUsado] = useState(
    localStorage.getItem("comodinUsado") === "true"
  );
  const [comodinCambioUsado, setComodinCambioUsado] = useState(
    localStorage.getItem("comodinCambioUsado") === "true"
  );
  const [comodinRespuestaUsado, setComodinRespuestaUsado] = useState(
    localStorage.getItem("comodinRespuestaUsado") === "true"
  );

  // Cargar puntaje desde localStorage al iniciar
  useEffect(() => {
    const storedScore = localStorage.getItem("puntaje");
    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }
  }, []);

  //cargar pregunta actual desde localStorage
  const loadRandomQuestion = useCallback(() => {
    const categoryData = questionData.categorias.find(
      (cat) => cat.nombre.toLowerCase() === category
    );
    if (categoryData) {
      const randomIndex = Math.floor(
        Math.random() * categoryData.preguntas.length
      );
      const newQuestion = categoryData.preguntas[randomIndex];
      setCurrentQuestion(newQuestion);
      localStorage.setItem("currentQuestion", JSON.stringify(newQuestion)); // Guardar la pregunta actual
      setSelectedAnswer(null);
      setShowResult(false);
      setResetTimer((prev) => !prev);
      setShowPopUp(false);
    }
  }, [category]);

  // Cargar pregunta al iniciar
  useEffect(() => {
    const savedQuestion = localStorage.getItem("currentQuestion");
    if (savedQuestion) {
      setCurrentQuestion(JSON.parse(savedQuestion));
    } else {
      loadRandomQuestion();
    }
  }, [loadRandomQuestion]);

  const resetGame = () => {
    setScore(0);
    setComodinUsado(false);
    setComodinCambioUsado(false);
    setComodinRespuestaUsado(false);

    // Eliminar los puntaje, comodines y pregunta guardada del localStorage
    localStorage.removeItem("puntaje");
    localStorage.removeItem("comodinUsado");
    localStorage.removeItem("comodinCambioUsado");
    localStorage.removeItem("comodinRespuestaUsado");
    localStorage.removeItem("currentQuestion");

    // Cargar nueva pregunta
    loadRandomQuestion();

    // Resetear el timer
    setResetTimer((prev) => !prev);

    // Ocultar estado de popup
    setShowPopUp(false);
  };

  // Manejar la selección de respuesta
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correcta) {
      // Reset timer immediately when answer is correct
      setResetTimer(prev => !prev);
      
      setScore((prevScore) => {
        const newScore = prevScore + 100;
        localStorage.setItem("puntaje", newScore);
        setShowResult(true);
        //si se cambia el newScore de 1500, tambien cambiarlo en PopUp/StateGame.jsx
        if (newScore === 1500) {
          setShowPopUp(true);
        } else {
          setTimeout(() => {
            handleNextQuestion();
          }, 1000);
        }
        return newScore;
      });
    } else {
      // Al perder, resetear todo el juego
      setShowResult(true);
      setTimeout(() => {
        resetGame();
        setShowPopUp(true);
      }, 1000);
    }
  };

  // Cargar la siguiente pregunta
  const handleNextQuestion = () => {
    loadRandomQuestion();
  };

  // Manejar la pérdida
  const handleLose = () => {
    setShowPopUp(true);
  };

  // Comodin 50/50
  const handleShuffle = () => {
    if (comodinUsado || !currentQuestion) return;
    const incorrectas = currentQuestion.opciones.filter(
      (r) => r !== currentQuestion.correcta
    );
    if (incorrectas.length > 1) {
      const incorrectasAEliminar = incorrectas
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);
      const nuevasOpciones = currentQuestion.opciones.filter(
        (r) => !incorrectasAEliminar.includes(r)
      );
      //Actualizar las opciones de la pregunta
      setCurrentQuestion((prev) => ({
        ...prev,
        opciones: nuevasOpciones,
      }));
      // Marcar el comodín como usado
      setComodinUsado(true);
      localStorage.setItem("comodinUsado", "true");
    }
  };

  // Comodin ver respuesta
  const handleViewAnswer = () => {
    setComodinRespuestaUsado(true);
    localStorage.setItem("comodinRespuestaUsado", "true");
  };

  // Comodin cambiar pregunta
  const handleChangeQuestion = () => {
    if (comodinCambioUsado) return;
    loadRandomQuestion();
    setComodinCambioUsado(true);
    localStorage.setItem("comodinCambioUsado", "true");
  };

  // Mantener pregunta cuando se sale de points
  const maintainCurrentState = () => {
    setResetTimer(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-10 font-sans">
      <div
        className={`relative max-w-md mx-auto transition-all ${
          showStatePopUp ? "opacity-20 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="mb-10">
          <HeaderGame score={score} />
        </div>
        <div className="relative mb-1 z-10">
          <Timer
            onLose={handleLose}
            reset={resetTimer}
            maintainCurrentState={maintainCurrentState}
          />
        </div>
        <div className="bg-white/20 backdrop-blur-md p-2 mt-18 rounded-lg mb-4 min-h-[110px] flex items-center justify-center">
          {currentQuestion ? (
            <span className="text-lg font-bold text-center text-white">
              {currentQuestion.pregunta}
            </span>
          ) : (
            <span className="text-lg text-white/70">Cargando pregunta...</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {currentQuestion?.opciones.map((opcion, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(opcion)}
              disabled={showResult}
              className={`w-full p-3 rounded-lg text-left transition-colors ${
                showResult
                  ? opcion === currentQuestion.correcta
                    ? "bg-green-500 text-white"
                    : opcion === selectedAnswer
                    ? "bg-red-500 text-white"
                    : "bg-white/30 text-white"
                  : "bg-white/30 hover:bg-white/40 text-white"
              }`}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>

      <div className="fixed bottom-1 left-8 right-8 max-w-md mx-auto">
        <FoooterComodin
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          loadRandomQuestion={loadRandomQuestion}
          comodinUsado={comodinUsado}
          setComodinUsado={setComodinUsado}
          comodinCambioUsado={comodinCambioUsado}
          setComodinCambioUsado={setComodinCambioUsado}
          comodinRespuestaUsado={comodinRespuestaUsado}
          setComodinRespuestaUsado={setComodinRespuestaUsado}
          handleShuffle={handleShuffle}
          handleViewAnswer={handleViewAnswer}
          handleChangeQuestion={handleChangeQuestion}
        />
      </div>
      {showStatePopUp && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-lg">
          <StatePopUp onClose={loadRandomQuestion} />
        </div>
      )}
    </div>
  );
};

export default GamePage;
