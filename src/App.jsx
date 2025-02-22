import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import LoginPage from "./pages/Login";
import GameModesPage from "./pages/GameModes";
import GamePage from "./pages/Game";
import NewGamePage from "./pages/PopUp/NewGame";
import WinPage from "./pages/PopUp/Win";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/game-modes" element={<GameModesPage />} />
        <Route path="/game/:name" element={<GamePage />} />
        <Route path="/lose-game" element={<NewGamePage />} />
        <Route path="/win-game" element={<WinPage />} />

      </Routes>
    </Router>
  )
}

export default App
