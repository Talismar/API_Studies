<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CoreProvider from "./contexts/Context";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CoreProvider from './contexts/Context';
>>>>>>> a10380e70017e8cf5097ee20e244d93d63227d70

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <CoreProvider>
    <App />
  </CoreProvider>
=======
  // <React.StrictMode>
  <CoreProvider>
    <App />
  </CoreProvider>
  // </React.StrictMode>
>>>>>>> a10380e70017e8cf5097ee20e244d93d63227d70
);
