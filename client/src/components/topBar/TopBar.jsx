import React from "react";
import "./TopBar.css";
import UserButton from "../userButton/UserButton";
import Image from '../image/Images'
const TopBar = () => {
  return (
    <div className="topBar">
      {/*search */}
      <div className="search">
        {/* <img src="/general/search.svg" alt="" /> */}
        <Image path='/general/search.svg' alt=""/>
        <input type="text" placeholder="Search" />
      </div>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default TopBar;
