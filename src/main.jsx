import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Obtener el elemento root
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento root');
}

// Crear root de React 18
const root = ReactDOM.createRoot(rootElement);

// Renderizar la aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opcional: Si quieres medir el rendimiento
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();