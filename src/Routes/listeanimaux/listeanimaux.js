import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { appfirebase, firebaseConfig } from '../../firebase';
import "../../App.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Listeanimaux () {

const [selected, setSelected] = useState(null);
const [animals, setListeanimaux] = useState([]);

async function getAnimaux() {
  const db = getFirestore(appfirebase);
  const AnimauxCol = collection(db, 'Animaux-a-adopter');
  const AnimauxSnapshot = await getDocs(AnimauxCol);
  const AnimauxList = AnimauxSnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
  setListeanimaux (AnimauxList);
}
  useEffect(getAnimaux, []);
    return(
      <div>

      <div>
      <h1>Super liste d'animaux</h1>
      </div>
      <div class="carteanimal">
          {animals.map(
              function (item){
                  return  <Link to={"/ficheanimal?animal="+animals.id} ><div className='minifiche'>
                  <img src={animals.image} alt="flèche retour"></img>
                  <div>
                      <h2>{animals.race}</h2>
                      <h3>{animals.name}, {animals.age}</h3>
                      <p>{animals.description}</p>
                  </div>
              </div>
              </Link> 
              }
          )}

      
      </div>
      <Link to="/ficheanimaladopter" >Next</Link> |{" "}

  </div>
    )
        };