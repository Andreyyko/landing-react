import React, { useState } from "react";
import { navItems } from "../../data/navItems.ts";
import "./header.css";

const logoNavBar = "/images/company-logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-block">
          <img
            className="header-block_logo"
            src={logoNavBar}
            alt="Logo"
          />
        </div>
        <button
          className="burger-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="burger-menu_icon"></span>
        </button>

        <nav
          className={`header-nav ${
            isMenuOpen ? "header-nav_open" : "header-nav_closed"
          }`}
        >
          <ul className="header-nav_list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="header-nav_item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-auth">
          <a href="/signup" className="header-auth_link">
            Sign Up
          </a>
          <span className="header-auth_divider">|</span>
          <a href="/signin" className="header-auth_link">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
