import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";

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

    <h1>{article.name}</h1>
    <h3>{article.intro}</h3>
    <img src={article.img} alt="" />
    <p>{article.article}</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique enim quasi voluptatum libero architecto aliquam cum ea ut rerum? Ipsum, debitis. Recusandae laboriosam ducimus adipisci odit at asperiores deleniti!</p>

</>

)}

    </div>
  )
}

export default ArticleDetails