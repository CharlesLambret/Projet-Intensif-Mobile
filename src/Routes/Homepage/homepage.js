import { Link } from "react-router-dom"
export default function Homepage () {
    return(<div><h1>Bookkeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    />
    <Link to="/listeanimaux">Liste animaux</Link> |{" "}
    </div>)
}