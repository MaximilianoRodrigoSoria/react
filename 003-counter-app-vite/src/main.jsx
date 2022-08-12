import React from 'react';
import ReactDOM from 'react-dom/client';
import FirstApp from './PruebaComponent';
import HelloWord from './HelloWordApp'
import CounterApp from './CounterApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <HelloWord  title="Maximiliano Soria"></HelloWord>
    <FirstApp 
          subtitulo = {123}
    >
    </FirstApp>
    <CounterApp value={100}></CounterApp>
  </React.StrictMode>
)
;

















