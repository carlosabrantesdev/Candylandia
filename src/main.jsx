import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
      <BrowserRouter>
        <Routes>
          <Route path="/Candylandia" element={<Home />} />
          <Route path="/Candylandia/vitrine" element={<Vitrine />} />
          <Route path="/Candylandia/detalhes/:id" element={<Detalhes />} />
          <Route path="/Candylandia/sobre" element={<Sobre />} />
          <Route path="/Candylandia/form" element={<Form />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  </React.StrictMode>
);
