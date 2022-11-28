import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./data/SidebarData";

// ? ==== STYLED COMPONENTS ====//
const SidebarLink = styled(Link)`
  ${"" /* margin-top: 15px; */}
  ${"" /* margin-top: 0px; */}
  display: flex;
  color: #d5d5d5;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  ${"" /* height: 60px; */}
  text-decoration: none;
  font-size: 18px;
  border: solid 1px white;
  ${"" /* background: white; */}

  &:hover {
    opacity: 0.8;
    background: white;
    border-left: 6px solid #632ce4;
    cursor: pointer;
    color: black;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
  margin: 5px;
  padding: 10px;
  font-family: "Poppins", sans-serif;
`;

// ! ==== ACTUAL COMPONENT ====//
const LandNavSubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={item.subNav && showSubnav}>
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
            <DropdownLink key={key}>
              {item.formType}
              {item.details}
            </DropdownLink>
          );
        })}
    </>
  );
};

export default LandNavSubMenu;
