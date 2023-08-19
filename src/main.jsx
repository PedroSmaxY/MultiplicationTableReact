import { createRoot } from "react-dom/client";
import "./index.css";

// App
import App from "./App";

const root = document.querySelector("#root");
createRoot(root).render(
  <>
    <App />
  </>
);
