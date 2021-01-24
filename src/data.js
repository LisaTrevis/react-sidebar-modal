import React from "react";
import {
  FaCodepen,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaWpforms,
  FaReact,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "About",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/",
    text: "Projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 3,
    url: "/",
    text: "Skills",
    icon: <FaReact />,
  },
  {
    id: 4,
    url: "/",
    text: "Experience/Education",
    icon: <FaWpforms />,
  },
  {
    id: 5,
    url: "/",
    text: "Recommendations",
    icon: <FaUserFriends />,
  },
];
export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/lisatrevis/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/LisaTrevis",
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: "https://codepen.io/LisaTrevis/",
    icon: <FaCodepen />,
  },
];
