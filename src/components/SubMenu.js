import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FormSignUp from "./FormSignUp";

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

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color: #fdcd00;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
 
  height: px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
`;

const SignUp = styled.div `
${'' /* background: red; */}
${'' /* height: 100px; */}

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
           
                <FormSignUp></FormSignUp>
              {/* <SidebarLabel><FormSignUp/></SidebarLabel> */}
              
             
              {/* <SidebarLabel>Where does this go</SidebarLabel> */}
            </DropdownLink>
            
          );

          {/* <SignUp>
              <FormSignUp></FormSignUp></SignUp> */}
        })}


      
 

    </>
  );
};

export default SubMenu;
