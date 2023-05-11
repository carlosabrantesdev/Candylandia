import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Vitrine from './routes/Vitrine';
import Detalhes from './routes/Detalhes';
import Sobre from './routes/Sobre';
import Form from './routes/Form';
import NaoEncontrado from './routes/NaoEncontrado';
import AppContext from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitrine" element={<Vitrine />} />
          <Route path="/Candylandia/vitrine" element={<Vitrine />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </HashRouter>
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
);
