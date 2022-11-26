import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//? ==== ICONS FROM MATERIAL UI ====//
import MenuIcon from "@mui/icons-material/Menu";

// ?==== Internal COMPONENT Imports ====//
import { SidebarData } from "./SidebarData";
import SubMenu from "./LandNavSubMenu";

// ?==== STYLED COMPONENTS ====//
const Nav = styled.div`
  ${"" /* background: #15171c; */}
  ${"" /* height: 80px; */}
  ${"" /* display: flex; */}
  justify-content: flex-start;
  align-items: center;
  margin-top: -55px;
`;

const NavIcon = styled(Link)`
  margin-top: 25px;
  margin-left: 15px;
  ${"" /* margin-top: -35px; */}
  ${"" /* font-size: large; */}
  ${"" /* display: flex; */}
  ${"" /* justify-content: flex-start; */}
  align-items: center;
  color: grey;

  &:hover {
    cursor: pointer;
    color: whitesmoke;
  }
`;

const SidebarNav = styled.nav`
  background: #191a1b;
  width: 250px;
  ${
    "" /* This will extend the height of the submav to full vh height: 100vh; */
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
          <MenuIcon sx={{ fontSize: 50 }} onClick={showSidebar} />
        </NavIcon>
      </Nav>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

export default LandingNav;
