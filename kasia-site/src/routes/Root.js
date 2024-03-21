import React from "react";
import logo from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/logo-white.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/error-page.js";
import About from "./About";
import Gallery from "./Gallery";
import Menus from "./Menus";
import Contact from "./Contact";
import Home from "./Home";

function Root() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div id="header">
        <header>
          <Link onClick={() => scrollToSection("/")} to="/">
            <img src={logo} alt="dinner play and knife logo with K L" />
          </Link>

          <nav className="navbar">
            <ul className="navbar">
              <li>
                <Link
                  onClick={() => scrollToSection("about")}
                  to="/about"
                  className="nav-link"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollToSection("gallery")}
                  to="/gallery"
                  className="nav-link"
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollToSection("menus")}
                  to="/menus"
                  className="nav-link"
                >
                  MENUS
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => scrollToSection("contact")}
                  to="/contact"
                  className="nav-link"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default Root;
