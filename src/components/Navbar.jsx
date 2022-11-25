import {Link} from "react-router-dom";
import JCLogo from "../images/jobcoachlogo.png"
import Avatar from "../images/avatar.png"

function Navbar(){
    return(
        <nav>
        <div>
        <Link to="/">
            <img src={JCLogo} alt="logo" />
        </Link>
        </div>
        <div className="middle-nav">
        <Link>
            <p>Artigos</p>
        </Link>
        <Link>
            <p>Cursos</p>
        </Link>
        <Link>
            <p>Parceiros</p>
        </Link>
        </div>
        <div>
            <Link>
            <img src={Avatar} alt="avatar" />
            </Link>
        </div>
        </nav>
    )
}

export default Navbar;