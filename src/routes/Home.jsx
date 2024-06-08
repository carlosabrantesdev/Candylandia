import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../main.css";

function Home() {
  const [isHover, setIsHover] = useState(false);
  const [classe, setClasse] = useState('inicio');
  const navigate = useNavigate();

  document.title = "Candylandia";

  const onEnter = () => {
    setIsHover(true);
  };

  const onLeave = () => {
    setIsHover(false);
  };

  const animacao = (e) => {
    e.preventDefault();
    setIsHover(false);
    setClasse('inicio-full');

    setTimeout(() => {
      navigate("/vitrine");
    }, 1450);
  };

  return (
    <div className='fundo'>
      <div className={classe}>
        <h1 className="logo">Candylandia</h1>
        <p id="subtitulo">Um mundo mágico de sabores doces espera por você aqui!</p>
        <p id="texto">Com anos de experiência no mercado, a Candylandia tem o compromisso de fornecer produtos de alta qualidade para seus clientes, sempre com um excelente atendimento e preços justos.</p>
        <img src="https://i.ibb.co/h8yhw4r/como-montar-uma-loja-de-doces.jpg" alt="" />
        <p id="texto">Nosso foco é oferecer produtos de qualidade, por isso, todos os nossos produtos passam por rigorosos controles de qualidade antes de chegar às prateleiras.</p>
        <Link to="/vitrine" onClick={animacao}>
          <div
            className={`vitrine ${isHover ? "is-hovering" : ""}`}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <div className="arrow"></div>
            <div className="sombra"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
