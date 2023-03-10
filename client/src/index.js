import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Service/AuthContext";


import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-regular-svg-icons'
import '@fortawesome/react-fontawesome'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
 
  <BrowserRouter>
    <React.StrictMode>
    <AuthProvider>
      <App />
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
  
);

reportWebVitals();
