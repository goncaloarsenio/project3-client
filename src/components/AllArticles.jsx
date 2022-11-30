import { useState, useEffect } from "react";
import Image from "../images/image81.png";
import Image2 from "../images/luis-villasmil-mlVbMbxfWI4-unsplash.png";
import Image3 from "../images/andrew-neel-cckf4TsHAuw-unsplash.png";
import Image4 from "../images/91-magazine-E_s7-xq0FAk-unsplash.png";
import Image5 from "../images/jon-tyson-XzUMBNmQro0-unsplash.png";
import Image6 from "../images/recruiters-doubting-truthfulness-resume 2.png";
import Image7 from "../images/bruce-mars-FWVMhUa_wbY-unsplash.png";
import Image8 from "../images/two-multiethnic-woman-man-colleagues-meet-office-creating-presentation-carry-documents-stickers-with-information-prepare-workshop-have-courses-together-young-classmates 1.png";
import Image9 from "../images/markus-winkler-7iSEHWsxPLw-unsplash.png";
import Image10 from "../images/neonbrand-87EqZAWN-v8-unsplash.png";
import Image11 from "../images/campaign-creators-qCi_MzVODoU-unsplash.png";
import Image12 from "../images/charles-deluvio-rRWiVQzLm7k-unsplash.png";
import Image13 from "../images/leon-0K7GgiA8lVE-unsplash.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

/* import CreateForm from '../components/CreateForm' */

function Article() {
  const [articles, setArticles] = useState([]);
  const {id} = useParams();
  const getArticles = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles`
      );
      setArticles(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  //adicionar favoritos
 const addFavorite = async (id) => {
  try {
    const storedToken = localStorage.getItem('authToken');
    await axios.put(`${process.env.REACT_APP_API_URL}/favorites/${id}`, null, {
      headers: { Authorization: `Bearer ${storedToken}` }});
    
  } catch (error) {
    console.log(error)
    
  }
 }



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
          <Link to="/create-article">
            <button className="createButton"> Create article</button>
          </Link>
        </div>
      </div>

      {articles.map(article => {
    return(
      <div>
      <img className="img2" src={article.img} alt="" />
      <div className="articleOneText">
        <h4 className="cartaApresentacao">{article.intro}</h4>
        <Link className="articleTitle" to={`/edit-article/${article._id}`}>
          <h2>{article.name}</h2>
        </Link>
        <p>
         {article.description}
        </p>

        <button onClick={() => addFavorite(article._id)}>Like</button>
      </div>
    </div>
    )
  })}

      <div id="CartaMotivacao">
        <div className="articleOne">
          <img className="img2" src={Image2} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Carta de Apresentação</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>
                Todos os pontos cruciais para a Carta de Apresentação ideal.
              </h2>
            </Link>
            <p>
              Fazer com que a tua Carta de Apresentação se destaque de todas as
              outras e com todas as informações essenciais para estar completa.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image3} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Carta de Apresentação</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>Dicas úteis para escrever uma Carta de Apresentação</h2>
            </Link>
            <p>
              Quando se candidata a uma nova oferta de emprego é essencial
              escrever uma boa carta de apresentação.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image4} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Carta de Apresentação</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>
                Destaca-te com palavras-chave na tua Carta de Apresentação
              </h2>
            </Link>
            <p>
              Não é preciso seres uma pessoa inventiva para conseguires escrever
              uma Carta de Apresentação.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image5} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Carta de Apresentação</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>O Primeiro Contacto</h2>
            </Link>
            <p>
              A Carta de Apresentação é o seu primeiro contacto com o possível
              empregador.
            </p>
          </div>
        </div>
      </div>
      <div id="Curriculo">
        <div className="articleTwo">
          <div className="articleOne">
            <img className="img6-9" src={Image6} alt="" />
            <div className="articleOneText">
              <h4 className="cartaApresentacao">Currículo</h4>
              <Link className="articleTitle" to="/ex-article">
                <h2>
                  Tudo o que precisas de saber para criar um CV sem erros.
                </h2>
              </Link>
              <p>
                Fazer um CV pode ser desafiador mas neste artigo preparámos um
                step by step para que não tenhas mais dúvidas.
              </p>
            </div>
          </div>

          <div className="articleOne">
            <img className="img6-9" src={Image7} alt="" />
            <div className="articleOneText">
              <h4 className="cartaApresentacao">Currículo</h4>
              <Link className="articleTitle" to="/ex-article">
                <h2>Soft Skills para CV’s</h2>
              </Link>
              <p>
                Soft skills são dos mais importantes elementos de um CV uma vez
                que mostram o nosso lado mais humano.
              </p>
            </div>
          </div>

          <div className="articleOne">
            <img className="img6-9" src={Image8} alt="" />
            <div className="articleOneText">
              <h4 className="cartaApresentacao">Currículo</h4>
              <Link className="articleTitle" to="/ex-article">
                <h2>Como Fazer um Curriculo Criativo</h2>
              </Link>
              <p>
                Não é preciso seres uma pessoa criativa para conseguires fazer
                um curriculo criativo.
              </p>
            </div>
          </div>

          <div className="articleOne">
            <img className="img6-9" src={Image9} alt="" />
            <div className="articleOneText">
              <h4 className="cartaApresentacao">Currículo</h4>
              <Link className="articleTitle" to="/ex-article">
                <h2>Destaca-te da Concorrência</h2>
              </Link>
              <p>
                Faz um CV único, criativo, pessoal, bonito e completo. Nós
                dizemos-te como!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="Entrevista">
        <div className="articleOne">
          <img className="img2" src={Image10} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Entrevista</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>Entrevista de Emprego, passo a passo para impressionar</h2>
            </Link>
            <p>
              Para vos ajudar na procura de emprego, o JobCoach conversou com
              especialistas para saber qual os comportamentos que devemos ter
              numa entrevista.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image11} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Entrevista</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>Primeira impressão que fica</h2>
            </Link>
            <p>
              Apesar de não existir roupa perfeita para estas ocasiões é
              importante ter cuidado com as escolhas.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image12} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Entrevista</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>A essência da entrevista é seres um honesto</h2>
            </Link>
            <p>
              Muitos candidatos tentam manipular o discurso. Falam sempre o que
              o recrutador quer ouvir e não a verdade.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image13} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Entrevista</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>Como se preparar para uma entrevista de emprego</h2>
            </Link>
            <p>
              O momento para se destacares à empresa, é a comunicação, postura e
              olhar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
