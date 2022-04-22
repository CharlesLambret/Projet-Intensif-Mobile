import { Link } from "react-router-dom"
import './listeanimaux.css';
import chien1 from '../../chien1.png';
import chien2 from '../../chien2.png';
/*import chien3 from '../../chien3.png';
import chien4 from '../../chien4.png';
import chien5 from '../../chien5.png';
import chien6 from '../../chien6.png';
import chien7 from '../../chien7.png';
import chien8 from '../../chien8.png';*/
import retour from '../../retour.png';

const animal = {
    id:1,
    image : chien2,
    race : "golden retriver",
    name: "Spoon",
    age:"6 mois",
    description:"Spoon cherche un nouveau propriétaire pour cause d’un départ à l’étranger. Tous les vaccins sont à jours",
}

const animals =[
    animal,
    animal,
    animal,
    animal,
    animal,
    animal,
]


export default function Listeanimaux () {
    return(
    <div>

        <div>
            <img src={retour} alt="flèche retour" ></img>
        <h1>Super liste d'animaux</h1>
        </div>
    
        <div>
            {animals.map(
                function (item){
                    return  <Link to={"/ficheanimaladopter?animal="+item.id} ><div className='minifiche'>
                    <img src={item.image} alt="flèche retour"></img>
                    <div>
                        <h2>{item.race}</h2>
                        <h3>{item.name}, {item.age}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
                </Link> 
                }
            )}

        
        </div>
        <Link to="/ficheanimaladopter" >Next</Link> |{" "}
    
    </div>)
}