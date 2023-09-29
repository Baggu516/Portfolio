import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const NavBar = ({openfunc}) => {

  return (
    <>
      <nav>
        <section className="profile-container">
          <img src="./images/profile2.jpg" alt="" className="profile"/>
            <h2>bhagav.dev</h2>
        </section>
        <section className="nav-links">
          <ul >
            <li className="lst">
              <Link to="/">HOME</Link>
            </li>
            <li className="lst">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="lst">
              <Link to="/projects">PROJECTS</Link>
            </li>
            
            <li className="lst">
              <Link to="/contact">CONTACT-ME</Link>
            </li>
          </ul>
        </section>
        <section className="menu">
        <button  onClick={openfunc} className="menu-btn"><ion-icon name="grid-outline" className="m-icon"></ion-icon></button>
        </section>
      
      </nav>
      <hr style={{}}></hr>
    </>
  );
};

export default NavBar;
