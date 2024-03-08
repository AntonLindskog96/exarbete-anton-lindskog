import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Anta att din huvudkomponent heter App och finns i App.js

// Rendera din React-komponent direkt i DOM:en
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
