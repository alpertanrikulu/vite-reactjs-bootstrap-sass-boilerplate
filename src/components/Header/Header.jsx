import React, { useEffect, useState } from "react";
import Logo from "../../assets/svg/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top  ${
        scrolled && "frostedBg"
      }`}
    >
      <div className="container-fluid px-5">
        <a className="" href="#">
          <img src={Logo} alt="My homepage logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About me
              </a>
              <ul className="dropdown-menu mt-3" style={{ zIndex: "1100" }}>
                <li>
                  <a className="dropdown-item" href="#summary">
                    Summary
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#education">
                    Education
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My apps
              </a>
              <ul className="dropdown-menu mt-3">
                <li>
                  <a className="dropdown-item" href="#">
                    Olric's Word
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My blog
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
