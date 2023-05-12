import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

const background = css`
  background-color: #3b1a86;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const estilo = css`
  display: flex;
  margin-left: 245px;
  margin-top: 140px;
  
  img {
    width: 300px;
    margin-bottom: 1rem;
    border-radius: 3000px;
    border-right: 7px solid #ff8c0c;
    border-bottom: 7px solid #ff8c0c;
  }

  div {
    margin: 55px
  }

  h1 {
    font-size: 30px;
    font-family: Fira Sans;
    height: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid white;
    color: white;
  }

  p {
    font-size: 20px;
    text-align: left;
    max-width: 600px;
    font-family: Quicksand;
    color: white;
  }
`;

const voltar = css`
  display: block;
  margin: 30px;
  width: 25px;
  height: 25px;
  border-top: 2px solid white;
  border-left: 2px solid white;
  transform: rotate(-45deg);
`
const logo = css`
position: fixed;
top: 20px;
right: 25px;

img {
  width: 90px
}
`

class Sobre extends React.Component {
  componentDidMount() {
    document.title = "Sobre mim";
  }

  render() {
    return (
      <div css={background}>
        <Link to="/vitrine"><div css={voltar}></div></Link>
        <div css={logo}><img src="https://i.ibb.co/j38gqmK/logo-galileo-2x.png" alt="" /></div>
        <div css={estilo}>
          <img src="https://i.ibb.co/7jkcZ46/foto.png" alt="" />
          <div>
            <h1>Olá, me chamo Carlos Henrique Duarte Abrantes</h1>
            <p>E graças ao Projeto Galileo, eu dei ínicio a minha jornada no Front End, o curso em si é ótimo e tem os melhores professores. Durante o projeto eu consegui ter conhecimento de: HTML, CSS, Javascript e React. Candylandia para mim é um projeto que me abriu portas ao React.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sobre;
