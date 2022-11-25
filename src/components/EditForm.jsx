import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
  const [article, setArticle] = useState("");
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const getToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const {id} = useParams();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const body = { article, name, intro, img, description };
      await axios.post(`http://localhost:5005/api/articles/${id}`, body, {
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
        <label htmlFor="article">Categoria</label>
        <input
          type="text"
          name="article"
          value={article}
          onChange={(e) => {
            setArticle(e.target.value);
          }}
        />

        <label htmlFor="name">Titulo</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="intro">Introdução</label>
        <input
          type="text"
          name="intro"
          value={intro}
          onChange={(e) => {
            setIntro(e.target.value);
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

        <button type="submit">Publicar Artigo</button>
      </form>
    </div>
  );
}

export default EditForm;
