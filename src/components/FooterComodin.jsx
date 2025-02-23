import { Shuffle, Repeat2, View } from "lucide-react";
import { useState } from "react";

function FoooterComodin({ currentQuestion, setCurrentQuestion, loadRandomQuestion }) {
  const [comodinUsado, setComodinUsado] = useState(false);
  const [comodinCambioUsado, setComodinCambioUsado] = useState(false);

  const handleShuffle = () => {
    if (comodinUsado || !currentQuestion) return;

    const incorrectas = currentQuestion.opciones.filter(
      (r) => r !== currentQuestion.correcta
    );

    if (incorrectas.length > 1) {
      const incorrectasAEliminar = incorrectas
        .sort(() => Math.random() - 0.5) 
        .slice(0, 2); // Selecciona dos

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

  const handleChangeQuestion = () => {
    if (comodinCambioUsado) return;
    loadRandomQuestion(); 
    setComodinCambioUsado(true);
  };

  return (
    <footer className="footer">
      <div className="flex justify-between items-center ">
        <button
          className={`p-3 bg-gray-300 rounded-full shadow-m cursor-pointer${
            comodinUsado ? "opacity-80 cursor-no-drop" : ""
          }`}
          onClick={handleShuffle}
          disabled={comodinUsado}
        >
          <Shuffle className="w-6 h-6" label="50/50" />
        </button>

        <button className="p-3  bg-gray-300 rounded-full shadow-md font-bold cursor-pointer">
          <View className="w-6 h-6" label="Respuesta" />
        </button>

        <button
          className={`p-3 bg-gray-300 rounded-full shadow-md cursor-pointer${
            comodinCambioUsado ? "opacity-80 cursor-no-drop" : ""
          }`}
          onClick={handleChangeQuestion}
          disabled={comodinCambioUsado}
        >
          <Repeat2 className="w-6 h-6" label="Cambio Pregunta" />
        </button>
      </div>
    </footer>
  );
}

export default FoooterComodin;

