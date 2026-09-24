import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Circuit from "./pages/Circuit";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import DossierDetail from "./pages/DossierDetail";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/circuit" element={<Circuit />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dossiers/:id" element={<DossierDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
