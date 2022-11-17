import React from "react";
import ReactDOM from "react-dom/client";
// import { AppProvider } from './context';

import "./index.css";
import App from "./App";
import "./Assets/Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import reportWebVitals from "./reportWebVitals";

import { Auth0Provider } from "@auth0/auth0-react";
import { AppProvider } from "Applications/ShoppingCart/Context";

const Domain = process.env.REACT_APP_AUTH0_DOMIAN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

// import 'nodem'

const root = ReactDOM.createRoot(document.getElementById("root"));
const modalroot = ReactDOM.createRoot(document.getElementById("modal-root"));
// const modalroot = ReactDOM.createRoot(document.getElementById("modal-root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
