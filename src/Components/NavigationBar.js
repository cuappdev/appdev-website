import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./css/NavigationBar.css"
import Logo from "../Assets/Logo";

// Source: https://www.youtube.com/watch?v=T2MhVxJxsL0
function NavigationBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  var currentPage = "home";

  const handleClick = () => setClick(!click);
  const navigate = (caller) => {
    if (document.querySelector(".nav-links.selected") !== null) {
      document
        .querySelector(".nav-links.selected")
        .classList.remove("selected");
    }
    if (caller !== "home") {
      document
        .querySelector(`.nav-links.${caller}`)
        .classList.add("selected");
    }
    setClick(false);
  };

  return (
      <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={() => navigate("home")}>
              <Logo />
              <span style={{ marginLeft: "20px", textTransform: "none" }}>
                  Cornell
              </span>
              <span style={{ fontWeight: "bold", textTransform: "none" }}>
                  AppDev
              </span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active fade-in" : "nav-menu"}>
              <li className="nav-item" onClick={() => navigate("team")}>
                  <Link to="/team" className="nav-links team">
                      Team
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                      to="/apps"
                      className="nav-links apps"
                      onClick={() => navigate("apps")}
                  >
                      Apps
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                      to="/courses"
                      className="nav-links courses"
                      onClick={() => navigate("courses")}
                  >
                      Courses
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                      to="/support"
                      className="nav-links support"
                      onClick={() => navigate("support")}
                  >
                      Support
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                      to="/apply"
                      className="nav-links apply"
                      onClick={() => navigate("apply")}
                  >
                      Apply
                  </Link>
              </li>
          </ul>
      </nav>
  );
}

export default NavigationBar;
