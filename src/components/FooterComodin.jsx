import { Shuffle, Repeat2, View } from "lucide-react";
import { useState } from "react";
import ComodinPopUp from "@/pages/PopUp/Comodin";

function FooterComodin({ currentQuestion, setCurrentQuestion, loadRandomQuestion }) {
  const [comodinUsado, setComodinUsado] = useState(false);
  const [comodinCambioUsado, setComodinCambioUsado] = useState(false);
  const [comodinRespuestaUsado, setComodinRespuestaUsado] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

      setCurrentQuestion((prev) => ({
        ...prev,
        opciones: nuevasOpciones,
      }));

      setComodinUsado(true);
    }
  };

  const handleViewAnswer = () => {
    if (comodinRespuestaUsado) return;
    setShowPopup(true);
    setComodinRespuestaUsado(true);
  };

  const handleChangeQuestion = () => {
    if (comodinCambioUsado) return;
    loadRandomQuestion();
    setComodinCambioUsado(true);
  };

  return (
    <>
      <footer className="footer">
        <div className="flex justify-between items-center">
          <button
            className={`p-3 bg-gray-300 rounded-full shadow-md cursor-pointer ${
              comodinUsado ? "opacity-80 cursor-no-drop" : ""
            }`}
            onClick={handleShuffle}
            disabled={comodinUsado}
          >
            <Shuffle className="w-6 h-6" label="50/50" />
          </button>

          <button
            className={`p-3 bg-gray-300 rounded-full shadow-md font-bold cursor-pointer ${
              comodinRespuestaUsado ? "opacity-80 cursor-no-drop" : ""
            }`}
            onClick={handleViewAnswer}
            disabled={comodinRespuestaUsado}
          >
            <View className="w-6 h-6" label="Respuesta" />
          </button>

          <button
            className={`p-3 bg-gray-300 rounded-full shadow-md cursor-pointer ${
              comodinCambioUsado ? "opacity-80 cursor-no-drop" : ""
            }`}
            onClick={handleChangeQuestion}
            disabled={comodinCambioUsado}
          >
            <Repeat2 className="w-6 h-6" label="Cambio Pregunta" />
          </button>
        </div>
      </footer>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ComodinPopUp
            respuesta={currentQuestion.correcta}
            onClose={() => setShowPopup(false)}
          />
        </div>
      )}
    </>
  );
}

export default FooterComodin;

