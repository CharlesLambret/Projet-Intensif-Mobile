import { Link } from "react-router-dom"
import logo from '../../logo.png';
import './homepage.css';
/*
<h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        
        }}
      />
      
*/
export default function Homepage () {
    return(
    <body>
      <div  className="homepage">
          <div className="logolink">
          <Link to="/categorie" >Next</Link> |{" "}
            <img src={logo} alt="logoh" ></img> 
          </div>
      </div>
    </body>)
}