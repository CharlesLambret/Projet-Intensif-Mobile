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
import {ChatRoom}  from "./Routes/messagerie/chatroom.js";
import FormulaireAjout from "./Routes/formulairedepot/formulaire";
import Confirmationconnexion from "./Routes/authentification/confirmationconnexion.js";
import Choixespece from "./Routes/choixespèce/choixespece.js";
import Pageperso from "./Routes/pageperso/pageperso.js";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loader />} />
      <Route path="/choix" element={<Choix />} />
      <Route path="/pageperso" element={<Pageperso/>}/>
      <Route path="/listeanimaux" element={<Listeanimaux />} />
      <Route path="/connexion" element={<Connexionform />} />
      <Route path="/confirmationconnexion" element={<Confirmationconnexion/>}/>
      <Route path="/inscription" element={<InscriptionForm/>}/>
      <Route path="/messagerie" element={<ChatRoom/>}/>
      <Route path="/formulaire" element={<FormulaireAjout/>}/>
      <Route path="/choixespece" element={<Choixespece/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

