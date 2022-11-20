import Info from "@mui/icons-material/Info";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormSignUp from "./FormBoxes/UserSkeletonForm";

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

const SignUp = styled.div`
  ${"" /* background: red; */}
  ${"" /* height: 100px; */}
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
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
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {/* {item.icon} */}
              {item.formType}
              {item.details}
            
              {/* <FormSignUp></FormSignUp> */}
              {/* <SidebarLabel><FormSignUp/></SidebarLabel> */}
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
