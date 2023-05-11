import React, { useContext, useState } from 'react';
import './main.css';
import { Link } from "react-router-dom"
import { MyContext } from './context/AppContext';

function Header() {

  const { user, setUser } = useContext(MyContext);

  return (
    <header>
      <Link to="/vitrine"><h1 className='logo'>Candylandia</h1></Link>
      <div className='search'><input type="text" placeholder='O que você procura?' /><img src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png" alt="" /></div>
      <nav>
        <ul>
          <li><Link to="/">Inicial</Link></li>
          <div id='ponto'></div>
         <li><Link to="/sobre">Sobre mim</Link></li>
         <div id='ponto'></div>
         <li>
          <Link to="/form" 
          onClick={() => {
            setUser({name: null, id: null});
            localStorage.removeItem("id");
          }}
          >
            {user.id ? user.name : `Entrar`}</Link></li>
          </ul>
     </nav>
    </header>
  );
}

export default Header;