import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import LoginPage from "./pages/Login";
import GameModesPage from "./pages/GameModes";
import GamePage from "./pages/Game";
import LosePopUp from "./pages/PopUp/LoseGame";
import WinPopUp from "./pages/PopUp/WinGame";
import ComodinPopUP from "./pages/PopUp/Comodin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/game-modes" element={<GameModesPage />} />
        <Route path="/game/:name" element={<GamePage />} />
        <Route path="/lose-game" element={<LosePopUp />} />
        <Route path="/win-game" element={<WinPopUp />} />
        <Route path="/comodin" element={<ComodinPopUP />} />


      </Routes>
    </Router>
  )
}

export default App
