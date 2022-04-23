import { db } from "../../firebase.js";
import {  addDoc, collection } from "firebase/firestore"; 
import "../../App.css";
import useState from "react";
import Button from '@mui/material/Button';

export default function FormulaireAjout(){
const [nom, setNom] = useState();
const [Race, setRace]= useState();
const [Âge, setÂge ]= useState();
const [Sexe, setSexe]= useState();
const [Taille, setTaille]= useState();
const [Couleur, setCouleur]= useState();
const [Image, setImage]= useState();
const [Description, setDescription] = useState();
const [Espèce, setEspèce] = useState();

const Clickpost = addDoc(collection(db, "Animaux-a-adopter"), {
    nom: [nom],
    Espèce: [Espèce],
    Race: [Race],
    Âge: [Âge],
    Sexe: [Sexe], 
    Taille : [Taille],
    Couleur : [Couleur],
    Image :  [Image],
    Description : [Description], 
  });

  return (
    <div>
      <form onSubmit={Clickpost}>
      <input type="text" name="nom" label="Nom de l'animal" variant="standard"  onChange={(e) => setNom(e.target.value)}/>
      <select class="custom-select" name="Espèce" id="inputGroupSelect01" onChange={(e) => setEspèce(e.target.value)}>
        <option selected>Espèce...</option>
        <option value="chien">Chien</option>
        <option value="chat">Chat</option>
        <option value="rongeur">Rongeur</option>
        <option value="reptiles">Reptile</option>
        <option value="rongeur">Oiseau</option>
        <option value="poisson">Poisson</option>
        </select>
        <input type="text" name="Race" label="Race"   onChange={(e) => setRace(e.target.value)}/>
        <input type="number" name="Âge" label="Âge"  onChange={(e) => setÂge(e.target.value)}/>
        <select class="custom-select" name="Sexe" id="inputGroupSelect02" onChange={(e) => setSexe(e.target.value)}>
          <option select>Sexe...</option>
          <option value="male">Male</option>
          <option value="femelle">Femelle</option>
        </select>
        <input type="text" name="Taille" label="Taille"   onChange={(e) => setTaille(e.target.value)}/>
        <input type="text" name="Couleur" label="Couleur de la fourrure"   onChange={(e) => setCouleur(e.target.value)}/>
        <input type ="file" name="Image" onChange={(e) => setImage(e.target.value)}/>
        <input type="text" name="Description" multiline label="Nom de l'animal" onChange={(e) => setDescription(e.target.value)}/>
        <Button type="submit">Valider</Button>
      </form>
    </div>
  );
}