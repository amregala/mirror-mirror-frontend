import "../styles/ProfileNav.css";
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

// Icons from Material UI
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProfileNav = () => {
  const { auth } = useAuth();
  // console.log(auth.user);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Navbar>
      <H2>
        Welcome to your profile page <Span>{auth.user}</Span>{" "}
      </H2>
      <NavItem icon={<ArrowDropDownIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <NavItem icon={<LogoutIcon onClick={signOut} />}></NavItem>
    </Navbar>
  );
};

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<PersonIcon />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<SettingsIcon />}
            rightIcon={<ChevronRightIcon />}
            // goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default ProfileNav;

// ==== STYLED COMPONENTS ====//

const H2 = styled.h2`
  align-text: left;
  font-size: 20px;
  ${"" /* color: #c3a527; */}
  color: white;
  padding: 10px;
  margin-left: 15px;
`;

const Span = styled.span`
  color: #c3a527;
`;
