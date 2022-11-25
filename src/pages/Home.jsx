import React from 'react'
import BigLogo from '../images/jobcoachlogobig.png'
import PCImg from '../images/pcimg.png'
import CvImg from '../images/image75.png'
import CmImg from '../images/image76.png'
import InterviewImg from '../images/image78.png'

function Home() {
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
        </div>


        
        <div className='section4-home'>
        <div className='section4-home-cm'>
        <div>
        <img src={CmImg} alt="" className='cmimg' />
        </div>
        <h3 className='h3-cm'>Carta de Motivação</h3>
        <p className='p-cm'>Mostra que queres mesmo este emprego e explica de que forma és a melhor pessoa para o trabalho.</p>
        </div>
        </div>

    </div>
  )
}

export default Home