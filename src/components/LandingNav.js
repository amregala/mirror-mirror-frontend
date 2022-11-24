import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//? ==== ICONS FROM MATERIAL UI ====//
import MenuIcon from "@mui/icons-material/Menu";

// ?==== Internal COMPONENT Imports ====//
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

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
  margin-left: 0px;
  ${"" /* top: -45; */}
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350 ms;
  z-index: 10;
`;

const SidebarLink = styled.li`
  margin-top: 15px;
  display: flex;
  color: #d5d5d5;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 0px 19px 0px 0px;
  border-top: solid 1px white;
  border-bottom: solid 1px ghostwhite;
  ${"" /* border: solid 1px white; */}

  &:hover {
    background: red;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color: #fdcd00;
  }
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
          {/* <NavIcon to="#">
              <CancelIcon sx={{ fontSize: 50 }} onClick={showSidebar} />
            </NavIcon> */}
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>

    // <>
    //   <div>
    //     <div to="/">
    //       {/* <Nav to="/"> */}
    //       <NavIcon to="#">
    //         <MenuIcon
    //           className="menu-bars-icon"
    //           sx={{ fontSize: 50 }}
    //           onClick={showSidebar}
    //         />
    //       </NavIcon>
    //       {/* </Nav> */}
    //     </div>

    //     <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    //       <ul className="nav-menu-items" onClick={showSidebar}>
    //         <li>
    //           {SidebarData.map((item, index) => {
    //             return (
    //               <li key={index} className={item.cName}>
    //                 <Link to={item.path}>
    //                   {item.icon}
    //                   <span>{item.title}</span>
    //                 </Link>
    //               </li>
    //             );
    //           })}
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </>
  );
};

{
  /* 
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap> */
}
{
  /* {SidebarData.map((item, key) => {
              return <SubMenu item={item} key={key} />;
            })} */
}

{
  /* <ul className="SidebarList">
              {SidebarData.map((item, key) => {
                return (
                  <li
                    key={key}
                    className="SidebarLink"
                    id={window.location.pathname == item.path ? "active" : ""}
                    onClick={() => (window.location.pathname = item.path)}
                  >
                    <div id="icon">{item.icon}</div>
                    <div id="title">{item.title}</div>
                  </li>
                );
              })}
            </ul>
          </SidebarWrap>
        </SidebarNav>
      </div> */
}
{
  /* </> */
}
{
  /* ); */
}
{
  /* }; */
}

export default LandingNav;
