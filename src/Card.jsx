import React, { useState } from 'react';
import { Link } from "react-router-dom"

function Card(props) {
  const [preco, aComprar] = useState(`R$ ${props.preco}`);

  function MouseEnter() {
    aComprar('COMPRAR');
  }

  function MouseLeave() {
    aComprar(`R$ ${props.preco}`);
  }

  function ButtonClick() {
    window.scrollTo(0, 0);
  }

  return (
    <Link to={`/detalhes/${props.id}`}>
      <div className='card' onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}  onClick={ButtonClick}>
        <img src={props.imagem}/>
        <h1>{props.nome}</h1>
        <p>⭐{props.estrelas}</p>
        <button>{preco}</button>
      </div>
    </Link>
  );
}

export default Card;
