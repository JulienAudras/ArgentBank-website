import { useState } from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle} from "@fortawesome/free-solid-svg-icons"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import "../style/style.css"

// Ligne de test pour la Maquette a supprimer après le fetch
const temporaryName = "John Doe"

const Log = (name) => {
    const [isLogged] = useState(false)

  return (
    <div className="loginButtonsContainer">
    {isLogged ? 
    (
        <div>
            <Link to="/user" className="main-nav-item">
                <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__signInIcon"/>
                {name=temporaryName}
            </Link>
            <Link to="/login" className="main-nav-item">
                <FontAwesomeIcon icon={faRightFromBracket} className="main-nav-item__signInIcon"/>
                Sign Out
            </Link>
        </div>
    ) : 
    (
        <Link to="/login" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} className="main-nav-item__signInIcon"/>
          Sign In    
        </Link>
      )}
    </div>
);
};

export default Log