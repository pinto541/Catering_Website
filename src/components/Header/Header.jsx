import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";



import "./Header.scss";

import DefaultLogo from "../../assets/images/logos/logoDefault.png";
import Cart from "../../assets/icons/cart.svg";
import Menu from "../../assets/icons/menu.svg";
import classNames from "classnames";
import { Modal } from "../Modals/Modal";

const Header = () => {
  const [active, setActive] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const isActive = (e) => {
    window.scrollY >= 50 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  return (
    <header
      className={classNames({
        "active-header": active,
      })}
    >
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}

      <div className="container">
        <div className="logo">
          <img src={DefaultLogo} alt="default-logo" />

        </div>
        <div className="menu">
          <nav>
            <ul>
              <li>
              <a href="/About" style={{ textDecoration: 'none' }}>About Us</a>
              </li>
              <li>Services</li>
              <li>Reviews</li>
              <li>
              <a href="/Menu" style={{ textDecoration: 'none' }}>Menu</a>
              </li>
              <li >

              <a href="/contact" style={{ textDecoration: 'none' }}>Contacts</a>

              </li>
            </ul>
          </nav>
          <div className="buttons">
            
            
            <button className="button-primary" onClick={() => setShowModal(true)}>
              Reserve Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
