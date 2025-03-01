import './styles/normalize.css'
import './styles/index.css'
import Home from './pages/Home.tsx'
import Chatbot from './pages/Chatbot.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import ReactDOM from "react-dom/client";
import Appointments from './pages/Appointments.tsx';

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  </BrowserRouter>
);
