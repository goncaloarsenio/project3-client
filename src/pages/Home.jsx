import React from 'react'
import BigLogo from '../images/jobcoachlogobig.png'
import PCImg from '../images/pcimg.png'
import CvImg from '../images/image75.png'
import CmImg from '../images/image76.png'
import InterviewImg from '../images/image78.png'
import JobTalks from '../images/jobtalks.png'
import Workshops from '../images/workshop.png'
import Headphones from '../images/headphones.png'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Home() {

    const [articles, setArticles] = useState([])

//function to call API

const getArticles = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/articles`)

    setArticles(response.data)
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}

//We need to call the function in a specific moment
useEffect(()=> {
  getArticles();
},[])





  return (
    <div className='homepage'>
        <div className='section1-home'>
        <div>
    <img src={BigLogo} alt="" />
    <h3 className='section1-h3'>O teu coach na procura de emprego</h3>
        </div>
        <img src={PCImg} alt=""  className='pcimg'/>
        </div>


        <div className='section2-home'>
        <h2 className='section2-h2'>Processo Job Coach</h2>
        <p className='section2-p'>JobCoach oferece-te um processo de coaching para que consigas enviar as tuas candidaturas sem medos para as empresas que mais ambicionas trabalhar.
Ao longo das várias etapas vais ter a acesso a cursos, artigos, templates e muito mais...</p>
        </div>


        <div className='section3-home'>


        <div className='section3-home-curriculo'>
        <div>
        <img src={CvImg} alt="" className='cvimg' />
        </div>
        <h3 className='h3-cv'>Currículo</h3>
        <p className='p-cv'>Escolhe o currículo que melhor se adequa à tua área e à empresa a que te queres candidatar.</p>
        </div>
        



        <div className='section3-home-cm'>
        <div>
        <img src={CmImg} alt="" className='cmimg' />
        </div>
        <h3 className='h3-cm'>Carta de Motivação</h3>
        <p className='p-cm'>Mostra que queres mesmo este emprego e explica de que forma és a melhor pessoa para o trabalho.</p>
        </div>



        <div className='section3-home-curriculo'>
        <div>
        <img src={InterviewImg} alt="" className='cvimg' />
        </div>
        <h3 className='h3-cv'>Entrevistas</h3>
        <p className='p-cv'>Prepara-te para a tua entrevista presencial ou online.</p>
        </div>

</div>

    <div className='section4-home'>
    <h2 className='section4-h2'>Não te fiques pelo básico</h2>
    <p className='section4-p'>JobCoach dá-te acesso a vários recursos para te tornares num expert da procura de trabalho.</p>


    <div className='section4-recursos'>


    <div className='recursos-small'>
    <img src={JobTalks} alt="" />
    <h4 className='recursos-small-h4'>Job Talks</h4>
    <p className='recursos-small-p'>Palestras informativas e demonstrativas de um determinados tema, dadas por uma entidade especializada na área.</p>
    </div>

    <hr className='hr1'/>

    <div className='recursos-small'>
    <img src={Workshops} alt="" />
    <h4 className='recursos-small-h4'>Workshops</h4>
    <p className='recursos-small-p'>Cursos físicos ou online que envolvem a realização de uma tarefa prática relacionada com o tema lecionado. </p>
    </div>

 <hr className='hr1' />

<div className='recursos-small'>
    <img src={Headphones} alt="" />
    <h4 className='recursos-small-h4'>Webinares</h4>
    <p className='recursos-small-p'>Conversas informativas online dadas por um orador representante de uma empresa. </p>
    </div>
    </div>





    </div>
    <div className='section5-home'>
    <h2 className='section4-h2'>Os Nossos Parceiros</h2>
    <p className='section4-p'>JobCoach dá-te acesso a vários recursos para te tornares num expert da procura de trabalho.</p>


    {articles.map((article)=>{
      return(
        <div key={article._id} className='ArticleCard card'>
        <h3>{article.name}</h3>
        </div>
      )
    })}

    </div>




        

    </div>
  )
}

export default Home