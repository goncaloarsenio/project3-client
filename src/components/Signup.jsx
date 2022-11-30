import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };
  return (
    <section>
      <div className="signupLoginHeader">
        <h1> Pronto para criar a tua conta JobCoach?</h1>
        <p>
          Ao entrares na tua conta tens acesso ao teu progresso, os teus dados,
          os teus certificados e conteúdo adaptado às tuas preferências!
        </p>
      </div>

      <h1 className="signupWord">Criar Conta</h1>
      <form className="signupform" onSubmit={handleSignupSubmit}>
        <label className="signupCredentials">Primeiro nome:</label>
        <input
          className="input"
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />
        <label className="signupCredentials">Apelido:</label>
        <input
          className="input"
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
        />
        <label className="signupCredentials">Email:</label>
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        <label className="signupCredentials">Password:</label>
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <div className="signupButtons">
          <button className="registerButton" type="submit">
            Registar
          </button>

          <Link className="redirectLink" to="/login">
            <button className="alreadyButton"> Já tenho conta </button>
          </Link>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </section>
  );
}

export default Signup;
