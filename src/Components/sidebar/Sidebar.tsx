import React from "react";
import { Link } from "react-router-dom";
import { navigationItems, navigationProps } from "../../types/Types";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import QuizIcon from "@mui/icons-material/Quiz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import TeacherImage from "../../images/undraw_reading_time_re_phf7.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "@mui/icons-material/Logout";
import { useLogOutUser } from "../../services/user.services";

const sidebarItems: readonly navigationItems[] = [
  { name: "Dashboard", path: "/Dashboard", icon: <DashboardIcon /> },
  { name: "Account", path: "/", icon: <AccountCircleIcon /> },
  { name: "My Tests", path: "/", icon: <QuizIcon /> },
  { name: "Favorites", path: "/", icon: <FavoriteIcon /> },
  { name: "Bookmarks", path: "/", icon: <BookmarksIcon /> },
];

const SidebarItem = ({ itemName, path, Icon }: navigationProps) => {
  return (
    <div
      className={`${
        itemName === "My Tests" && "sidebar-item__active"
      } sidebar-item`}
    >
      {/* <Link to={`${path}`}>{itemName}</Link> */}
      <Box mr={4} mt={0.5}>
        {Icon}
      </Box>
      <h1>{itemName}</h1>
    </div>
  );
};

const Sidebar = () => {
  const logOut = useLogOutUser()
  return (
    <div className="sidebar">
      {sidebarItems.map((item, i) => {
        return (
          <SidebarItem
            key={i}
            itemName={item.name}
            path={item.path}
            Icon={item.icon}
          />
        );
      })}
      <img className="sidebar-image" src={TeacherImage} />

      <div onClick={logOut} className="sidebar-item sidebar-item__logout">
        {/* <Link to={`${path}`}>{itemName}</Link> */}
        <Box mr={4} mt={0.5}>
          <LogoutIcon />
        </Box>
        <h1 >Logout</h1>
      </div>
    </div>
  );
};

export default Sidebar;
