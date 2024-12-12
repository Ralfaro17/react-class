import HelloWorld from "../components/HelloWorld"
import { Link } from "react-router-dom"

function Homepage() {
  return (
    <div>
      <Link to="/props">Ir a props</Link>
      <HelloWorld />
    </div>
  )
}

export default Homepage