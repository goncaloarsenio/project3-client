import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try{
        await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {firstName, lastName, email, password});
        navigate("/login")
    } catch(error){
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription)
    }
  };
  return (
  <section>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignupSubmit} className="signupform">
        <label>Primeiro nome:</label>
        <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
        <label>Apelido:</label>
        <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePassword} />
        <button type="submit">Sign Up</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>Already have account?</p>
      <Link to='/login'> Login</Link>
  </section>
  );
}

export default Signup