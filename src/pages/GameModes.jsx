import { useState, useEffect } from "react"
import { IconJS, IconPython, IconSQL, IconSeguridad, IconIA } from "../components/Icons"
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
            case "Seguridad informática":
                return <IconSeguridad />
            case "Inteligencia artificial":
                return <IconIA />
            default:
                return null
        }
    }

    return (
        <div className="h-screen bg-gradient-to-br from-purple-600 to-blue-500 font-sans flex flex-col overflow-hidden">
            <div className="flex-1 flex flex-col p-4">
                <div className="max-w-md mx-auto w-full h-full flex flex-col bg-white/20 rounded-lg shadow-lg p-6 overflow-hidden">
                    <HeaderGameMode />
                    <h1 className="mb-6 text-2xl font-bold text-center text-white">Elige una categoria</h1>
                    <div className="flex-1 flex flex-col gap-y-5 overflow-y-hidden">
                        {categories.map((category) => (
                            <TopicButton key={category.nombre} icon={getIconForCategory(category.nombre)} name={category.nombre} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameModesPage