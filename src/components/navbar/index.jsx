import React, { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import "./navbar.scss";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { navbarData } from "../../data/navbar-data";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const isDesktopScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/">
              <img
                loading="lazy"
                className="nav-logo"
                src={navbarData.logo}
                alt="MarathiSarvaPooja Logo"
              />
            </Link>

            {isDesktopScreen && (
              <div className="phone-container">
                <PhoneIcon className="phone-icon" />
                <p>{navbarData.phoneNo}</p>
              </div>
            )}
          </div>
          <ul
            className={
              isDesktopScreen
                ? "nav-paths nav-desktop"
                : isNavOpen
                ? "nav-paths nav-mobile-open"
                : "nav-paths nav-mobile"
            }
          >
            {navbarData.navList.map((list, index) => (
              <li key={list.link + index} className="nav-list">
                <Link
                  className="nav-link"
                  to={list.link}
                  onClick={() => setNavOpen(false)}
                >
                  {list.title}
                </Link>
                <div className="line"></div>
              </li>
            ))}
          </ul>
          {!isDesktopScreen && (
            <IconButton
              sx={{
                width: "50px",
                height: "50px",
              }}
              onClick={() => setNavOpen((prev) => !prev)}
            >
              {!isNavOpen ? (
                <MenuIcon
                  sx={{
                    fontSize: "30px",
                    zIndex: "1000",
                  }}
                />
              ) : (
                <CloseIcon
                  sx={{
                    fontSize: "30px",
                    zIndex: "1000",
                  }}
                />
              )}
            </IconButton>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
