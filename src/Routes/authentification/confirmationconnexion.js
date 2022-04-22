import { useNavigate } from "react-router-dom";

export default function Confirmationconnexion () {
    let navigate = useNavigate();
    setTimeout(function Redirect () {navigate("/messagerie", { replace: true })}, 5000);
    const Logo = require("../../img/LogoAdora.png");
    return (
        <div>
            <img src={Logo}/>
            <h1> Vous êtes bien connecté !</h1>
            <p>Vous seriez bientôt redirigé.e vers la messagerie...</p>
        </div>
    )
}