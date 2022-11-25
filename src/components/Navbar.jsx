import {Link} from "react-router-dom";
import JCLogo from "../images/jobcoachlogo.png"
import Avatar from "../images/avatar.png"

function Navbar(){
    return(
        <nav>
        <div>
        <Link to="/">
            <img src={JCLogo} alt="logo" className="jclogo" />
        </Link>
        </div>
        <div className="middle-nav">
        <Link className="middle-nav-link">
            <p>Artigos</p>
        </Link>
        <Link className="middle-nav-link">
            <p>Cursos</p>
        </Link>
        <Link to="/partners" className="middle-nav-link">
            <p>Parceiros</p>
        </Link>
        </div>
        <div>
            <Link>
            <img src={Avatar} alt="avatar"  className="avatar"/>
            </Link>
        </div>
        </nav>
    )
}

export default Navbar;