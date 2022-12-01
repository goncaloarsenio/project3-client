import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";

function ArticleDetails() {

    const [article, setArticle] = useState(null)
    const {id} = useParams();

  //function to call API
  
  const getArticle = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/articles/${id}`)
  
      setArticle(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  //We need to call the function in a specific moment
  useEffect(()=> {
    getArticle();
  },[])


  return (
    <div>
{article && (
<>

    <h1 className="article-details-name">{article.name}</h1>
    <h3 className="article-details-intro">{article.intro}</h3>
    <img className="article-details-img" src={article.img} alt="" />
    <p className="article-details-article">{article.article}</p>
    <p className="article-details-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique enim quasi voluptatum libero architecto aliquam cum ea ut rerum? Ipsum, debitis. Recusandae laboriosam ducimus adipisci odit at asperiores deleniti!</p>
    <Link to={`/edit-article/${id}`}>
        <p> Editar</p>
      </Link>
</>

)}

    </div>
  )
}

export default ArticleDetails