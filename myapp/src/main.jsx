import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/css/bootstrap.min.css'
// import './components/bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/js/jquery-1.9.1.js'
import './components/bootstrap-5.3.3-dist/bootstrap-5.3.3-dist/js/bootstrap.js';     

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
