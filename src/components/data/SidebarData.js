import React from "react";

// ==== ICONS FROM MATERIAL UI ====//
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// ==== SPECIFIC FORMS THAT DISPLAY ON LANDING NAV
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import LoginForm2 from "../LoginForm2";

export const SidebarData = [
  {
    title: "Login",
    icon: <LoginIcon />,
    route: "/login",
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    cName: "nav-text",
    subNav: [
      {
        formType: <LoginForm />,
      },
    ],
  },
  {
    title: "SignUp",
    icon: <PersonAddAlt1Icon />,
    route: "/signup",
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    cName: "nav-text",
    subNav: [
      {
        formType: <SignupForm />,
      },
    ],
  },

  {
    title: "About",
    icon: <InfoIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    cName: "nav-text",
    subNav: [
      {
        details:
          "The idea of capturing oneself/essence through visual means has been a long standing practice of people. But before the onslaught of the modern-day selfie and ease/rate at which images can be produced, artists used a variety of mediums and styles in attempts to capture themselves.",
      },
    ],
  },
];
