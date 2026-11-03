// src/main.jsx
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
const root = document.getElementById('root');
if (root.childElementCount > 0) hydrateRoot(root, app);
else createRoot(root).render(app);
