import { Link } from "react-router-dom";
import "../../App.css";
import chat from "../../img/chat.png";
import chien from "../../img/chien.png";
import oiseau from "../../img/oiseau.png";
import rongeur from "../../img/rongeur.png";
import poisson from "../../img/poisson.png";
import reptile from "../../img/rongeur.png";
import "./homepage.css";

export default function HomepageAdoption () {
    return(<div> 
    <div className='question'>
    <h1>Quel type d’animaux souhaites-tu adopter ?</h1>
    </div>

    <div className='bigcolumn'>

        <div className='ligne'>
            <div className='selection'>
                <Link to="/listeanimaux " >
                <img src={chat} alt=''></img></Link> 
            </div>

            <div className='selection'>
                <Link to="/listeanimaux " >
                <img src={chien} alt="" >
                </img></Link>
            </div>
        </div>

        <div className='ligne'>
            <div className='selection'>
                <Link to="/listeanimaux " >
                <img src={oiseau} alt=''></img></Link> 
            </div>

            <div className='selection'>
                <Link to="/listeanimaux " >
                <img src={poisson} alt="" >
                </img></Link>
            </div>
        </div>

        <div className='ligne'>
            <div className='selection'>
                <Link to="/listeanimaux " >
                <img src={reptile} alt=''></img></Link> 
            </div>

            <div className='selection'>
                <Link to="/listeanimaux " >
                <img src={rongeur} alt="" >
                </img></Link>
            </div>
        </div>

    </div>
    </div>)
}