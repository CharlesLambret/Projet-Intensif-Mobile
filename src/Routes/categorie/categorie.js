import './categorie.css';
import { Link } from "react-router-dom"
import chat from '../../chat.png';
import chien from '../../chien.png';
import oiseau from '../../oiseau.png';
import poisson from '../../poisson.png';
import reptile from '../../reptile.png';
import rongeur from '../../rongeur.png';

const categorie =[
    {image: chien,titre:"chien"},
    {image:chat,titre:"chat"},
    {iamge:oiseau,titre:"oiseau"},
    {image:poisson,titre:"oiseau"},
    {image:reptile,titre:"reptile"},
    {image:rongeur,titre:"rongeur"}
]

/*
<div className='selection'>
<img src={chat} alt=''></img>
</div>

<div className='selection'>
<img src={chien} alt="" ></img>
</div>
*/

export default function Categorie () {
    return(
    <body>
        <div className='question'>
        <p>Quel type d’animaux souhaites-tu adopter ?</p>
        </div>

        <div className='bigcolumn'>

            <div className='ligne'>
            {categorie.map(
                function(item){
                    return <div>
                                <div className='selection'>
                                <img src={chat} alt=''></img>
                                </div>
                                
                                <div className='selection'>
                                <img src={chien} alt="" ></img>
                                </div>

                                <div className='selection'>
                                <img src={oiseau} alt="" ></img>
                                </div>

                                <div className='selection'>
                                <img src={poisson} alt="" ></img>
                                </div>

                                <div className='selection'>
                                <img src={reptile} alt="" ></img>
                                </div>

                                <div className='selection'>
                                <img src={rongeur} alt="" ></img>
                                </div>
                            </div>}
            )}
            </div>

            <Link to="/listeanimaux " >Next</Link> |{" "}
        </div>

    </body>)
}