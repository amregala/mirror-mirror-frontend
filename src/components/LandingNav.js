import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { SidebarData } from "./data/SidebarData";
import LandingNavSubMenu from "./LandNavSubMenu";

const LandingNav = () => {
  // Controls toggle of LandingNav Side Bar
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon to="#">
          <MenuIcon
            className="icon-button"
            sx={{ fontSize: 40 }}
            onClick={showSidebar}
          />
        </NavIcon>
      </Nav>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <LandingNavSubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default LandingNav;

// ==== STYLED COMPONENTS ====//
const Nav = styled.div`
  width: 100%;
  background-color: #383838;
  ${'' /* padding-top: 3px; */}
  height: 50px;
  flex-direction: row;
  border-bottom: solid 1px #808080;
  justify-content: flex-start;
`;

const NavIcon = styled(Link)`
  ${'' /* margin-top: -200px; */}
  margin-left: 15px;
  color: white;

  &:hover {
    cursor: pointer;
    color: #c3a527;
  }
`;

const SidebarNav = styled.nav`
  position: absolute;
  background: #191a1b;
  width: 270px;
  ${
    "" /* This will extend the height of the submav to full view height if you want to go back to that - height: 100vh; */
  }

  display: flex;
  justify-content: center;
  ${'' /* position: fixed; */}
  margin-top: 0px;
  margin-left: 0px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350 ms;
  z-index: 10;
  ${'' /* overflow-y: auto; */}
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
