import React from 'react'
import People from '../images/people.png'

function Partners() {
  return (
    <div>
    <div className="section1-partners">
        <h1 className='s1-partners-h1'>Parceiros JobCoach</h1>
        <p className='s1-partners-p'>Todos os nossos parceiros numa só página. Faz parte desta aventura e junta-te a nós!</p>
        <img id="people" src={People} alt="people" className='s1-partners-img' />
    </div>

    <div className='section2-partners'>
    <h2 className='s2-partners-h2'>Os nossos parceiros</h2>
    <p className='s2-partners-p'>Para quê trabalhar sozinho quando se pode trabalhar em conjunto e chegar ainda mais longe? <br/>
    JobCoach cria parcerias e conecta pessoas para que todos saiam a ganhar.</p>
    </div>

    </div>
  )
}

export default Partners