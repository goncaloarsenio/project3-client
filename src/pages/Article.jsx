import React from "react";
import Image from "../images/image81.png";
import Image2 from "../images/luis-villasmil-mlVbMbxfWI4-unsplash.png";
/* import CreateForm from '../components/CreateForm' */

function Article() {
  return (
    <div>
      <div class="main-article">
        <img className="articles-img1" src={Image} alt="" />
        <div>
          <h1> Artigos Informativos</h1>
          <p>
            Aqui encontras artigos organizados e simplificados para encontrares
            toda a informação num piscar de olhos!
          </p>
        </div>
      </div>

      <div>
      <img className="img2" src={Image2} alt="" />
      <h4>Carta de Apresentação</h4>
      <h2>Todos os pontos cruciais para a Carta de Apresentação ideal.</h2>
      Fazer com que a tua Carta de Apresentação se destaque de todas as outras e com todas as informações essenciais para estar completa.


      </div>

      {/* <CreateForm /> */}
    </div>
  );
}

export default Article;
