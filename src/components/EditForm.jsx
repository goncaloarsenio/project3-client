import React, { useState, useEffect } from "react";
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
  const { id } = useParams();

  //colocar axios.get aqui
  const getArticle = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles/${id}`
      );

      //response.data = {title, description}
      setArticle(response.data.article);
      setName(response.data.name);
      setIntro(response.data.intro);
      setImg(response.data.img);
      setDescription(response.data.description);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const body = { article, name, intro, img, description };
      await axios.put(`http://localhost:5005/api/articles/${id}`, body);
      setArticle("");
      setName("");
      setIntro("");
      setImg("");
      setDescription("");

      navigate("/articles");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="edit-form">
        <form  className="form" onSubmit={handleSubmit}>
          <label className="edit-cat" htmlFor="article">Categoria</label>
          <input
           className="input-edit"
            type="text"
            name="article"
            value={article}
            onChange={(e) => {
              setArticle(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="name">Titulo</label>
          <input
           className="input-edit"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="intro">Introdução</label>
          <input
           className="input-edit"
            type="text"
            name="intro"
            value={intro}
            onChange={(e) => {
              setIntro(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="img">Img URL</label>
          <input
           className="input-edit"
            type="text"
            name="img"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />

          <label className="edit-cat" htmlFor="description">Descrição</label>
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

          <button  className="form-button" type="submit">Editar Artigo</button>
        </form>
      </div>
    </div>
  );
}

export default EditForm;
