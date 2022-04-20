import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Listeanimaux from "./Routes/listeanimaux/listeanimaux.js";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/listeanimaux" element={<Listeanimaux />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);