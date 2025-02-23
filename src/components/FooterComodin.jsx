import { Shuffle, Repeat2, View } from "lucide-react";

function FoooterComodin() {
  return (
    <footer className="footer">
      <div className="flex justify-between items-center">
        <button className="p-3 bg-white rounded-full shadow-md">
          <Shuffle className="w-6 h-6" label="50/50" />
        </button>
        <button className="p-3 bg-white rounded-full shadow-md font-bold">
          <View className="w-6 h-6" label="Respuesta"/>
        </button>
        <button className="p-3 bg-white rounded-full shadow-md">
          <Repeat2 className="w-6 h-6" label="cambio question" />
        </button>
      </div>
    </footer>
  );
}
export default FoooterComodin;
