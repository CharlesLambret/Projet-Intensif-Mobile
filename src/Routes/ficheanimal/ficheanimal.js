import { Button } from '@mui/material';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useNavigate } from 'react-router-dom';
import { appfirebase, firebaseConfig } from '../../firebase';

async function Ficheanimal() {
const [selected, setSelected] = useState(null);
const [animals, setListeanimaux] = useState([]);
const db = getFirestore(appfirebase);
const AnimauxCol = collection(db, 'Animaux-a-adopter');
const AnimauxSnapshot = await getDocs(AnimauxCol);
const AnimauxList = AnimauxSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
  setListeanimaux (AnimauxList);
const navigate = useNavigate();
const ClickMessage = useNavigate("/messagerie")

return( 
<div>
    <div className="bot">
        <div>
            <h2>{animals.name}</h2>
            <p>{animals.race}</p>
        </div>

        <div className="caract">
            <div>
                <img></img>
                <p>Âge</p>
                <p>{animals.age}</p>
            </div>

            <div>
                <img></img>
                <p>Sexe</p>
                <p>{animals.sexe}</p>
            </div>

            <div>
                <img></img>
                <p>Couleur</p>
                <p>{animals.couleur}</p>
            </div>

            <div>
                <img></img>
                <p>Taille</p>
                <p>{animals.taille}</p>
            </div>

        </div>

        <div className="longb">
            <div>
                <img></img>
            </div>

            <div>
                <h3>{animals.propriétaire} </h3>
                <p>{animals.connection}</p>
            </div>
            <div>
                <p>{animals.localisation}</p>
            </div>
        </div>

        <div>
            <p>{animals.description}</p>
        </div>

        <div>
        <p>Pour pouvoir contacter l’annonceur <br></br>il va falloir créer un compte Adora </p>
        </div>

        <div className="bigbtn">
            <Button onClick={ClickMessage}>Contacter l'annonceur</Button>
        </div>

    </div>

</div>)
   
}