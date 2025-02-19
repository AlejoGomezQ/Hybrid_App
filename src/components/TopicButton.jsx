/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const TopicButton = ({ icon, name }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(`/game/${name.toLowerCase()}`)}
            className="w-full flex items-center justify-between gap-3 px-4 py-6 text-base font-medium 
                 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors
                 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label={`Seleccionar tema ${name}`}
        >
            {icon}
            <span>{name}</span>
        </button>
    );
}

export default TopicButton;
