import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Circuit from "./pages/Circuit";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import DossierDetail from "./pages/DossierDetail";
import Home from "./pages/Home";

function AppRoutes() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex-1"
        exit={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
        key={location.pathname}
        transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/circuit" element={<Circuit />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dossiers/:id" element={<DossierDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
