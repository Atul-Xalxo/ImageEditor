import React, { useState } from "react";
import "./UserButton.css";
import Image from "../image/Images";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";
import useAuthStore from "../../utils/authStore";
const UserButton = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const {currentUser, removeCurrUser} = useAuthStore();

  console.log(currentUser);
  

  const handleUserOptions = () => {
    setOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await apiRequest.post("/users/auth/logout", {});
      navigate("/auth");
      removeCurrUser();
    } catch (error) {
      console.log(error);
    }
  };

  return currentUser ? (
    <div className="userButton">
      <Image path={currentUser.img || "/general/noAvatar.png"} alt="" />
      <div onClick={handleUserOptions}>
        <Image path="/general/arrow.svg" alt="" className="arrow" />
      </div>
      {open && (
        <div className="userOptions">
          <Link to={`/profile/${currentUser.username}`} className="userOption">Profile</Link>
          <div className="userOption">Settings</div>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link to="/auth" className="loginLink">
      Login / sign Up
    </Link>
  );
};

export default UserButton;
