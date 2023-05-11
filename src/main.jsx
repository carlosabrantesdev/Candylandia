import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from "./routes/Home";
import Vitrine from "./routes/Vitrine";
import Detalhes from "./routes/Detalhes";
import Sobre from "./routes/Sobre";
import Form from "./routes/Form";
import NaoEncontrado from "./routes/NaoEncontrado";
import AppContext from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <HashRouter basename="/Candylandia">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vitrine" element={<Vitrine />} />
          <Route path="/detalhes/:id" element={<Detalhes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </HashRouter>
    </AppContext>
  </React.StrictMode>
);
