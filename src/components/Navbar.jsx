import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import JCLogo from "../images/jobcoachlogo.png";
import { AuthContext } from "../contexts/auth.context";

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function Navbar() {
  const { user, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <nav>
      <div>
        <Link to="/">
          <img src={JCLogo} alt="logo" className="jclogo" />
        </Link>
      </div>

      <div id="myNav" className="overlay">
        <Link className="closebtn" onClick={closeNav}>
          &times;
        </Link>
        <div className="overlay-content">
          <Link to="/articles" className="middle-nav-link" onClick={closeNav}>
            <p>Artigos</p>
          </Link>
          <Link to="/courses" className="middle-nav-link" onClick={closeNav}>
            <p>Cursos</p>
          </Link>
          <Link to="/partners" className="middle-nav-link" onClick={closeNav}>
            <p>Parceiros</p>
          </Link>
          {user && (
            <Link
              to={`/profile/${user._id}`}
              className="middle-nav-link"
              onClick={closeNav}
            >
              <p>Perfil</p>
            </Link>
          )}
        </div>
      </div>
      <span onClick={openNav} className="hamburguer">
        &#9776;
      </span>
    </nav>
  );
}

export default Navbar;
