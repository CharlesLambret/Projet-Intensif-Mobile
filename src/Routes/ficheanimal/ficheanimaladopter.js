import { Link } from "react-router-dom"
import './ficheanimaladopter.css';
import retour from '../../retour.png';
import like from '../../like.png';
import chien6 from '../../chien6.png';

const fiche ={
    id:1,
    image:chien6,
    namef:"oslo",
    race:"Corgi, race originaire du pays de Galles",
    age:"3 mois",
    sexe:"female",
    couleur:"Brun Blanc",
    taille:"70cm",
    propriétaire:"Nathalie Zoucarest",
    propriétairede:"oslo",
    connection:"Connectée il y a 2 heures",
    localisation:"Paris,France",
    description:"Oslo est à la recherche de nouveaux parents. Ses anciens maîtres ayant déjà deux chiens ne peuvent pas s’occuper de plus de chien en plus d’un départ à l’étranger cela commence à être une situation compliqué. Se séparer d’Oslo me fait vraiment mal au coeur, c’est un chiot très actif il est catégorisé LOF et tout les vaccins sont à jours pour l’instant. Le carnet de santé sera fournit avec. Je ne le céderai pas à nimporte qui. Envoyez moi une message si vous êtes intéresser qu’on puisse échanger et pourquoi pas déboucher sur un rendez vous pour rencontrer Oslo. ",

}



export default function Ficheanimal (){
    return(
    <div>
        <div>

            <div className="top" style={{backgroundImage: 'url("'+fiche.image+'")'}}>
                <img src={retour} alt="bouton retour"></img>
                <img src={like} alt="bouton aimer"></img>
            </div>

        </div>

        <div className="bot">
            <div>
                <h2>{fiche.namef}</h2>
                <p>{fiche.race}</p>
            </div>

            <div className="caract">
                <div>
                    <img></img>
                    <p>Âge</p>
                    <p>{fiche.age}</p>
                </div>

                <div>
                    <img></img>
                    <p>Sexe</p>
                    <p>{fiche.sexe}</p>
                </div>

                <div>
                    <img></img>
                    <p>Couleur</p>
                    <p>{fiche.couleur}</p>
                </div>

                <div>
                    <img></img>
                    <p>Taille</p>
                    <p>{fiche.taille}</p>
                </div>

            </div>

            <div className="longb">
                <div>
                    <img></img>
                </div>

                <div>
                    <h3>{fiche.propriétaire} </h3>
                    <h4>Propriétaire d’{fiche.propriétairede}</h4>
                    <p>{fiche.connection}</p>
                </div>
                <div>
                    <p>{fiche.localisation}</p>
                </div>
            </div>

            <div>
                <p>{fiche.description}</p>
            </div>

            <div>
            <p>Pour pouvoir contacter l’annonceur <br></br>il va falloir créer un compte Adora </p>
            </div>

            <div className="bigbtn">
                <h4>Contacter l’annonceur</h4>
            </div>

        </div>

    </div>)
}