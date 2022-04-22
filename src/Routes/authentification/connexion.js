import { auth }  from '../../firebase.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

async function HandleSubmit() {
   }

export default function Connexionform () {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handleSub = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    });
    setTimeout(function Redirect () {navigate("/confirmationconnexion", { replace: true })}, 1000);
    }
    const provider = new GoogleAuthProvider();
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
        <div>
            <h1>Connexion</h1>
            <form onSubmit={handleSub}>
                <TextField  name="email" label="Email" variant="standard"  onChange={(e) => setEmail(e.target.value)}/>
                <TextField  name="password" type="password" label="Mot de passe" variant="standard"  onChange={(e) => setPassword(e.target.value)}/>
                <Button variant="contained" type="submit">Se connecter </Button>
            </form>
            <Button class="btngoogle" variant="contained" onClick={handleGoogle}>Se connecter avec Google</Button>
        </div>
	);
}