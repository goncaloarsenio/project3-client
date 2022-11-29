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
    <div className="updiv-login-signup">
    <h1>Pronto para entrar na conta JobCoach?</h1>
    <p>Ao entrares na tua conta tens acesso ao teu progresso, os teus dados, os teus certificados e conteúdo adaptado às tuas preferências!</p>
    </div>
        <h1>Entrar na minha conta</h1>
      <form onSubmit={handleLoginSubmit} className="loginform">

      <div className="email-login">
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} className="input-login" />
        </div>

        <br />

        <div className="password-login">
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} className="input-login"/>
        </div>

        
        <button type="submit" className="login-button">Entrar</button>
        <button className="noacc-button">Ainda não tenho conta</button>

      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

    </section>
  )
}

export default Login