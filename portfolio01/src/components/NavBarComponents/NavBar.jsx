import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav>
        <section>
            <h2>bhagav.dev</h2>
        </section>
        <section>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT-ME</Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
