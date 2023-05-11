import React, { useState, useEffect } from 'react';
import '../main.css';
import Card from '../Card';
import Header from '../Header';
import Footer from '../Footer';

function Vitrine() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const produtosCandylandia = produtos.filter(produto => produto?.loja == "Candylandia")

  document.title = "Vitrine";

  useEffect(() => {
    fetch('https://63069afec0d0f2b8011f9944.mockapi.io/produtos')
      .then(resposta => resposta.json())
      .then(info => {
        setProdutos(info);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <div id='carregando'></div>;
  }

  return (
    <div className='loja'>
      <Header />
      <h1 id='secao'> Mais vendidos </h1>
      <div className='cards'>
        {produtosCandylandia?.slice(12, 16).map((produto) => (
          <Card
            imagem={produto.imagem}
            nome={produto.nome}
            estrelas={produto.estrelas}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </div>
      <h1 id='secao'> Mais bem avaliados </h1>
      <div className='cards'>
        {produtosCandylandia?.slice(16, 20).map((produto) => (
          <Card
            imagem={produto.imagem}
            nome={produto.nome}
            estrelas={produto.estrelas}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </div>
      <h1 id='secao'>Destaques</h1>
      <div className='cards'>
        {produtosCandylandia?.slice(8, 12).map((produto) => (
          <Card
            imagem={produto.imagem}
            nome={produto.nome}
            estrelas={produto.estrelas}
            preco={produto.preco}
            id={produto.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Vitrine;
