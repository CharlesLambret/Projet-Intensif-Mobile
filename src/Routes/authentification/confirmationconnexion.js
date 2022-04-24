import { useNavigate } from "react-router-dom";
import "./authentification.css";

export default function Confirmationconnexion () {
    let navigate = useNavigate();
    setTimeout(function Redirect () {navigate("/messagerie", { replace: true })}, 10000);
    const Logo = require("../../img/LogoAdora.png");
    return (
        <div id="containerconfirmation">
            <img src={Logo} class="Logoadora"/>
            <h1> Vous êtes bien connecté !</h1>
            <p>Vous seriez bientôt redirigé.e vers la messagerie...</p>
        </div>
    )
}