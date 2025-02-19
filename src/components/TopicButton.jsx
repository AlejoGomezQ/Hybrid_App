import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const TopicButton = ({ icon, modeId }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(`/game/${modeId.toLowerCase()}`)}
            className="w-full flex items-center gap-3 px-4 py-6 text-base font-medium 
                 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors
                 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label={`Seleccionar tema ${modeId}`}
        >
            {icon}
            <span>{modeId}</span>
        </button>
    );
}

TopicButton.propTypes = {
    icon: PropTypes.node.isRequired,
    modeId: PropTypes.string.isRequired,
};

export default TopicButton;
