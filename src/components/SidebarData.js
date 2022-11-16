import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import LoginIcon from "@mui/icons-material/Login";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import InfoIcon from "@mui/icons-material/Info";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const SidebarData = [
  // {
  //     title: 'Sign Up',
  //     icon: <HowToRegIcon />,
  //     link: '/signup'
  // },
  //   {
  //     title: "Sign Up",
  //     icon: <AddCircleIcon />,
  //     link: "/signup",
  //   },
//   { title: "MIRROR MIRROR"},
  {
    title: "SignUp",
    icon: <PersonAddAlt1Icon />,
    path: "/signup",
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    subNav: [
      {
        title: "Sign Up for an Account",
        // icon: <PersonAddAlt1Icon />,
        path: "/signup",
      },
    ],
  },
  {
    title: "Login",
    icon: <LoginIcon />,
    path: "/login",
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    subNav: [
      {
        title: "Login Below",
        // icon: <LoginIcon />,
        path: "/login",
      },
    ],
  },
  {
    title: "About",
    icon: <InfoIcon />,
    path: "/about",
  },
];
