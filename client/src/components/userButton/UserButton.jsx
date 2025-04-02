import React, { useState } from "react";
import "./UserButton.css";
import Image from '../image/Images'
const UserButton = () => {
  const [user, setUser] = useState(true);
  const [open, setOpen] = useState(false);

  const handleUserOptions = () => {
    setOpen((prev) => !prev);
  };

  return user ? (
    <div className="userButton">
      <Image path="/general/noAvatar.png" alt="" />
      <Image
        onClick={handleUserOptions}
        path="/general/arrow.svg"
        alt=""
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / sign Up
    </a>
  );
};

export default UserButton;
