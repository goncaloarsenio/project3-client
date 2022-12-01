import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import { useContext } from "react";
import userEvent from "@testing-library/user-event";

function EditProfile() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [genre, setGenre] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [residenceArea, setResidenceArea] = useState("");
  const [formationArea, setFormationArea] = useState("");
  const [formationDegree, setFormationDegree] = useState("");
  const [interestAreas, setInterestAreas] = useState("");
  const [interests, setInterests] = useState("");
  const [description, setDescription] = useState("");
  const { logout } = useContext(AuthContext);

  const getToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const { id } = useParams();

  const getUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${id}`
      );

      //response.data = {title, description}
      setEmail(response.data.email);
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setGenre(response.data.genre);
      setBirthdayDate(response.data.birthdayDate);
      setPhoneNumber(response.data.phoneNumber);
      setResidenceArea(response.data.residenceArea);
      setFormationArea(response.data.formationArea);
      setFormationDegree(response.data.formationDegree);
      setInterestAreas(response.data.interestAreas);
      setInterests(response.data.interests);
      setDescription(response.data.description);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const body = {
        email,
        firstName,
        lastName,
        genre,
        birthdayDate,
        phoneNumber,
        residenceArea,
        formationArea,
        formationDegree,
        interestAreas,
        interests,
        description,
      };
      await axios.put(`${process.env.REACT_APP_API_URL}/profile/${id}`, body, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });

      navigate("/articles");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/profile/${id}`, null, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>

<div className="profile">
<h1 className="username"> {firstName} {lastName}</h1>
</div>



      <div className="div-profile">
        <form className="profile-form" onSubmit={handleSubmit}>
          <label class="edit-cat" htmlFor="email">
            Email
          </label>
          <input
            className="input-edit"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="firstName">
            Nome
          </label>
          <input
            className="input-edit"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="lastName">
            Apelido
          </label>
          <input
            className="input-edit"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="description">
            Descrição
          </label>
          <textarea
            className="input-edit"
            name="description"
            value={description}
            cols="30"
            rows="10"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          >
            {" "}
          </textarea>

          <label className="edit-cat" htmlFor="genre">
            Género
          </label>
          <select
            className="input-edit"
            name="genre"
            onClick={(e) => {
              setGenre(e.target.value);
            }}
          >
            <option value="Masculino form-select" selected={genre === "Masculino"}>
              Masculino
            </option>
            <option value="Feminino form-select" selected={genre === "Feminino"}>
              Feminino
            </option>
          </select>

          <label className="edit-cat form-date" htmlFor="birthdayDate">
            Data de Nascimento
          </label>
          <input
            className="input-edit"
            type="date"
            name="birthdayDate"
            value={birthdayDate.toLocaleString().slice(0, 10)}
            onChange={(e) => {
              setBirthdayDate(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="phoneNumber">
            Telemovel
          </label>
          <input
            className="input-edit"
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="residenceArea">
            Area de Residência
          </label>
          <input
            className="input-edit"
            type="text"
            name="residenceArea"
            value={residenceArea}
            onChange={(e) => {
              setResidenceArea(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="formationDegree">
            Grau de Formação
          </label>
          <select
            className="input-edit"
            name="formationDegree"
            onClick={(e) => {
              setFormationDegree(e.target.value);
            }}
          >
            <option
              value="Licenciatura"
              selected={formationDegree === "Licenciatura"}
            >
              Licenciatura
            </option>
            <option value="Mestrado" selected={formationDegree === "Mestrado"}>
              Mestrado
            </option>
            <option
              value="Doutorado"
              selected={formationDegree === "Doutorado"}
            >
              Doutorado
            </option>
          </select>

          <label class="edit-cat" htmlFor="formationArea">
            Area de Formação
          </label>
          <input
            className="input-edit"
            type="text"
            name="formationArea"
            value={formationArea}
            onChange={(e) => {
              setFormationArea(e.target.value);
            }}
          />

          <label class="edit-cat" htmlFor="interests">
            Interesses
          </label>
          <input
            className="input-edit"
            type="text"
            name="interests"
            value={interests}
            onChange={(e) => {
              setInterests(e.target.value);
            }}
          />

          <label class="edit-cat" htmlFor="interestAreas">
            Areas de Interesse
          </label>
          <input
            className="input-edit"
            type="text"
            name="interestAreas"
            value={interestAreas}
            onChange={(e) => {
              setInterestAreas(e.target.value);
            }}
          />
<div className="progile-buttons">
          <button className="edit-button" type="submit">
            Guardar
          </button>

        <button className="edit-button" onClick={deleteProfile}>
          Delete Profile
        </button>
</div>
        </form>

      </div>
    </div>
  );
}

export default EditProfile;
