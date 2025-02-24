/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const TopicButton = ({ icon, name }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(`/game/${name.toLowerCase()}`)}
            className="w-full flex items-center justify-between gap-3 px-4 py-6 text-base font-medium"
            aria-label={`Seleccionar tema ${name}`}
        >
            <span className="w-[20%]">{icon}</span>
            <span className="w-[80%] px-6 py-3 bg-gray-100 hover:bg-gray-400 rounded-xl transition-colors
                 focus:outline-none focus:ring-2 focus:ring-gray-100">{name}</span>
        </button>
    );
}

export default TopicButton;
