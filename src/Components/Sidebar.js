import React, { useState, useEffect } from "react";
import "../Assets/Css/Sidebar.css";
import { Nav, Image } from "react-bootstrap";
import { images } from "./Images";
import { NavLink } from "react-router-dom";
import { BsClipboard2Data, BsReverseListColumnsReverse } from "react-icons/bs";
import { GiJugglingClubs } from "react-icons/gi";
import { GiGamepadCross } from "react-icons/gi";
import { BiJoystick, BiLogOut } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { GiAmericanFootballPlayer } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { useLogoutMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineVerifiedUser } from "react-icons/md";
import toast from "react-hot-toast";
import { logOut, clearErrors, clearMessages } from "./../storeRedux/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(() => {
    const storedSubMenuVisible = sessionStorage.getItem("isSubMenuVisible");
    return storedSubMenuVisible ? JSON.parse(storedSubMenuVisible) : false;
  });
  const {
    errors: error,
    message,
    sessionExpireError,
    loading,
  } = useSelector((state) => state.authReducer);

  const handleSubMenuToggle = (e) => {
    e.preventDefault();
    const updatedSubMenuVisible = !isSubMenuVisible;
    setIsSubMenuVisible(updatedSubMenuVisible);
    sessionStorage.setItem(
      "isSubMenuVisible",
      JSON.stringify(updatedSubMenuVisible)
    );
  };
  const handleSidebarItemClick = () => {
    sessionStorage.setItem("isSubMenuVisible", JSON.stringify(false));
  };
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logOut());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (error.length > 0) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (sessionExpireError !== "") {
      toast.error(sessionExpireError);
      dispatch(clearErrors());
      setTimeout(() => navigate("/"), 1000);
    }
    if (message !== "") {
      toast.success(message);
      dispatch(clearMessages());
      setTimeout(() => navigate("/"), 2000);
    }
  }, [error, sessionExpireError, message]);
  return (
    <>
      <Nav className="flex-column">
        {/* <Nav.Item>
          <NavLink
            to="/dashboard/"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <RxDashboard />
            </span>
            <span className="dashboard-text">Dashboard</span>
          </NavLink>
        </Nav.Item> */}
        <Nav.Item>
          <NavLink
            to="/dashboard/users"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <FaRegUser />
            </span>
            <span className="dashboard-text">Manage Users</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/dashboard/game/shootfolioclubs"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <GiJugglingClubs />
            </span>
            <span className="dashboard-text">Shootfolio Club</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Dashboard/game/gametype"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <GiAmericanFootballPlayer />
            </span>
            <span className="dashboard-text">Game Type</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Dashboard/game/gameleague"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <GiGamepadCross />
            </span>
            <span className="dashboard-text">Game League</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Dashboard/game/gameplaymode"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <BiJoystick />
            </span>
            <span className="dashboard-text">Gameplay Mode</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Dashboard/game/subscription"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <MdOutlineWorkspacePremium />
            </span>
            <span className="dashboard-text">Subscription Plans</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Dashboard/game/assetmanagement"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <BsClipboard2Data />
            </span>
            <span className="dashboard-text">Asset Management</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/quiz"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <MdOutlineVerifiedUser />
            </span>
            <span className="dashboard-text">Quiz</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/manual-transaction-history"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <BsReverseListColumnsReverse />
            </span>
            <span className="dashboard-text">Manual Transactions</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink
            to="/Dashboard/setting"
            className="nav-link"
            onClick={handleSidebarItemClick}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "#808080",
                backgroundColor: isActive ? "#2A7741" : "",
              };
            }}
          >
            <span className="iconsizing">
              <FiSettings />
            </span>
            <span className="dashboard-text">Settings</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" onClick={() => dispatch(logOut())}>
            <span className="iconsizing">
              <BiLogOut />
            </span>
            <span className="dashboard-text">Logout</span>
          </NavLink>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;
