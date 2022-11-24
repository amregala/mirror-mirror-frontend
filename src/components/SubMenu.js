import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";

// ? ==== STYLED COMPONENTS ====//
const SidebarLink = styled(Link)`
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

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  ${"" /* height: px; */}
  ${"" /* padding-left: 3rem; */}
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
  ${"" /* margin-left: 20px; */}
  ${"" /* padding: 10px; */}
  font-family: "Poppins", sans-serif;
`;

// ! ==== ACTUAL COMPONENT ====//
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink id={window.location.pathname == item.path ? "active" : ""} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}

          <SidebarLabel>{item.title}</SidebarLabel>
        </div>

        <div>
          {item.subnav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>

      {subnav &&
        item.subNav.map((item, key) => {
          return (
            <DropdownLink key={key} path={item.path}>
              {item.formType}
              {item.details}
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;



// const SubMenu = () => {
//   return (
//     <div className="Sidebar">
//    {/* <h1>MIRROR MIRROR</h1> */}
    
//          <ul className="SidebarList">
//              {SidebarData.map((item, key) => {
//              return (
//                 <li key={key}
//                className="row"
//                id={window.location.pathname == item.path ? "active" : ""}
//                 onClick={() => (window.location.pathname = item.path)}>
//                  <div id="icon">{item.icon}</div>
//                  <div id="title">{item.title}</div>
//                </li>
//              );
//            })}
//          </ul>
//          </div>
//   )
// }

// export default SubMenu
