import { useState, useEffect } from "react"
import { IconJS, IconPython, IconSQL } from "../components/Icons"
import TopicButton from "../components/TopicButton"
import HeaderGameMode from "../components/HeaderGameMode"

import data from "../db/question.json"

const GameModesPage = () => {
    const [categories, setCategories] = useState([])

    // Cargar las categorías al montar el componente
    useEffect(() => {
        setCategories(data.categorias)
    }, [])

    // Función para obtener el ícono correspondiente a cada categoría
    const getIconForCategory = (categoryName) => {
        switch (categoryName) {
            case "Frontend":
                return <IconJS />
            case "Backend":
                return <IconPython />
            case "Bases de datos":
                return <IconSQL />
            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4 font-sans">
            <div className="max-w-md mx-auto bg-white/20 rounded-lg shadow-lg p-6">
                <HeaderGameMode />
                <h1 className="mb-6 text-2xl font-bold text-center text-white">Elige una categoria</h1>
                <div className="space-y-3">
                    {categories.map((category) => (
                        <TopicButton key={category.nombre} icon={getIconForCategory(category.nombre)} name={category.nombre} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GameModesPage

