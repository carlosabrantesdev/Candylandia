import React, { useState } from 'react';
import './main.css';

function Footer() {

  return (
    <footer>
  <div className="container">
    <div className="esquerda">
      <p>&copy; 2023 Candylandia</p>
      <form className="email">
        <label htmlFor="email">Inscreva-se para receber novidades por e-mail:</label>
        <input type="email" placeholder="Insira seu email aqui"/>
        <button type="submit" id='botaosubmit'>Inscreva-se</button>
      </form>
    </div>
    <div className="direita">
      <p>Siga-nos nas redes sociais</p>
      <ul>
        <li><a href="#"><img src="https://logopng.com.br/logos/tiktok-31.svg" alt="" /></a></li>
        <li><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="" /></a></li>
        <li><a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" alt="" /></a></li>
      </ul>
     </div>
     <a href="https://api.whatsapp.com/send?phone=8499605199" className="whatsapp" target="_blank"><img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" alt="" /></a>
    </div>
  </footer>
  );
}

export default Footer;
