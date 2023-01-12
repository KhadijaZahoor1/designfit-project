import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Insights from "./pages/Insights";
import Joinus from "./pages/Joinus";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Sector from "./pages/Sector";
import Services from "./pages/Services";
import Team from "./pages/Team";
// import { Navbar } from "./Navbar";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sector" element={<Sector />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/joinus" element={<Joinus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
