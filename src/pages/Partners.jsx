import React from 'react'
import People from '../images/people.png'

function Partners() {
  return (
    <div>

    <div className="img">
        <h1>Parceiros JobCoach</h1>
        <p>Todos os nossos parceiros numa só página. Faz parte desta aventura e junta-te a nós!</p>
        <img id="people" src={People} alt="people" />
    </div>

    <div className='div2'>
    <h2>Os nossos parceiros</h2>
    <p>Para quê trabalhar sozinho quando se pode trabalhar em conjunto e chegar ainda mais longe?
    JobCoach cria parcerias e conecta pessoas para que todos saiam a ganhar.</p>
    </div>

    </div>
  )
}

export default Partners