import React, { useState } from "react";
// import "../App.css";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  ${
    "" /* background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center; */
  }
  margin-top: -55px;

`;

const NavIcon = styled(Link)`
  ${"" /* margin-top: 25px; */}
  margin-left: 15px;
  ${"" /* margin-top: -35px; */}
  ${"" /* font-size: large; */}
  ${"" /* display: flex; */}
  ${"" /* justify-content: flex-start; */}
  align-items: center;

  &:hover {
    ${"" /* background: #252831; */}
    ${"" /* border-left: 4px solid #632ce4; */}
    cursor: pointer;
    color: whitesmoke;
  }
`;

const SidebarNav = styled.nav`
  background: #191a1b;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  ${"" /* top: -45; */}
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350 ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <Nav>
          <NavIcon to="#">
            <MenuIcon sx={{ fontSize: 50 }} onClick={showSidebar} />
          </NavIcon>
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to="#">
              <CancelIcon sx={{ fontSize: 50 }} onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </div>
    </>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   return (
//     <div className="Sidebar">
//     <h1>MIRROR MIRROR</h1>

//       <ul className="SidebarList">
//         {SidebarData.map((item, key) => {
//           return (
//             <li key={key}
//             className="row"
//             id={window.location.pathname == item.path ? "active" : ""}
//             onClick={() => (window.location.pathname = item.path)}>
//               <div id="icon">{item.icon}</div>
//              <div id="title">{item.title}</div>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
