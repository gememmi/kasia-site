import React from 'react';
import logo from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/logo-white.png";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import ErrorPage from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/error-page.js";
import About from "./About";
import Gallery from "./Gallery";
import Menus from "./Menus";
import Contact from "./Contact";

function Root() {
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section){
      section.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <div id="topbar">
      <Link onClick={() => scrollToSection('home')} to= {"home"}>
        <img src={logo} alt="dinner play and knife logo with K L" />
      </Link>

      <nav>
        <NavLink>
          <Link onClick={() => scrollToSection('about')} to={"about"}>ABOUT</Link>
        </NavLink>
        <NavLink>
          <Link onClick={() => scrollToSection('gallery')} to={"gallery"}>GALLERY</Link>
        </NavLink>
        <NavLink>
          <Link onClick={() => scrollToSection('menus')}  to={"menus"}>MENUS</Link>
        </NavLink>
        <NavLink>
          <Link onClick={() => scrollToSection('contact')}  to={"contact"}>CONTACT</Link>
        </NavLink>
      </nav>
      <Routes>
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/menus" component={Menus} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={ErrorPage} />
        </Routes>
    </div>
  );
}

export default Root;
