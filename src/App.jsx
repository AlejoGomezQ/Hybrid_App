import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import LoginPage from "./pages/Login";
import GameModesPage from "./pages/GameModes";
import GamePage from "./pages/Game";
import HelpPage from "./pages/Help";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/help" element={<HelpPage />} /> {/* Ruta del Help*/}
        <Route path="/game-modes" element={<GameModesPage />} />
        <Route path="/game/:name" element={<GamePage />} />
      </Routes>
    </Router>
  )
}

export default App
