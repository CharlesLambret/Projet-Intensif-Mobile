import logo from './logo.svg';
import './App.css';
import Homepage from './Routes/accueil/accueil.js';
import Listeanimaux from './Routes/liste-animaux/listeanimaux.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="adoptionanimaux" element={<Listeanimaux />} />
        <Route path="detailscore" element={<Detailduscore/>} />
      </Routes>
    </div>
  );
}

export default App;
