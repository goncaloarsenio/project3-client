import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateForm() {
    const [article, setArticle] = useState("")
    const [name, setName] = useState("")
    const [intro, setIntro] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")

    const getToken = localStorage.getItem("authToken");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const body = {article, name, intro, img, description} 
            await axios.post('http://localhost:5005/api/articles', body, {
            headers: {
              Authorization: `Bearer ${getToken}`,},})

            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    


  return (
    <div>
<form className="form" onSubmit={handleSubmit}>

<label class="edit-cat" htmlFor="article">Categoria</label>
<input className='input-edit' type="text" name="article" value={article} onChange={(e) => {setArticle(e.target.value)}}/>

<label class="edit-cat" htmlFor="name">Titulo</label>
<input className='input-edit' type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>

<label class="edit-cat" htmlFor="intro">Introdução</label>
<input className='input-edit' type="text" name="intro" value={intro} onChange={(e) => {setIntro(e.target.value)}}/>

<label class="edit-cat" htmlFor="img">Img URL</label>
<input className='input-edit' type="text" name="img" value={img} onChange={(e) => {setImg(e.target.value)}}/>

<label class="edit-cat" htmlFor="description">Descrição</label>
<textarea className='input-edit' name="description" value={description} cols="30" rows="10" onChange={(e) => {setDescription(e.target.value)}}> </textarea>

<button className="form-button" type="submit">Publicar Artigo</button>


</form>

    </div>
  )
}

export default CreateForm