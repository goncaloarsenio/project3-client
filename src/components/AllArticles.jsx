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
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

/* import CreateForm from '../components/CreateForm' */

function Article() {
  const [articles, setArticles] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const getArticles = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles`
      );
      setArticles(response.data);
      console.log(response.data);
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
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/favorite/${id}`,
        null,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setArticles(response.data);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="main-article">
        <img className="articles-img1" src={Image} alt="" />
        <div>
          <h1 className="create-h1"> Artigos Informativos</h1>
          <p className="create-text">
            Aqui encontras artigos organizados e simplificados para encontrares
            toda a informa????o num piscar de olhos!
          </p>
          <Link to="/create-article">
            <button className="createButton"> Criar artigo</button>
          </Link>
        </div>
      </div>

      {articles.map((article) => {
        return (
          <div>
            <img className="img2" src={article.img} alt="" />
            <div className="articleOneText">
              <h4 className="cartaApresentacao">{article.intro}</h4>
              <Link
                className="articleTitle"
                to={`/article/${article._id}`}
              >
                <h2>{article.name}</h2>
              </Link>
              <p>{article.description}</p>

              <button className="like-button" onClick={() => addFavorite(article._id)}>Gosto</button>
            </div>
          </div>
        );
      })}

      <div id="CartaMotivacao">
        <div className="articleOne">
          <img className="img2" src={Image2} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Carta de Apresenta????o</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>
                Todos os pontos cruciais para a Carta de Apresenta????o ideal.
              </h2>
            </Link>
            <p>
              Fazer com que a tua Carta de Apresenta????o se destaque de todas as
              outras e com todas as informa????es essenciais para estar completa.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image3} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Carta de Apresenta????o</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>Dicas ??teis para escrever uma Carta de Apresenta????o</h2>
            </Link>
            <p>
              Quando se candidata a uma nova oferta de emprego ?? essencial
              escrever uma boa carta de apresenta????o.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image4} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Carta de Apresenta????o</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>
                Destaca-te com palavras-chave na tua Carta de Apresenta????o
              </h2>
            </Link>
            <p>
              N??o ?? preciso seres uma pessoa inventiva para conseguires escrever
              uma Carta de Apresenta????o.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image5} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Carta de Apresenta????o</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>O Primeiro Contacto</h2>
            </Link>
            <p>
              A Carta de Apresenta????o ?? o seu primeiro contacto com o poss??vel
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
              <h4 className="cartaApresentacao">Curr??culo</h4>
              <Link className="articleTitle" to="/ex-article">
                <h2>
                  Tudo o que precisas de saber para criar um CV sem erros.
                </h2>
              </Link>
              <p>
                Fazer um CV pode ser desafiador mas neste artigo prepar??mos um
                step by step para que n??o tenhas mais d??vidas.
              </p>
            </div>
          </div>

          <div className="articleOne">
            <img className="img6-9" src={Image7} alt="" />
            <div className="articleOneText">
              <h4 className="cartaApresentacao">Curr??culo</h4>
              <Link className="articleTitle" to="/ex-article">
                <h2>Soft Skills para CV???s</h2>
              </Link>
              <p>
                Soft skills s??o dos mais importantes elementos de um CV uma vez
                que mostram o nosso lado mais humano.
              </p>
            </div>
          </div>

          <div className="articleOne">
            <img className="img6-9" src={Image8} alt="" />
            <div className="articleOneText">
              <h4 className="cartaApresentacao">Curr??culo</h4>
              <Link className="articleTitle" to="/ex-article">
                <h2>Como Fazer um Curriculo Criativo</h2>
              </Link>
              <p>
                N??o ?? preciso seres uma pessoa criativa para conseguires fazer
                um curriculo criativo.
              </p>
            </div>
          </div>

          <div className="articleOne">
            <img className="img6-9" src={Image9} alt="" />
            <div className="articleOneText">
              <h4 className="cartaApresentacao">Curr??culo</h4>
              <Link className="articleTitle" to="/ex-article">
                <h2>Destaca-te da Concorr??ncia</h2>
              </Link>
              <p>
                Faz um CV ??nico, criativo, pessoal, bonito e completo. N??s
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
              <h2>Primeira impress??o que fica</h2>
            </Link>
            <p>
              Apesar de n??o existir roupa perfeita para estas ocasi??es ??
              importante ter cuidado com as escolhas.
            </p>
          </div>
        </div>

        <div className="articleOne">
          <img className="img2" src={Image12} alt="" />
          <div className="articleOneText">
            <h4 className="cartaApresentacao">Entrevista</h4>
            <Link className="articleTitle" to="/ex-article">
              <h2>A ess??ncia da entrevista ?? seres um honesto</h2>
            </Link>
            <p>
              Muitos candidatos tentam manipular o discurso. Falam sempre o que
              o recrutador quer ouvir e n??o a verdade.
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
              O momento para se destacares ?? empresa, ?? a comunica????o, postura e
              olhar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
