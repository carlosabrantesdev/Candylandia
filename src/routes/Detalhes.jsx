import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer'
import "../main.css";
import produtosDados from './produtos.json';

function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [contador, setContador] = useState(1);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const produtoEncontrado = produtosDados.find(produto => produto.id.toString() === id);
    setProduto(produtoEncontrado);
    setCarregando(false);
    document.title = produtoEncontrado?.nome || "Detalhes";
  }, [id]);

  const mais = () => {
    setContador(contador + 1);
  }

  const menos = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  }

  const mudarFoto = (src) => {
    const fotoElement = document.getElementById('foto');
    if (fotoElement) {
      fotoElement.src = src;
    }
  }

  if (carregando) {
    return <div>Carregando...</div>;
  }

  if (!produto) {
    return <div>Nenhum produto encontrado com o ID {id}.</div>;
  }

  return (
    <div>
      <Header />
      <div className='produto'>
        <div className='fotos'>
          <img src={produto.imagem} alt="" onClick={() => mudarFoto(produto.imagem)} />
          <img src={produto.imagem2} alt="" onClick={() => mudarFoto(produto.imagem2)} />
        </div>
        <img src={produto.imagem} alt="" id='foto' />
        <div className='principal'>
          <span>⭐{produto.estrelas}</span>
          <h1>{produto.nome}</h1>
          <div className='preco'>
            <p>R${produto.preco}</p>
            <div id='quantidade'>
              <div id='menos' onClick={menos}>-</div>
              <div id='atual'>{contador}</div>
              <div id='mais' onClick={mais}>+</div>
            </div>
          </div>
          <button>
            <img src="https://cdn-icons-png.flaticon.com/512/118/118096.png" alt="" />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
      <div className='descricao'><h2>Descrição:</h2>{produto.descricao}</div>
      <Footer />
    </div>
  );
}

export default Detalhes;
