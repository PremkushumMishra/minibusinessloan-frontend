import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StepProvider } from "./context/StepProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </StrictMode>
);







// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { StepProvider } from "./context/StepContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <StepProvider>
//     <App />
//   </StepProvider>
// );
