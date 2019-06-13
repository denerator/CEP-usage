import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { loadExtendscript, inCEPEnvironment } from 'cep-interface';

if (inCEPEnvironment()) {
  try {
    loadExtendscript('index.jsx');
  } catch(error) {
    alert(error);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
