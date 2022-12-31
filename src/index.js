import React from "react";
import ReactDOM from "react-dom/client";
// import { AppProvider } from './context';

import "./index.scss";
import App from "./App";
import "./Assets/Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { AppProvider } from "Context/Contenxt";

const Domain = process.env.REACT_APP_AUTH0_DOMIAN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

// import 'nodem'

const root = ReactDOM.createRoot(document.getElementById("root"));
const modalroot = ReactDOM.createRoot(document.getElementById("modal-root"));
// const modalroot = ReactDOM.createRoot(document.getElementById("modal-root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
