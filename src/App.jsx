import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./pages/home/components/Navbar";
import Home from "./pages/home/Home";
import Bio from "./pages/Bio/Bio";
import Clients from "./pages/Clients/Clients";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
