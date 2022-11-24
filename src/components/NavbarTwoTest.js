import React, { useState } from "react";
import { Link } from "react-router-dom";

//? ==== ICONS FROM MATERIAL UI ====//
import MenuIcon from "@mui/icons-material/Menu";

// ?==== Internal COMPONENT Imports ====//
import { SidebarData } from "./SidebarData";

// !  ==== ACTUAL COMPONENT ====//
// !  ==========================//
const LandingNav = () => {
  // Controls toggle of LandingNav Side Bar
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <div to="/">
          {/* <Nav to="/"> */}
          <NavIcon to="#">
            <MenuIcon
              className="menu-bars-icon"
              sx={{ fontSize: 50 }}
              onClick={showSidebar}
            />
          </NavIcon>
          {/* </Nav> */}
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;
