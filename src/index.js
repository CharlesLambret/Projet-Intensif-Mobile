import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Listeanimaux from "./Routes/listeanimaux/listeanimaux.js";
import Choix from "./Routes/choixparcours/choixparcours.js";
import Loader from "./Routes/chargement/chargement.js";
import Connexionform from "./Routes/authentification/connexion.js";
import InscriptionForm from "./Routes/authentification/inscription.js";
import {ChatRoom}  from "./Routes/messagerie/chatroom";
import FormulaireAjout from "./Routes/formulaire pour déposer un animal/formulaire.js";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loader />} />
      <Route path="/choix" element={<Choix />} />
      <Route path="/home" element={<App/>}/>
      <Route path="/listeanimaux" element={<Listeanimaux />} />
      <Route path="/connexion" element={<Connexionform />} />
      <Route path="/inscription" element={<InscriptionForm/>}/>
      <Route path="/messagerie" element={<ChatRoom/>}/>
      <Route path="/formulaireajout" element={<FormulaireAjout/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

