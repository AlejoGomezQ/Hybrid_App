import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import LoginPage from "./pages/Login";
import GameModesPage from "./pages/GameModes";
import GamePage from "./pages/Game";
import HelpPage from "./pages/Help";
import PointPage from "./pages/Points";
import StatePopUp from "./pages/PopUp/StateGame";
import ComodinPopUP from "./pages/PopUp/Comodin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/game-puntos" element={<PointPage />} /> 
        <Route path="/game-modes" element={<GameModesPage />} />
        <Route path="/game/:category" element={<GamePage />} />
        <Route path="/stade-game" element={<StatePopUp />} />
        <Route path="/comodin" element={<ComodinPopUP />} />
      </Routes>
    </Router>
  )
}

export default App
