import { IconCSS, IconHTML, IconJS, IconNetworks, IconPython, IconSQL } from "../components/Icons"
import TopicButton from "../components/TopicButton"

const GameModesPage = () => {
    return (
        <main className="max-w-md mx-auto px-4 py-6">
            <h1 className="mb-6 text-xl font-bold text-center">ELIGE UN TEMA</h1>

            <div className="space-y-3">
                <TopicButton icon={<IconSQL />} name="SQL" />
                <TopicButton icon={<IconPython />} name="PYT" />
                <TopicButton icon={<IconNetworks />} name="REDES" />
                <TopicButton icon={<IconJS />} name="JS" />
                <TopicButton icon={<IconHTML />} name="HTML" />
                <TopicButton icon={<IconCSS />} name="CSS" />
            </div>
        </main>
    )
}

export default GameModesPage
