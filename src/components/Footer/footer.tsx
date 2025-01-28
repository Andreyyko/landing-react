import React from "react";
import { navItems } from "../../data/navItems.ts"; 
import { icons } from "../../data/icons.ts";
import "./footer.css";

const Footer = () => {

  const reorderedNavItems = [
    navItems.find((item) => item.label === "Success Stories"), 
    navItems.find((item) => item.label === "Home"), 
    ...navItems.filter((item) => item.label !== "Home" && item.label !== "Success Stories")
  ];

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/images/company-logo.svg" alt="Company Logo" />
      </div>
      <nav className="nav-links">
        {reorderedNavItems.map((item, index) => 
          item && (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          )
        )}
      </nav>
      <div className="social-icons">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={icon.img} alt={`Social Icon ${index + 1}`} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
