import { useState } from "react";
import { IconJS, IconPython, IconSQL } from "../components/Icons"
import TopicButton from "../components/TopicButton"
import HeaderGameMode from "../components/HeaderGameMode";

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
        <div className="relative max-w-md mx-auto min-h-screen p-4 transition-all bg-gray-100">
            <HeaderGameMode />
            <h1 className="mb-6 text-xl font-bold text-center">Elige una categoria</h1>
            <div className="h-full rounded-xl bg-gray-300">

                <div className="flex flex-col space-y-1 gap-y-1 px-7 ">
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
