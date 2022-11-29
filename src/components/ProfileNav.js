import "../styles/ProfileNav.css";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import useLogout from "../hooks/useLogout";

// Icons from Material UI
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProfileNav = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  
  
  const logout = useLogout();
  // console.log(user)

  // console.log (setAuth({}))

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  // let baseURL = "http://localhost3001";

  // const handleLogout = e => {
  //   e.preventDefault();
  //   const url = baseURL + "/users/logout";
   
  //   // const user = { username, password };
  //   fetch(url, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   })
  //     .then(res => res.json())
  //     .then(resJson => {
  //       console.log(resJson);
  //       console.log(url);
  //     });
  //   navigate("/");
  // };

  return (
    <Navbar>
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
            leftIcon={<AddCircleOutlineIcon />}
            rightIcon={<ChevronRightIcon />}
            // goToMenu="add"
          >
            Add Selfie
          </DropdownItem>
          <DropdownItem
            leftIcon={<EditIcon />}
            rightIcon={<ChevronRightIcon />}
            // goToMenu="edit"
          >
            Edit Selfie
          </DropdownItem>
          <DropdownItem
            leftIcon={<HighlightOffIcon />}
            rightIcon={<ChevronRightIcon />}
            // goToMenu="delete"
          >
            Delete Selfie
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default ProfileNav;
