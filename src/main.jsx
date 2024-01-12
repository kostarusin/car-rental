import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter basename="/car-rental">
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
