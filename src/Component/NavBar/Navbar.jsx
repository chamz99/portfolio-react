import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.jpeg";
import "../NavBar/navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_Icon from "../../assets/menu_Icon.png";
import close from "../../assets/close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      {/* <img className="navbar-logo-image" src={logo} alt="" /> */}
      <img src={menu_Icon} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => handleMenuClick("home")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li
          className={menu === "About" ? "active" : ""}
          onClick={() => handleMenuClick("About")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#About">
            <p>About me</p>
          </AnchorLink>
        </li>
        <li
          className={menu === "Portfolio" ? "active" : ""}
          onClick={() => handleMenuClick("Portfolio")}
        >
          <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li
          className={menu === "Contact" ? "active" : ""}
          onClick={() => handleMenuClick("Contact")}
        >
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>

      <a
        href="https://www.linkedin.com/in/chamudi-rasanjalee"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-connect"
      >
        Connect with Me
      </a>
    </div>
  );
};

export default Navbar;
