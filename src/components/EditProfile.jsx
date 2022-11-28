import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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
  
    const getToken = localStorage.getItem("authToken");
    const navigate = useNavigate();
    const {id} = useParams();

    const getUser = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`);
      
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
          const body = { email, firstName, lastName, genre, birthdayDate, phoneNumber, residenceArea, formationArea, formationDegree, interestAreas, interests, description };
          await axios.put(`http://localhost:5005/api/articles/${id}`, body, {
            headers: {
              Authorization: `Bearer ${getToken}`,
            },
          });
    
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };



  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <label htmlFor="img">Img URL</label>
        <input
          type="text"
          name="img"
          value={img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />

        <label htmlFor="description">Descrição</label>
        <textarea
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

        <button type="submit">Editar Artigo</button>
      </form>





    </div>
  )
}

export default EditProfile