import { useState } from "react";
import { IconJS, IconPython, IconSQL } from "../components/Icons"
import TopicButton from "../components/TopicButton"

import data from "../db/question.json";
import { useEffect } from "react";

const GameModesPage = () => {
    const [categories, setCategories] = useState([]);

    // Cargar las categorías al montar el componente
    useEffect(() => {
        setCategories(data.categorias);
    }, []);

    // Función para obtener el ícono correspondiente a cada categoría
    const getIconForCategory = (categoryName) => {
        switch (categoryName) {
            case "Frontend":
                return <IconJS />;
            case "Backend":
                return <IconPython />;
            case "Bases de datos":
                return <IconSQL />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-md mx-auto px-4 py-6 h-screen bg-gray-300">
            <h1 className="mb-6 text-xl font-bold text-center">Elige una categoria</h1>
            <div className="h-full rounded-xl bg-white">

                <div className="flex flex-col space-y-3 gap-y-3">
                    {categories.map((category) => (
                        <TopicButton
                            key={category.nombre}
                            icon={getIconForCategory(category.nombre)}
                            name={category.nombre}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GameModesPage
