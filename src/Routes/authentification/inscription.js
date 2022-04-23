import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect }from "firebase/auth";
import {useState} from "react";
import { auth, db }  from '../../firebase.js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import "./authentification.css";
import { addDoc, collection } from "firebase/firestore/lite";

export default function Inscriptionform () {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [datenaissance, setDatenaissance]  = useState("");
  const [numerotel, setNumerotel]  = useState("");
  const handleInsc = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password, nom, prenom, datenaissance, numerotel)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  })
  addDoc(collection(db, "users"), {
    Nom: [nom],
    Prenom: [prenom],
    Datenaissance: [datenaissance],
    email: [email],
    tel: [numerotel],
  }
  )}
  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    setTimeout(function Redirect () {navigate("/confirmationconnexion", { replace: true })}, 1000);
  }
    return (
        <div class="conteneur">
            <h1>Création de compte</h1>
            <form onSubmit={handleInsc}>
                <label for="nom">Nom</label>
                <input type="text" class="form-control" name="nom" variant="standard" onChange={(e) => setNom(e.target.value)}/>
                <label for="prenom">Prenom</label>
                <input type="text"name="prenom"  variant="standard" onChange={(e) => setPrenom(e.target.value)} />
                <label for="datenaissance">Date de naissance</label>
                <input type="text" name="datenaissance"  variant="standard"  onChange={(e) => setDatenaissance(e.target.value)} />
                <label for="numerotel">Numéro de téléphone</label>
                <input type="text"name="numerotel" type="tel"  variant="standard" onChange={(e) => setNumerotel(e.target.value)} />
                <label for="email">Email</label>
                <input type="text" name="email"  variant="standard"  onChange={(e) => setEmail(e.target.value)}/>
                <label for="password">Mot de passe</label>
                <input type="text" name="password" type="password"  variant="standard" onChange={(e) => setPassword(e.target.value)}/>
                <Button variant="contained" type="submit">Valider </Button>
            </form>
            <Button class="btngoogle" variant="contained" onClick={handleGoogle}>S'inscrire avec Google</Button>
        </div>
	);
}
/*<p>Vous avez déjà un compte ? <span id="lienconnexion" onClick={Lienconnexion}>Cliquez ici</span></p>*/
