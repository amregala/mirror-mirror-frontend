import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


//? ==== ICONS FROM MATERIAL UI ====//
import MenuIcon from "@mui/icons-material/Menu";

// ?==== Internal COMPONENT Imports ====//
import { SidebarData } from "./data/SidebarData";
import LandingNavSubMenu from "./LandNavSubMenu";

// ?==== STYLED COMPONENTS ====//
const Nav = styled.div`
  ${"" /* background: #15171c; */}
  ${"" /* height: 80px; */}
  ${"" /* display: flex; */}
  justify-content: flex-start;
  align-items: center;
  margin-top: -65px;
  position: fixed;
`;

const NavIcon = styled(Link)`
  ${"" /* margin-top: 25px; */}
  margin-left: 15px;
  ${"" /* margin-top: -35px; */}
  ${"" /* font-size: large; */}
  ${"" /* display: flex; */}
  ${"" /* justify-content: flex-start; */}
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
    color: #C3A527;
  }
`;

const SidebarNav = styled.nav`
  background: #191a1b;
  width: 250px;
  ${
    "" /* This will extend the height of the submav to full view height if you want to go back to that - height: 100vh; */
  }
  display: flex;
  justify-content: center;
  position: fixed;
  margin-left: 0px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350 ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

// !  ==== ACTUAL COMPONENT ====//
// !  ==========================//
const LandingNav = () => {
  // Controls toggle of LandingNav Side Bar
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <Nav>
        <NavIcon to="#">
          <MenuIcon className="icon-button" sx={{ fontSize: 40 }} onClick={showSidebar} />
        </NavIcon>
      </Nav>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <LandingNavSubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

export default LandingNav;
