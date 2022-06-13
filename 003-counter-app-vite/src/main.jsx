import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWordApp  from './HelloWord';
import AppPrueba from './PruebaComponent';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <AppPrueba 
      titulo = "Es es mi titulo de props"
      subtitulo = {123}
      ></AppPrueba>
  </React.StrictMode>
)
;

















