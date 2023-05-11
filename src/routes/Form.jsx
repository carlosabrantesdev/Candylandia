import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import axios from 'axios';
import { MyContext } from "../context/AppContext";
import { useNavigate } from 'react-router-dom';

function Form() {
  const [LoginForm, setLoginForm] = useState(true);
  const [Campo, setCampo] = useState(false);
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [popup, setPopup] = useState({ texto: "", cor: "verde" });
  const context = useContext(MyContext);
  const termosDeUso = useRef(null);
  const navigate = useNavigate();

  if (LoginForm) { document.title = "Entrar" } else { document.title = "Cadastrar-se" }

  function valido(event) {
    event.preventDefault();

    if (!email || !user || !senha) {
      setPopup({ texto: 'Preencha todos os campos!', cor: 'vermelho' });
      fecharPopup();
      return;
    }

    if (!termosDeUso.current.checked) {
      setPopup({ texto: 'Precisa aceitar os termos de uso', cor: 'vermelho' });
      fecharPopup();
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setPopup({ texto: 'Forneça um e-mail válido', cor: 'vermelho' });
      fecharPopup();
      return;
    }

    const intervalo = setInterval(() => {
      setLoginForm(true)
      clearInterval(intervalo)
    }, 2500);

    setPopup({ texto: 'Email Cadastrado!', cor: 'verde' })
    fecharPopup();
  }

  function fecharPopup() {
    setTimeout(() => {
      setPopup({ texto: '', cor: 'vermelho' });
    }, 2000);
  }

  const Focus = () => {
    setCampo(true);
  };

  const fazerLogin = () => {
    axios.get('https://63069afec0d0f2b8011f9944.mockapi.io/cadastro')
      .then((response) => {
        const usuario = response.data.find((item) => item.user === user && item.senha === senha);
        if (usuario) {
          localStorage.setItem('id', usuario.id);
          context.setUser({ user: usuario.user, id: usuario.id });
          navigate('/Candylandia/vitrine');
        } else {
          setPopup({ texto: 'Usuário ou senha incorretos', cor: 'vermelho' })
          fecharPopup();
        }
      })
      .catch((error) => {
        console.log('Erro:', error);
      });
  };


  const Submit = () => {

    axios.post('https://63069afec0d0f2b8011f9944.mockapi.io/cadastro', {
      email,
      user,
      senha,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setUser('');
        setSenha('');
      });
  };


  const login = (
    <>
      {popup.texto && <div style={{ backgroundColor: popup.cor === 'verde' ? "#4caf50" : "#e53935" }} id="popup">{popup.texto}</div>}
      <h1 id="tituloform">Login</h1>
      <p className={Campo ? "focused" : ""}>Usuário</p>
      <input type="text" onFocus={Focus} value={user} onChange={(event) => setUser(event.target.value)} required />
      <p className={Campo ? "focused" : ""}>Senha</p>
      <input type="password" onFocus={Focus} value={senha} onChange={(event) => setSenha(event.target.value)} required />
      <button type="submit" onClick={fazerLogin}>Entrar</button>
      <div id="registro">
        <span>Ainda não tem uma conta?</span>
        <span id="alternar" onClick={() => setLoginForm(false)}> Registre-se</span>
      </div>
    </>
  );

  const register = (
    <>
      <form onSubmit={valido}>
        {popup.texto && <div style={{ backgroundColor: popup.cor === 'verde' ? "#4caf50" : "#e53935" }} id="popup">{popup.texto}</div>}
        <h1 id="tituloform">Registro</h1>
        <p className={Campo ? "focused" : ""}>Email</p>
        <input type="text" onFocus={Focus} onChange={(event) => setEmail(event.target.value)} />
        <p className={Campo ? "focused" : ""}>Usuário</p>
        <input type="text" onFocus={Focus} onChange={(event) => setUser(event.target.value)} />
        <p className={Campo ? "focused" : ""}>Senha</p>
        <input type="password" onFocus={Focus} onChange={(event) => setSenha(event.target.value)} />
        <div id="termos">
          <input ref={termosDeUso} type="checkbox" /> <span>Eu aceito os termos de uso</span>
        </div>
        <button type="submit">Registrar-se</button>
        <div id="registro">
          <span>Já tem uma conta?</span>
          <span id="alternar" onClick={() => setLoginForm(true)}> Realizar login</span>
        </div>
      </form>
    </>
  );

  return (
    <div className="form">
      <div className="dados">
        <Link to="/vitrine">
          <div id="back">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2089/2089597.png"
              alt=""
              id="left-arrow"
            />
          </div>
        </Link>
        {LoginForm ? login : register}
        <h1 class="logo" id="logo">
          Candylandia
        </h1>
      </div>
    </div>
  );
}

export default Form;
