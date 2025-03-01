import './styles/normalize.css'
import './styles/index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
