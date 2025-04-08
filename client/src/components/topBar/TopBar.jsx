import React from "react";
import {useNavigate} from "react-router"
import "./TopBar.css";
import UserButton from "../userButton/UserButton";
import Image from '../image/Images'
const TopBar = () => {

const navigate = useNavigate();
const handleSubmit = (e)=>{
  e.preventDefault();
  navigate(`/search?search=${e.target[0].value}`)

}


  return (
    <div className="topBar">
      {/*search */}
      <form onSubmit={handleSubmit} className="search">
        {/* <img src="/general/search.svg" alt="" /> */}
        <Image path='/general/search.svg' alt=""/>
        <input type="text" placeholder="Search" />
      </form>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default TopBar;
