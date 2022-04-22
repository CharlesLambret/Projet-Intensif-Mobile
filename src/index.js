import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./Routes/Homepage/homepage";
import Listeanimaux from "./Routes/listeanimaux/listeanimaux.js";
import Ficheanimal from "./Routes/ficheanimal/ficheanimaladopter.js";
import Categorie from "./Routes/categorie/categorie.js";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/listeanimaux" element={<Listeanimaux />} />
      <Route path="/ficheanimaladopter" element={<Ficheanimal />} />
      <Route path="/categorie" element={<Categorie />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);