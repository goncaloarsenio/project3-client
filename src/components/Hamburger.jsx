import { slide as Menu } from 'react-burger-menu';
import {Link} from "react-router-dom";
import JCLogo from "../images/jobcoachlogo.png"
import Avatar from "../images/avatar.png"

function Hamburger() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src={JCLogo} alt="logo" className="nba-logo" width="30" height="24"/>
      </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav2">
        <li class="nav-item">
          <Link className="nav-link">
            <p>Artigos</p>
        </Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    );
  
}

export default Hamburger;