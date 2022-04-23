import { appfirebase, db, firebaseConfig} from "../../firebase.js";
import { Animaux } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import "../../App.css";
import useState from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default async function FormulaireAjout(){
/*const [nom, setNom] = useState();
const [Race, setRace]= useState();
const [Âge, setÂge ]= useState();
const [Sexe, setSexe]= useState();
const [Taille, setTaille]= useState();
const [Couleur, setCouleur]= useState();
const [Image, setImage]= useState();
const [Description, setDescription] = useState();

const Clickpost = await setDoc(doc(db, "Animaux-a-adopter"), {
    nom: [],
    Race: [],
    Âge: [],
    Sexe: [], 
    Taille : [],
    Couleur : [],
    Image :  [],
    Description : [], 
  });*/
  return (
    <div>
      <form /*onSubmit={Clickpost}*/>
        <TextField name="nom" label="Nom de l'animal" variant="standard" /* onChange={(e) => setNom(e.target.value)}*//>
        <TextField name="Race" label="Race" variant="standard"  /* onChange={(e) => setRace(e.target.value)}*//>
        <TextField name="Âge" label="Âge" variant="standard"  /* onChange={(e) => setÂge(e.target.value)}*//>
        <TextField name="Sexe" label="Sexe" variant="standard"  /* onChange={(e) => setSexe(e.target.value)}*//>
        <TextField name="Taille" label="Taille" variant="standard"  /* onChange={(e) => setTaille(e.target.value)}*//>
        <TextField name="Couleur" label="Couleur de la fourrure" variant="standard"  /* onChange={(e) => setCouleur(e.target.value)}*//>
        <TextField name="Description" label="Nom de l'animal" variant="standard"  /* onChange={(e) => setDescription(e.target.value)}*//>
        <Button type="submit">Valider</Button>
      </form>
    </div>
  );
}