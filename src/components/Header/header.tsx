import React, { useState, useEffect, useCallback } from "react";
import { navItems } from "../../data/navItems.ts";
import "./header.css";
import { AuthModal } from "../../utils/AuthModal.tsx";

const logoNavBar = "/images/company-logo.svg";

interface User {
  email: string | null;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [modalState, setModalState] = useState<{ isOpen: boolean; isSignUp: boolean }>({
    isOpen: false,
    isSignUp: false,
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const openModal = (isSignUp: boolean) => {
    setModalState({ isOpen: true, isSignUp });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, isSignUp: false });
  };

  const handleLogin = (userData: { email: string }) => {
    localStorage.setItem("user", JSON.stringify({ email: userData.email }));
    setUser({ email: userData.email });
    closeModal();
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-block">
          <img className="header-block_logo" src={logoNavBar} alt="Logo" />
        </div>

        <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="burger-menu_icon"></span>
        </button>

        <nav className={`header-nav ${isMenuOpen ? "header-nav_open" : "header-nav_closed"}`}>
          <ul className="header-nav_list">
            {navItems.map(({ href, label }, index) => (
              <li key={index}>
                <a href={href} className="header-nav_item" onClick={() => setIsMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-auth">
          {user ? (
            <div className="header-auth_user">
              <img src="/images/user-icon.svg" alt="User" className="user-icon" />
              <span>{user.email}</span>
              <button onClick={handleLogout} className="header-auth_link">Logout</button>
            </div>
          ) : (
            <div className="header-auth_links">
              <button className="header-auth_link" onClick={() => openModal(true)}>Sign Up</button>
              <span className="header-auth_divider">|</span>
              <button className="header-auth_link" onClick={() => openModal(false)}>Sign In</button>
            </div>
          )}
        </div>
      </div>

      {modalState.isOpen && (
        <AuthModal onLogin={handleLogin} onClose={closeModal} isSignUp={modalState.isSignUp} />
      )}
    </header>
  );
};

export default Header;
