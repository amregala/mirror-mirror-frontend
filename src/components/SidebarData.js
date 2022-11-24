import React from "react";

// ==== ICONS FROM MATERIAL UI ====//
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// ==== SPECIFIC FORMS THAT DISPLAY ON LANDING NAV
import LoginForm from "./FormBoxes/LoginForm";
import SignupForm from "./FormBoxes/SignupForm";

export const SidebarData = [
  {
    title: "Login",
    // path: "/login",
    icon: <LoginIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    cName: 'nav-text',
    subNav: [
      {
        // path: "/login",
        formType: <LoginForm />,
      },
    ],
  },
  {
    title: "SignUp",
    icon: <PersonAddAlt1Icon />,
    // path: "/signup",
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    cName: 'nav-text',
    subNav: [
      {
        // path: "/signup",
        formType: <SignupForm />,
      },
    ],
  },

  {
    title: "About",
    icon: <InfoIcon />,
    // path: "/about",
    iconClosed: <ArrowDropDownIcon />,
    iconOpen: <ArrowDropUpIcon />,
    cName: 'nav-text',
    subNav: [
      {
        // title: "About Project",
        // path: "/about",
        details:
          "The idea of capturing oneself/essence through visual means has been a long standing practice of people. But before the onslaught of the modern-day selfie and ease/rate at which images can be produced, artists used a variety of mediums and styles in attempts to capture themselves.",
      },
    ],
  },
];
