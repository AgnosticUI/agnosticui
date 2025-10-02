import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "agnosticui-core/styles/tokens.css";
import "agnosticui-core/styles/tokens-dark.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
