import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './FirstApp';
import HelloWord from './HelloWordApp'
import CounterApp from './CounterApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>

    <FirstApp 
          titulo = 'Esto es un titulo cualquiera'
          subtitulo = {123}
    >
    </FirstApp>
   {/* <CounterApp value={100}></CounterApp> */}
  </React.StrictMode>
)
;

















