/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './w3.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */