import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import "react-toastify/dist/ReactToastify.css";
import './style/css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoadingScreen } from './components';

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}><App /></Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
