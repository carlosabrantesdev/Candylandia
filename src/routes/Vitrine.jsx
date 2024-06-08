import React, { useState, useEffect } from 'react';
import '../main.css';
import Card from '../Card';
import Header from '../Header';
import Footer from '../Footer';
import produtosDados from './produtos.json';

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const produtosCandylandia = produtos.filter(produto => produto?.loja === "Candylandia");

  document.title = "Vitrine";

  useEffect(() => {
    setProdutos(produtosDados);
    setCarregando(false);
  }, []);

  if (carregando) {
    return <div id='carregando'>Carregando...</div>;
  }

  return (
    <div className='loja'>
      <Header />
      <div>
        <h1 id="secao"> Mais vendidos </h1>
        <div className='cards'>
          {produtosCandylandia.slice(0, 4).map((produto) => (
            <Card
              key={produto.nome}
              imagem={produto.imagem}
              nome={produto.nome}
              estrelas={produto.estrelas}
              preco={produto.preco}
              id={produto.id}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 id="secao"> Mais bem avaliados </h1>
        <div className='cards'>
          {produtosCandylandia.slice(4, 8).map((produto) => (
            <Card
              key={produto.nome}
              imagem={produto.imagem}
              nome={produto.nome}
              estrelas={produto.estrelas}
              preco={produto.preco}
              id={produto.id}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 id="secao"> Destaques </h1>
        <div className='cards'>
          {produtosCandylandia.slice(8, 12).map((produto) => (
            <Card
              key={produto.nome}
              imagem={produto.imagem}
              nome={produto.nome}
              estrelas={produto.estrelas}
              preco={produto.preco}
              id={produto.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vitrine;
