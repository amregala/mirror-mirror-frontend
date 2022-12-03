// ==== ICONS FROM MATERIAL UI ====//
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

// ==== SPECIFIC FORMS THAT DISPLAY ON LANDING NAV
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";

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
          "The idea of capturing oneself/essence through visual means has been a long standing practice. But before the onslaught of the modern-day selfie and ease at which images can be produced, artists used a variety of mediums and styles in attempts to capture themselves. Mirror Mirror aims to rediscover selfies of the past through by taking a look self-portraits from the Met's collection and giving people a chance to add their own modern day self portrait/selfie.",
      },
    ],
  },
];
