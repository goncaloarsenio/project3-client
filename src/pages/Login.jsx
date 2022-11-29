import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState();
  
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);
  
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
  
    const handleLoginSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/login`,
          { email, password }
        );
  
        storeToken(response.data.authToken);
  
        authenticateUser();
  
        navigate("/");
      } catch (error) {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      }
    };





  return (
    <section>
        <h1>Log In</h1>
      <form onSubmit={handleLoginSubmit} className="loginform">
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <button type="submit">Entrar</button>
        <button>Ainda não tenho conta</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

    </section>
  )
}

export default Login