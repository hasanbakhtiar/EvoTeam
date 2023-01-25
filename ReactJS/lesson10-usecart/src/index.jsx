import React from "react";
import ReactDOM from "react-dom/client";
import './style/bootstrap.min.css'
import AppRouters from "./routers/AppRouter";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouters />
  </React.StrictMode>
);
