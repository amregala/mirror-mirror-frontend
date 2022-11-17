import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";

import LoginIcon from "@mui/icons-material/Login";

import AddCircleIcon from "@mui/icons-material/AddCircle";

import InfoIcon from "@mui/icons-material/Info";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import LoginForm from "./LoginForm";
import FormSignUp from "./FormSignUp";

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
        formType: <FormSignUp />,
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
        // formType: <LoginForm />,
      },
    ],
  },
  {
    title: "About",
    icon: <InfoIcon />,
    path: "/about",
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    subNav: [
      {
        title: "About Project",
        // icon: <LoginIcon />,
        path: "/about",
        details:
          "The idea of capturing oneself/essence through visual means has been a long standing practice of people. But before the onslaught of the modern-day selfie and ease/rate at which images can be produced, artists used a variety of mediums and styles in attempts to capture themselves.",
      },
    ],
  },
];
